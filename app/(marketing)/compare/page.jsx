"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Search, X } from "lucide-react";
import { ComparePlanCard } from "@/components/marketing/ComparePlanCard";
import { AnimatePresence, motion } from "motion/react";
import { ComparePlansModal } from "@/components/marketing/ComparePlansModal";
import { getPlans, ALL_HMOS, ALL_LOCATIONS } from "@/lib/api/plans";
import { Heading } from "@/components/marketing/Heading";

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

const DEFAULT_FILTERS = {
  location: "all",
  hmo: "all",
  type: "all",
};

// Helper function to determine plan category
const getPlanCategory = (tier) => {
  const categories = {
    basic: "Individual",
    standard: "Family",
    premium: "Corporate",
  };
  return categories[tier] || "Individual";
};

// Helper function to get HMO logo letter
const getLogoLetter = (hmoName) => {
  return hmoName.split(" ")[0][0].toUpperCase();
};

// Helper function to get logo background color
const getLogoClass = (hmoName) => {
  const colors = {
    CarePlus: "bg-blue-500",
    Wellcare: "bg-green-500",
    Zenith: "bg-purple-500",
    Avicare: "bg-orange-500",
    TrustGuard: "bg-red-500",
    MediLife: "bg-cyan-500",
  };
  const hmoFirstWord = hmoName.split(" ")[0];
  return colors[hmoFirstWord] || "bg-blue-500";
};

// Helper function to determine badge
const getBadge = (plan, index) => {
  if (plan.rating >= 4.7) return "Top Rated";
  if (plan.tier === "premium" || index === 0) return "Most Popular";
  if (plan.priceAnnual < 25000) return "Best Value";
  return null;
};

// Helper function to enrich plan data
const enrichPlan = (plan) => ({
  ...plan,
  priceMonthly: Math.round(plan.priceAnnual / 12),
  category: getPlanCategory(plan.tier),
  logoLetter: getLogoLetter(plan.hmoName),
  logoClass: getLogoClass(plan.hmoName),
  verified: true,
  hospitalCount: 50 + Math.floor(Math.random() * 100),
});

export default function ComparePlansPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popularity");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [selectedPlanIds, setSelectedPlanIds] = useState([]);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const togglePlanSelection = (plan) => {
    setSelectedPlanIds((current) => {
      if (current.includes(plan.id)) {
        return current.filter((id) => id !== plan.id);
      }
      if (current.length >= 3) return current;
      return [...current, plan.id];
    });
  };

  useEffect(() => {
    getPlans().then((data) => {
      setPlans(data);
      setLoading(false);
    });
  }, []);

  const filteredPlans = useMemo(() => {
    let result = plans.filter((plan) => {
      const matchesQuery =
        query.trim() === "" ||
        plan.name.toLowerCase().includes(query.toLowerCase()) ||
        plan.hmoName.toLowerCase().includes(query.toLowerCase());

      const matchesLocation =
        filters.location === "all" || plan.locations.includes(filters.location);

      const matchesHmo = filters.hmo === "all" || plan.hmoName === filters.hmo;

      const matchesType =
        filters.type === "all" ||
        getPlanCategory(plan.tier).toLowerCase() === filters.type.toLowerCase();

      return matchesQuery && matchesLocation && matchesHmo && matchesType;
    });

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.priceAnnual - b.priceAnnual);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.priceAnnual - a.priceAnnual);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [plans, query, filters, sort]);

  const selectedPlans = useMemo(
    () => plans.filter((plan) => selectedPlanIds.includes(plan.id)),
    [plans, selectedPlanIds],
  );

  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Heading
            eyebrow="Simple process"
            title="Compare HMO Plans"
            description="Find the perfect health insurance plan for your needs. Compare coverage, pricing, and providers side by side."
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <div className="space-y-4">
            {/* Top Row */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Results Count */}
              <p className="text-sm font-medium text-foreground">
                Showing{" "}
                <span className="font-semibold">{filteredPlans.length}</span>{" "}
                plans
              </p>

              {/* Search */}
              <div className="relative w-full lg:max-w-sm xl:max-w-md">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                  setFilters({ ...filters, location: e.target.value })
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
                  setFilters({ ...filters, hmo: e.target.value })
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
                  setFilters({ ...filters, type: e.target.value })
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
                onChange={(e) => setSort(e.target.value)}
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

      {/* Results Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {loading ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-96 animate-pulse rounded-2xl border border-border bg-muted/50"
                />
              ))}
            </div>
          ) : filteredPlans.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="text-xl font-semibold text-foreground">
                No plans match your filters
              </p>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Try adjusting your filters or search term to find more plans.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilters(DEFAULT_FILTERS);
                  setQuery("");
                }}
                className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {filteredPlans.map((plan, index) => {
                const enrichedPlan = enrichPlan(plan);
                const badge = getBadge(enrichedPlan, index);

                return (
                  <ComparePlanCard
                    key={plan.id}
                    plan={enrichedPlan}
                    badge={badge}
                    selected={selectedPlanIds.includes(plan.id)}
                    selectionDisabled={selectedPlanIds.length >= 3}
                    onToggleSelect={togglePlanSelection}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedPlanIds.length > 0 && (
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
                  {selectedPlanIds.length}
                </span>
                <span>
                  {selectedPlanIds.length === 1 ? "plan" : "plans"} selected
                  <span className="ml-1 text-muted-foreground">
                    (choose 2 to compare)
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPlanIds([])}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                  Clear all
                </button>
                <button
                  type="button"
                  disabled={selectedPlanIds.length < 2}
                  onClick={() => setComparisonOpen(true)}
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

      <ComparePlansModal
        open={comparisonOpen}
        plans={selectedPlans}
        onClose={() => setComparisonOpen(false)}
        onToggleSelect={togglePlanSelection}
        enrichPlan={enrichPlan}
      />
    </>
  );
}
