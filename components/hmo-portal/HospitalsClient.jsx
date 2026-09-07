"use client";

import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function HospitalsClient({ initialHospitals }) {
  const [hospitals] = useState(initialHospitals);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedTier, setSelectedTier] = useState("all");

  const states = ["all", ...new Set(initialHospitals.map((h) => h.state))];
  const tiers = ["all", ...new Set(initialHospitals.map((h) => h.tier))];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState =
      selectedState === "all" || hospital.state === selectedState;
    const matchesTier =
      selectedTier === "all" || hospital.tier === selectedTier;
    return matchesSearch && matchesState && matchesTier;
  });

  return (
    <div>
      {/* Controls Bar: Search & Select Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by hospital name or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>

        {/* State and Tier Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-input bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          >
            <option value="all">All States</option>
            {states
              .filter((s) => s !== "all")
              .map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="rounded-xl border border-input bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          >
            <option value="all">All Facility Tiers</option>
            {tiers
              .filter((t) => t !== "all")
              .map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Hospitals Table */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/70 text-muted-foreground">
                <th className="py-3.5 px-5 font-semibold">Hospital Name</th>
                <th className="py-3.5 px-4 font-semibold">Location</th>
                <th className="py-3.5 px-4 font-semibold">Facility Tier</th>
                <th className="py-3.5 px-4 font-semibold">Active Enrollees</th>
                <th className="py-3.5 px-4 font-semibold">Rating</th>
                <th className="py-3.5 px-5 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-card-foreground">
              {filteredHospitals.map((hospital) => (
                <tr key={hospital.id} className="transition hover:bg-accent/50">
                  {/* Name and Address */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-bold text-card-foreground">
                          {hospital.name}
                        </p>
                        <p className="truncate text-[11px] text-muted-foreground">
                          {hospital.address}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="px-4 py-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>
                        {hospital.city}, {hospital.state}
                      </span>
                    </div>
                  </td>

                  {/* Tier */}
                  <td className="py-4 px-4">
                    <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                      {hospital.tier}
                    </span>
                  </td>

                  {/* Active Enrollees Treated */}
                  <td className="px-4 py-4 font-medium text-card-foreground">
                    {hospital.enrolleesTreated.toLocaleString()} visits
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 font-semibold text-card-foreground">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{hospital.rating}</span>
                      <span className="text-[11px] font-normal text-muted-foreground">
                        ({hospital.reviews})
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      {hospital.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredHospitals.length === 0 && (
          <div className="p-12 text-center">
            <Building2 className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm font-semibold text-card-foreground">
              No partner hospitals match your filter
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try choosing a different state or facility tier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
