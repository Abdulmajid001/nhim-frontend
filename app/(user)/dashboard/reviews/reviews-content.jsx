"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Send,
  Star,
} from "lucide-react";
import { getMemberDashboard } from "@/lib/api/member";

export default function ReviewsContent() {
  const [member, setMember] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getMemberDashboard().then(setMember);
  }, []);

  if (!member)
    return (
      <div className="p-8 text-sm text-muted-foreground">
        Loading your reviews...
      </div>
    );

  const submitReview = (event) => {
    event.preventDefault();
    if (!rating || !comment.trim()) return;
    setSubmitted(true);
    setRating(0);
    setComment("");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <header>
        <p className="text-sm font-medium text-primary">Your voice matters</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My reviews
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Share your care experience and help other members choose well.
        </p>
      </header>
      <section className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-3xl border border-border bg-linear-to-br from-primary/10 via-card to-accent/60 p-6 text-foreground shadow-sm sm:p-8 dark:from-primary/12 dark:via-card dark:to-accent/20">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">
            Your feedback improves care
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Reviews help the NHIM community find reliable hospitals and services
            within their network.
          </p>
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
            <span className="text-3xl font-bold">{member.reviews.length}</span>
            <span className="text-sm text-muted-foreground">
              reviews shared
              <br />
              with the community
            </span>
          </div>
        </div>
        <form
          onSubmit={submitReview}
          className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-bold text-foreground">Write a review</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about a recent care experience.
              </p>
            </div>
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          </div>
          {submitted && (
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2.5 text-sm font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              Thanks, your review is awaiting moderation.
            </div>
          )}
          <div className="mt-7">
            <p className="text-sm font-semibold text-foreground">
              How would you rate your experience?
            </p>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`${value} star${value > 1 ? "s" : ""}`}
                  onClick={() => setRating(value)}
                  className="rounded-lg p-1 transition hover:bg-accent"
                >
                  <Star
                    className={`h-7 w-7 ${value <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/60"}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <label className="mt-6 block text-sm font-semibold text-foreground">
            Your review
            <textarea
              required
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows="4"
              placeholder="What went well? What could be better?"
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Submit review
          </button>
        </form>
      </section>
      <section className="mt-6 rounded-3xl border border-border bg-background p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-foreground">
              Your published reviews
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your experiences with NHIM providers
            </p>
          </div>
          <Link
            href="/hmos"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Explore providers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {member.reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {review.provider}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {review.service} · {review.date}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
                  {review.rating}.0{" "}
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}