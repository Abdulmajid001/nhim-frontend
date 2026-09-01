"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ComparePlanCard } from "@/components/marketing/ComparePlanCard";

export function ComparePlansModal({
  open,
  plans,
  onClose,
  onToggleSelect,
  enrichPlan,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="comparison-title"
            className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="comparison-title" className="text-2xl font-bold tracking-tight text-foreground">
                  Compare plans
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Review your selected plans side by side.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close comparison"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <ComparePlanCard
                  key={plan.id}
                  plan={enrichPlan(plan, index)}
                  badge={null}
                  selected
                  onToggleSelect={onToggleSelect}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
