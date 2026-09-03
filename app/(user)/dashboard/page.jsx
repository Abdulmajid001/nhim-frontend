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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <span className={`rounded-xl p-2.5 ${tone}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
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
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-primary">{formattedDate}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Good morning, {member.firstName}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Here is the latest on your health cover.
          </p>
        </div>

        {/* <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
            {member.firstName.slice(0, 1)}
            {member.lastName.slice(0, 1)}
          </span>
          <div className="pr-2">
            <p className="text-sm font-semibold text-slate-900">
              {member.firstName} {member.lastName}
            </p>
            <p className="text-xs text-slate-500">Member since 2025</p>
          </div>
        </div> */}
      </header>

      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <StatCard
          label="Plan status"
          value="Active"
          detail={`Renews ${member.renewsOn}`}
          icon={CheckCircle2}
          tone="bg-emerald-100 text-emerald-700"
        />
        <StatCard
          label="Claims this year"
          value={`${member.claimsUsed} of ${member.claimsTotal}`}
          detail="Claims allowance used"
          icon={FileText}
          tone="bg-blue-100 text-blue-700"
        />
        <StatCard
          label="Covered people"
          value={member.dependants + 1}
          detail="You and your beneficiaries"
          icon={Users}
          tone="bg-amber-100 text-amber-700"
        />
        <StatCard
          label="Outstanding balance"
          value={formatPrice(member.balance)}
          detail="Your account is up to date"
          icon={CalendarDays}
          tone="bg-violet-100 text-violet-700"
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-hidden rounded-3xl bg-[#123b52] p-6 text-white sm:p-8">
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

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Claims allowance</h2>
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <p className="mt-7 text-4xl font-bold tracking-tight text-slate-900">
            {member.claimsUsed}
            <span className="text-lg font-medium text-slate-500">
              {" "}
              / {member.claimsTotal}
            </span>
          </p>
          <div className="mt-5 h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: `${claimProgress}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
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
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">Recent claims</h2>
              <p className="mt-1 text-sm text-slate-500">
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

          <div className="mt-6 divide-y divide-slate-200">
            {member.recentClaims.map((claim) => (
              <div
                key={`${claim.type}-${claim.date}`}
                className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="rounded-xl bg-slate-100 p-2.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {claim.type}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock3 className="h-3 w-3" />
                      {claim.date}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {formatPrice(claim.amount)}
                  </p>
                  <p
                    className={`mt-1 text-xs font-medium ${claim.status === "Approved" ? "text-emerald-600" : "text-amber-600"}`}
                  >
                    {claim.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-slate-900">Quick actions</h2>
          <div className="mt-5 grid gap-2">
            <Link
              href="/dashboard/id-card"
              className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-primary/10 hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <IdCard className="h-4 w-4" />
                Open ID card
              </span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard/beneficiaries"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              <span className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                Manage beneficiaries
              </span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
            <Link
              href="/dashboard/claims"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                Submit a claim
              </span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


