"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * @param {{ hmo: import("@/lib/api/hmos").Hmo }} props
 */
export function HmoCard({ hmo }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex min-w-0 flex-col rounded-3xl border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6"
    >
      <div className="relative flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary shadow-sm ring-1 ring-black/5 dark:ring-white/10">
          {initials(hmo.name)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-medium text-muted-foreground">
              Accredited provider
            </p>
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-label="Verified provider" />
          </div>
          <h3 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-foreground">
            {hmo.name}
          </h3>
        </div>
      </div>

      <div className="relative mt-7 flex items-center justify-between border-y border-border py-4">
        <span className="text-sm text-muted-foreground">Available plans</span>
        <span className="text-sm font-semibold text-foreground">
          {hmo.planCount} {hmo.planCount === 1 ? "plan" : "plans"}
        </span>
      </div>

      <p className="relative mt-5 flex-1 text-sm leading-6 text-muted-foreground">
        {hmo.description}
      </p>

      <div className="relative mt-5 flex flex-wrap items-center gap-1.5 border-t border-border pt-5">
        <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
        {hmo.locations.slice(0, 3).map((loc) => (
          <span
            key={loc}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
          >
            {loc}
          </span>
        ))}
        {hmo.locations.length > 3 && (
          <span className="text-xs text-muted-foreground">
            +{hmo.locations.length - 3} more
          </span>
        )}
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-3">
        <Link
          href={`/hmos/${hmo.slug}`}
          className="inline-flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-2 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] sm:px-3"
        >
          <span className="truncate">View profile</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/hmos/${hmo.slug}`}
          className="inline-flex h-11 min-w-0 items-center justify-center rounded-xl bg-primary px-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98] sm:px-3"
        >
          View plans
        </Link>
      </div>
    </motion.article>
  );
}