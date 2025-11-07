#!/usr/bin/env node

/**
 * Automated Dribbble asset generator.
 *
 * 1. Boots the Aurora Finance experience, signs in with the executive demo user, and
 *    captures a high-resolution full-page screenshot of the dashboard using Puppeteer.
 * 2. Dynamically groups contiguous sections so charts are not cut in half, slices four segments,
 *    and composes them into a 2x2 collage with soft framing using Sharp—matching the Dribbble reference layout.
 *
 * The script expects the application to be running (default: http://localhost:3000).
 *
 * Usage:
 *   pnpm dribbble:capture
 *
 * Optional environment variables:
 *   APP_URL   Override the base URL to capture (e.g. https://staging.example.com).
 */

const fs = require("fs/promises");
const path = require("path");
const puppeteer = require("puppeteer");
const sharp = require("sharp");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const OUTPUT_DIR = path.join(process.cwd(), "dribbble-assets");
const SCREENSHOT_DIR = path.join(OUTPUT_DIR, "screenshots");
const COLLAGE_FILE = path.join(OUTPUT_DIR, "dribbble-collage.png");

const VIEWPORT = { width: 1600, height: 1000 };
const BASE_URL = process.env.APP_URL || "http://localhost:3000";
const SEGMENT_COUNT = 4;

async function ensureDirs() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.rm(SCREENSHOT_DIR, { recursive: true, force: true });
  await fs.mkdir(SCREENSHOT_DIR, { recursive: true });
}

async function launchAndLogin() {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: VIEWPORT,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle0" });
  } catch (error) {
    await browser.close();
    throw new Error(
      `Failed to reach ${BASE_URL}. Ensure the Next.js app is running before capturing.\n${error.message}`,
    );
  }

  await page.waitForSelector("#email", { visible: true });
  await page.type("#email", "executive@aurorafinance.com", { delay: 35 });
  await page.type("#password", "Aurora#2025", { delay: 35 });
  await page.click('button[type="submit"]');

  await page.waitForFunction(
    () => document.body.innerText.includes("Executive Control Tower"),
    { timeout: 20000 },
  );

  await delay(1200);

  return { browser, page };
}

async function scrollEntireCanvas(page) {
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = VIEWPORT.height;
  const step = Math.max(200, viewportHeight - 220);

  for (let offset = 0; offset < scrollHeight; offset += step) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), offset);
    await delay(300);
  }

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await delay(450);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await delay(600);
}

