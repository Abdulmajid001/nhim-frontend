import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ForHmoCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-secondary-foreground sm:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Running an HMO? List your plans where people are already
            comparing.
          </h2>
          <p className="mt-4 text-secondary-foreground/70">
            Manage plans, hospitals, and enrollee records from one
            dashboard, and get paid on a predictable schedule.
          </p>
          <Link
            href="/for-hmos"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            Apply as an HMO
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}