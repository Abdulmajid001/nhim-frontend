import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileSpreadsheet,
  FileText,
  Plus,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

function StatCard({ label, value, detail, icon: Icon, tone }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={`rounded-xl p-2.5 ${tone}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold tracking-tight text-card-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}

const hmoData = {
  name: "Reliance HMO",
  licenseNumber: "NHIA/HMO/2024/034",
  activePlans: 6,
  totalEnrollees: 14850,
  pendingClaims: 18,
  hospitalPartners: 248,
  monthlyRevenue: 24800000,
  settlementRate: 96,
  recentEnrollees: [
    {
      name: "Grace Okafor",
      plan: "Gold Care Plus",
      date: "02 Sep 2026",
      status: "Active",
      policyId: "NHM-GK-4872",
    },
    {
      name: "Babajide Adeleke",
      plan: "Silver Family",
      date: "01 Sep 2026",
      status: "Active",
      policyId: "NHM-BA-1903",
    },
    {
      name: "Chioma Nwosu",
      plan: "Gold Care Plus",
      date: "28 Aug 2026",
      status: "Active",
      policyId: "NHM-CN-8291",
    },
  ],
};

export default function HmoDashboardPage() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-primary">{formattedDate}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome, {hmoData.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Operational overview of your plans, enrollees, and claims.
          </p>
        </div>

        <Link
          href="/hmo-portal/plans/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          <span>New Plan</span>
        </Link>
      </header>

      {/* KPI Stats Grid */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <StatCard
          label="Active Plans"
          value={`${hmoData.activePlans} Plans`}
          detail="Published on marketplace"
          icon={FileSpreadsheet}
          tone="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
        />
        <StatCard
          label="Total Enrollees"
          value={hmoData.totalEnrollees.toLocaleString()}
          detail="Active covered lives"
          icon={Users}
          tone="bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
        />
        <StatCard
          label="Pending Claims"
          value={`${hmoData.pendingClaims} Pending`}
          detail="Awaiting approval"
          icon={FileText}
          tone="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
        />
        <StatCard
          label="Partner Hospitals"
          value={hmoData.hospitalPartners}
          detail="Accredited healthcare centers"
          icon={Building2}
          tone="bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"
        />
      </section>

      {/* Main Highlights Row */}
      {/* <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        --- commment---HMO Provider Feature Card
        <div className="overflow-hidden rounded-3xl bg-[#123b52] p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-medium text-[#9fd9c3]">
                HMO Accreditation & Provider Tier
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                {hmoData.name}
              </h2>
              <p className="mt-1 text-sm text-[#c4d7df]">
                {hmoData.licenseNumber} · Tier 1 National Provider
              </p>
            </div>

            <Link
              href="/hmo-portal/plans"
              className="inline-flex h-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#123b52] transition-transform hover:-translate-y-0.5"
            >
              Manage Plans <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-[#9fbac5]">Published Plans</p>
              <p className="mt-1 text-sm font-semibold">
                {hmoData.activePlans} Active Tiers
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9fbac5]">Monthly Volume</p>
              <p className="mt-1 text-sm font-semibold">
                {formatPrice(hmoData.monthlyRevenue)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9fbac5]">Avg. Settlement</p>
              <p className="mt-1 text-sm font-semibold">2.1 Working Days</p>
            </div>
          </div>
        </div>

        --- commment---Claims Settlement Status
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Claims Resolution</h2>
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          </div>
          <p className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            {hmoData.settlementRate}%
            <span className="text-sm font-medium text-slate-500">
              {" "}
              approval rate
            </span>
          </p>
          <div className="mt-4 h-2 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-emerald-600"
              style={{ width: `${hmoData.settlementRate}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {hmoData.pendingClaims} claims pending review.
          </p>
          <Link
            href="/hmo-portal/analytics"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View analytics <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section> */}

      {/* Activity and Quick Actions */}
      <section className="mt-6  grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Recent Enrollments */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-card-foreground">
                Recent Enrollees
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Latest members enrolled through NHIM
              </p>
            </div>
            <Link
              href="/hmo-portal/enrollees"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-border">
            {hmoData.recentEnrollees.map((enrollee) => (
              <div
                key={enrollee.policyId}
                className="flex items-center justify-between gap-3 py-3.5 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="rounded-xl bg-muted p-2.5 text-muted-foreground">
                    <Users className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-card-foreground">
                      {enrollee.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="h-3 w-3" />
                      {enrollee.plan} · {enrollee.date}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-mono text-xs font-semibold text-card-foreground">
                    {enrollee.policyId}
                  </p>
                  <span className="mt-0.5 inline-block rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {enrollee.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-card-foreground">Quick Actions</h2>
          <div className="mt-5 grid gap-2">
            <Link
              href="/hmo-portal/plans"
              className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                Manage Insurance Plans
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/hmo-portal/enrollees"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                View Enrollee Directory
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/hmo-portal/hospitals"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                Partner Hospital Network
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/hmo-portal/analytics"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                Performance Analytics
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

