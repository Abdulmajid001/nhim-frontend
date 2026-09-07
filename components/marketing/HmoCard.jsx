"use client";

import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Building2,
  CheckCircle2,
  Star,
  FileText,
  Users,
} from "lucide-react";

/**
 * @param {{ hmo: import("@/lib/api/hmos").Hmo }} props
 */
export function HmoCard({ hmo }) {
  const locationsText = Array.isArray(hmo.locations)
    ? hmo.locations.join(", ")
    : hmo.locations || "Lagos, Abuja, Port Harcourt";

  const ratingValue =
    typeof hmo.rating === "number" ? hmo.rating.toFixed(1) : "4.8";

  const reviewCountValue =
    typeof hmo.reviewCount === "number"
      ? hmo.reviewCount.toLocaleString()
      : "2,340";

  const planCountValue = hmo.planCount ?? 12;
  const membersValue =
    hmo.members || (hmo.memberCount ? `${hmo.memberCount}+` : "50K+");
  const hospitalsValue =
    hmo.hospitals || (hmo.hospitalCount ? `${hmo.hospitalCount}` : "450");

  return (
    <article className="group relative flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3.5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15 dark:bg-primary/15 dark:text-primary">
          <Building2 className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-lg font-bold tracking-tight text-foreground">
              {hmo.name}
            </h3>
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-sm">
            <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
            <span className="font-bold text-foreground">
              {ratingValue}
            </span>
            <span className="text-muted-foreground">
              ({reviewCountValue} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {hmo.description ||
          "One of Nigeria's leading HMOs with comprehensive coverage and excellent customer service."}
      </p>

      {/* Stat Cards */}
      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 px-2 py-3.5 text-center transition-colors dark:bg-muted/30">
          <FileText className="h-5 w-5 text-primary" />
          <span className="mt-1.5 text-base font-bold text-foreground">
            {planCountValue}
          </span>
          <span className="text-xs text-muted-foreground">Plans</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 px-2 py-3.5 text-center transition-colors dark:bg-muted/30">
          <Users className="h-5 w-5 text-primary" />
          <span className="mt-1.5 text-base font-bold text-foreground">
            {membersValue}
          </span>
          <span className="text-xs text-muted-foreground">Members</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 px-2 py-3.5 text-center transition-colors dark:bg-muted/30">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="mt-1.5 text-base font-bold text-foreground">
            {hospitalsValue}
          </span>
          <span className="text-xs text-muted-foreground">Hospitals</span>
        </div>
      </div>

      {/* Locations */}
      <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/80" />
        <span className="truncate">{locationsText}</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Link
          href={`/hmos/${hmo.slug}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
        >
          <span>View Plans</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={`/hmos/${hmo.slug}`}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted active:scale-[0.98]"
        >
          Read Reviews
        </Link>
      </div>
    </article>
  );
}


// "use client";

// import Link from "next/link";
// import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

// function initials(name) {
//   return name
//     .split(" ")
//     .map((part) => part[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }

// /**
//  * @param {{ hmo: import("@/lib/api/hmos").Hmo }} props
//  */
// export function HmoCard({ hmo }) {
//   return (
//     <article
//       className="group relative flex min-w-0 flex-col rounded-3xl border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6"
//     >
//       <div className="relative flex items-center gap-3">
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary shadow-sm ring-1 ring-black/5 dark:ring-white/10">
//           {initials(hmo.name)}
//         </div>
//         <div className="min-w-0">
//           <div className="flex items-center gap-1.5">
//             <p className="truncate text-sm font-medium text-muted-foreground">
//               Accredited provider
//             </p>
//             <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-label="Verified provider" />
//           </div>
//           <h3 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-foreground">
//             {hmo.name}
//           </h3>
//         </div>
//       </div>

//       <div className="relative mt-7 flex items-center justify-between border-y border-border py-4">
//         <span className="text-sm text-muted-foreground">Available plans</span>
//         <span className="text-sm font-semibold text-foreground">
//           {hmo.planCount} {hmo.planCount === 1 ? "plan" : "plans"}
//         </span>
//       </div>

//       <p className="relative mt-5 flex-1 text-sm leading-6 text-muted-foreground">
//         {hmo.description}
//       </p>

//       <div className="relative mt-5 flex flex-wrap items-center gap-1.5 border-t border-border pt-5">
//         <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
//         {hmo.locations.slice(0, 3).map((loc) => (
//           <span
//             key={loc}
//             className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
//           >
//             {loc}
//           </span>
//         ))}
//         {hmo.locations.length > 3 && (
//           <span className="text-xs text-muted-foreground">
//             +{hmo.locations.length - 3} more
//           </span>
//         )}
//       </div>

//       <div className="relative mt-7 grid grid-cols-2 gap-3">
//         <Link
//           href={`/hmos/${hmo.slug}`}
//           className="inline-flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-2 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] sm:px-3"
//         >
//           <span className="truncate">View profile</span>
//           <ArrowRight className="h-3.5 w-3.5" />
//         </Link>
//         <Link
//           href={`/hmos/${hmo.slug}`}
//           className="inline-flex h-11 min-w-0 items-center justify-center rounded-xl bg-primary px-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98] sm:px-3"
//         >
//           View plans
//         </Link>
//       </div>
//     </article>
//   );
// }

