"use client";

import { motion } from "motion/react";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Heading({
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <motion.div
      variants={item}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      <div className="mb-3 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
          {eyebrow}
        </div>

      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}