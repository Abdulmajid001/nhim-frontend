"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  Check,
  CreditCard,
  Lock,
  Mail,
  Phone,
  Save,
  ShieldCheck,
} from "lucide-react";

export function SettingsClient() {
  const [isSaved, setIsSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    newEnrollee: true,
    claimAlert: true,
    weeklyReport: false,
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Organization Profile */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              HMO Organization Profile
            </h2>
            <p className="text-xs text-slate-500">
              Official company information displayed on the NHIM marketplace.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Organization Legal Name
            </label>
            <input
              type="text"
              defaultValue="Reliance HMO Ltd"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              NHIA Accreditation License #
            </label>
            <input
              type="text"
              disabled
              defaultValue="NHIA/HMO/2024/034"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-sm text-slate-600 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Support Email Address
            </label>
            <input
              type="email"
              defaultValue="support@reliancehmo.ng"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Support Hotline Phone
            </label>
            <input
              type="tel"
              defaultValue="+234 (1) 888 4666"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-slate-700">
              Head Office Address
            </label>
            <input
              type="text"
              defaultValue="Plot 8, Victoria Island Waterfront, Lagos, Nigeria"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bank & Payout Settlement */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <CreditCard className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Settlement & Bank Details
            </h2>
            <p className="text-xs text-slate-500">
              Account where monthly premium subscriptions are disbursed.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Bank Name
            </label>
            <select
              defaultValue="Access Bank"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            >
              <option value="Access Bank">Access Bank</option>
              <option value="GTBank">Guaranty Trust Bank (GTBank)</option>
              <option value="Zenith Bank">Zenith Bank</option>
              <option value="First Bank">First Bank of Nigeria</option>
              <option value="UBA">United Bank for Africa (UBA)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Account Number
            </label>
            <input
              type="text"
              defaultValue="0142985721"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-slate-900 shadow-xs focus:border-slate-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Account Name
            </label>
            <input
              type="text"
              disabled
              defaultValue="Reliance Health Insurance Ltd"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <Bell className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Notification Preferences
            </h2>
            <p className="text-xs text-slate-500">
              Choose what notifications and email alerts you receive.
            </p>
          </div>
        </div>

        <div className="mt-6 divide-y divide-slate-100">
          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-xs font-semibold text-slate-900">
                New Member Registration Alert
              </p>
              <p className="text-[11px] text-slate-500">
                Get an instant email when a customer purchases one of your health plans.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setNotifications((prev) => ({
                  ...prev,
                  newEnrollee: !prev.newEnrollee,
                }))
              }
              className={`h-6 w-11 rounded-full p-0.5 transition ${
                notifications.newEnrollee ? "bg-slate-900" : "bg-slate-200"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition ${
                  notifications.newEnrollee ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-xs font-semibold text-slate-900">
                High-Value Hospital Claim Alert
              </p>
              <p className="text-[11px] text-slate-500">
                Notify authorized officers when a claim exceeding ₦500,000 is submitted.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setNotifications((prev) => ({
                  ...prev,
                  claimAlert: !prev.claimAlert,
                }))
              }
              className={`h-6 w-11 rounded-full p-0.5 transition ${
                notifications.claimAlert ? "bg-slate-900" : "bg-slate-200"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition ${
                  notifications.claimAlert ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Weekly Financial Payout Summary
              </p>
              <p className="text-[11px] text-slate-500">
                Receive weekly settlement statement summaries every Monday morning.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setNotifications((prev) => ({
                  ...prev,
                  weeklyReport: !prev.weeklyReport,
                }))
              }
              className={`h-6 w-11 rounded-full p-0.5 transition ${
                notifications.weeklyReport ? "bg-slate-900" : "bg-slate-200"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition ${
                  notifications.weeklyReport ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {isSaved && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <Check className="h-4 w-4" />
            Changes saved successfully
          </span>
        )}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
        >
          <Save className="h-4 w-4" />
          <span>Save Settings</span>
        </button>
      </div>
    </form>
  );
}
