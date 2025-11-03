"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

type DemoUser = {
  email: string;
  password: string;
  name: string;
  title: string;
};

const DEMO_USERS: DemoUser[] = [
  {
    email: "executive@aurorafinance.com",
    password: "Aurora#2025",
    name: "Jordan Blake",
    title: "Chief Strategy Officer",
  },
  {
    email: "cfo@aurorafinance.com",
    password: "Liquidity!89",
    name: "Ava Chen",
    title: "Chief Financial Officer",
  },
  {
    email: "opslead@aurorafinance.com",
    password: "OpsPulse77",
    name: "Noah Patel",
    title: "Director of Operations",
  },
];

type LoginFormProps = {
  onSuccess: (user: Omit<DemoUser, "password">) => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const trimmedEmail = email.trim().toLowerCase();
    const match = DEMO_USERS.find(
      (user) => user.email.toLowerCase() === trimmedEmail && user.password === password,
    );

    setTimeout(() => {
      if (!match) {
        setError("We could not verify those credentials. Please try the demo accounts above.");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      onSuccess({ email: match.email, name: match.name, title: match.title });
    }, 600);
  };

  const handleQuickFill = (user: DemoUser) => {
    setEmail(user.email);
    setPassword(user.password);
    setError(null);
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-cyan-500/60 via-violet-500/50 to-emerald-500/60 blur-2xl" />
      <div className="relative rounded-[32px] border border-white/10 bg-slate-950/70 p-10 shadow-[0_30px_120px_-45px_rgba(35,150,255,0.65)] backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-100">
            <ShieldCheck className="h-4 w-4" /> Secure executive access
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Aurora Finance Intelligence
          </h1>
          <p className="max-w-md text-sm text-slate-300">
            Sign in with one of the curated demo identities to explore the next-generation
            enterprise command center experience.
          </p>
        </div>

        <div className="mt-8 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            <Sparkles className="h-4 w-4" /> Demo credentials
          </div>
          <div className="grid gap-2 text-sm text-slate-100">
            {DEMO_USERS.map((user) => (
              <button
                key={user.email}
                type="button"
                onClick={() => handleQuickFill(user)}
                className={clsx(
                  "flex flex-col gap-1 rounded-xl border border-white/5 bg-slate-900/60 px-4 py-3 text-left transition",
                  "hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white",
                )}
              >
                <span className="flex items-center justify-between text-sm font-semibold">
                  {user.name}
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/80">
                    Quick fill
                  </span>
                </span>
                <span className="text-xs text-slate-300">
                  {user.title} · {user.email} · {user.password}
                </span>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              Work email
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus-within:border-cyan-400/60">
              <Mail className="h-4 w-4 text-cyan-300" />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="executive@aurorafinance.com"
                className="w-full bg-transparent placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              Passphrase
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus-within:border-cyan-400/60">
              <Lock className="h-4 w-4 text-cyan-300" />
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:via-blue-400 hover:to-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Authorising..." : "Enter the command center"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {error && (
            <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-xs text-slate-400">
          Multi-factor verification is simulated. Use the demo accounts only—no real data is stored.
        </p>
      </div>
    </div>
  );
}
