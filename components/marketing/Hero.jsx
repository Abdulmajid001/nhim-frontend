"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { PolicyCard } from "./PolicyCard";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "12%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-15 pb-28 md:grid-cols-[1.15fr_0.85fr] md:items-center ">
        {/* Hero Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
          >
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />

            Nigeria's #1 Health Insurance Marketplace
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Find the Right{" "}
            <span className="text-primary">Health Insurance</span> for You.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Compare plans from every accredited HMO in Nigeria, buy in
            minutes, and get your digital ID card issued the moment payment
            clears.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/plans"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Compare plans

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/for-hmos"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              List your HMO
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <div className="relative flex justify-center md:justify-end">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-lg"
          >
            {/* Parallax Image */}
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-[-10%]"
            >
              <Image
                src="/hero-img.jpg"
                alt="A pediatrician examining a smiling baby held by her mother"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Image Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Policy Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
            className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 md:-bottom-8 md:left-auto md:right-[-8%] md:w-auto md:translate-x-0"
          >
            <PolicyCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}