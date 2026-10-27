import Link from "next/link";
import type { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)] bg-[color:var(--surface-strong)]/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">
              M
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--muted)]">PORTFOLIO</span>
          </Link>
          <Link href="/" className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-300">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
