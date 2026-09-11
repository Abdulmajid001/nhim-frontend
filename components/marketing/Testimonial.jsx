"use client";

import { Star, Quote } from "lucide-react";
import { Heading } from "./Heading";

const TESTIMONIALS = [
  {
    quote:
      "NHIM made it incredibly easy to find the right health insurance for my family. The comparison feature saved me hours of research!",
    name: "Adaeze Okonkwo",
    role: "Business Owner, Lagos",
  },
  {
    quote:
      "I was skeptical at first, but the process was seamless. Within 30 minutes, I had purchased a plan and received my coverage confirmation.",
    name: "Emeka Nwachukwu",
    role: "Software Developer, Abuja",
  },
  {
    quote:
      "As someone who works in healthcare, I appreciate how NHIM brings transparency to health insurance. Highly recommended!",
    name: "Fatima Ibrahim",
    role: "Healthcare Worker, Kano",
  },
  {
    quote:
      "Finding the right HMO used to be confusing, but NHIM made everything simple. I could compare plans and make a decision with confidence.",
    name: "Chidinma Okafor",
    role: "Entrepreneur, Lagos",
  },
  {
    quote:
      "The whole process was straightforward and stress-free. I found a plan that matched my budget and had the hospitals I preferred.",
    name: "Tunde Bakare",
    role: "Business Consultant, Abuja",
  },
  {
    quote:
      "I love how easy it is to understand what each plan covers before making a decision. NHIM gives you the information you need.",
    name: "Aisha Bello",
    role: "Marketing Manager, Kano",
  },
];

const initials = (name) => name[0].toUpperCase();

function TestimonialCard({ quote, name, role }) {
  return (
    <article
      className="
        flex w-[calc(100vw-32px)] max-w-[400px] shrink-0 flex-col
        rounded-2xl border border-border bg-card p-5 shadow-sm
        sm:w-[340px] sm:p-6
        md:w-[380px]
        lg:w-[400px]
      "
    >
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
        ))}
      </div>

      {/* Quote */}
      <Quote className="mt-5 h-9 w-9 text-primary/15" />

      <p className="mt-4 min-h-[115px] text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        "{quote}"
      </p>

      {/* User */}
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-medium text-primary-foreground sm:h-12 sm:w-12 sm:text-lg">
          {initials(name)}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">
            {name}
          </h3>

          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

