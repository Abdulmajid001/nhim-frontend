import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function JoinNhim() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-12 text-secondary-foreground shadow-xl sm:px-10 lg:px-16">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="overflow-hidden rounded-full border-4 border-primary/30 bg-white shadow-2xl">
                <Image
                  src="/hero-img.jpg"
                  alt="NHIM healthcare doctor"
                  width={420}
                  height={420}
                  className="h-[280px] w-[280px] object-cover sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/70 bg-white px-7 py-2 text-center shadow-lg backdrop-blur">
                <p className="text-sm text-gray-900 sm:text-base">
                  Trusted by 100K+ Nigerians
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Join NHIM Today — Your Health, Your Choice
            </h2>

            <p className="mt-5 text-base leading-8 text-secondary-foreground/80 sm:text-lg">
              Start your journey to better health coverage. Compare plans,
              connect with trusted HMOs, and secure your family's future in
              minutes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-lg dark:bg-background dark:hover:bg-background/80"
              >
                Explore Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}