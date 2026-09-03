import { ReviewsClient } from "./ReviewsClient";

const MOCK_REVIEWS = [
  {
    id: "rev-01",
    author: "Grace Okafor",
    isVerified: true,
    planName: "Gold Care Plus",
    rating: 5,
    date: "28 Aug 2026",
    comment: "The hospital network coverage is exceptional. I had an emergency consultation in Ikoyi and my approval was verified in under 10 minutes at Lagoon Hospital without any out-of-pocket delays.",
    status: "Approved",
  },
  {
    id: "rev-02",
    author: "Babajide Adeleke",
    isVerified: true,
    planName: "Silver Family",
    rating: 4,
    date: "19 Aug 2026",
    comment: "Great family plan overall. Pediatric and maternity consultations were handled smoothly at Reddington. The digital ID card on the portal makes verification straightforward.",
    status: "Pending",
  },
  {
    id: "rev-03",
    author: "Emeka Danjuma",
    isVerified: true,
    planName: "Bronze Basic",
    rating: 5,
    date: "04 Aug 2026",
    comment: "Very cost-effective plan for essential care. Routine checkups and basic diagnostic labs were covered without hassle in Abuja.",
    status: "Approved",
  },
  {
    id: "rev-04",
    author: "Chioma Nwosu",
    isVerified: true,
    planName: "Gold Care Plus",
    rating: 3,
    date: "22 Jul 2026",
    comment: "Coverage is comprehensive, but had a slight delay getting pharmacy medication approval on a Sunday afternoon. Overall customer service is responsive.",
    status: "Pending",
  },
  {
    id: "rev-05",
    author: "Amina Bello",
    isVerified: true,
    planName: "Corporate Platinum",
    rating: 5,
    date: "14 Jul 2026",
    comment: "Our organization switched our 250+ employees to Reliance HMO through NHIM. Outstanding care and effortless claim turnaround.",
    status: "Approved",
  },
];

export default async function HmoReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-500">Feedback & Ratings</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Member Reviews
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Review and approve customer feedback for display on the marketplace.
          </p>
        </div>
      </header>

      {/* Interactive Reviews List */}
      <section className="mt-8">
        <ReviewsClient initialReviews={MOCK_REVIEWS} />
      </section>
    </div>
  );
}