function TestimonialGroup() {
  return (
    <div className="flex shrink-0 gap-5 sm:gap-6">
      {TESTIMONIALS.map((item) => (
        <TestimonialCard key={item.name} {...item} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl overflow-x-hidden bg-background py-16 sm:py-20">
      {/* Heading */}
      <Heading
        title="What Our Users Say"
        description="Join thousands of satisfied Nigerians who have found their perfect health insurance through NHIM."
        className=""
      />

      {/* Testimonials */}
      <div className="relative mt-12 w-full max-w-full overflow-hidden sm:mt-16">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent sm:w-24" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent sm:w-24" />

        {/* Continuous marquee */}
        <div className="testimonial-track flex gap-6 w-max">
          <TestimonialGroup />
          <TestimonialGroup />
        </div>
      </div>

      <style jsx>{`
        .testimonial-track {
          animation: testimonial-scroll 50s linear infinite;
          will-change: transform;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

// "use client";
// import { Heading } from "./Heading";

// const ROW_1 = [
//   {
//     quote:
//       "I compared five HMOs in one sitting and picked a plan in under ten minutes. No agent calls, no confusing brochures.",
//     name: "Chidinma Okafor",
//     location: "Lagos, Nigeria",
//     tint: "chart-1",
//   },
//   {
//     quote:
//       "My daughter needed emergency care and the hospital verified my cover in seconds. That speed mattered more than I expected.",
//     name: "Tunde Bakare",
//     location: "Abuja, Nigeria",
//     tint: "chart-3",
//   },
//   {
//     quote:
//       "Switching plans used to mean starting over with paperwork. On NHIM.ng I upgraded my cover in one afternoon.",
//     name: "Aisha Bello",
//     location: "Kano, Nigeria",
//     tint: "chart-2",
//   },
//   {
//     quote:
//       "The reviews on each HMO's page were the deciding factor for me — real feedback from people who'd actually filed claims.",
//     name: "Emeka Nwosu",
//     location: "Port Harcourt, Nigeria",
//     tint: "chart-5",
//   },
//   {
//     quote:
//       "I manage cover for twelve staff now instead of chasing one HMO rep by phone. It's genuinely saved us hours every month.",
//     name: "Funmilayo Adeyemi",
//     location: "Ibadan, Nigeria",
//     tint: "chart-4",
//   },
//   {
//     quote:
//       "My digital ID card was ready before I even left the checkout page. Walked into a partner hospital with it the same week.",
//     name: "Ibrahim Musa",
//     location: "Lagos, Nigeria",
//     tint: "chart-1",
//   },
// ];

// const ROW_2 = [
//   {
//     quote:
//       "Claims used to take weeks with my old provider. Through NHIM.ng my hospital bill was settled directly — I barely noticed.",
//     name: "Ngozi Eze",
//     location: "Enugu, Nigeria",
//     tint: "chart-2",
//   },
//   {
//     quote:
//       "Adding my two kids as beneficiaries took maybe ninety seconds. I was bracing for a form the size of a tax return.",
//     name: "Segun Afolabi",
//     location: "Lagos, Nigeria",
//     tint: "chart-3",
//   },
//   {
//     quote:
//       "I liked being able to see exactly what wasn't covered before I paid, not after. That transparency is rare in this market.",
//     name: "Halima Yusuf",
//     location: "Kaduna, Nigeria",
//     tint: "chart-5",
//   },
//   {
//     quote:
//       "Our HR team moved the whole company plan over in a week. The account dashboard makes renewals painless.",
//     name: "Grace Idowu",
//     location: "Abuja, Nigeria",
//     tint: "chart-4",
//   },
//   {
//     quote:
//       "Support actually picked up when I called about a claim status. Small thing, but it's why I renewed without a second thought.",
//     name: "Kelechi Obi",
//     location: "Port Harcourt, Nigeria",
//     tint: "chart-1",
//   },
//   {
//     quote:
//       "I read through ratings for three HMOs before choosing. Felt like the first time I was in control of this decision.",
//     name: "Zainab Suleiman",
//     location: "Kano, Nigeria",
//     tint: "chart-2",
//   },
// ];

// const TINT_CLASSES = {
//   "chart-1": { card: "bg-chart-1/10", avatar: "bg-chart-1/25" },
//   "chart-2": { card: "bg-chart-2/10", avatar: "bg-chart-2/25" },
//   "chart-3": { card: "bg-chart-3/10", avatar: "bg-chart-3/25" },
//   "chart-4": { card: "bg-chart-4/10", avatar: "bg-chart-4/25" },
//   "chart-5": { card: "bg-chart-5/10", avatar: "bg-chart-5/25" },
// };

// function initials(name) {
//   return name
//     .split(" ")
//     .map((part) => part[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }

// function TestimonialCard({ quote, name, location, tint }) {
//   const tintClass = TINT_CLASSES[tint] ?? TINT_CLASSES["chart-1"];

//   return (
//     <figure
//       className={`flex w-[85vw] max-w-[300px] shrink-0 flex-col gap-3 rounded-2xl border border-border p-5 shadow-sm sm:w-[340px] sm:max-w-none sm:gap-4 sm:p-6 md:w-[380px] ${tintClass.card}`}
//     >
//       <blockquote className="text-sm leading-relaxed text-foreground">
//         “{quote}”
//       </blockquote>
//       <figcaption className="mt-auto flex items-center gap-3">
//         <span
//           className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-foreground ${tintClass.avatar}`}
//         >
//           {initials(name)}
//         </span>
//         <div>
//           <p className="text-sm font-semibold text-foreground">{name}</p>
//           <p className="text-xs text-muted-foreground">{location}</p>
//         </div>
//       </figcaption>
//     </figure>
//   );
// }

// function MarqueeRow({ items, direction, speed = 45 }) {
//   // Duplicate the row so the loop is seamless — animation moves exactly
//   // -50% (one full set width), so the duplicate lines up perfectly.
//   const doubled = [...items, ...items];

//   return (
//     <div className="group relative w-full min-w-0 overflow-hidden">
//       <div
//         className={`flex w-max gap-4 sm:gap-5 ${
//           direction === "left"
//             ? "animate-marquee-left"
//             : "animate-marquee-right"
//         } group-hover:[animation-play-state:paused]`}
//         style={{ animationDuration: `${speed}s` }}
//       >
//         {doubled.map((item, i) => (
//           <TestimonialCard key={`${item.name}-${i}`} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function Testimonials() {
//   return (
//     <section className="mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
//       {/* <Heading
//         // eyebrow="Testimonials"
//         title="What people are saying"
//         description="Don't just take our word for it — see what members and HR teams have to say about their experience."
//         className=""
//       /> */}
//       <Heading
//         title="What Our Users Say"
//         description="Join thousands of satisfied Nigerians who have found their perfect health insurance through NHIM."
//       />

//       <div className="relative mt-8 flex w-full min-w-0 flex-col gap-4 sm:mt-10 sm:gap-5 md:mt-14">
//         {/* Edge fade masks */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16 md:w-32" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16 md:w-32" />

//         <MarqueeRow items={ROW_1} direction="left" speed={48} />
//         <MarqueeRow items={ROW_2} direction="right" speed={52} />
//       </div>

//       <style>{`
//         @keyframes marquee-left {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         @keyframes marquee-right {
//           from { transform: translateX(-50%); }
//           to { transform: translateX(0); }
//         }
//         .animate-marquee-left {
//           animation-name: marquee-left;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }
//         .animate-marquee-right {
//           animation-name: marquee-right;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .animate-marquee-left,
//           .animate-marquee-right {
//             animation: none;
//           }
//         }
//         `}</style>
//     </section>
//   );
// }
