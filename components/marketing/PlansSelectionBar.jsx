"use client";

import { Check, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function PlansSelectionBar({
  selectedCount,
  onClear,
  onCompare,
  comparisonDisabled,
}) {
  return (
    <AnimatePresence>
      {selectedCount > 0 && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {selectedCount}
              </span>
              <span>
                {selectedCount === 1 ? "plan" : "plans"} selected
                <span className="ml-1 text-muted-foreground">
                  (choose 2 to compare)
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClear}
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <X className="h-4 w-4" />
                Clear all
              </button>
              <button
                type="button"
                disabled={comparisonDisabled}
                onClick={onCompare}
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Check className="h-4 w-4" />
                Compare plans
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
