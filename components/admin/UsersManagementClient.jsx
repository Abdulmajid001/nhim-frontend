"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";

export function UsersManagementClient({ initialUsers }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) => {
      // Tab filter
      if (activeTab === "active" && !user.hasPolicy) return false;
      if (activeTab === "unassigned" && user.hasPolicy) return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = user.name.toLowerCase().includes(q);
        const matchEmail = user.email.toLowerCase().includes(q);
        const matchPolicy = user.policyId?.toLowerCase().includes(q);
        return matchName || matchEmail || matchPolicy;
      }

      return true;
    });
  }, [initialUsers, activeTab, searchQuery]);

  const activePolicyCount = initialUsers.filter((u) => u.hasPolicy).length;
  const unassignedCount = initialUsers.filter((u) => !u.hasPolicy).length;

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All Users ({initialUsers.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("active")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "active"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Active Policyholders ({activePolicyCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("unassigned")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "unassigned"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Unassigned ({unassignedCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name, email, or policy..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Clean Users Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">User Details</th>
                <th className="py-3.5 font-semibold">Active Plan & HMO</th>
                <th className="py-3.5 font-semibold">Policy ID</th>
                <th className="py-3.5 font-semibold">Joined Date</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground">
                    No users match your filters.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                          <User className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-bold text-sm text-card-foreground">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4">
                      {user.hasPolicy ? (
                        <div>
                          <p className="font-semibold text-foreground">
                            {user.plan}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {user.hmo}
                          </p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">No Active Plan</span>
                      )}
                    </td>

                    <td className="py-4 font-mono text-xs font-semibold text-foreground">
                      {user.policyId || "—"}
                    </td>

                    <td className="py-4 text-muted-foreground">
                      {user.joinedDate}
                    </td>

                    <td className="py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        {user.status}
                      </span>
                    </td>

                    <td className="py-4 pr-6 text-right">
                      <button
                        type="button"
                        className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
                      >
                        Manage
                      </button>
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
