import { SettingsClient } from "./SettingsClient";

export default async function HmoSettingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <p className="text-sm font-medium text-slate-500">Account & Preferences</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your HMO profile, payout banking details, and alert preferences.
        </p>
      </header>

      {/* Settings Form */}
      <SettingsClient />
    </div>
  );
}
