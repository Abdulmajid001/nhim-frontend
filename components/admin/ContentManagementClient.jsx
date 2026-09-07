"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Edit,
  Eye,
  FileText,
  HelpCircle,
  Plus,
  Search,
} from "lucide-react";

export function ContentManagementClient({ initialArticles }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((item) => {
      // Tab filter
      if (activeTab === "guides" && item.type !== "Guide") return false;
      if (activeTab === "faqs" && item.type !== "FAQ") return false;
      if (activeTab === "announcements" && item.type !== "Announcement") return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        return matchTitle || matchCat;
      }

      return true;
    });
  }, [initialArticles, activeTab, searchQuery]);

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
            All Content ({initialArticles.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("guides")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "guides"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Guides & Articles
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("faqs")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "faqs"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            FAQs
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("announcements")}
            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              activeTab === "announcements"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Announcements
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search title or category..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Clean Content Table */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 text-muted-foreground">
              <tr>
                <th className="py-3.5 pl-6 font-semibold">Title</th>
                <th className="py-3.5 font-semibold">Type & Category</th>
                <th className="py-3.5 font-semibold">Last Updated</th>
                <th className="py-3.5 font-semibold text-center">Status</th>
                <th className="py-3.5 pr-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-muted-foreground">
                    No content entries match your search.
                  </td>
                </tr>
              ) : (
                filteredArticles.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="py-4 pl-6 max-w-sm">
                      <p className="font-bold text-sm text-card-foreground">
                        {item.title}
                      </p>
                      <p className="line-clamp-1 text-[11px] text-muted-foreground">
                        {item.snippet}
                      </p>
                    </td>

                    <td className="py-4">
                      <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                        {item.type}
                      </span>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {item.category}
                      </p>
                    </td>

                    <td className="py-4 text-muted-foreground">
                      {item.updatedDate}
                    </td>

                    <td className="py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </td>

                    <td className="py-4 pr-6 text-right">
                      <button
                        type="button"
                        className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
                      >
                        Edit
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
