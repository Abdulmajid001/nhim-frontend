import Link from "next/link";
import {
  Building2,
  ChevronRight,
  Clock3,
  Receipt,
  ShieldCheck,
  Star,
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

const adminSummary = {
  accreditedHmos: 18,
  pendingHmoApprovals: 3,
  totalEnrollees: 84230,
  hospitalNetwork: 1420,
  monthlyVolume: 184520000,
  pendingHmos: [
    {
      id: "clearline-hmo",
      name: "Clearline International Care",
      cacNumber: "RC-8392011",
      nhiaLicense: "NHIA/HMO/2024/048",
      submittedDate: "Today, 10:45 AM",
      status: "Under Audit",
    },
    {
      id: "zenith-medicare",
      name: "Zenith Medicare Assurance",
      cacNumber: "RC-9920145",
      nhiaLicense: "NHIA/HMO/2024/051",
      submittedDate: "Yesterday",
      status: "Docs Verified",
    },
    {
      id: "heritage-health",
      name: "Heritage Health Management",
      cacNumber: "RC-4102948",
      nhiaLicense: "NHIA/HMO/2024/053",
      submittedDate: "2 days ago",
      status: "Pending Check",
    },
  ],
};

export default function AdminDashboardPage() {
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
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Operational overview of HMO providers, national enrollees, and marketplace activity.
          </p>
        </div>

        <Link
          href="/admin/hmos"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <ShieldCheck className="h-4 w-4" />
          <span>Verify HMOs ({adminSummary.pendingHmoApprovals})</span>
        </Link>
      </header>

      {/* Primary KPI Stats Grid */}
      <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          label="Accredited HMOs"
          value={`${adminSummary.accreditedHmos} Active`}
          detail={`${adminSummary.pendingHmoApprovals} pending verification`}
          icon={ShieldCheck}
          tone="bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
        />
        <StatCard
          label="Total Enrollees"
          value={adminSummary.totalEnrollees.toLocaleString()}
          detail="Covered lives nationwide"
          icon={Users}
          tone="bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
        />
        <StatCard
          label="Partner Hospitals"
          value={adminSummary.hospitalNetwork.toLocaleString()}
          detail="Accredited clinics & hospitals"
          icon={Building2}
          tone="bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"
        />
        <StatCard
          label="Marketplace Volume"
          value={formatPrice(adminSummary.monthlyVolume)}
          detail="Total premiums processed"
          icon={Receipt}
          tone="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
        />
      </section>

      {/* Main Sections: Pending HMOs & Quick Actions */}
      <section className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Pending HMO Audits */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-card-foreground text-lg">
                Pending HMO Audits
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Providers awaiting CAC & NHIA license verification
              </p>
            </div>
            <Link
              href="/admin/hmos"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-border">
            {adminSummary.pendingHmos.map((hmo) => (
              <div
                key={hmo.id}
                className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-card-foreground">
                      {hmo.name}
                    </p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                      <span>{hmo.cacNumber}</span>
                      <span>•</span>
                      <span>{hmo.nhiaLicense}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {hmo.submittedDate}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline-block rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                    {hmo.status}
                  </span>
                  <Link
                    href={`/admin/hmos/${hmo.id}/verify`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Audit <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-card-foreground text-lg">Quick Actions</h2>
          <div className="mt-5 grid gap-2">
            <Link
              href="/admin/hmos"
              className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                Manage HMO Providers
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/admin/hospitals"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                Hospital Master Registry
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                User Management
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/admin/transactions"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Receipt className="h-4 w-4 text-muted-foreground" />
                Financial Transactions
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/admin/reviews/moderation"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-card-foreground transition hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <Star className="h-4 w-4 text-muted-foreground" />
                Review Moderation Desk
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
