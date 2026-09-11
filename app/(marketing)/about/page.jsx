"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Eye,
  HeartHandshake,
  Hospital,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Partner HMOs",
  },
  {
    value: "500+",
    label: "Hospitals",
  },
  {
    value: "100K+",
    label: "Users Protected",
  },
  {
    value: "36",
    label: "States Covered",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We believe in complete transparency in healthcare coverage. Every plan, every price, every detail is clearly presented.",
  },
  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "Our users' health and wellbeing are at the center of everything we do. We're committed to making healthcare accessible to all Nigerians.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're building a community of health-conscious Nigerians, trusted HMOs, and quality healthcare providers.",
  },
  {
    icon: Hospital,
    title: "Quality Partners",
    description:
      "We carefully vet every HMO and hospital on our platform to ensure you receive the best possible care.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative border-b border-border/60 bg-[var(--about-hero)]">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[420px] max-w-5xl items-center justify-center px-5 py-20 sm:px-8 lg:min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              About NHIM.ng
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Connecting Nigeria to{" "}
              <span className="block text-primary">Better Healthcare</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              NHIM.ng is Nigeria&apos;s premier digital marketplace for health
              insurance, bridging the gap between individuals seeking quality
              healthcare coverage and trusted Health Maintenance Organizations
              (HMOs).
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/15 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="flex min-h-[125px] flex-col items-center justify-center px-4 py-7 text-center sm:min-h-[145px]"
            >
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </span>

              <span className="mt-2 text-xs font-medium text-primary-foreground/75 sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="bg-background px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {/* Mission */}
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-primary/8 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">
                Our Mission
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                To democratize access to quality health insurance in Nigeria
                by creating a transparent, user-friendly marketplace that
                empowers individuals to make informed healthcare decisions
                while enabling HMOs and hospitals to serve their communities
                more effectively.
              </p>
            </div>
          </motion.article>

          {/* Vision */}
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-emerald-400/8 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                <Eye className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">
                Our Vision
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                To become Africa&apos;s leading health insurance marketplace,
                where every Nigerian has access to affordable, quality
                healthcare coverage, and where HMOs and healthcare providers
                can thrive while delivering exceptional patient care.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="border-y border-border/60 bg-muted/30 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Making healthcare easier to navigate
            </h2>

            <div className="mx-auto mt-8 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                NHIM.ng was born from a simple observation: finding the right
                health insurance in Nigeria shouldn&apos;t be complicated. Too
                many Nigerians were either uninsured or struggling to navigate
                a fragmented healthcare system.
              </p>

              <p>
                Founded in 2025, we set out to build a platform that would
                bring transparency, choice, and accessibility to health
                insurance in Nigeria. By connecting individuals with verified
                HMOs and quality hospitals, we&apos;re making it easier than
                ever for Nigerians to protect their health and their families.
              </p>

              <p>
                Today, NHIM.ng serves thousands of users across 36 states,
                partnering with Nigeria&apos;s most trusted HMOs and a growing
                network of quality healthcare providers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-background px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What guides us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              These core principles guide everything we do at NHIM.ng.
            </p>
          </motion.div>

          {/* Value cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 pb-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl sm:px-12 sm:py-16"
        >
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-black/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <Building2 className="mx-auto h-9 w-9 opacity-90" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Better healthcare starts with better choices.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75 sm:text-base">
              Compare health insurance plans from trusted providers and find
              coverage that works for you and your family.
            </p>

            <a
              href="/plans"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Compare Plans
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}