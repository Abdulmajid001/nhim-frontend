"use client";

import { useMemo, useState } from "react";
import { ComparePlanCard } from "@/components/marketing/ComparePlanCard";
import { ComparePlansModal } from "@/components/marketing/ComparePlansModal";
import { PlansFiltersSection } from "@/components/marketing/PlansFiltersSection";
import { PlansSelectionBar } from "@/components/marketing/PlansSelectionBar";

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
//   hospitalCount: 50 + Math.floor(Math.random() * 100),
});

export function PlansPageClient({ initialPlans }) {
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

  const filteredPlans = useMemo(() => {
    let result = initialPlans.filter((plan) => {
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
  }, [initialPlans, query, filters, sort]);

  const selectedPlans = useMemo(
    () => initialPlans.filter((plan) => selectedPlanIds.includes(plan.id)),
    [initialPlans, selectedPlanIds],
  );

  return (
    <>
      <PlansFiltersSection
        query={query}
        onQueryChange={setQuery}
        filters={filters}
        onFiltersChange={setFilters}
        sort={sort}
        onSortChange={setSort}
        resultsCount={filteredPlans.length}
      />

      {/* Results Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {filteredPlans.length === 0 ? (
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

      <PlansSelectionBar
        selectedCount={selectedPlanIds.length}
        onClear={() => setSelectedPlanIds([])}
        onCompare={() => setComparisonOpen(true)}
        comparisonDisabled={selectedPlanIds.length < 2}
      />

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
