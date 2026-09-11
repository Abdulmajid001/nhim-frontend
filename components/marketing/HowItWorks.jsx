"use client";

import { motion } from "motion/react";
import {
  Search,
  CircleCheck,
  Shield,
} from "lucide-react";

import { Heading } from "./Heading";

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description:
      "Browse through verified HMOs and compare their health insurance plans side by side.",
  },
  {
    icon: CircleCheck,
    title: "Choose a Plan",
    description:
      "Select the plan that best fits your needs, budget, and preferred hospital network.",
  },
  {
    icon: Shield,
    title: "Buy and Get Covered",
    description:
      "Complete your purchase online and receive instant coverage confirmation.",
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
    y: 30,
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
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      {/* Header */}
       <Heading
        title="How It Works"
        description="Getting health insurance has never been easier. Follow these simple steps to protect yourself and your family."
      />

      {/* Main Content */}
      <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Steps */}
        <motion.div
          variants={container}
          className="flex flex-col gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                variants={item}
                whileHover={{ x: 6 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="group flex items-start gap-7"
              >
                {/* Icon */}
                <div className="relative shrink-0">
                  <div
                    className="flex h-[60px] w-[60px] items-center justify-center rounded-[22px] bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                  >
                    <Icon
                      className="h-9 w-9"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white shadow-sm ring-4 ring-background">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[21px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[680px] text-base leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Image Area */}
        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-[790px] lg:ml-auto"
        >
          {/* Main Hospital Image */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="relative h-[300px] overflow-hidden rounded-[22px] shadow-xl sm:h-[350px] lg:h-[310px] xl:h-[325px]"
          >
            <img
              src="/hospital-building.jpg"
              alt="Hospital building"
              className="h-full w-full object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* Partner Hospitals Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="absolute -right-1 -top-5 z-20 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 sm:-right-5"
          >
            500+ Partner Hospitals
          </motion.div>

          {/* Small Health Card Image */}
          <motion.div
            initial={{ opacity: 0, x: -25, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.025,
              y: -4,
            }}
            className="absolute -bottom-9 left-0 z-20 h-[190px] w-[225px] overflow-hidden rounded-[18px] border-4 border-background shadow-2xl sm:-left-8 sm:h-[220px] sm:w-[270px]"
          >
            <img
              src="/insurance-card-img.jpg"
              alt="Health insurance card"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Image Shadow / Decorative Blur */}
          <div className="pointer-events-none absolute -bottom-12 right-0 -z-10 h-40 w-2/3 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}



// "use client";

// import { motion } from "motion/react";
// import { Search, CreditCard, ShieldCheck } from "lucide-react";
// import { Heading } from "./Heading";

// const steps = [
//   {
//     icon: Search,
//     title: "Search & compare",
//     description:
//       "Browse through verified HMOs and compare their health insurance plans side by side.",
//   },
//   {
//     icon: CreditCard,
//     title: "Choose a Plan",
//     description:
//       "Select the plan that best fits your needs, budget, and preferred hospital network.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Buy and Get Covered",
//     description:
//       "Complete your purchase online and receive instant coverage confirmation.",
//   },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const item = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export function HowItWorks() {
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
//       {/* Header */}
//       <Heading
//         eyebrow="Simple process"
//         title="How It Works"
//         description="Getting health insurance has never been easier. Follow these simple steps to protect yourself and your family."
//       />

//       {/* Steps */}
//       <motion.div
//         variants={container}
//         className="relative mt-16 grid gap-6 md:grid-cols-3"
//       >
//         {/* Decorative line */}
//         <div className="pointer-events-none absolute left-1/2 top-12 hidden h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />

//         {steps.map((step, i) => {
//           const Icon = step.icon;

//           return (
//             <motion.div
//               key={step.title}
//               variants={item}
//               whileHover={{
//                 y: -8,
//                 scale: 1.02,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//               }}
//               className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
//             >
//               {/* Hover glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//               {/* Step number */}
//               <span className="absolute right-6 top-6 text-4xl font-bold text-muted/40 transition-colors duration-300 group-hover:text-primary/20">
//                 {String(i + 1).padStart(2, "0")}
//               </span>

//               {/* Icon */}
//               <motion.div
//                 whileHover={{
//                   rotate: 4,
//                   scale: 1.08,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                 }}
//                 className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
//               >
//                 <Icon className="h-6 w-6" strokeWidth={2.25} />
//               </motion.div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="mt-6 text-xl font-semibold text-card-foreground transition-colors duration-300">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-muted-foreground">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Bottom accent */}
//               {/* 
//               <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
//               */}
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.section>
//   );
// }