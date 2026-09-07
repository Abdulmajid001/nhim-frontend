import { TransactionsClient } from "@/components/admin/TransactionsClient";

const MOCK_TRANSACTIONS = [
  {
    ref: "PSTK-9482-TXN",
    buyer: "Dr. Olanrewaju Adebayo",
    plan: "Gold Executive Plus",
    hmo: "Hygeia HMO",
    amount: 68500,
    status: "Paid",
    time: "12 mins ago",
  },
  {
    ref: "PSTK-9481-TXN",
    buyer: "Amina Bello & Family",
    plan: "Silver Family Shield",
    hmo: "Reliance HMO",
    amount: 142000,
    status: "Paid",
    time: "34 mins ago",
  },
  {
    ref: "PSTK-9480-TXN",
    buyer: "Kester Chidubem",
    plan: "Individual Basic Care",
    hmo: "Leadway Health",
    amount: 28000,
    status: "Paid",
    time: "1 hour ago",
  },
  {
    ref: "PSTK-9479-TXN",
    buyer: "Tunde Bakare Enterprises",
    plan: "SME Corporate Health",
    hmo: "AXA Mansard",
    amount: 480000,
    status: "Verified",
    time: "2 hours ago",
  },
  {
    ref: "PSTK-9478-TXN",
    buyer: "Grace Okafor",
    plan: "Gold Care Plus",
    hmo: "Reliance HMO",
    amount: 64000,
    status: "Paid",
    time: "4 hours ago",
  },
  {
    ref: "PSTK-9477-TXN",
    buyer: "Babajide Adeleke",
    plan: "Silver Family Shield",
    hmo: "Reliance HMO",
    amount: 138000,
    status: "Paid",
    time: "Yesterday",
  },
  {
    ref: "PSTK-9476-TXN",
    buyer: "Chioma Nwosu",
    plan: "Gold Executive Plus",
    hmo: "Hygeia HMO",
    amount: 72000,
    status: "Paid",
    time: "2 days ago",
  },
];

export const metadata = {
  title: "Transactions Ledger | Admin Portal",
  description: "Financial ledger of marketplace checkouts and payment reconciliations.",
};

export default function AdminTransactionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Transactions
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Financial ledger of marketplace checkouts, payment references, and provider settlements.
        </p>
      </header>

      {/* Transactions Client */}
      <TransactionsClient initialTransactions={MOCK_TRANSACTIONS} />
    </div>
  );
}
