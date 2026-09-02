"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { HmoCard } from "@/components/marketing/HmoCard";

const SORT_OPTIONS = [
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviewed" },
  { value: "plans", label: "Most Plans" },
  { value: "price-asc", label: "Price: Low to High" },
];

export function HmosExplorer({ initialHmos }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("rating");

  const filteredHmos = useMemo(() => {
    let result = initialHmos.filter((hmo) => {
      const matchesQuery =
        query.trim() === "" ||
        hmo.name.toLowerCase().includes(query.toLowerCase());

      return matchesQuery;
    });

    switch (sort) {
      case "reviews":
        result = [...result].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "plans":
        result = [...result].sort((a, b) => b.planCount - a.planCount);
        break;
      case "price-asc":
        result = [...result].sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      default:
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [initialHmos, query, sort]);

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 p-8">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by HMO name..."
              className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {`${filteredHmos.length} HMO${filteredHmos.length === 1 ? "" : "s"} found`}
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {filteredHmos.length === 0 ? (
          <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-lg font-semibold text-foreground">
              No HMOs match your filters
            </p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Try a different search term to see more results.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredHmos.map((hmo) => (
              <HmoCard key={hmo.id} hmo={hmo} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}