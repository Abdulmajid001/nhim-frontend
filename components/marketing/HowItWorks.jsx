"use client";

import { motion } from "motion/react";
import {
  Search,
  CreditCard,
  Stethoscope,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    icon: Search,
    title: "Search & compare",
    description:
      "Filter every plan on the market by price, hospital network, and coverage — side by side, no sales calls.",
  },
  {
    icon: CreditCard,
    title: "Buy & get verified",
    description:
      "Pay securely and receive a policy number and digital ID card the moment your HMO confirms enrollment.",
  },
  {
    icon: Stethoscope,
    title: "Use it anywhere",
    description:
      "Walk into any partner hospital in your plan's network. Coverage checks happen in real time at the front desk.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HowItWorks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Header */}
      <SectionHeader
        eyebrow="Simple process"
        title="How the marketplace works"
        description="From comparing plans to receiving care at a hospital, everything happens in just three simple steps."
      />

      {/* Steps */}
      <motion.div
        variants={container}
        className="relative mt-16 grid gap-6 md:grid-cols-3"
      >
        {/* Decorative line */}
        <div className="pointer-events-none absolute left-1/2 top-12 hidden h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Step number */}
              <span className="absolute right-6 top-6 text-4xl font-bold text-muted/40 transition-colors duration-300 group-hover:text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 4,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Icon
                  className="h-6 w-6"
                  strokeWidth={2.25}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mt-6 text-xl font-semibold text-card-foreground transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent */}
              {/* 
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
              */}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}