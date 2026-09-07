"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  X,
  XCircle,
} from "lucide-react";

export function HmoVerifyClient({ hmo }) {
  const [currentStatus, setCurrentStatus] = useState(hmo.status || "Pending Audit");
  const [tier, setTier] = useState(hmo.accreditationTier || "Tier 1 National");
  const [complianceNotes, setComplianceNotes] = useState(hmo.initialNotes || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const [checks, setChecks] = useState({
    cac: true,
    nhia: true,
    firs: true,
    indemnity: false,
  });

  const toggleCheck = (key) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDecision = (decision) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (decision === "Approved") {
        setCurrentStatus("Verified & Active");
        setNotification({
          type: "success",
          message: `${hmo.name} has been approved as an accredited provider.`,
        });
      } else if (decision === "RequestInfo") {
        setCurrentStatus("Additional Info Requested");
        setNotification({
          type: "warning",
          message: `Documentation request sent to ${hmo.officialEmail}.`,
        });
      } else if (decision === "Rejected") {
        setCurrentStatus("Application Rejected");
        setNotification({
          type: "error",
          message: `Application for ${hmo.name} was rejected.`,
        });
      }
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/hmos"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {hmo.name}
            </h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              CAC: {hmo.cacNumber} · License: {hmo.nhiaLicense}
            </p>
          </div>
        </div>

        <div>
          {currentStatus === "Verified & Active" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Verified & Active
            </span>
          ) : currentStatus === "Application Rejected" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
              <XCircle className="h-4 w-4" />
              Application Rejected
            </span>
          ) : currentStatus === "Additional Info Requested" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <AlertCircle className="h-4 w-4" />
              Docs Requested
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <Clock3 className="h-4 w-4" />
              Pending Audit
            </span>
          )}
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`flex items-center justify-between rounded-2xl p-4 text-sm font-medium ${
            notification.type === "success"
              ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:text-emerald-300"
              : notification.type === "warning"
              ? "bg-amber-500/10 text-amber-700 border border-amber-500/20 dark:text-amber-300"
              : "bg-rose-500/10 text-rose-700 border border-rose-500/20 dark:text-rose-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "success" && <CheckCircle2 className="h-4 w-4 shrink-0" />}
            {notification.type === "warning" && <AlertCircle className="h-4 w-4 shrink-0" />}
            {notification.type === "error" && <XCircle className="h-4 w-4 shrink-0" />}
            <span>{notification.message}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="rounded p-1 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* 2-Column Content */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          {/* Provider Overview */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-bold text-card-foreground text-base">
              Provider Information
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong className="text-foreground">Headquarters:</strong>{" "}
                  {hmo.registeredAddress}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong className="text-foreground">Email:</strong>{" "}
                  {hmo.officialEmail}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  {hmo.officialPhone}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong className="text-foreground">Bank:</strong>{" "}
                  {hmo.bankName}
                </span>
              </div>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-bold text-card-foreground text-base">
              Accreditation Documents
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Review and verify submitted regulatory certificates
            </p>

            <div className="mt-4 divide-y divide-border">
              {/* CAC Certificate */}
              <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-primary/10 p-2 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-xs text-card-foreground">
                      CAC Certificate of Incorporation
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      RC #{hmo.cacNumber}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleCheck("cac")}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    checks.cac
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{checks.cac ? "Verified" : "Verify"}</span>
                </button>
              </div>

              {/* NHIA License */}
              <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-primary/10 p-2 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-xs text-card-foreground">
                      NHIA Operating License
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      License #{hmo.nhiaLicense}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleCheck("nhia")}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    checks.nhia
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{checks.nhia ? "Verified" : "Verify"}</span>
                </button>
              </div>

              {/* Tax Clearance */}
              <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-primary/10 p-2 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-xs text-card-foreground">
                      FIRS Tax Clearance Certificate
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      TIN #{hmo.tinNumber || "20938102-0001"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleCheck("firs")}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    checks.firs
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{checks.firs ? "Verified" : "Verify"}</span>
                </button>
              </div>

              {/* Indemnity Insurance */}
              <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-primary/10 p-2 text-primary">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-xs text-card-foreground">
                      Professional Medical Indemnity Cover
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      ₦500M Sum Insured
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleCheck("indemnity")}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    checks.indemnity
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{checks.indemnity ? "Verified" : "Verify"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Action Panel */}
        <div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-5">
            <h2 className="font-bold text-card-foreground text-base">
              Audit Decision
            </h2>

            {/* Accreditation Tier Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                Accreditation Tier
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Tier 1 National">Tier 1 National (36 States + FCT)</option>
                <option value="Tier 2 Zonal">Tier 2 Regional / Zonal</option>
                <option value="Tier 3 State">Tier 3 State-Level</option>
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                Audit Notes
              </label>
              <textarea
                rows={3}
                value={complianceNotes}
                onChange={(e) => setComplianceNotes(e.target.value)}
                placeholder="Remarks or feedback notes..."
                className="w-full rounded-xl border border-border bg-background p-2.5 text-xs text-foreground shadow-sm outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-border">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleDecision("Approved")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Approve & Verify HMO</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleDecision("RequestInfo")}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition hover:bg-muted disabled:opacity-50"
              >
                <span>Request Documents</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleDecision("Rejected")}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-500/10 transition disabled:opacity-50"
              >
                <span>Reject Application</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
