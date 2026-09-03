import Link from "next/link";
import { ArrowUpRight, Edit3 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function PlanCard({ plan }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300">
      <div>
        {/* Header: Tier & Status */}
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            {plan.tier}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              plan.status === "Active"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                plan.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            {plan.status}
          </span>
        </div>

        {/* Plan Name & Pricing */}
        <h3 className="mt-4 text-xl font-bold text-slate-900">{plan.name}</h3>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
          {plan.description}
        </p>

        <div className="mt-4">
          <p className="text-2xl font-bold text-slate-900">
            {formatPrice(plan.priceAnnual)}
            <span className="text-xs font-normal text-slate-500"> / year</span>
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            {formatPrice(Math.round(plan.priceAnnual / 12))} / month
          </p>
        </div>

        {/* Quick Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
          {/* <div>
            <p className="text-slate-400">Enrollees</p>
            <p className="mt-0.5 font-bold text-slate-800">
              {plan.enrollees.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Hospital Network</p>
            <p className="mt-0.5 font-bold text-slate-800">
              {plan.hospitalsCount} Centers
            </p>
          </div> */}
        </div>

        {/* Key Coverages */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {plan.coverage.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
          {plan.coverage.length > 4 && (
            <span className="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-400">
              +{plan.coverage.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <Link
          href={`/hmo-portal/plans/${plan.id}/edit`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          <Edit3 className="h-3.5 w-3.5" />
          <span>Edit Plan</span>
        </Link>
        <Link
          href={`/plans/${plan.id}`}
          target="_blank"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          <span>Marketplace preview</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
