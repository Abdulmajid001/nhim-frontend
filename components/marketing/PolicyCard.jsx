import { ShieldCheck } from "lucide-react";

export function PolicyCard() {
  return (
    <div className="relative w-full max-w-xs rounded-2xl border border-border bg-card p-6 shadow-lg">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Digital ID
          </p>
          <p className="text-lg font-semibold text-card-foreground">NHIM Cover</p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <ShieldCheck className="h-5 w-5" strokeWidth={2.25} />
        </span>
      </div>

      {/* Card details */}
      <dl className="mt-4 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Policy No.</dt>
          <dd className="font-medium text-card-foreground">NHM-2026-08X41</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Plan</dt>
          <dd className="font-medium text-card-foreground">Standard · CarePlus HMO</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Status</dt>
          <dd className="inline-flex items-center gap-1.5 font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Active
          </dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Renews</dt>
          <dd className="font-medium text-card-foreground">Jul 2027</dd>
        </div>
      </dl>

      {/* Bottom accent strip */}
      <div className="mt-6 flex items-center justify-between rounded-xl bg-muted px-4 py-3">
        <span className="text-xs text-muted-foreground">Beneficiaries</span>
        <span className="text-xs font-semibold text-foreground">3 covered</span>
      </div>
    </div>
  );
}