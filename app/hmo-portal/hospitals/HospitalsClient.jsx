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
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by hospital name or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* State and Tier Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All States</option>
            {states.filter((s) => s !== "all").map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Facility Tiers</option>
            {tiers.filter((t) => t !== "all").map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hospitals Table */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500">
                <th className="py-3.5 px-5 font-semibold">Hospital Name</th>
                <th className="py-3.5 px-4 font-semibold">Location</th>
                <th className="py-3.5 px-4 font-semibold">Facility Tier</th>
                <th className="py-3.5 px-4 font-semibold">Active Enrollees</th>
                <th className="py-3.5 px-4 font-semibold">Rating</th>
                <th className="py-3.5 px-5 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredHospitals.map((hospital) => (
                <tr
                  key={hospital.id}
                  className="transition hover:bg-slate-50/60"
                >
                  {/* Name and Address */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Building2 className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">
                          {hospital.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {hospital.address}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="py-4 px-4 text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      <span>
                        {hospital.city}, {hospital.state}
                      </span>
                    </div>
                  </td>

                  {/* Tier */}
                  <td className="py-4 px-4">
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      {hospital.tier}
                    </span>
                  </td>

                  {/* Active Enrollees Treated */}
                  <td className="py-4 px-4 font-medium text-slate-800">
                    {hospital.enrolleesTreated.toLocaleString()} visits
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 font-semibold text-slate-800">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{hospital.rating}</span>
                      <span className="text-slate-400 text-[11px] font-normal">
                        ({hospital.reviews})
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
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
            <Building2 className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-3 text-sm font-semibold text-slate-900">
              No partner hospitals match your filter
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try choosing a different state or facility tier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
