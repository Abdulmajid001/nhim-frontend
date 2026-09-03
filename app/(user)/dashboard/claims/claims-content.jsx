"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Plus,
  Search,
  XCircle,
} from "lucide-react";
import { getMemberDashboard } from "@/lib/api/member";
import { formatPrice } from "@/lib/utils";

const statusConfig = {
  Approved: {
    icon: CheckCircle2,
    className:
      "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  },
  Processing: {
    icon: Clock3,
    className:
      "bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  },
  Declined: {
    icon: XCircle,
    className:
      "bg-red-500/10 text-red-700 dark:bg-red-500/15 dark:text-red-300",
  },
};

export default function ClaimsContent() {
  const [member, setMember] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMemberDashboard().then(setMember);
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your claims...
      </div>
    );

  const statuses = ["All", "Approved", "Processing", "Declined"];
  const visibleClaims = member.claims.filter((claim) => {
    const matchesStatus = filter === "All" || claim.status === filter;
    const searchText =
      `${claim.type} ${claim.facility} ${claim.id}`.toLowerCase();
    return matchesStatus && searchText.includes(search.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col justify-between gap-5 rounded-[28px] border border-border bg-linear-to-r from-primary/8 via-card to-accent/60 p-6 shadow-sm sm:flex-row sm:items-end dark:from-primary/12 dark:via-card dark:to-accent/20">
        <div>
          <p className="text-sm font-medium text-primary">
            Reimbursements and care
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My claims
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Track submitted claims and see what happens next.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          Submit a claim
        </button>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
          <p className="text-sm text-muted-foreground">Total claims</p>
          <p className="mt-4 text-2xl font-bold text-foreground">
            {member.claims.length}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">This policy year</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
          <p className="text-sm text-muted-foreground">Approved amount</p>
          <p className="mt-4 text-2xl font-bold text-foreground">
            {formatPrice(
              member.claims
                .filter((claim) => claim.status === "Approved")
                .reduce((total, claim) => total + claim.amount, 0),
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Paid or approved</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
          <p className="text-sm text-muted-foreground">Available allowance</p>
          <p className="mt-4 text-2xl font-bold text-foreground">
            {member.claimsTotal - member.claimsUsed}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Claims remaining</p>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition ${filter === status ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"}`}
              >
                {status}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground lg:w-64">
            <Search className="h-4 w-4 shrink-0" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search claims"
              className="min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <div className="mt-6 divide-y divide-border">
          {visibleClaims.length === 0 ? (
            <div className="py-10 text-center text-sm text-muted-foreground">
              No claims match your search.
            </div>
          ) : (
            visibleClaims.map((claim) => {
              const StatusIcon = statusConfig[claim.status].icon;
              return (
                <div
                  key={claim.id}
                  className="flex flex-col gap-4 py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="rounded-xl bg-accent p-3 text-primary">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {claim.type}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {claim.facility} · {claim.id}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock3 className="h-3 w-3" />
                        {claim.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-semibold text-foreground">
                        {formatPrice(claim.amount)}
                      </p>
                      <span
                        className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${statusConfig[claim.status].className}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {claim.status}
                      </span>
                    </div>
                    <Link
                      href={`/dashboard/claims/${claim.id}`}
                      aria-label={`View ${claim.id}`}
                      className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      <Link
        href="/dashboard/plan"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        Review plan benefits <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}