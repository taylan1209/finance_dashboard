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
  RadialBar,
  RadialBarChart,
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
  LineChart as LineChartIcon,
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

export default function Dashboard({ user }: DashboardProps) {
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

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-10">
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

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <div className="col-span-3 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
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
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenuePerformance}>
                  <defs>
                    <linearGradient id="gradientRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}M`} />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Area type="monotone" dataKey="revenue" stroke="#22d3ee" fill="url(#gradientRevenue)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="forecast" stroke="#818cf8" strokeWidth={2} strokeDasharray="6 6" dot={false} />
                  <Line type="monotone" dataKey="expenses" stroke="#f472b6" strokeWidth={1.8} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Liquidity coverage</h3>
                  <p className="text-xs text-slate-400">Composition of deployable capital.</p>
                </div>
                <Activity className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="flex h-64 flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="46%"
                      cy="50%"
                      innerRadius="28%"
                      outerRadius="100%"
                      data={liquidityPulse}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar dataKey="value" cornerRadius={14} background clockWise />
                      <Tooltip
                        contentStyle={{
                          background: "#020617",
                          borderRadius: 16,
                          border: "1px solid rgba(148,163,184,0.2)",
                          color: "#e2e8f0",
                        }}
                        formatter={(value: number) => [`${value}%`, "Share"]}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid flex-none gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-slate-200 md:w-52">
                  {liquidityPulse.map((bucket) => (
                    <div key={bucket.name} className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: bucket.fill }}
                      />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-white">{bucket.name}</div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          {bucket.value}% allocation
                        </div>
                      </div>
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
          <div className="col-span-3 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Customer retention momentum</h3>
                <p className="text-xs text-slate-400">Net retention vs expansion revenue.</p>
              </div>
              <Users className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-6 h-64">
              <ResponsiveContainer>
                <AreaChart data={retentionMomentum}>
                  <defs>
                    <linearGradient id="gradientRetention" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="quarter" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Area type="monotone" dataKey="retention" stroke="#38bdf8" strokeWidth={2.4} fill="url(#gradientRetention)" />
                  <Line type="monotone" dataKey="expansion" stroke="#facc15" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Pipeline concentration</h3>
                  <p className="text-xs text-slate-400">Active deals by stage (USD).</p>
                </div>
                <TrendingUp className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="mt-6 h-60">
                <ResponsiveContainer>
                  <BarChart data={pipelineHealth}>
                    <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                    <XAxis dataKey="stage" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="M" />
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

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Operating rhythm</h3>
                  <p className="text-xs text-slate-400">Automation coverage vs incidents.</p>
                </div>
                <Activity className="h-5 w-5 text-sky-300" />
              </div>
              <div className="mt-6 h-60">
                <ResponsiveContainer>
                  <LineChart data={operationalRhythm}>
                    <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
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

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <div className="col-span-3 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Product portfolio mix</h3>
                <p className="text-xs text-slate-400">Contribution vs quarterly targets.</p>
              </div>
              <CircleDot className="h-5 w-5 text-violet-200" />
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer>
                <BarChart data={productMix} barCategoryGap={24}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="product" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ background: "#020617", borderRadius: 16, border: "1px solid rgba(148,163,184,0.2)", color: "#e2e8f0" }} />
                  <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                  <Bar dataKey="actual" radius={[14, 14, 4, 4]} fill="#38bdf8" />
                  <Bar dataKey="target" radius={[14, 14, 4, 4]} fill="#818cf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Global footprint</h3>
                <p className="text-xs text-slate-400">Revenue share & growth velocity.</p>
              </div>
              <Globe2 className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer>
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
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {geographicPerformance.map((region) => (
                <li key={region.region} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span>{region.region}</span>
                  <span className="text-emerald-300">{region.growth}% growth</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">Strategic account coverage</h3>
              <p className="text-xs text-slate-400">Top enterprise relationships and health signals.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">
              <Activity className="h-4 w-4 text-emerald-300" /> Last synced 2 minutes ago
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
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

        <footer className="flex flex-col gap-2 pb-10 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>Data refreshed continuously via Aurora Intelligence Engine · synthetic demo feed.</div>
          <div>Signed in as {user.email}</div>
        </footer>
      </main>
    </div>
  );
}
