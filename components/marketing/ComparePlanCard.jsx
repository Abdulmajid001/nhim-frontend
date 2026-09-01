"use client";

import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Check,
  Building2,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { formatPrice } from "@/lib/utils";

const BADGE_CONFIG = {
  "Top Rated": {
    icon: Star,
    className: "border-primary/20 bg-primary/10 text-primary",
  },
  "Best Value": {
    icon: Star,
    className: "border-border bg-muted text-foreground",
  },
  "Most Popular": {
    icon: Star,
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300",
  },
};

export function ComparePlanCard({
  plan,
  badge,
  selected = false,
  selectionDisabled = false,
  onToggleSelect,
}) {
  const BadgeIcon = BADGE_CONFIG[badge]?.icon ?? Star;
  const badgeClass =
    BADGE_CONFIG[badge]?.className ??
    "border-border bg-muted text-foreground";

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6 ${
        selected
          ? "border-primary ring-2 ring-primary/20"
          : "border-border hover:border-primary/30"
      }`}
    >
      {/* Hover background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <button
        type="button"
        onClick={() => onToggleSelect?.(plan)}
        disabled={selectionDisabled && !selected}
        aria-label={
          selected
            ? `Remove ${plan.name} from comparison`
            : `Add ${plan.name} to comparison`
        }
        aria-pressed={selected}
        className={`absolute right-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border transition-colors sm:right-5 sm:top-5 ${
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
        } disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <motion.span
          key={selected ? "selected" : "unselected"}
          initial={{ scale: 0.4, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 24 }}
        >
          <Check className="h-4 w-4" strokeWidth={selected ? 3 : 2} />
        </motion.span>
      </button>

      {/* Badge */}
      {badge && (
        <div className="relative mb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`}
          >
            <BadgeIcon className="h-3 w-3" strokeWidth={2.5} />
            {badge}
          </span>
        </div>
      )}

      {/* Provider */}
      <div className="relative mb-4 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold shadow-sm ring-1 ring-black/5 dark:ring-white/10 ${plan.logoClass}`}
        >
          {plan.logoLetter}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-xs sm:text-sm font-medium text-muted-foreground">
              {plan.hmoName}
            </p>
            {plan.verified && (
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-primary"
                aria-label="Verified provider"
              />
            )}
          </div>
          <h3 className="mt-1 truncate text-base sm:text-lg font-semibold tracking-tight text-foreground">
            {plan.name}
          </h3>
        </div>
      </div>

      {/* Category */}
      <div className="relative mb-3">
        <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground">
          {plan.category}
        </span>
      </div>

      {/* Price */}
      <div className="relative mb-4 border-b border-border pb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {formatPrice(plan.priceMonthly)}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatPrice(plan.priceAnnual)}/year
        </p>
      </div>

      {/* Rating */}
      <div className="relative mb-4 flex items-center gap-2">
        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-[#f59e0b] text-[#f59e0b]" />
        <span className="text-sm font-semibold text-foreground">
          {plan.rating}
        </span>
        <span className="text-xs sm:text-sm text-muted-foreground">
          ({plan.reviewCount})
        </span>
      </div>

      {/* Hospitals */}
      {/* <div className="relative mb-4 flex items-center gap-2">
        <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="text-xs sm:text-sm text-muted-foreground">
          {plan.hospitalCount} partner hospitals
        </span>
      </div> */}

      {/* Coverage */}
      <div className="relative mb-6 flex-1">
        <ul className="space-y-2">
          {plan.coverage.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                strokeWidth={2.5}
              />
              <span>{item}</span>
            </li>
          ))}
          {plan.coverage.length > 4 && (
            <li className="text-xs text-muted-foreground pl-5">
              +{plan.coverage.length - 4} more coverage
            </li>
          )}
        </ul>
      </div>

      {/* Actions */}
      <div className="relative mt-auto grid grid-cols-2 gap-2 sm:gap-3">
        <Link
          href={`/plans/${plan.id}`}
          className="inline-flex h-9 sm:h-10 items-center justify-center gap-1 rounded-lg border border-border bg-background px-2 text-xs sm:text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted active:scale-95"
        >
          <span className="truncate">Details</span>
          <ArrowRight className="h-3 w-3 shrink-0" />
        </Link>

        <Link
          href={`/plans/${plan.id}/buy`}
          className="inline-flex h-9 sm:h-10 items-center justify-center rounded-lg bg-primary px-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 active:scale-95"
        >
          Buy Now
        </Link>
      </div>
    </article>
  );
}
