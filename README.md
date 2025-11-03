# Aurora Finance Intelligence Dashboard

An executive-grade, single-page financial operations cockpit built with **Next.js 16** and the App Router. The experience starts with a secured login hand-off and unveils a richly instrumented command center featuring live-style cards, animated charts, and synthetic enterprise data.

## Highlights
- **Immersive login first-run** – curated demo identities with quick-fill actions model a secure enterprise launch experience.
- **Rich data storytelling** – KPI cards, comparative trend lines, radial liquidity views, portfolio breakdowns, and account health tables rendered with Recharts.
- **Responsive glassmorphism UI** – Tailwind CSS powers adaptive layouts, cinematic gradients, and glass panels tuned for large dashboard canvases.
- **Synthetic yet coherent metrics** – dummy data is shaped to feel real: rolling revenue, net retention, automation coverage, and geographic momentum.

## Technology Stack
- [Next.js 16](https://nextjs.org/) with the App Router and React Server Components.
- [TypeScript](https://www.typescriptlang.org/) for strict typing and maintainability.
- [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling, radial gradients, and glassmorphic surfaces.
- [Recharts](https://recharts.org/en-US/) for responsive charts (line, area, bar, radial, and pie compositions).
- [Lucide Icons](https://lucide.dev/) for the executive UI iconography.

## Getting Started

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

When the app launches you will land on the secure login view. Use any of the demo identities to authenticate:

| Name | Role | Email | Password |
| --- | --- | --- | --- |
| Jordan Blake | Chief Strategy Officer | `executive@aurorafinance.com` | `Aurora#2025` |
| Ava Chen | Chief Financial Officer | `cfo@aurorafinance.com` | `Liquidity!89` |
| Noah Patel | Director of Operations | `opslead@aurorafinance.com` | `OpsPulse77` |

After sign-in the dashboard reveals revenue pacing, liquidity coverage, retention momentum, pipeline concentration, product mix insights, and a strategic account table – all presented on a single scrolling canvas.

## Project Structure

```
src/
  app/
    page.tsx         # Login gate and dashboard hand-off
    layout.tsx       # Root metadata and font wiring
    globals.css      # Tailwind and global theming
  components/
    login-form.tsx   # Executive login experience with demo identities
    dashboard.tsx    # Full analytics surface with charts and data narratives
```

## Scripts
- `pnpm dev` – start the local development server.
- `pnpm lint` – run ESLint with the project rules.

## Notes
- All metrics and accounts are synthetic; no external services or real records are used.
- The layout is responsive down to tablet sizes, but it shines on wide desktop canvases.
- Extend the dummy data or plug in live APIs by swapping the const data blocks inside `components/dashboard.tsx`.
