import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl rounded-2xl border border-[color:var(--border)] bg-[#0b162a] p-8 text-center shadow-lg shadow-slate-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--secondary)]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">
          This page could not be found
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
          The link may be outdated, or the page may have moved. You can always
          head back to the portfolio homepage.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--primary-text)] transition hover:brightness-95"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
