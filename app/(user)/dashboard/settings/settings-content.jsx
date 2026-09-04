"use client";

import { useEffect, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  KeyRound,
  LockKeyhole,
  Mail,
  Save,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { getMemberDashboard } from "@/lib/api/member";
import Link from "next/link";

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/20";

function Preference({ title, description, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-border bg-background p-4 transition hover:bg-muted/40">
      <span>
        <span className="block text-sm font-semibold text-foreground">
          {title}
        </span>
        <span className="mt-1 block text-xs leading-5 text-muted-foreground">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? "bg-primary" : "bg-muted"}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-primary-foreground shadow-sm transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
        />
      </span>
    </label>
  );
}

export default function SettingsContent() {
  const [member, setMember] = useState(null);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [preferences, setPreferences] = useState({
    email: true,
    claims: true,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  useEffect(() => {
    getMemberDashboard().then((data) => {
      setMember(data);
      setProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    });
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your settings...
      </div>
    );

  const updateProfile = (field, value) =>
    setProfile((current) => ({ ...current, [field]: value }));
  const saveProfile = (event) => {
    event.preventDefault();
    setSaved(true);
  };
  const savePassword = (event) => {
    event.preventDefault();
    setPasswordSaved(true);
    event.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header>
        <p className="text-sm font-medium text-primary">Account preferences</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Settings
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Keep your profile and notifications up to date.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="h-fit rounded-3xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
          <div className="flex items-center gap-3 border-b border-border pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-bold text-primary">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-foreground">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {profile.email}
              </p>
            </div>
          </div>
          <nav className="mt-4 space-y-1">
            <Link
              href="#profile"
              className="flex items-center justify-between rounded-xl bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground transition"
            >
              <span className="flex items-center gap-3">
                <UserRound className="h-4 w-4" />
                Profile
              </span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="#notifications"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Notifications
            </Link>
            <Link
              href="#security"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <LockKeyhole className="h-4 w-4" />
              Security
            </Link>
          </nav>
          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 dark:bg-emerald-500/15">
            <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
            <p className="mt-3 text-sm font-semibold text-emerald-800 dark:text-emerald-200">
              Your account is protected
            </p>
            <p className="mt-1 text-xs leading-5 text-emerald-700 dark:text-emerald-300">
              Your profile is verified and linked to policy{" "}
              {member.policyNumber}.
            </p>
          </div>
        </aside>

        <div className="space-y-6">
          <form
            id="profile"
            onSubmit={saveProfile}
            className="scroll-mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border pb-5">
              <div>
                <h2 className="font-bold text-foreground">
                  Personal information
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  These details are used for your membership records.
                </p>
              </div>
              <UserRound className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-foreground">
                First name
                <input
                  required
                  value={profile.firstName}
                  onChange={(event) =>
                    updateProfile("firstName", event.target.value)
                  }
                  className={inputClass}
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Last name
                <input
                  required
                  value={profile.lastName}
                  onChange={(event) =>
                    updateProfile("lastName", event.target.value)
                  }
                  className={inputClass}
                />
              </label>
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Email address
                <input
                  required
                  type="email"
                  value={profile.email}
                  onChange={(event) =>
                    updateProfile("email", event.target.value)
                  }
                  className={inputClass}
                />
              </label>
            </div>
            {saved && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Profile details saved for this session.
              </p>
            )}
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              <Save className="h-4 w-4" />
              Save changes
            </button>
          </form>

          <section
            id="notifications"
            className="scroll-mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border pb-5">
              <div>
                <h2 className="font-bold text-foreground">Notifications</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Choose how NHIM keeps you informed.
                </p>
              </div>
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-5 space-y-3">
              <Preference
                title="Email updates"
                description="Receive important account and membership updates."
                checked={preferences.email}
                onChange={() =>
                  setPreferences({ ...preferences, email: !preferences.email })
                }
              />
              <Preference
                title="Claims activity"
                description="Get notified when a claim is received, updated, or approved."
                checked={preferences.claims}
                onChange={() =>
                  setPreferences({
                    ...preferences,
                    claims: !preferences.claims,
                  })
                }
              />
              <Preference
                title="Health tips and offers"
                description="Occasional helpful health information from NHIM partners."
                checked={preferences.marketing}
                onChange={() =>
                  setPreferences({
                    ...preferences,
                    marketing: !preferences.marketing,
                  })
                }
              />
            </div>
          </section>

          <form
            id="security"
            onSubmit={savePassword}
            className="scroll-mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border pb-5">
              <div>
                <h2 className="font-bold text-foreground">Security</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Update your password to keep your account secure.
                </p>
              </div>
              <KeyRound className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Current password
                <input required type="password" className={inputClass} />
              </label>
              <label className="text-sm font-semibold text-foreground">
                New password
                <input
                  required
                  minLength="8"
                  type="password"
                  className={inputClass}
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Confirm new password
                <input
                  required
                  minLength="8"
                  type="password"
                  className={inputClass}
                />
              </label>
            </div>
            {passwordSaved && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <Check className="h-4 w-4" />
                Password update requested.
              </p>
            )}
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <KeyRound className="h-4 w-4" />
              Update password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}