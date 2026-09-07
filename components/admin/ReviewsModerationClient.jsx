"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Clock3,
  Search,
  Star,
  X,
  XCircle,
} from "lucide-react";

export function ReviewsModerationClient({ initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filteredReviews = useMemo(() => {
    return reviews.filter((rev) => {
      // Tab filter
      if (activeTab === "flagged" && rev.status !== "Flagged") return false;
      if (activeTab === "pending" && rev.status !== "Pending") return false;
      if (activeTab === "approved" && rev.status !== "Approved") return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchAuthor = rev.author.toLowerCase().includes(q);
        const matchHmo = rev.hmo.toLowerCase().includes(q);
        const matchHospital = rev.hospital.toLowerCase().includes(q);
        const matchContent = rev.comment.toLowerCase().includes(q);
        return matchAuthor || matchHmo || matchHospital || matchContent;
      }

      return true;
    });
  }, [reviews, activeTab, searchQuery]);

  const flaggedCount = reviews.filter((r) => r.status === "Flagged").length;
  const pendingCount = reviews.filter((r) => r.status === "Pending").length;

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
            All ({reviews.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("flagged")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "flagged"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Flagged ({flaggedCount})
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
            Pending ({pendingCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("approved")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "approved"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Approved
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search author, HMO, or feedback..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Clean Reviews List / Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">Author & Date</th>
                <th className="py-3.5 font-semibold">HMO & Hospital</th>
                <th className="py-3.5 font-semibold">Rating</th>
                <th className="py-3.5 font-semibold">Feedback Content</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredReviews.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-muted-foreground">
                    No reviews match your filters.
                  </td>
                </tr>
              ) : (
                filteredReviews.map((rev) => (
                  <tr
                    key={rev.id}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6">
                      <p className="font-bold text-sm text-card-foreground">
                        {rev.author}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {rev.date}
                      </p>
                    </td>

                    <td className="py-4">
                      <p className="font-semibold text-foreground">{rev.hmo}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {rev.hospital}
                      </p>
                    </td>

                    <td className="py-4">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span>{rev.rating}.0</span>
                      </div>
                    </td>

                    <td className="py-4 max-w-sm">
                      {rev.flagReason && (
                        <span className="mb-1 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                          {rev.flagReason}
                        </span>
                      )}
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        "{rev.comment}"
                      </p>
                    </td>

                    <td className="py-4 text-center">
                      {rev.status === "Approved" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />
                          Approved
                        </span>
                      ) : rev.status === "Flagged" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 text-[11px] font-semibold text-rose-700 dark:text-rose-400">
                          <AlertCircle className="h-3 w-3" />
                          Flagged
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                          <Clock3 className="h-3 w-3" />
                          Pending
                        </span>
                      )}
                    </td>

                    <td className="py-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {rev.status !== "Approved" && (
                          <button
                            type="button"
                            onClick={() => handleStatusChange(rev.id, "Approved")}
                            className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
                          >
                            <Check className="h-3 w-3" />
                            <span>Approve</span>
                          </button>
                        )}
                        {rev.status !== "Flagged" && (
                          <button
                            type="button"
                            onClick={() => handleStatusChange(rev.id, "Flagged")}
                            className="rounded-xl border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
                          >
                            Flag
                          </button>
                        )}
                      </div>
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
