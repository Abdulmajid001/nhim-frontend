"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

export function HospitalsRegistryClient({ initialHospitals }) {
  const [activeTier, setActiveTier] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("all");

  const filteredHospitals = useMemo(() => {
    return initialHospitals.filter((hospital) => {
      // Tier filter
      if (activeTier !== "all" && hospital.tier !== activeTier) {
        return false;
      }

      // State filter
      if (selectedState !== "all" && hospital.state !== selectedState) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = hospital.name.toLowerCase().includes(q);
        const matchCity = hospital.city.toLowerCase().includes(q);
        const matchCode = hospital.code.toLowerCase().includes(q);
        return matchName || matchCity || matchCode;
      }

      return true;
    });
  }, [initialHospitals, activeTier, selectedState, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Tier Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTier("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTier === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All ({initialHospitals.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTier("Tier-1")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTier === "Tier-1"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Tier-1 Tertiary
          </button>

          <button
            type="button"
            onClick={() => setActiveTier("Tier-2")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTier === "Tier-2"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Tier-2 General
          </button>

          <button
            type="button"
            onClick={() => setActiveTier("Primary")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTier === "Primary"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Primary Clinics
          </button>
        </div>

        {/* Search & State Filter */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hospital or code..."
              className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
            />
          </div>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All States</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja (FCT)">Abuja (FCT)</option>
            <option value="Rivers">Rivers</option>
            <option value="Kano">Kano</option>
            <option value="Oyo">Oyo</option>
          </select>
        </div>
      </div>

      {/* Clean Hospital Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">Hospital Name</th>
                <th className="py-3.5 font-semibold">Location</th>
                <th className="py-3.5 font-semibold">Facility Code</th>
                <th className="py-3.5 font-semibold">Tier Category</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Linked HMOs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredHospitals.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground">
                    No hospital facilities match your filters.
                  </td>
                </tr>
              ) : (
                filteredHospitals.map((hospital) => (
                  <tr
                    key={hospital.id}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-bold text-sm text-card-foreground">
                            {hospital.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {hospital.specialty}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4">
                      <p className="font-medium text-foreground">
                        {hospital.city}, {hospital.state}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {hospital.address}
                      </p>
                    </td>

                    <td className="py-4 font-mono text-xs font-semibold text-foreground">
                      {hospital.code}
                    </td>

                    <td className="py-4">
                      <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                        {hospital.tier}
                      </span>
                    </td>

                    <td className="py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        Accredited
                      </span>
                    </td>

                    <td className="py-4 pr-6 text-right font-semibold text-foreground">
                      {hospital.hmoCount} HMOs
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
