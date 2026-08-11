// "use client";
// import { FeaturedPlansGrid } from "./FeaturedPlansGrid";
// import { SectionHeader } from "./SectionHeader";
// import { motion } from "motion/react";

// /**
//  * Static featured plans. Swap FEATURED_PLANS below for a real data source
//  * later — keep the { plan, badge } shape the same so FeaturedPlansGrid
//  * doesn't need to change.
//  */
// const FEATURED_PLANS = [
//   {
//     badge: "Top Rated",
//     plan: {
//       id: "zh-basic",
//       hmoName: "Zenith Health",
//       name: "Basic Shield",
//       tier: "basic",
//       priceAnnual: 16000,
//       rating: 4.7,
//       reviewCount: 1204,
//       coverage: ["Outpatient", "Emergency"],
//     },
//   },
//   {
//     badge: "Best Value",
//     plan: {
//       id: "zh-standard",
//       hmoName: "Zenith Health",
//       name: "Family Shield",
//       tier: "standard",
//       priceAnnual: 39000,
//       rating: 4.7,
//       reviewCount: 1204,
//       coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"],
//     },
//   },
//   {
//     badge: "Most Popular",
//     plan: {
//       id: "zh-premium",
//       hmoName: "Zenith Health",
//       name: "Total Shield",
//       tier: "premium",
//       priceAnnual: 78000,
//       rating: 4.7,
//       reviewCount: 1204,
//       coverage: [
//         "Outpatient",
//         "Inpatient",
//         "Maternity",
//         "Surgery",
//         "Dental",
//         "Optical",
//         "Emergency",
//       ],
//     },
//   },
// ];

// export function FeaturedPlans() {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="show"
//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}
//       className="mx-auto max-w-6xl px-6 py-24"
//     >
//         {/* Header */}
//         <SectionHeader
//             eyebrow="Featured plans"
//             title="Plans worth taking a closer look at"
//             description="We've highlighted some of the best healthcare plans based on value, popularity, coverage, and customer ratings."
//         />
//         <FeaturedPlansGrid featured={FEATURED_PLANS} />
//     </motion.section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { FeaturedPlansGrid } from "./FeaturedPlansGrid";

const FEATURED_PLANS = [
  {
    badge: "Top Rated",
    plan: {
      id: "leadway-essential-individual",
      hmoName: "Leadway Health",
      name: "Essential Individual",
      tier: "basic",
      category: "Individual",
      priceMonthly: 15000,
      priceAnnual: 180000,
      rating: 4.7,
      reviewCount: 340,
      hospitalCount: 100,
      logoLetter: "L",
      logoClass:
        "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
      verified: true,
      coverage: [
        "Basic health coverage",
        "Outpatient services",
        "Prescription drugs",
        "Lab tests included",
      ],
    },
  },

  {
    badge: "Most Popular",
    plan: {
      id: "reliance-corporate-elite",
      hmoName: "Reliance HMO",
      name: "Corporate Elite",
      tier: "corporate",
      category: "Corporate",
      priceMonthly: 35000,
      priceAnnual: 420000,
      rating: 4.8,
      reviewCount: 280,
      hospitalCount: 200,
      logoLetter: "R",
      logoClass:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
      verified: true,
      coverage: [
        "Full corporate coverage",
        "Executive health checks",
        "International coverage",
        "Mental health support",
      ],
    },
  },

  {
    badge: "Best Value",
    plan: {
      id: "axa-mansard-family-plus",
      hmoName: "AXA Mansard Health",
      name: "Family Plus",
      tier: "premium",
      category: "Family",
      priceMonthly: 28000,
      priceAnnual: 336000,
      rating: 4.7,
      reviewCount: 410,
      hospitalCount: 180,
      logoLetter: "A",
      logoClass:
        "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      verified: true,
      coverage: [
        "Outpatient care",
        "Inpatient care",
        "Maternity",
        "Emergency treatment",
      ],
    },
  },

  {
    badge: "Most Popular",
    plan: {
      id: "hygeia-premium-care",
      hmoName: "Hygeia HMO",
      name: "Premium Care",
      tier: "premium",
      category: "Individual",
      priceMonthly: 24000,
      priceAnnual: 288000,
      rating: 4.6,
      reviewCount: 520,
      hospitalCount: 250,
      logoLetter: "H",
      logoClass:
        "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
      verified: true,
      coverage: [
        "Outpatient services",
        "Inpatient treatment",
        "Surgery coverage",
        "Emergency care",
      ],
    },
  },

  {
    badge: "Top Rated",
    plan: {
      id: "zenith-family-shield",
      hmoName: "Zenith Health",
      name: "Family Shield",
      tier: "standard",
      category: "Family",
      priceMonthly: 3250,
      priceAnnual: 39000,
      rating: 4.7,
      reviewCount: 1204,
      hospitalCount: 160,
      logoLetter: "Z",
      logoClass:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
      verified: true,
      coverage: [
        "Outpatient services",
        "Inpatient care",
        "Maternity coverage",
        "Emergency services",
      ],
    },
  },

  {
    badge: "Best Value",
    plan: {
      id: "avon-family-care",
      hmoName: "Avon HMO",
      name: "Family Care",
      tier: "standard",
      category: "Family",
      priceMonthly: 15000,
      priceAnnual: 180000,
      rating: 4.5,
      reviewCount: 390,
      hospitalCount: 140,
      logoLetter: "A",
      logoClass:
        "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
      verified: true,
      coverage: [
        "Outpatient care",
        "Inpatient care",
        "Maternity services",
        "Prescription drugs",
      ],
    },
  },

  {
    badge: "Best Value",
    plan: {
      id: "total-health-smart-care",
      hmoName: "Total Health Trust",
      name: "Smart Care",
      tier: "basic",
      category: "Individual",
      priceMonthly: 9500,
      priceAnnual: 114000,
      rating: 4.4,
      reviewCount: 275,
      hospitalCount: 130,
      logoLetter: "T",
      logoClass:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
      verified: true,
      coverage: [
        "Outpatient services",
        "Emergency care",
        "Lab tests included",
        "Prescription drugs",
      ],
    },
  },

  {
    badge: "Top Rated",
    plan: {
      id: "clearline-executive-care",
      hmoName: "Clearline HMO",
      name: "Executive Care",
      tier: "premium",
      category: "Corporate",
      priceMonthly: 30000,
      priceAnnual: 360000,
      rating: 4.6,
      reviewCount: 210,
      hospitalCount: 150,
      logoLetter: "C",
      logoClass:
        "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
      verified: true,
      coverage: [
        "Comprehensive outpatient",
        "Inpatient treatment",
        "Specialist care",
        "Executive checkups",
      ],
    },
  },
];

export function FeaturedPlans() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeader
        eyebrow="Featured plans"
        title="Find a health plan that fits your needs"
        description="Compare carefully selected healthcare plans from trusted HMO providers and find the right balance of coverage, price, and benefits."
      />

      <FeaturedPlansGrid featured={FEATURED_PLANS} />
    </motion.section>
  );
}