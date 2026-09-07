"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MoreVertical,
  Plus,
  Search,
  Shield,
  Trash2,
  UserCheck,
  UserCog,
  Users,
} from "lucide-react";

export function StaffClient({ initialStaff }) {
  const [staffList, setStaffList] = useState(initialStaff);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Claims Officer");

  const roles = ["all", ...new Set(initialStaff.map((s) => s.role))];

  const filteredStaff = staffList.filter((member) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      member.name.toLowerCase().includes(query) ||
      member.email.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query);

    const matchesRole =
      selectedRole === "all" || member.role === selectedRole;
    const matchesStatus =
      selectedStatus === "all" || member.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleInviteStaff = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) return;

    const newMember = {
      id: `staff-${Date.now()}`,
      name: newName.trim(),
      email: newEmail.trim(),
      role: newRole,
      department: newRole === "Claims Officer" ? "Claims & Billing" : "Operations",
      lastActive: "Invited today",
      status: "Invited",
    };

    setStaffList([newMember, ...staffList]);
    setNewName("");
    setNewEmail("");
    setIsInviteOpen(false);
  };

  return (
    <div>
      {/* Controls: Search and Filters & Action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search staff by name, email, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* Role and Status Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Roles</option>
            {roles.filter((r) => r !== "all").map((role) => (
              <option key={role} value={role}>
                {role}
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
            <option value="invited">Invited</option>
          </select>

          <button
            type="button"
            onClick={() => setIsInviteOpen(!isInviteOpen)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Invite Member</span>
          </button>
        </div>
      </div>

      {/* Invite Modal / Drawer */}
      {isInviteOpen && (
        <form
          onSubmit={handleInviteStaff}
          className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <h3 className="text-sm font-bold text-slate-900">
            Invite New Staff Member
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Grant portal access to team members for claims, enrollee oversight, or plan management.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <input
              type="text"
              required
              placeholder="Full name (e.g. Samuel Adeyemi)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Work email (e.g. samuel@reliancehmo.ng)"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:border-slate-400 focus:outline-none"
            >
              <option value="Claims Officer">Claims Officer</option>
              <option value="Underwriter">Underwriter</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsInviteOpen(false)}
              className="rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
            >
              Send Invitation
            </button>
          </div>
        </form>
      )}

      {/* Staff Table */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500">
                <th className="py-3.5 px-5 font-semibold">Staff Member</th>
                <th className="py-3.5 px-4 font-semibold">Role</th>
                <th className="py-3.5 px-4 font-semibold">Department</th>
                <th className="py-3.5 px-4 font-semibold">Last Active</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStaff.map((member) => (
                <tr
                  key={member.id}
                  className="transition hover:bg-slate-50/60"
                >
                  {/* Name & Email */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">
                          {member.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-4 px-4">
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                      {member.role}
                    </span>
                  </td>

                  {/* Department */}
                  <td className="py-4 px-4 text-slate-600">
                    {member.department}
                  </td>

                  {/* Last Active */}
                  <td className="py-4 px-4 text-slate-500">
                    {member.lastActive}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        member.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          member.status === "Active"
                            ? "bg-emerald-500"
                            : "bg-blue-500"
                        }`}
                      />
                      {member.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-5 text-right">
                    <button
                      type="button"
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:underline"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStaff.length === 0 && (
          <div className="p-12 text-center">
            <Users className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-3 text-sm font-semibold text-slate-900">
              No staff members found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search query or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
