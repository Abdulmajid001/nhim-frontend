"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

const topics = [
  {
    label: "Plans & cover",
    icon: ShieldCheck,
    questions: [
      [
        "How do I compare health plans?",
        "Use Compare Plans to review benefits, hospitals, prices, and member ratings side by side. When you find a plan that fits, select it to see the full details and start enrolment.",
      ],
      [
        "What does an HMO plan cover?",
        "Cover varies by plan. Each listing shows the benefits, exclusions, hospitals, and limits you should know before enrolling.",
      ],
      [
        "Can I change my plan later?",
        "Your options depend on the plan and its terms. Contact your HMO or our support team and we will help you understand the next step.",
      ],
    ],
  },
  {
    label: "Buying a plan",
    icon: MessageCircle,
    questions: [
      [
        "How do I enrol?",
        "Choose a plan, create your NHIM.ng account, and follow the checkout steps. You will receive confirmation when your enrolment is processed.",
      ],
      [
        "How do I pay?",
        "Payment options are shown during checkout. Keep your confirmation details after payment so our team can quickly help if you need us.",
      ],
      [
        "I need help with my enrolment",
        "Contact support with your registered email and any payment reference. This helps us find your request faster.",
      ],
    ],
  },
  {
    label: "Account & support",
    icon: Search,
    questions: [
      [
        "I forgot my password. What should I do?",
        "Select Forgot password on the login page and follow the instructions sent to your email address.",
      ],
      [
        "How do I make a complaint?",
        "We take complaints seriously. Visit our Complaints page to submit the details and see the resolution process.",
      ],
      [
        "How can I contact NHIM.ng?",
        "Send us the details of your question through the support options below. Our team will route it to the right person.",
      ],
    ],
  },
];

export function HelpExplorer() {
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState(
    "How do I compare health plans?",
  );
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 p-9">
          <label className="relative mx-auto block max-w-2xl text-left">
            <span className="sr-only">Search help articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search your question"
              className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="space-y-10">
          {topics.map(({ label, icon: Icon, questions }) => {
            const visibleQuestions = questions.filter(
              ([question, answer]) =>
                !normalizedQuery ||
                `${question} ${answer} ${label}`
                  .toLowerCase()
                  .includes(normalizedQuery),
            );
            if (!visibleQuestions.length) return null;
            return (
              <div key={label}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h2 className="text-xl font-semibold">{label}</h2>
                </div>
                <div className="divide-y divide-border border-y border-border">
                  {visibleQuestions.map(([question, answer]) => {
                    const isOpen = openQuestion === question;
                    return (
                      <div key={question}>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenQuestion(isOpen ? "" : question)
                          }
                          className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-semibold text-foreground"
                        >
                          {question}
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-muted-foreground">
                            {answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {normalizedQuery &&
            !topics.some(({ label, questions }) =>
              questions.some(([question, answer]) =>
                `${question} ${answer} ${label}`
                  .toLowerCase()
                  .includes(normalizedQuery),
              ),
            ) && (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No articles match that search. Try a different question or
                contact our team.
              </p>
            )}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-semibold">Still need a hand?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team is ready to help you find the right answer.
            </p>
          </div>
          <Link
            href="/legal/complaints"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Contact support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}