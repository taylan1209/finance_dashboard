"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Download,
  Globe2,
  Layers,
  LineChart as LineChartIcon,
  Quote,
  ShieldCheck,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

type DashboardUser = {
  name: string;
  title: string;
  email: string;
};

type DashboardProps = {
  user: DashboardUser;
};

const kpiHighlights = [
  {
    label: "Net revenue run rate",
    value: "$147.8M",
    delta: "+18.4% vs LY",
    trend: "up",
  },
  {
    label: "Operating margin",
    value: "22.7%",
    delta: "+2.6 pts QoQ",
    trend: "up",
  },
  {
    label: "Cash on hand",
    value: "$48.3M",
    delta: "+6.1% MTM",
    trend: "up",
  },
  {
    label: "Strategic pipeline",
    value: "$34.9M",
    delta: "+12.3% QoQ",
    trend: "stable",
  },
];

const revenuePerformance = [
  { month: "Jan", revenue: 9.4, forecast: 9.1, expenses: 6.1 },
  { month: "Feb", revenue: 9.9, forecast: 9.4, expenses: 6.4 },
  { month: "Mar", revenue: 10.6, forecast: 10.1, expenses: 6.6 },
  { month: "Apr", revenue: 11.2, forecast: 10.9, expenses: 6.8 },
  { month: "May", revenue: 11.9, forecast: 11.6, expenses: 7.1 },
  { month: "Jun", revenue: 12.5, forecast: 12.1, expenses: 7.4 },
  { month: "Jul", revenue: 13.1, forecast: 12.9, expenses: 7.8 },
  { month: "Aug", revenue: 13.5, forecast: 13.3, expenses: 8.1 },
  { month: "Sep", revenue: 13.9, forecast: 13.8, expenses: 8.4 },
  { month: "Oct", revenue: 14.2, forecast: 14.4, expenses: 8.8 },
  { month: "Nov", revenue: 14.6, forecast: 14.8, expenses: 9.2 },
  { month: "Dec", revenue: 14.8, forecast: 15.2, expenses: 9.7 },
];

const productMix = [
  { product: "Core Platform", actual: 42, target: 38 },
  { product: "Intelligence Suite", actual: 28, target: 24 },
  { product: "Payments", actual: 16, target: 18 },
  { product: "Advisory", actual: 14, target: 20 },
];

const pipelineHealth = [
  { stage: "Discover", value: 32 },
  { stage: "Scope", value: 24 },
  { stage: "Validation", value: 18 },
  { stage: "Procurement", value: 15 },
  { stage: "Executive", value: 11 },
];

const liquidityPulse = [
  { name: "Cash", value: 42, fill: "#22d3ee" },
  { name: "Marketable securities", value: 28, fill: "#60a5fa" },
  { name: "Short-term investments", value: 18, fill: "#818cf8" },
  { name: "Strategic reserves", value: 12, fill: "#f472b6" },
];

const retentionMomentum = [
  { quarter: "Q1 '24", retention: 92, expansion: 108 },
  { quarter: "Q2 '24", retention: 93, expansion: 111 },
  { quarter: "Q3 '24", retention: 94, expansion: 113 },
  { quarter: "Q4 '24", retention: 95, expansion: 114 },
  { quarter: "Q1 '25", retention: 96, expansion: 118 },
];

const operationalRhythm = [
  { month: "Jan", automation: 48, incidents: 8 },
  { month: "Feb", automation: 52, incidents: 7 },
  { month: "Mar", automation: 58, incidents: 6 },
  { month: "Apr", automation: 61, incidents: 5 },
  { month: "May", automation: 63, incidents: 5 },
  { month: "Jun", automation: 66, incidents: 4 },
  { month: "Jul", automation: 69, incidents: 4 },
  { month: "Aug", automation: 72, incidents: 3 },
  { month: "Sep", automation: 74, incidents: 2 },
  { month: "Oct", automation: 76, incidents: 2 },
  { month: "Nov", automation: 78, incidents: 2 },
  { month: "Dec", automation: 81, incidents: 1 },
];