async function capturePageSegments(page) {
  await scrollEntireCanvas(page);

  const fullPagePath = path.join(SCREENSHOT_DIR, "full-page.png");
  await page.screenshot({ path: fullPagePath, type: "png", fullPage: true });

  const baseImage = sharp(fullPagePath);
  const metadata = await baseImage.metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    throw new Error("Unable to determine dimensions for the full-page screenshot.");
  }

  const { sections, pageHeight } = await page.evaluate(() => {
    const pad = 36;
    const result = [];
    const header = document.querySelector("header");
    if (header) {
      const rect = header.getBoundingClientRect();
      const top = Math.max(0, window.scrollY + rect.top - pad);
      const bottom = window.scrollY + rect.bottom + pad;
      result.push({
        top,
        bottom,
        height: bottom - top,
      });
    }

    document.querySelectorAll("main > section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = Math.max(0, window.scrollY + rect.top - pad);
      const bottom = window.scrollY + rect.bottom + pad;
      result.push({
        top,
        bottom,
        height: bottom - top,
      });
    });

    return {
      sections: result,
      pageHeight: document.body.scrollHeight,
    };
  });

  if (!sections.length) {
    throw new Error("Failed to derive section metrics for segmentation.");
  }

  const heights = sections.map((section) => section.height);
  const prefix = [0];
  for (const h of heights) {
    prefix.push(prefix[prefix.length - 1] + h);
  }
  const targetHeight = prefix[prefix.length - 1] / SEGMENT_COUNT;

  const dp = Array.from({ length: SEGMENT_COUNT + 1 }, () =>
    Array(sections.length + 1).fill(Number.POSITIVE_INFINITY),
  );
  const cut = Array.from({ length: SEGMENT_COUNT + 1 }, () =>
    Array(sections.length + 1).fill(-1),
  );
  dp[0][0] = 0;

  for (let group = 1; group <= SEGMENT_COUNT; group += 1) {
    for (let end = group; end <= sections.length; end += 1) {
      for (let start = group - 1; start <= end - 1; start += 1) {
        const groupHeight = prefix[end] - prefix[start];
        const cost = Math.pow(groupHeight - targetHeight, 2);
        const candidate = dp[group - 1][start] + cost;
        if (candidate < dp[group][end]) {
          dp[group][end] = candidate;
          cut[group][end] = start;
        }
      }
    }
  }

  if (!Number.isFinite(dp[SEGMENT_COUNT][sections.length])) {
    throw new Error("Failed to compute section partition for collage slicing.");
  }

  const boundaries = [];
  let end = sections.length;
  for (let group = SEGMENT_COUNT; group >= 1; group -= 1) {
    const start = cut[group][end];
    if (start < 0) {
      throw new Error("Invalid partition state during backtracking.");
    }
    boundaries.push({ start, end });
    end = start;
  }
  boundaries.reverse();

  const groups = boundaries.map(({ start, end: endIndex }) => ({
    top: sections[start].top,
    bottom: sections[endIndex - 1].bottom,
  }));

  const scaleY = height / pageHeight;
  const segments = groups.map((group, index) => {
    const padTop = index === 0 ? 180 : 110;
    const padBottom = index === SEGMENT_COUNT - 1 ? 180 : 110;
    const cssTop = Math.max(0, group.top - padTop);
    const cssBottom = Math.min(pageHeight, group.bottom + padBottom);
    const cssHeight = cssBottom - cssTop;
    const extractTop = Math.max(0, Math.floor(cssTop * scaleY));
    const extractHeight = Math.max(
      1,
      Math.min(
        height - extractTop,
        Math.ceil(cssHeight * scaleY),
      ),
    );
    const segmentPath = path.join(SCREENSHOT_DIR, `segment-${index + 1}.png`);

    return {
      path: segmentPath,
      index,
      row: Math.floor(index / 2),
      col: index % 2,
      extract: {
        left: 0,
        top: extractTop,
        width,
        height: extractHeight,
      },
    };
  });

  await Promise.all(
    segments.map((segment) =>
      baseImage
        .clone()
        .extract(segment.extract)
        .toFile(segment.path),
    ),
  );

  return { segments, fullPagePath };
}

function roundedRectSvg(width, height, radius, fill) {
  const w = Math.round(width);
  const h = Math.round(height);
  const r = Math.round(radius);
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}"/></svg>`,
  );
}

async function createPanelShadow(width, height, radius, color) {
  const w = Math.round(width);
  const h = Math.round(height);
  const r = Math.round(radius);
  const base = await sharp({
    create: {
      width: w,
      height: h,
      channels: 4,
      background: color,
    },
  })
    .png()
    .toBuffer();

  const mask = roundedRectSvg(w, h, r, "#ffffff");

  const masked = await sharp(base)
    .composite([{ input: mask, blend: "dest-in" }])
    .toBuffer();

  return sharp(masked).blur(38).toBuffer();
}

