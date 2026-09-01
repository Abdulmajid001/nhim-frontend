import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Headphones,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach more members",
    text: "Put your plans in front of people actively looking for trusted cover across Nigeria.",
  },
  {
    icon: BarChart3,
    title: "Grow with clear insights",
    text: "See how people discover, compare, and choose your plans from one simple portal.",
  },
  {
    icon: Headphones,
    title: "Keep support close",
    text: "Give members a smoother experience while our team helps with the marketplace layer.",
  },
];

const steps = [
  [
    "01",
    "Tell us about your HMO",
    "Share your organisation and plan details with our partnerships team.",
  ],
  [
    "02",
    "Get verified",
    "We review your credentials and help you prepare a clear plan listing.",
  ],
  [
    "03",
    "Start growing",
    "Go live, meet new members, and manage your marketplace presence.",
  ],
];

export default function ForHmosPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/15 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-primary-foreground/70">
              <ShieldCheck className="h-4 w-4 text-primary" />
              The marketplace for better health cover
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Make your HMO the easy choice.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-secondary-foreground/70 sm:text-lg">
              NHIM.ng connects accredited HMOs with people who are ready to find
              and buy health insurance. Bring your plans to a marketplace built
              for clarity and trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register/hmo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Become a partner <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center rounded-lg border border-secondary-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary-foreground/10"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-start justify-between border-b border-secondary-foreground/15 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-secondary-foreground/50">
                  Partner snapshot
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Built for the next member
                </p>
              </div>
              <Stethoscope className="h-7 w-7 text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-6">
              {[
                "Plan discovery",
                "Member trust",
                "Simple listings",
                "Actionable data",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-secondary-foreground/10 px-3 py-3 text-sm text-secondary-foreground/80"
                >
                  <Check className="h-4 w-4 shrink-0 text-primary" /> {item}
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-6 text-secondary-foreground/60">
              One place to present your plans, strengthen your reputation, and
              serve members better.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why NHIM.ng
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A better front door for your plans.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Your team knows health insurance. We make it easier for the right
            people to find it, understand it, and take the next step.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-t-2 border-primary pt-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Getting started
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Three steps to go live.
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {steps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid gap-4 py-6 sm:grid-cols-[48px_1fr] sm:gap-6"
                >
                  <span className="text-sm font-semibold text-primary">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-7 rounded-2xl bg-primary px-7 py-10 text-primary-foreground sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let&apos;s make healthcare easier to choose.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-primary-foreground/75">
              Join the marketplace helping Nigerians find cover they can feel
              good about.
            </p>
          </div>
          <Link
            href="/register/hmo"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-secondary transition-opacity hover:opacity-90"
          >
            Register your HMO <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
