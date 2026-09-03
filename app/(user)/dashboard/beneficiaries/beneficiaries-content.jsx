"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Trash2,
  Users,
} from "lucide-react";
import { getMemberDashboard } from "@/lib/api/member";

export default function BeneficiariesContent() {
  const [member, setMember] = useState(null);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({
    name: "",
    relationship: "Spouse",
    dateOfBirth: "",
  });

  useEffect(() => {
    getMemberDashboard().then((data) => {
      setMember(data);
      setBeneficiaries(data.beneficiaries);
    });
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your beneficiaries...
      </div>
    );

  const removeBeneficiary = (id) =>
    setBeneficiaries((current) =>
      current.filter((beneficiary) => beneficiary.id !== id),
    );

  const addBeneficiary = (event) => {
    event.preventDefault();
    if (!newBeneficiary.name.trim()) return;
    const initials = newBeneficiary.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    setBeneficiaries((current) => [
      ...current,
      {
        ...newBeneficiary,
        id: `ben-${Date.now()}`,
        status: "Pending",
        initials,
      },
    ]);
    setNewBeneficiary({ name: "", relationship: "Spouse", dateOfBirth: "" });
    setIsAdding(false);
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-primary">Household cover</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beneficiaries
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage the people covered under your health plan.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAdding((open) => !open)}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          Add beneficiary
        </button>
      </header>
      {isAdding && (
        <form
          onSubmit={addBeneficiary}
          className="mt-6 rounded-2xl border border-primary/20 bg-accent/40 p-5"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm font-semibold text-foreground">
              Full name
              <input
                required
                value={newBeneficiary.name}
                onChange={(event) =>
                  setNewBeneficiary({
                    ...newBeneficiary,
                    name: event.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                placeholder="e.g. Tobi Okafor"
              />
            </label>
            <label className="text-sm font-semibold text-foreground">
              Relationship
              <select
                value={newBeneficiary.relationship}
                onChange={(event) =>
                  setNewBeneficiary({
                    ...newBeneficiary,
                    relationship: event.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
              >
                <option>Spouse</option>
                <option>Child</option>
                <option>Parent</option>
                <option>Sibling</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-foreground">
              Date of birth
              <input
                type="text"
                value={newBeneficiary.dateOfBirth}
                onChange={(event) =>
                  setNewBeneficiary({
                    ...newBeneficiary,
                    dateOfBirth: event.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                placeholder="e.g. 10 Jan 1990"
              />
            </label>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-background"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Add person
            </button>
          </div>
        </form>
      )}
      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-5">
          <Users className="h-5 w-5 text-primary" />
          <p className="mt-4 text-2xl font-bold text-foreground">
            {beneficiaries.length + 1}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Covered people</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <ShieldCheck className="h-5 w-5 text-[#16805a]" />
          <p className="mt-4 text-2xl font-bold text-foreground">Active</p>
          <p className="mt-1 text-sm text-muted-foreground">Household status</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <CalendarDays className="h-5 w-5 text-[#a66a00]" />
          <p className="mt-4 text-2xl font-bold text-foreground">
            {member.renewsOn}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Coverage renewal</p>
        </div>
      </section>
      <section className="mt-6 rounded-3xl border border-border bg-background p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div>
            <h2 className="font-bold text-foreground">People on your plan</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {beneficiaries.length} beneficiaries plus the primary member
            </p>
          </div>
          <span className="rounded-full bg-[#e1f7ed] px-3 py-1 text-xs font-semibold text-[#16805a]">
            {beneficiaries.length + 1} active
          </span>
        </div>
        <div className="divide-y divide-border">
          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
                AO
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {member.firstName} {member.lastName}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Primary member · {member.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#16805a]">
              <CheckCircle2 className="h-4 w-4" />
              Active
            </div>
          </div>
          {beneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.id}
              className="flex flex-wrap items-center justify-between gap-4 py-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2d9] text-sm font-bold text-[#a66a00]">
                  {beneficiary.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {beneficiary.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {beneficiary.relationship} · Born {beneficiary.dateOfBirth}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-xs font-medium text-[#16805a]">
                  <CheckCircle2 className="h-4 w-4" />
                  {beneficiary.status}
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${beneficiary.name}`}
                  onClick={() => removeBeneficiary(beneficiary.id)}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#cfe5dd] bg-[#f2fbf7] p-4 text-sm text-[#286750]">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Changes to beneficiaries are reviewed by our team before coverage
          becomes active. Need to update your personal details?{" "}
          <Link href="/dashboard/settings" className="font-semibold underline">
            Visit settings
          </Link>
          .
        </p>
      </div>
      <Link
        href="/dashboard/plan"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to my plan 
      </Link>
    </div>
  );
}