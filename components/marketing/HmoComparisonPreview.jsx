import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const hmos = [
  {
    name: "CarePlus HMO",
    rating: "4.6",
    reviews: "812",
    price: "₦18,000/yr",
  },
  {
    name: "Wellcare HMO",
    rating: "4.3",
    reviews: "540",
    price: "₦22,500/yr",
  },
  {
    name: "Zenith Health",
    rating: "4.7",
    reviews: "1,204",
    price: "₦16,000/yr",
  },
];

export function HmoComparisonPreview() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Rated by people who actually used their cover
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every review is tied to a verified purchase — no anonymous
              ratings, no paid placements.
            </p>
          </div>
          <Link
            href="/hmos"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View all HMOs
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hmos.map((hmo) => (
            <div
              key={hmo.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {hmo.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  {hmo.rating}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {hmo.reviews} verified reviews
              </p>
              <p className="mt-5 text-sm font-medium text-foreground">
                From {hmo.price}
              </p>
              <Link
                href="/hmos"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                View plans
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}