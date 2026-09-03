"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Receipt,
  Search,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function InvoicesClient({ initialInvoices }) {
  const [invoices] = useState(initialInvoices);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const types = ["all", ...new Set(initialInvoices.map((i) => i.type))];

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      invoice.id.toLowerCase().includes(query) ||
      invoice.party.toLowerCase().includes(query) ||
      invoice.description.toLowerCase().includes(query);

    const matchesType =
      selectedType === "all" || invoice.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" || invoice.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div>
      {/* Controls: Search and Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by invoice #, provider, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* Type and Status Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Invoice Types</option>
            {types.filter((t) => t !== "all").map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
          </select>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500">
                <th className="py-3.5 px-5 font-semibold">Invoice #</th>
                <th className="py-3.5 px-4 font-semibold">Party / Description</th>
                {/* <th className="py-3.5 px-4 font-semibold">Type</th> */}
                <th className="py-3.5 px-4 font-semibold">Date Issued</th>
                <th className="py-3.5 px-4 font-semibold text-right">Amount</th>
                <th className="py-3.5 px-4 font-semibold text-center">Status</th>
                <th className="py-3.5 px-5 font-semibold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="transition hover:bg-slate-50/60">
                  {/* Invoice ID */}
                  <td className="py-4 px-5 font-mono font-semibold text-slate-900">
                    <div className="items-center">
                      {/* <Receipt className="h-3.5 w-3.5 text-slate-400" /> */}
                      <span>{inv.id}</span>
                    </div>
                  </td>

                  {/* Party / Description */}
                  <td className="py-4 px-4">
                    <p className="font-semibold text-slate-900 truncate">
                      {inv.party}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">
                      {inv.description}
                    </p>
                  </td>

                  {/* Type Badge */}
                  {/* <td className="py-4 px-4">
                    <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                      {inv.type}
                    </span>
                  </td> */}

                  {/* Date */}
                  <td className="py-4 px-4 text-slate-500">
                    {inv.date}
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-4 text-right font-bold text-slate-900">
                    {formatPrice(inv.amount)}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        inv.status === "Paid"
                          ? "bg-emerald-50 text-emerald-700"
                          : inv.status === "Pending"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          inv.status === "Paid"
                            ? "bg-emerald-500"
                            : inv.status === "Pending"
                            ? "bg-amber-500"
                            : "bg-blue-500"
                        }`}
                      />
                      {inv.status}
                    </span>
                  </td>

                  {/* Download Action */}
                  <td className="py-4 px-5 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
                    >
                      <Download className="h-3 w-3 text-slate-400" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInvoices.length === 0 && (
          <div className="p-12 text-center">
            <Receipt className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-3 text-sm font-semibold text-slate-900">
              No invoices found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
