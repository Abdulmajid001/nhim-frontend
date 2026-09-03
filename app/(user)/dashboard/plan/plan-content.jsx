"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Download,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { getMemberDashboard } from "@/lib/api/member";

export default function MyPlanContent() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    getMemberDashboard().then(setMember);
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your plan...
      </div>
    );

  const { plan } = member;
  const monthlyPrice = Math.round(plan.priceAnnual / 12);
  const hospitals = [
    "Lagoon Hospital",
    "Reddington Hospital",
    "Eko Hospital",
    "St. Nicholas Hospital",
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col justify-between gap-4 rounded-[28px] border border-border bg-linear-to-r from-primary/8 via-card to-accent/60 p-6 shadow-sm sm:flex-row sm:items-end dark:from-primary/12 dark:via-card dark:to-accent/20">
        <div>
          <p className="text-sm font-medium text-primary">Membership</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My plan
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Everything included in your {plan.name} cover.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted sm:self-auto"
        >
          <Download className="h-4 w-4" />
          Download details
        </button>
      </header>

      <section className="mt-8 overflow-hidden rounded-3xl bg-linear-to-r from-[#103958] via-[#163d57] to-[#0e2d44] text-white shadow-sm">
        <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#9fd9c3]">
              <ShieldCheck className="h-4 w-4" />
              Active coverage
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">
              {plan.name}
            </h2>
            <p className="mt-2 text-[#c4d7df]">{plan.hmoName}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-xs text-[#9fbac5]">Policy number</p>
                <p className="mt-1 font-semibold">{member.policyNumber}</p>
              </div>
              <div>
                <p className="text-xs text-[#9fbac5]">Renewal date</p>
                <p className="mt-1 font-semibold">{member.renewsOn}</p>
              </div>
            </div>
          </div>
          <div className="min-w-64 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
            <p className="text-sm text-[#c4d7df]">Your premium</p>
            <p className="mt-3 text-3xl font-bold">
              {formatPrice(monthlyPrice)}
              <span className="text-sm font-medium text-[#c4d7df]">
                {" "}
                / month
              </span>
            </p>
            <p className="mt-2 text-xs text-[#c4d7df]">
              {formatPrice(plan.priceAnnual)} billed annually
            </p>
            <Link
              href="/dashboard/id-card"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#123b52] transition hover:-translate-y-0.5"
            >
              View ID card <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-foreground">What is covered</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your plan benefits at a glance
              </p>
            </div>
            <HeartPulse className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {plan.coverage.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-accent/60 px-4 py-3 text-sm font-medium text-foreground dark:bg-accent/40"
              >
                <span className="rounded-full bg-emerald-500/10 p-1 text-emerald-700 dark:text-emerald-300">
                  <Check className="h-3 w-3" />
                </span>
                {item} care
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-foreground">Your household</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                People on this policy
              </p>
            </div>
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-6 flex items-center gap-3 border-b border-border pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
              AO
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {member.firstName} {member.lastName}
              </p>
              <p className="text-xs text-muted-foreground">Primary member</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 text-sm">
            <span className="text-muted-foreground">Beneficiaries</span>
            <span className="font-semibold text-foreground">
              {member.dependants} people
            </span>
          </div>
          <Link
            href="/dashboard/beneficiaries"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Manage household <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-bold text-foreground">Partner hospitals</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Access care at any of these nearby providers.
            </p>
          </div>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4" />
            {plan.locations.join(" · ")}
          </span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm"
            >
              <span className="rounded-lg bg-accent p-2 text-primary">
                <Building2 className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {hospital}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}