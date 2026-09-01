"use client";

import { Search } from "lucide-react";
import { ALL_HMOS, ALL_LOCATIONS } from "@/lib/api/plans";

const SORT_OPTIONS = [
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const PLAN_TYPES = [
  { value: "all", label: "All Types" },
  { value: "individual", label: "Individual" },
  { value: "family", label: "Family" },
  { value: "corporate", label: "Corporate" },
];

export function PlansFiltersSection({
  query,
  onQueryChange,
  filters,
  onFiltersChange,
  sort,
  onSortChange,
  resultsCount,
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="space-y-4">
          {/* Top Row */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Results Count */}
            <p className="text-sm font-medium text-foreground">
              Showing <span className="font-semibold">{resultsCount}</span> plans
            </p>

            {/* Search */}
            <div className="relative w-full lg:max-w-sm xl:max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search by plan, HMO, or hospital..."
                className="h-11 w-full rounded-lg border border-border bg-background py-2.5 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex lg:items-center lg:justify-end">
            {/* Location */}
            <select
              value={filters.location}
              onChange={(e) =>
                onFiltersChange({ ...filters, location: e.target.value })
              }
              className="h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm outline-none transition-all hover:bg-muted focus:border-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              <option value="all">All Locations</option>

              {ALL_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* HMO */}
            <select
              value={filters.hmo}
              onChange={(e) =>
                onFiltersChange({ ...filters, hmo: e.target.value })
              }
              className="h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm outline-none transition-all hover:bg-muted focus:border-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              <option value="all">All HMOs</option>

              {ALL_HMOS.map((hmo) => (
                <option key={hmo} value={hmo}>
                  {hmo}
                </option>
              ))}
            </select>

            {/* Type */}
            <select
              value={filters.type}
              onChange={(e) =>
                onFiltersChange({ ...filters, type: e.target.value })
              }
              className="h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm outline-none transition-all hover:bg-muted focus:border-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              {PLAN_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm outline-none transition-all hover:bg-muted focus:border-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
