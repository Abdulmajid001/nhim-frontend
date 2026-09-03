import { InvoicesClient } from "./InvoicesClient";

const MOCK_INVOICES = [
  {
    id: "INV-2026-0842",
    party: "Lagoon Hospital Ikoyi",
    description: "August 2026 Batch Medical Reimbursement",
    type: "Provider Reimbursement",
    date: "01 Sep 2026",
    amount: 14600000,
    status: "Paid",
  },
  {
    id: "INV-2026-0841",
    party: "Reddington Hospital",
    description: "Specialist Consultation & Surgery Claims",
    type: "Provider Reimbursement",
    date: "28 Aug 2026",
    amount: 9800000,
    status: "Paid",
  },
  {
    id: "INV-2026-0840",
    party: "Grace Okafor",
    description: "Gold Care Plus - Annual Renewal Subscription",
    type: "Subscriber Premium",
    date: "24 Aug 2026",
    amount: 640000,
    status: "Paid",
  },
  {
    id: "INV-2026-0839",
    party: "Cedarcrest Hospital",
    description: "Inpatient Care & Diagnostics Batch",
    type: "Provider Reimbursement",
    date: "20 Aug 2026",
    amount: 7250000,
    status: "Pending",
  },
  {
    id: "INV-2026-0838",
    party: "Babajide Adeleke",
    description: "Silver Family - Annual Plan Premium",
    type: "Subscriber Premium",
    date: "15 Aug 2026",
    amount: 380000,
    status: "Paid",
  },
  {
    id: "INV-2026-0837",
    party: "Lily Hospitals",
    description: "Maternity & Delivery Services Payout",
    type: "Provider Reimbursement",
    date: "11 Aug 2026",
    amount: 4120000,
    status: "Processing",
  },
  {
    id: "INV-2026-0836",
    party: "First Cardiology Consultants",
    description: "Cardiac Assessment & ICU Care Batch",
    type: "Provider Reimbursement",
    date: "05 Aug 2026",
    amount: 11400000,
    status: "Paid",
  },
  {
    id: "INV-2026-0835",
    party: "Emeka Danjuma",
    description: "Bronze Basic - Annual Plan Premium",
    type: "Subscriber Premium",
    date: "02 Aug 2026",
    amount: 180000,
    status: "Paid",
  },
];

export default async function HmoInvoicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-500">Financial & Billing</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Invoices & Claims
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track hospital provider reimbursement payouts and subscriber premium collections.
          </p>
        </div>
      </header>

      {/* Interactive Invoices Table */}
      <section className="mt-8">
        <InvoicesClient initialInvoices={MOCK_INVOICES} />
      </section>
    </div>
  );
}
