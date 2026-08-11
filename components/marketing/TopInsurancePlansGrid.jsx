// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";
// import {
//   Star,
//   TrendingUp,
//   Tag,
//   ArrowRight,
//   Check,
// } from "lucide-react";

// const BADGE_CONFIG = {
//   "Top Rated": {
//     icon: Star,
//     className: "bg-primary text-primary-foreground",
//   },
//   "Best Value": {
//     icon: Tag,
//     className: "bg-foreground text-background",
//   },
//   "Most Popular": {
//     icon: TrendingUp,
//     className: "bg-accent text-accent-foreground",
//   },
// };

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export function FeaturedPlansGrid({ featured }) {
//   return (
//     <
//     >

//       {/* Plans Grid */}
//       <motion.div
//         className="mt-16 grid gap-6 md:grid-cols-3"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{
//           once: true,
//           amount: 0.25,
//         }}
//       >
//         {featured.map(({ plan, badge }) => {
//           const BadgeIcon = BADGE_CONFIG[badge]?.icon ?? Star;

//           const badgeClass =
//             BADGE_CONFIG[badge]?.className ??
//             "bg-primary text-primary-foreground";

//           return (
//             <motion.div
//               key={plan.id}
//               variants={cardVariants}
//               whileHover={{ y: -6 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 22,
//               }}
//               className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
//             >
//               {/* Hover glow */}
//               <div
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
//               />

//               {/* Badge */}
//               <span
//                 className={`absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${badgeClass}`}
//               >
//                 <BadgeIcon
//                   className="h-3 w-3"
//                   strokeWidth={2.5}
//                 />

//                 {badge}
//               </span>

//               {/* Plan Header */}
//               <div className="mt-3 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-xs font-medium text-muted-foreground">
//                     {plan.hmoName}
//                   </p>

//                   <h3 className="mt-0.5 text-lg font-semibold text-card-foreground">
//                     {plan.name}
//                   </h3>
//                 </div>

//                 {/* Rating */}
//                 <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
//                   <Star
//                     className="h-3.5 w-3.5 fill-primary text-primary"
//                   />

//                   {plan.rating}
//                 </span>
//               </div>

//               {/* Coverage */}
//               <ul className="mb-6 mt-4 space-y-1.5">
//                 {plan.coverage.slice(0, 4).map((coverageItem) => (
//                   <li
//                     key={coverageItem}
//                     className="flex items-center gap-2 text-sm text-muted-foreground"
//                   >
//                     <Check
//                       className="h-3.5 w-3.5 shrink-0 text-primary"
//                       strokeWidth={2.5}
//                     />

//                     {coverageItem}
//                   </li>
//                 ))}
//               </ul>

//               {/* Price + CTA */}
//               <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
//                 <div>
//                   <p className="text-xs text-muted-foreground">
//                     From
//                   </p>

//                   <p className="text-xl font-semibold text-foreground">
//                     ₦
//                     {plan.priceAnnual.toLocaleString("en-NG")}

//                     <span className="text-sm font-normal text-muted-foreground">
//                       /yr
//                     </span>
//                   </p>
//                 </div>

//                 <Link
//                   href={`/plans/${plan.id}`}
//                   className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
//                 >
//                   View plan

//                   <ArrowRight className="h-3.5 w-3.5" />
//                 </Link>
//               </div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Star,
  TrendingUp,
  Tag,
  ChevronLeft,
  ChevronRight,
  Building2,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

const BADGE_CONFIG = {
  "Top Rated": {
    icon: Star,
    className:
      "border-primary/20 bg-primary/10 text-primary",
  },

  "Best Value": {
    icon: Tag,
    className:
      "border-border bg-muted text-foreground",
  },

  "Most Popular": {
    icon: TrendingUp,
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300",
  },
};

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function formatPrice(price) {
  return new Intl.NumberFormat("en-NG").format(price);
}

export function TopInsurancePlansGrid({ featured }) {
  const scrollRef = useRef(null);
  const autoSlideRef = useRef(null);

  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  /*
   * Determine how many cards are visible.
   * Mobile: 1
   * Tablet: 2
   * Desktop: 3
   */
  const getCardsPerPage = useCallback(() => {
    if (typeof window === "undefined") {
      return 3;
    }

    if (window.innerWidth < 640) {
      return 1;
    }

    if (window.innerWidth < 1024) {
      return 2;
    }

    return 3;
  }, []);

  /*
   * Calculate carousel pages.
   */
  const updatePageCount = useCallback(() => {
    const cardsPerPage = getCardsPerPage();

    setPageCount(
      Math.max(
        1,
        Math.ceil(featured.length / cardsPerPage)
      )
    );
  }, [featured.length, getCardsPerPage]);

  /*
   * Update active pagination dot.
   */
  const updateActivePage = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    if (maxScroll <= 0 || pageCount <= 1) {
      setActivePage(0);
      return;
    }

    const progress =
      container.scrollLeft / maxScroll;

    const page = Math.round(
      progress * (pageCount - 1)
    );

    setActivePage(
      Math.max(
        0,
        Math.min(page, pageCount - 1)
      )
    );
  }, [pageCount]);

  /*
   * Go to a specific slide.
   */
  const goToPage = useCallback(
    (page) => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      const target =
        pageCount <= 1
          ? 0
          : (page / (pageCount - 1)) * maxScroll;

      container.scrollTo({
        left: target,
        behavior: "smooth",
      });

      setActivePage(page);
    },
    [pageCount]
  );

  /*
   * Go to next slide.
   */
  const goNext = useCallback(() => {
    if (pageCount <= 1) return;

    setActivePage((current) => {
      const next =
        current >= pageCount - 1
          ? 0
          : current + 1;

      if (scrollRef.current) {
        const container = scrollRef.current;

        const maxScroll =
          container.scrollWidth -
          container.clientWidth;

        const target =
          next === 0
            ? 0
            : (next / (pageCount - 1)) *
              maxScroll;

        container.scrollTo({
          left: target,
          behavior: "smooth",
        });
      }

      return next;
    });
  }, [pageCount]);

  /*
   * Go to previous slide.
   */
  const goPrevious = useCallback(() => {
    if (pageCount <= 1) return;

    setActivePage((current) => {
      const previous =
        current <= 0
          ? pageCount - 1
          : current - 1;

      if (scrollRef.current) {
        const container = scrollRef.current;

        const maxScroll =
          container.scrollWidth -
          container.clientWidth;

        const target =
          previous === 0
            ? 0
            : (previous / (pageCount - 1)) *
              maxScroll;

        container.scrollTo({
          left: target,
          behavior: "smooth",
        });
      }

      return previous;
    });
  }, [pageCount]);

  /*
   * Stop automatic sliding.
   */
  const stopAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  }, []);

  /*
   * Start automatic sliding.
   */
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();

    if (pageCount <= 1) return;

    autoSlideRef.current = setInterval(() => {
      goNext();
    }, 4500);
  }, [goNext, pageCount, stopAutoSlide]);

  /*
   * Update carousel when screen size changes.
   */
  useEffect(() => {
    updatePageCount();

    const handleResize = () => {
      updatePageCount();
      setActivePage(0);

      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: "instant",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [updatePageCount]);

  /*
   * Listen for manual scrolling/swiping.
   */
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    container.addEventListener(
      "scroll",
      updateActivePage,
      {
        passive: true,
      }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        updateActivePage
      );
    };
  }, [updateActivePage]);

  /*
   * Start automatic carousel.
   */
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <div className="mt-14 w-full min-w-0 overflow-x-hidden">
      {/* Carousel */}
      <motion.div
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="
          w-full
          min-w-0
          overflow-x-auto
          overflow-y-hidden
          scroll-smooth
          snap-x
          snap-mandatory
          px-0.5
          pt-4
          pb-4
          outline-none
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div className="flex w-full gap-4 sm:gap-5">
          {featured.map(({ plan, badge }) => {
            const BadgeIcon =
              BADGE_CONFIG[badge]?.icon ?? Star;

            const badgeClass =
              BADGE_CONFIG[badge]?.className ??
              "border-border bg-muted text-foreground";

            return (
              <motion.article
                key={plan.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                }}
                className="
                  group
                  relative
                  flex
                  min-w-0
                  flex-[0_0_85%]
                  max-w-[300px]
                  snap-start
                  flex-col
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-5
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-lg
                  sm:flex-[0_0_calc(50%-0.625rem)]
                  sm:max-w-none
                  sm:p-6
                  lg:flex-[0_0_calc(33.333333%-0.833333rem)]
                "
              >
                {/* Hover background */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-3xl
                    bg-primary/[0.025]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Badge */}
                <div className="relative mb-5">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      ${badgeClass}
                    `}
                  >
                    <BadgeIcon
                      className="h-3 w-3"
                      strokeWidth={2.5}
                    />

                    {badge}
                  </span>
                </div>

                {/* Provider */}
                <div className="relative flex items-center gap-3">
                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      text-lg
                      font-bold
                      shadow-sm
                      ring-1
                      ring-black/5
                      dark:ring-white/10
                      ${plan.logoClass}
                    `}
                  >
                    {plan.logoLetter}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-sm font-medium text-muted-foreground">
                        {plan.hmoName}
                      </p>

                      {plan.verified && (
                        <ShieldCheck
                          className="h-4 w-4 shrink-0 text-primary"
                          aria-label="Verified provider"
                        />
                      )}
                    </div>

                    <h3 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-foreground">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="relative mt-7">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem]">
                      ₦{formatPrice(plan.priceMonthly)}
                    </span>

                    <span className="ml-1 text-sm text-muted-foreground">
                      /mo
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground">
                    ₦{formatPrice(plan.priceAnnual)} billed annually
                  </p>
                </div>

                {/* Category */}
                <div className="relative mt-3">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-border
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-foreground
                    "
                  >
                    {plan.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="relative mt-5 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />

                  <span className="text-sm font-semibold text-foreground">
                    {plan.rating}
                  </span>

                  <span className="truncate text-sm text-muted-foreground">
                    (
                    {plan.reviewCount.toLocaleString(
                      "en-NG"
                    )}{" "}
                    reviews)
                  </span>
                </div>

                {/* Hospitals */}
                <div
                  className="
                    relative
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-border
                    pt-5
                  "
                >
                  <Building2 className="h-5 w-5 shrink-0 text-muted-foreground" />

                  <span className="text-sm text-muted-foreground">
                    {plan.hospitalCount} partner hospitals
                  </span>
                </div>

                {/* Coverage */}
                <div className="relative mt-5 flex-1">
                  <ul className="space-y-3">
                    {plan.coverage.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          text-muted-foreground
                        "
                      >
                        <Check
                          className="
                            mt-0.5
                            h-4
                            w-4
                            shrink-0
                            text-primary
                          "
                          strokeWidth={2.5}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="relative mt-7 grid grid-cols-2 gap-3">
                  <Link
                    href={`/plans/${plan.id}`}
                    className="
                      inline-flex
                      h-11
                      min-w-0
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-border
                      bg-background
                      px-2
                      text-sm
                      font-semibold
                      text-foreground
                      transition-all
                      duration-200
                      hover:bg-muted
                      active:scale-[0.98]
                      sm:px-3
                    "
                  >
                    <span className="truncate">
                      View Details
                    </span>

                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>

                  <Link
                    href={`/plans/${plan.id}/buy`}
                    className="
                      inline-flex
                      h-11
                      min-w-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary
                      px-2
                      text-sm
                      font-semibold
                      text-primary-foreground
                      shadow-sm
                      transition-all
                      duration-200
                      hover:opacity-90
                      hover:shadow-md
                      active:scale-[0.98]
                      sm:px-3
                    "
                  >
                    Buy Now
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom controls */}
      <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-4 sm:flex-nowrap sm:gap-3">
        {/* Navigation */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous plans"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-foreground
              shadow-sm
              transition
              hover:bg-muted
              active:scale-95
              sm:h-10
              sm:w-10
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next plans"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-foreground
              shadow-sm
              transition
              hover:bg-muted
              active:scale-95
              sm:h-10
              sm:w-10
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pagination dots */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-wrap
            items-center
            justify-center
            gap-1.5
            px-1
          "
          role="tablist"
          aria-label="Featured plan slides"
        >
          {Array.from({
            length: pageCount,
          }).map((_, index) => {
            const isActive =
              index === activePage;

            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${
                  index + 1
                }`}
                onClick={() => goToPage(index)}
                className="
                  flex
                  h-6
                  shrink-0
                  items-center
                  justify-center
                  px-0.5
                "
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "h-2 w-5 bg-primary"
                        : "h-1.5 w-1.5 bg-border"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}