const runwayOutlook = [
  { month: "Jan", baseline: 13.2, stress: 9.4 },
  { month: "Feb", baseline: 13.5, stress: 9.6 },
  { month: "Mar", baseline: 13.9, stress: 9.9 },
  { month: "Apr", baseline: 14.3, stress: 10.2 },
  { month: "May", baseline: 14.8, stress: 10.6 },
  { month: "Jun", baseline: 15.3, stress: 11.1 },
];

const fundingComposition = [
  { name: "Institutional credit", value: 34, fill: "#22d3ee" },
  { name: "Treasury bills", value: 27, fill: "#38bdf8" },
  { name: "Corporate pools", value: 22, fill: "#818cf8" },
  { name: "Strategic partners", value: 17, fill: "#f472b6" },
];

const riskMitigation = [
  { category: "Liquidity buffers", score: 87 },
  { category: "FX hedging", score: 74 },
  { category: "Counterparty checks", score: 81 },
  { category: "Operational controls", score: 69 },
];

const geographicPerformance = [
  { region: "North America", revenue: 62, growth: 23 },
  { region: "EMEA", revenue: 44, growth: 19 },
  { region: "APAC", revenue: 31, growth: 27 },
  { region: "LATAM", revenue: 18, growth: 14 },
];

const topClients = [
  { account: "Atlas Aerospace", arr: "$2.4M", health: "Expanding", owner: "F. Morales" },
  { account: "Helios Biotech", arr: "$1.9M", health: "Stable", owner: "S. Romero" },
  { account: "Cinder Retail", arr: "$1.4M", health: "Watch", owner: "A. Roy" },
  { account: "Sierra Capital", arr: "$1.1M", health: "Expanding", owner: "D. Reed" },
  { account: "Quantum Freight", arr: "$930k", health: "Stable", owner: "L. Brooks" },
];

const insightBullets = [
  "AI-led forecasting lifted revenue accuracy by 3.8 pts last quarter.",
  "Operational automation eliminated 64 manual hours per week across treasury workflows.",
  "Customer expansion momentum is compounding with 118% net dollar retention.",
  "APAC enterprise wins outpaced targets after the new partner ecosystem launch.",
];

const testimonials = [
  {
    name: "Elena Martins",
    title: "CFO, Helios Biotech",
    quote: "Aurora surfaces the signal from the noise—our weekly capital calls now finish in half the time.",
    badge: "Efficiency gain",
  },
  {
    name: "Jonas Patel",
    title: "Treasury Director, Atlas Aerospace",
    quote: "Scenario runway modeling used to be a spreadsheet marathon. Now it is a two-minute ritual.",
    badge: "Runway clarity",
  },
  {
    name: "Maya Zhao",
    title: "Finance VP, Quantum Freight",
    quote: "The dashboard makes global liquidity visible to every regional lead. Execution feels coordinated.",
    badge: "Global visibility",
  },
];

