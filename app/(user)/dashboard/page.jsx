import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  IdCard,
  Users,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

function StatCard({ label, value, detail, icon: Icon, tone }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-muted-foreground">{label}</p>
        <span className={`inline-flex rounded-xl p-2.5 ${tone}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-5 text-2xl font-bold tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}

const member = {
  firstName: "Grace",
  lastName: "Okafor",
  policyNumber: "NHIM-2025-4872",
  renewsOn: "24 Sep 2026",
  claimsUsed: 3,
  claimsTotal: 8,
  dependants: 2,
  balance: 0,
  plan: {
    name: "Gold Care Plus",
    hmoName: "Reliance HMO",
    priceAnnual: 640000,
  },
  recentClaims: [
    {
      type: "General Consultation",
      date: "12 Aug 2026",
      amount: 22500,
      status: "Approved",
    },
    {
      type: "Laboratory Test",
      date: "08 Aug 2026",
      amount: 38000,
      status: "Approved",
    },
    { type: "Pharmacy", date: "31 Jul 2026", amount: 14600, status: "Pending" },
  ],
};

export default function DashboardOverviewPage() {
  const plan = member;
  const claimProgress = (member.claimsUsed / member.claimsTotal) * 100;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col justify-between gap-5 rounded-[28px] border border-border bg-linear-to-r from-primary/8 via-card to-accent/60 p-6 shadow-sm sm:flex-row sm:items-end dark:from-primary/12 dark:via-card dark:to-accent/20">
        <div>
          <p className="text-sm font-medium text-primary">{formattedDate}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Good morning, {member.firstName}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Here is the latest on your health cover.
          </p>
        </div>
      </header>

      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <StatCard
          label="Plan status"
          value="Active"
          detail={`Renews ${member.renewsOn}`}
          icon={CheckCircle2}
          tone="bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
        />
        <StatCard
          label="Claims this year"
          value={`${member.claimsUsed} of ${member.claimsTotal}`}
          detail="Claims allowance used"
          icon={FileText}
          tone="bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary"
        />
        <StatCard
          label="Covered people"
          value={member.dependants + 1}
          detail="You and your beneficiaries"
          icon={Users}
          tone="bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
        />
        <StatCard
          label="Outstanding balance"
          value={formatPrice(member.balance)}
          detail="Your account is up to date"
          icon={CalendarDays}
          tone="bg-violet-500/10 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-hidden rounded-3xl bg-linear-to-r from-[#103958] via-[#163d57] to-[#0e2d44] p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <p className="text-sm font-medium text-[#9fd9c3]">
                Your active plan
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {plan.name}
              </h2>
              <p className="mt-1 text-sm text-[#c4d7df]">
                {plan.hmoName} · {member.policyNumber}
              </p>
            </div>

            <Link
              href="/dashboard/plan"
              className="inline-flex h-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#123b52] transition-transform hover:-translate-y-0.5"
            >
              View plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-[#9fbac5]">Policy number</p>
              <p className="mt-1 text-sm font-semibold">
                {member.policyNumber}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9fbac5]">Annual premium</p>
              <p className="mt-1 text-sm font-semibold">
                {formatPrice(plan.priceAnnual)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#9fbac5]">Next renewal</p>
              <p className="mt-1 text-sm font-semibold">{member.renewsOn}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-foreground">Claims allowance</h2>
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <p className="mt-7 text-4xl font-bold tracking-tight text-foreground">
            {member.claimsUsed}
            <span className="text-lg font-medium text-muted-foreground">
              {" "}
              / {member.claimsTotal}
            </span>
          </p>
          <div className="mt-5 h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: `${claimProgress}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {member.claimsTotal - member.claimsUsed} claims remaining this
            policy year.
          </p>
          <Link
            href="/dashboard/claims"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See all claims <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-foreground">Recent claims</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A quick look at your latest activity
              </p>
            </div>
            <Link
              href="/dashboard/claims"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-border">
            {member.recentClaims.map((claim) => (
              <div
                key={`${claim.type}-${claim.date}`}
                className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="rounded-xl bg-muted p-2.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {claim.type}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="h-3 w-3" />
                      {claim.date}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    {formatPrice(claim.amount)}
                  </p>
                  <p
                    className={`mt-1 text-xs font-medium ${claim.status === "Approved" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}
                  >
                    {claim.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-foreground">Quick actions</h2>
          <div className="mt-5 grid gap-2">
            <Link
              href="/dashboard/id-card"
              className="flex items-center justify-between rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-primary/10 hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <IdCard className="h-4 w-4" />
                Open ID card
              </span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard/beneficiaries"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <span className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                Manage beneficiaries
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/dashboard/claims"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                Submit a claim
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