async function createCollage(segments) {
  const panelWidth = 980;
  const panelHeight = 900;
  const panelRadius = 80;
  const panelPaddingX = 40;
  const panelPaddingY = 70;
  const gapX = 90;
  const gapY = 80;
  const marginX = 150;
  const marginY = 150;

  const canvasWidth = marginX * 2 + panelWidth * 2 + gapX;
  const canvasHeight = marginY * 2 + panelHeight * 2 + gapY;

  const collage = sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: "#e4ecef",
    },
  });

  const composites = [];
  const shadowColor = { r: 14, g: 23, b: 42, alpha: 0.55 };
  const shadowOffset = { x: 20, y: 32 };
  const panelColor = "#3a4851";

  for (const segment of segments) {
    const left = marginX + segment.col * (panelWidth + gapX);
    const top = marginY + segment.row * (panelHeight + gapY);

    const shadow = await createPanelShadow(panelWidth, panelHeight, panelRadius, shadowColor);
    composites.push({ input: shadow, left: left + shadowOffset.x, top: top + shadowOffset.y });

    const panel = roundedRectSvg(panelWidth, panelHeight, panelRadius, panelColor);
    composites.push({ input: panel, left, top });

    const image = sharp(segment.path);
    const metadata = await image.metadata();
    if (!metadata.width || !metadata.height) {
      throw new Error(`Unable to read dimensions for ${segment.path}`);
    }

    const innerWidth = panelWidth - panelPaddingX * 2;
    const innerHeight = panelHeight - panelPaddingY * 2;
    const desiredTopMargin = segment.index === 0 ? 80 : 50;
    const desiredBottomMargin = segment.index === SEGMENT_COUNT - 1 ? 80 : 50;
    const reservedMargin = desiredTopMargin + desiredBottomMargin;
    const targetHeight = Math.max(320, innerHeight - reservedMargin);

    const resizedBuffer = await image
      .resize({
        width: innerWidth,
        height: targetHeight,
        fit: "inside",
        withoutEnlargement: true,
      })
      .png()
      .toBuffer();

    const resizedMetaRaw = await sharp(resizedBuffer).metadata();
    const actualHeight = resizedMetaRaw.height || targetHeight;
    const availableSlack = Math.max(0, innerHeight - actualHeight);
    let extraTop = 0;
    let extraBottom = 0;
    if (availableSlack > 0) {
      const ratioTop =
        reservedMargin > 0 ? desiredTopMargin / reservedMargin : 0.5;
      extraTop = Math.round(availableSlack * ratioTop);
      extraBottom = availableSlack - extraTop;
    }

    const extendedBuffer = await sharp(resizedBuffer)
      .extend({
        top: extraTop,
        bottom: extraBottom,
        left: 0,
        right: 0,
        background: "#020617",
      })
      .toBuffer();

    const resizedMeta = await sharp(extendedBuffer).metadata();
    const cardWidth = resizedMeta.width || innerWidth;
    const cardHeight = resizedMeta.height || innerHeight;

    const horizontalOffset = Math.max(0, Math.round((innerWidth - cardWidth) / 2));
    const verticalOffset = Math.max(0, Math.round((innerHeight - cardHeight) / 2));
    const cardLeft = left + panelPaddingX + horizontalOffset;
    const cardTop = top + panelPaddingY + verticalOffset;

    const cardShadow = await createPanelShadow(cardWidth + 22, cardHeight + 22, 42, {
      r: 15,
      g: 23,
      b: 42,
      alpha: 0.32,
    });
    composites.push({
      input: cardShadow,
      left: cardLeft - 12,
      top: cardTop - 10,
    });

    composites.push({
      input: extendedBuffer,
      left: cardLeft,
      top: cardTop,
    });
  }

  await collage.composite(composites).png().toFile(COLLAGE_FILE);
}

async function main() {
  console.log(`Capturing Dribbble page segments from ${BASE_URL}...`);
  await ensureDirs();

  const { browser, page } = await launchAndLogin();
  const { segments, fullPagePath } = await capturePageSegments(page);

  await browser.close();

  console.log("Full page snapshot:", fullPagePath);
  segments.forEach((segment) => {
    console.log(`• Segment ${segment.index + 1}: ${segment.path}`);
  });

  await createCollage(segments);
  console.log(`Collage ready: ${COLLAGE_FILE}`);
  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
