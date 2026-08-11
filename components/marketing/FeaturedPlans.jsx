"use client";

import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const HMO_PROVIDERS = [
  { name: "Leadway Health", logo: "L", color: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300" },
  { name: "Reliance HMO", logo: "R", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  { name: "AXA Mansard", logo: "A", color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { name: "Hygeia HMO", logo: "H", color: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300" },
  { name: "Zenith Health", logo: "Z", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300" },
  { name: "Avon HMO", logo: "A", color: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300" },
  { name: "Total Health", logo: "T", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300" },
  { name: "Clearline HMO", logo: "C", color: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300" },
];

export function FeaturedPlans() {
  // Duplicate the array to create a seamless loop
  const marqueeItems = [...HMO_PROVIDERS, ...HMO_PROVIDERS];

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          eyebrow="Our Partners"
          title="Trusted by top HMO providers"
          description="We partner with the best healthcare providers in Nigeria to bring you comprehensive coverage options."
        />
      </motion.div>

      <div className="relative mt-14 flex overflow-hidden">
        {/* Left fade out */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />

        {/* Right fade out */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex flex-none gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((provider, idx) => (
            <div
              key={`${provider.name}-${idx}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold shadow-sm ring-1 ring-black/5 dark:ring-white/10 ${provider.color}`}
              >
                {provider.logo}
              </div>
              <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground">
                {provider.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
