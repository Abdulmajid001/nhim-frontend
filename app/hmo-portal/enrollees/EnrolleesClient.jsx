"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  MoreVertical,
  Search,
  Shield,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

export function EnrolleesClient({ initialEnrollees }) {
  const [enrollees] = useState(initialEnrollees);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const plans = ["all", ...new Set(initialEnrollees.map((e) => e.planName))];

  const filteredEnrollees = enrollees.filter((enrollee) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      enrollee.name.toLowerCase().includes(query) ||
      enrollee.policyNumber.toLowerCase().includes(query) ||
      enrollee.email.toLowerCase().includes(query);

    const matchesPlan =
      selectedPlan === "all" || enrollee.planName === selectedPlan;
    const matchesStatus =
      selectedStatus === "all" || enrollee.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesPlan && matchesStatus;
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
            placeholder="Search by name, policy #, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* Plan and Status Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Plans</option>
            {plans.filter((p) => p !== "all").map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      {/* Enrollees Table */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500">
                <th className="py-3.5 px-5 font-semibold">Enrollee Name</th>
                <th className="py-3.5 px-4 font-semibold">Policy Number</th>
                <th className="py-3.5 px-4 font-semibold">Plan Tier</th>
                <th className="py-3.5 px-4 font-semibold">Beneficiaries</th>
                <th className="py-3.5 px-4 font-semibold">Renewal Date</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredEnrollees.map((enrollee) => (
                <tr
                  key={enrollee.id}
                  className="transition hover:bg-slate-50/60"
                >
                  {/* Name & Email */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                        {enrollee.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">
                          {enrollee.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {enrollee.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Policy Number */}
                  <td className="py-4 px-4 font-mono text-[11px] font-semibold text-slate-800">
                    {enrollee.policyNumber}
                  </td>

                  {/* Plan */}
                  <td className="py-4 px-4">
                    <span className="font-medium text-slate-900">
                      {enrollee.planName}
                    </span>
                  </td>

                  {/* Beneficiaries Count */}
                  <td className="py-4 px-4 font-medium text-slate-600">
                    {enrollee.beneficiariesCount > 0 ? (
                      <span>+{enrollee.beneficiariesCount} covered</span>
                    ) : (
                      <span className="text-slate-400">Primary only</span>
                    )}
                  </td>

                  {/* Renewal Date */}
                  <td className="py-4 px-4 text-slate-500">
                    {enrollee.renewalDate}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        enrollee.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : enrollee.status === "Pending"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          enrollee.status === "Active"
                            ? "bg-emerald-500"
                            : enrollee.status === "Pending"
                            ? "bg-amber-500"
                            : "bg-slate-400"
                        }`}
                      />
                      {enrollee.status}
                    </span>
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-5 text-right">
                    <Link
                      href={`/hmo-portal/enrollees/${enrollee.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:underline"
                    >
                      <span>View</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEnrollees.length === 0 && (
          <div className="p-12 text-center">
            <Users className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-3 text-sm font-semibold text-slate-900">
              No enrollees found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search terms or filter selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
