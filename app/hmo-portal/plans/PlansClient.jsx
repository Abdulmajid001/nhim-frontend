"use client";

import { useState } from "react";
import { FileSpreadsheet, Search } from "lucide-react";
import { PlanCard } from "./PlanCard";

export function PlansClient({ initialPlans }) {
  const [plans, setPlans] = useState(initialPlans);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPlans = plans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.tier.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || plan.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Controls Bar: Search & Status Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Box */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search plans by name or tier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          {[
            { id: "all", label: "All Plans" },
            { id: "active", label: "Active" },
            { id: "draft", label: "Draft" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                statusFilter === tab.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {filteredPlans.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <FileSpreadsheet className="mx-auto h-8 w-8 text-slate-300" />
          <p className="mt-3 text-sm font-semibold text-slate-900">
            No plans found
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Try adjusting your search query or filter settings.
          </p>
        </div>
      )}
    </div>
  );
}
