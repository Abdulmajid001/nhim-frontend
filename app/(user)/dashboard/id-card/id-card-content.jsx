"use client";

import { useEffect, useState } from "react";
import { getMemberDashboard } from "@/lib/api/member";
import {
  Download,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Wifi,
} from "lucide-react";

export default function IdCardContent() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    getMemberDashboard().then(setMember);
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your ID card...
      </div>
    );

  const printCard = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col justify-between gap-4 rounded-[28px] border border-border bg-linear-to-r from-primary/8 via-card to-accent/60 p-6 shadow-sm sm:flex-row sm:items-end dark:from-primary/12 dark:via-card dark:to-accent/20">
        <div>
          <p className="text-sm font-medium text-primary">Your membership</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Digital ID card
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Show this card when you visit a partner hospital.
          </p>
        </div>
        <button
          type="button"
          onClick={printCard}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted sm:self-auto"
        >
          <Download className="h-4 w-4" />
          Print or save card
        </button>
      </header>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.62fr]">
        <div className="id-card-printable relative overflow-hidden rounded-3xl bg-linear-to-r from-[#103958] via-[#163d57] to-[#0e2d44] p-6 text-white shadow-xl sm:p-8">
          <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full border-28 border-white/5" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#123b52]">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-bold tracking-tight">nhim</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9fd9c3]">
              <ShieldCheck className="h-4 w-4" />
              ACTIVE MEMBER
            </div>
          </div>
          <div className="relative mt-12 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs text-[#9fbac5]">MEMBER NAME</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                {member.firstName} {member.lastName}
              </h2>
              <p className="mt-1 text-sm text-[#c4d7df]">Primary member</p>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#d9f3ea] text-xl font-bold text-[#147d5a]">
              AO
            </div>
          </div>
          <div className="relative mt-10 grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9fbac5]">
                Policy number
              </p>
              <p className="mt-1 text-sm font-semibold">
                {member.policyNumber}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9fbac5]">
                Plan
              </p>
              <p className="mt-1 text-sm font-semibold">{member.plan.name}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9fbac5]">
                Valid through
              </p>
              <p className="mt-1 text-sm font-semibold">{member.renewsOn}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9fbac5]">
                Provider
              </p>
              <p className="mt-1 text-sm font-semibold">
                {member.plan.hmoName}
              </p>
            </div>
          </div>
          <div className="relative mt-8 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-[#c4d7df]">
            <span>Present at any partner facility</span>
            <Wifi className="h-5 w-5 rotate-90" />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-foreground">Need help?</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Our care team can help confirm your cover before you visit a
            facility.
          </p>
          <div className="mt-6 space-y-4 border-t border-border pt-5">
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Member support
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  +234 800 6446 000
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Care network
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.plan.locations.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        Your membership is active and your details are verified.
      </p>
    </div>
  );
}