export default function Dashboard({ user }: DashboardProps) {
  const totalLiquidity = liquidityPulse.reduce((acc, item) => acc + item.value, 0);
  const topAllocation = liquidityPulse.reduce((prev, entry) => (entry.value > prev.value ? entry : prev), liquidityPulse[0]);
  const totalFundingShare = fundingComposition.reduce((acc, item) => acc + item.value, 0);
  const leadFundingSource = fundingComposition.reduce((prev, entry) => (entry.value > prev.value ? entry : prev), fundingComposition[0]);

  return (
    <div className="flex min-h-screen flex-col text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
      </div>

      <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-lg">
              <LineChartIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                Aurora Finance · Command Center
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-[2px] text-[11px] font-semibold text-emerald-200">
                  <CircleDot className="h-3 w-3" /> Live
                </span>
              </div>
              <h1 className="text-lg font-semibold text-white">Executive Control Tower</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 lg:flex">
              <Search className="h-4 w-4 text-slate-400" />
              Search metrics, teams, or playbooks
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-white">
              <Bell className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-3 py-2 text-left text-sm transition hover:border-cyan-400/60 hover:text-white">
              <div className="text-xs font-medium leading-tight">
                <div className="text-white">{user.name}</div>
                <div className="text-slate-400">{user.title}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 py-10">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {kpiHighlights.map((kpi) => (
            <div
              key={kpi.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_-40px_rgba(56,189,248,0.55)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{kpi.label}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{kpi.value}</div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                <TrendingUp className="h-3.5 w-3.5" />
                {kpi.delta}
              </div>
              <div className="mt-6 h-16 w-full rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-violet-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <div className="col-span-3 self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Revenue & profitability pace</h2>
                <p className="text-sm text-slate-400">Rolling 12-month view in millions (USD).</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                Export
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-5 h-72 lg:h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenuePerformance} margin={{ top: 20, right: 24, left: 0, bottom: 12 }}>
                  <defs>
                    <linearGradient id="gradientRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}M`}
                    domain={["dataMin - 1", "dataMax + 1"]}
                  />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Area type="monotone" dataKey="revenue" stroke="#22d3ee" fill="url(#gradientRevenue)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="forecast" stroke="#818cf8" strokeWidth={2} strokeDasharray="6 6" dot={false} />
                  <Line type="monotone" dataKey="expenses" stroke="#f472b6" strokeWidth={1.8} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Liquidity coverage</h3>
                  <p className="text-xs text-slate-400">Composition of deployable capital.</p>
                </div>
                <Activity className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="mt-5 space-y-5">
                <div className="relative h-60 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-950/80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <filter id="liquidityGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        {liquidityPulse.map((entry, index) => (
                          <linearGradient key={entry.name} id={`liquidityGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={entry.fill} stopOpacity={0.85} />
                            <stop offset="65%" stopColor={entry.fill} stopOpacity={0.55} />
                            <stop offset="100%" stopColor={entry.fill} stopOpacity={0.25} />
                          </linearGradient>
                        ))}
                      </defs>
                      <Pie
                        data={liquidityPulse}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="58%"
                        outerRadius="90%"
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={6}
                        cornerRadius={18}
                        strokeWidth={3}
                      >
                        {liquidityPulse.map((entry, index) => (
                          <Cell
                            key={entry.name}
                            fill={`url(#liquidityGradient-${index})`}
                            stroke={entry.fill}
                            filter="url(#liquidityGlow)"
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
                        contentStyle={{
                          background: "#020617",
                          borderRadius: 16,
                          border: "1px solid rgba(148,163,184,0.2)",
                          color: "#e2e8f0",
                        }}
                        formatter={(value: number, label: string) => [`${value}%`, label]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Coverage</span>
                    <span className="mt-1.5 text-4xl font-semibold text-white">{totalLiquidity}%</span>
                    <span className="mt-1 text-sm text-slate-300">{topAllocation.name}</span>
                    <span className="text-xs text-slate-500">{topAllocation.value}% lead allocation</span>
                  </div>
                </div>
                <div className="grid gap-2.5 text-sm text-slate-100">
                  {liquidityPulse.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur">
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.fill }} />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-cyan-200">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Executive insights</h3>
                  <p className="text-xs text-slate-400">Signals curated by Aurora Intelligence.</p>
                </div>
                <Sparkles className="h-5 w-5 text-violet-300" />
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {insightBullets.map((insight) => (
                  <li key={insight} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 flex-none text-emerald-300" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="col-span-3 self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Customer retention momentum</h3>
                <p className="text-xs text-slate-400">Net retention vs expansion revenue.</p>
              </div>
              <Users className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-5 h-64 lg:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={retentionMomentum} margin={{ top: 20, right: 24, left: 0, bottom: 4 }}>
                  <defs>
                    <linearGradient id="gradientRetention" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="quarter" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    unit="%"
                    domain={["dataMin - 2", "dataMax + 2"]}
                  />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Area type="monotone" dataKey="retention" stroke="#38bdf8" strokeWidth={2.4} fill="url(#gradientRetention)" />
                  <Line type="monotone" dataKey="expansion" stroke="#facc15" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Pipeline concentration</h3>
                  <p className="text-xs text-slate-400">Active deals by stage (USD).</p>
                </div>
                <TrendingUp className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="mt-5 h-60 lg:h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pipelineHealth} margin={{ top: 12, right: 16, left: -6, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                    <XAxis dataKey="stage" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      unit="M"
                      domain={["dataMin - 2", "dataMax + 2"]}
                    />
                    <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                    <Bar dataKey="value" radius={[12, 12, 4, 4]}>
                      <Cell fill="#22d3ee" />
                      <Cell fill="#38bdf8" />
                      <Cell fill="#818cf8" />
                      <Cell fill="#c084fc" />
                      <Cell fill="#f472b6" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Operating rhythm</h3>
                  <p className="text-xs text-slate-400">Automation coverage vs incidents.</p>
                </div>
                <Activity className="h-5 w-5 text-sky-300" />
              </div>
              <div className="mt-5 h-60 lg:h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={operationalRhythm} margin={{ top: 16, right: 20, left: -4, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      domain={["dataMin - 5", "dataMax + 5"]}
                    />
                    <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                    <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                    <Line type="monotone" dataKey="automation" stroke="#22d3ee" strokeWidth={2.3} dot={false} />
                    <Line type="monotone" dataKey="incidents" stroke="#f472b6" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <div className="col-span-3 self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Product portfolio mix</h3>
                <p className="text-xs text-slate-400">Contribution vs quarterly targets.</p>
              </div>
              <CircleDot className="h-5 w-5 text-violet-200" />
            </div>
            <div className="mt-5 h-60 lg:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productMix} barCategoryGap={24} margin={{ top: 16, right: 24, left: 0, bottom: 4 }}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="product" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    unit="%"
                    domain={["dataMin - 4", "dataMax + 4"]}
                  />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Bar dataKey="actual" radius={[14, 14, 4, 4]} fill="#38bdf8" />
                  <Bar dataKey="target" radius={[14, 14, 4, 4]} fill="#818cf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Global footprint</h3>
                <p className="text-xs text-slate-400">Revenue share & growth velocity.</p>
              </div>
              <Globe2 className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-5 h-60 lg:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      background: "#020617",
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#e2e8f0",
                    }}
                    formatter={(value: number, name) => [`${value}%`, name]}
                  />
                  <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ color: "#cbd5f5", fontSize: 12 }} />
                  <Pie
                    data={geographicPerformance}
                    dataKey="revenue"
                    nameKey="region"
                    innerRadius={70}
                    outerRadius={110}
                    cornerRadius={12}
                    paddingAngle={4}
                  >
                    {geographicPerformance.map((entry, index) => {
                      const palette = ["#22d3ee", "#38bdf8", "#818cf8", "#f472b6"];
                      return <Cell key={entry.region} fill={palette[index % palette.length]} />;
                    })}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300">
              {geographicPerformance.map((region) => (
                <li key={region.region} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span>{region.region}</span>
                  <span className="text-emerald-300">{region.growth}% growth</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Runway outlook</h3>
                <p className="text-xs text-slate-400">Months of cash runway vs stress scenario.</p>
              </div>
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="relative mt-5 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={runwayOutlook} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradientRunway" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34d399" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value} mo`}
                    domain={["dataMin - 0.5", "dataMax + 0.5"]}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#020617",
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#e2e8f0",
                    }}
                    formatter={(value: number, label: string) => [`${value} months`, label]}
                  />
                  <Area type="monotone" dataKey="baseline" stroke="#34d399" strokeWidth={2.5} fill="url(#gradientRunway)" />
                  <Line type="monotone" dataKey="stress" stroke="#f472b6" strokeWidth={2} dot={{ strokeWidth: 1.8 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /> Baseline stability
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-400" /> Stress-tested drawdown
              </span>
            </div>
          </div>

          <div className="self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Funding diversification</h3>
                <p className="text-xs text-slate-400">Weighted share of active capital sources.</p>
              </div>
              <Layers className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-5 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    {fundingComposition.map((entry, index) => (
                      <linearGradient key={entry.name} id={`fundingGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={entry.fill} stopOpacity={0.85} />
                        <stop offset="60%" stopColor={entry.fill} stopOpacity={0.55} />
                        <stop offset="100%" stopColor={entry.fill} stopOpacity={0.25} />
                      </linearGradient>
                    ))}
                  </defs>
                  <Pie
                    data={fundingComposition}
                    cx="50%"
                    cy="50%"
                    innerRadius="58%"
                    outerRadius="88%"
                    paddingAngle={6}
                    dataKey="value"
                    cornerRadius={16}
                  >
                    {fundingComposition.map((entry, index) => (
                      <Cell key={entry.name} fill={`url(#fundingGradient-${index})`} stroke={entry.fill} strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
                    contentStyle={{
                      background: "#020617",
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#e2e8f0",
                    }}
                    formatter={(value: number, label: string) => [`${value}%`, label]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-4 text-center shadow-[0_0_30px_rgba(56,189,248,0.12)] backdrop-blur">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Active mix</span>
                  <div className="mt-2 text-2xl font-semibold text-white">{totalFundingShare}%</div>
                  <div className="text-xs text-slate-400">{leadFundingSource.name}</div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-2.5 text-xs text-slate-300">
              {fundingComposition.map((source) => (
                <div key={source.name} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-2">
                  <span>{source.name}</span>
                  <span className="text-cyan-200">{source.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="self-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Risk mitigation index</h3>
                <p className="text-xs text-slate-400">Control strength from treasury audits.</p>
              </div>
              <Activity className="h-5 w-5 text-violet-300" />
            </div>
            <div className="mt-5 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskMitigation} layout="vertical" margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
                  <defs>
                    <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.9} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid horizontal={false} stroke="rgba(148, 163, 184, 0.15)" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="category" width={130} stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
                    contentStyle={{
                      background: "#020617",
                      borderRadius: 16,
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#e2e8f0",
                    }}
                    formatter={(value: number) => [`${value}/100`, "Score"]}
                  />
                  <Bar dataKey="score" fill="url(#riskGradient)" radius={[12, 12, 12, 12]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-xs text-slate-400">
              Controls above 75 are audit-ready. Focus campaigns on <span className="text-emerald-300">operational controls</span> for the next uplift.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 lg:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">Strategic account coverage</h3>
              <p className="text-xs text-slate-400">Top enterprise relationships and health signals.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">
              <Activity className="h-4 w-4 text-emerald-300" /> Last synced 2 minutes ago
            </div>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10 text-sm">
              <thead className="text-left text-xs uppercase tracking-[0.2em] text-slate-400">
                <tr>
                  <th className="py-3">Account</th>
                  <th className="py-3">ARR</th>
                  <th className="py-3">Health</th>
                  <th className="py-3">Executive owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {topClients.map((client) => (
                  <tr key={client.account} className="transition hover:bg-white/5">
                    <td className="py-3 font-medium text-white">{client.account}</td>
                    <td className="py-3">{client.arr}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-emerald-200">
                        <CircleDot className="h-3 w-3" /> {client.health}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300">{client.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 lg:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">Voices from the boardroom</h3>
              <p className="text-xs text-slate-400">Executives share how Aurora keeps capital in formation.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              <Quote className="h-4 w-4 text-cyan-300" /> Curated testimonials
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 text-sm font-semibold text-slate-950">
                    {story.name
                      .split(" ")
                      .map((segment) => segment[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{story.name}</div>
                    <div className="text-xs text-slate-400">{story.title}</div>
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-300">{`“${story.quote}”`}</p>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  <Sparkles className="h-3.5 w-3.5" /> {story.badge}
                </span>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-8 grid gap-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-300 lg:grid-cols-3 lg:p-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
              <LineChartIcon className="h-4 w-4" /> Aurora Finance
            </div>
            <p className="text-slate-400">Executive-grade forecasting, liquidity orchestration, and proactive capital alerts.</p>
            <div className="text-xs text-slate-500">Demo environment refreshed continuously via Aurora Intelligence Engine.</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-slate-400">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Platform</div>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Command center</a>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Treasury AI</a>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Scenario lab</a>
            </div>
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Resources</div>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Product updates</a>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Security posture</a>
              <a className="block text-slate-300 hover:text-cyan-200" href="#">Support center</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 text-xs text-slate-400">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Contact</div>
              <div className="mt-2 text-slate-300">finance@aurora.ai</div>
              <div>+1 (415) 555-0126</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
              Signed in as <span className="text-white">{user.email}</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
