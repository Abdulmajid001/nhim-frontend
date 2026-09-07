"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  MessageSquare,
  Search,
  Star,
} from "lucide-react";

export function ReviewsClient({ initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleApprove = (reviewId) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? { ...r, status: r.status === "Approved" ? "Pending" : "Approved" }
          : r
      )
    );
  };

  const filteredReviews = reviews.filter((review) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      review.author.toLowerCase().includes(query) ||
      review.comment.toLowerCase().includes(query) ||
      review.planName.toLowerCase().includes(query);

    const matchesRating =
      ratingFilter === "all" || review.rating === Number(ratingFilter);

    const matchesStatus =
      statusFilter === "all" || review.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesRating && matchesStatus;
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
            placeholder="Search reviews by keyword, author, or plan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        {/* Rating and Status Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-6 space-y-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {/* Review Header */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                  {review.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900">{review.author}</p>
                    {review.isVerified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified Enrollee
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">
                    Plan: <span className="font-medium text-slate-600">{review.planName}</span> · {review.date}
                  </p>
                </div>
              </div>

              {/* Star Rating & Status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-100 text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    review.status === "Approved"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      review.status === "Approved"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  {review.status}
                </span>
              </div>
            </div>

            {/* Review Content */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {review.comment}
            </p>

            {/* Approve Action */}
            <div className="mt-5 flex items-center justify-end border-t border-slate-100 pt-4">
              {review.status === "Approved" ? (
                <button
                  type="button"
                  onClick={() => handleApprove(review.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
                >
                  <span>Revoke approval</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleApprove(review.id)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Approve Review</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <MessageSquare className="mx-auto h-8 w-8 text-slate-300" />
          <p className="mt-3 text-sm font-semibold text-slate-900">
            No reviews found
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Try adjusting your search query or filter selection.
          </p>
        </div>
      )}
    </div>
  );
}
