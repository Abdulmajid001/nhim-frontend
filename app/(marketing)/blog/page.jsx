"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/marketing/BlogCard";
import { BlogCategoryFilter } from "@/components/marketing/BlogCategoryFilter";
import { BlogPagination } from "@/components/shared/BlogPagination";
import { getBlogPosts, BLOG_CATEGORIES } from "@/lib/api/blog";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBlogPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  // Reset to page 1 whenever the filter changes, so users don't land
  // on an empty "page 3" after narrowing results.
  useEffect(() => {
    setPage(1);
  }, [query, activeCategory]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        activeCategory === null || post.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [posts, query, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Health &amp; wellness blog
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Practical guidance on preventive care, nutrition, and understanding
            your coverage — written for real life, not just checkup day.
          </p>

          <div className="relative mt-6 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <BlogCategoryFilter
          categories={BLOG_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <p className="mt-6 text-sm text-muted-foreground">
          {loading
            ? "Loading articles..."
            : `${filteredPosts.length} article${filteredPosts.length === 1 ? "" : "s"}`}
        </p>

        {loading ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-2xl border border-border bg-muted/50"
              />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-lg font-semibold text-foreground">
              No articles match your search
            </p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Try a different keyword or clear the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory(null);
              }}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <BlogPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </>
  );
}
