import { motion } from "motion/react";

const headerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

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

export function Header({
  title = "How the marketplace works",
  description = "From comparing plans to receiving care at a hospital, everything happens in just three simple steps.",
  subtitle = "Simple process",
  className = "",
  showBadge = true,
  badgeText = "Simple process",
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {showBadge && (
        <motion.div
          variants={item}
          className="mb-3 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground"
        >
          {badgeText}
        </motion.div>
      )}

      <motion.div variants={item} className="mb-3">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </motion.section>
  );
}
