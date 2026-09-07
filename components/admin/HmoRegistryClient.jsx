"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Search,
  ShieldCheck,
} from "lucide-react";

export function HmoRegistryClient({ initialHmos, pendingHmos }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const combinedList = useMemo(() => {
    const pendingFormatted = pendingHmos.map((p) => ({
      ...p,
      isPending: true,
      status: "Pending Audit",
    }));

    const verifiedFormatted = initialHmos.map((v) => ({
      ...v,
      isPending: false,
      status: "Verified & Active",
      cacNumber: `RC-${Math.floor(1000000 + (v.name.length * 98765) % 9000000)}`,
      nhiaLicense: `NHIA/HMO/2024/0${(v.name.length % 50) + 10}`,
    }));

    return [...pendingFormatted, ...verifiedFormatted];
  }, [initialHmos, pendingHmos]);

  const filteredHmos = useMemo(() => {
    return combinedList.filter((hmo) => {
      if (activeTab === "pending" && !hmo.isPending) return false;
      if (activeTab === "verified" && hmo.isPending) return false;

      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = hmo.name?.toLowerCase().includes(q);
        const matchCac = hmo.cacNumber?.toLowerCase().includes(q);
        const matchLic = hmo.nhiaLicense?.toLowerCase().includes(q);
        return matchName || matchCac || matchLic;
      }

      return true;
    });
  }, [combinedList, activeTab, searchQuery]);

  const pendingCount = pendingHmos.length;
  const verifiedCount = initialHmos.length;

  return (
    <div className="space-y-6">
      {/* Search & Tabs Bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All ({combinedList.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "pending"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Pending Audit ({pendingCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("verified")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "verified"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Verified ({verifiedCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search HMO, CAC, or license..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Clean HMO List Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">HMO Provider</th>
                <th className="py-3.5 font-semibold">License IDs</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredHmos.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-muted-foreground">
                    No HMO providers match your search.
                  </td>
                </tr>
              ) : (
                filteredHmos.map((hmo) => (
                  <tr
                    key={hmo.id || hmo.slug}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-bold text-sm text-card-foreground">
                            {hmo.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {Array.isArray(hmo.locations)
                              ? hmo.locations.slice(0, 2).join(", ")
                              : hmo.headquarters || "Lagos, Nigeria"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4">
                      <p className="font-mono text-xs font-semibold text-foreground">
                        {hmo.cacNumber || "RC-8392011"}
                      </p>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {hmo.nhiaLicense || "NHIA/HMO/2024/048"}
                      </p>
                    </td>

                    <td className="py-4 text-center">
                      {hmo.isPending ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                          <Clock3 className="h-3 w-3" />
                          Pending Audit
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />
                          Verified
                        </span>
                      )}
                    </td>

                    <td className="py-4 pr-6 text-right">
                      <Link
                        href={`/admin/hmos/${hmo.id || hmo.slug}/verify`}
                        className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                          hmo.isPending
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                            : "border border-border bg-card text-foreground hover:bg-muted"
                        }`}
                      >
                        {hmo.isPending ? (
                          <>
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>Audit & Verify</span>
                          </>
                        ) : (
                          <span>View Details</span>
                        )}
                      </Link>
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
