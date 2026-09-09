import Link from "next/link";
import { Clock, Newspaper } from "lucide-react";

const TINT_CLASSES = {
  "chart-1": "bg-chart-1/10 text-chart-1",
  "chart-2": "bg-chart-2/10 text-chart-2",
  "chart-3": "bg-chart-3/10 text-chart-3",
  "chart-4": "bg-chart-4/10 text-chart-4",
  "chart-5": "bg-chart-5/10 text-chart-5",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * @param {{ post: import("@/lib/api/blog").BlogPost }} props
 */
export function BlogCard({ post }) {
  const tintClass = TINT_CLASSES[post.tint] ?? TINT_CLASSES["chart-1"];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Placeholder image block — swap for a real cover image later */}
      <div
        className={`flex h-40 items-center justify-center ${tintClass}`}
      >
        <Newspaper className="h-10 w-10" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
          {post.category}
        </span>

        <h3 className="mt-3 text-base font-semibold leading-snug text-card-foreground group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
          <span>{post.author}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTimeMin} min · {formatDate(post.date)}
          </span>
        </div>
      </div>
    </Link>
  );
}