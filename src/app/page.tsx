"use client";

import { useState } from "react";
import Dashboard from "@/components/dashboard";
import LoginForm from "@/components/login-form";

type AuthenticatedUser = {
  name: string;
  title: string;
  email: string;
};

export default function Home() {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  if (user) {
    return <Dashboard user={user} />;
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.45),_transparent_70%)] opacity-70 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Aurora Finance
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Next-gen enterprise intelligence for finance leaders
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Explore a single-page, data-rich operating system for executives. Log in with a demo
            identity to launch the immersive dashboard experience.
          </p>
        </div>
        <LoginForm
          onSuccess={(authenticatedUser) =>
            setUser({
              name: authenticatedUser.name,
              title: authenticatedUser.title,
              email: authenticatedUser.email,
            })
          }
        />
        <div className="max-w-3xl text-xs text-slate-400">
          Synthetic data only · Aurora Finance Intelligence v2.1 · Built with Next.js, Tailwind CSS,
          and Recharts.
        </div>
      </div>
    </div>
  );
}
