"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  CreditCard,
  Download,
  Receipt,
  Search,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function TransactionsClient({ initialTransactions }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = useMemo(() => {
    return initialTransactions.filter((txn) => {
      // Tab filter
      if (activeTab === "paid" && txn.status !== "Paid" && txn.status !== "Verified") {
        return false;
      }
      if (activeTab === "pending" && (txn.status === "Paid" || txn.status === "Verified")) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchRef = txn.ref.toLowerCase().includes(q);
        const matchBuyer = txn.buyer.toLowerCase().includes(q);
        const matchPlan = txn.plan.toLowerCase().includes(q);
        const matchHmo = txn.hmo.toLowerCase().includes(q);
        return matchRef || matchBuyer || matchPlan || matchHmo;
      }

      return true;
    });
  }, [initialTransactions, activeTab, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All ({initialTransactions.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("paid")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "paid"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Paid & Verified
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "pending"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Pending / Refunded
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reference, subscriber, plan..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Clean Transactions Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">Reference</th>
                <th className="py-3.5 font-semibold">Subscriber</th>
                <th className="py-3.5 font-semibold">Plan & HMO</th>
                <th className="py-3.5 font-semibold text-right">Amount</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground">
                    No transactions match your search.
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((txn) => (
                  <tr
                    key={txn.ref}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6">
                      <p className="font-mono text-xs font-semibold text-card-foreground">
                        {txn.ref}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {txn.time}
                      </p>
                    </td>

                    <td className="py-4 font-semibold text-card-foreground">
                      {txn.buyer}
                    </td>

                    <td className="py-4">
                      <p className="font-semibold text-foreground">
                        {txn.plan}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {txn.hmo}
                      </p>
                    </td>

                    <td className="py-4 text-right font-bold text-card-foreground">
                      {formatPrice(txn.amount)}
                    </td>

                    <td className="py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        {txn.status}
                      </span>
                    </td>

                    <td className="py-4 pr-6 text-right">
                      <button
                        type="button"
                        className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
