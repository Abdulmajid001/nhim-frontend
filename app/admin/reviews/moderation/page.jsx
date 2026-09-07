import { ReviewsModerationClient } from "@/components/admin/ReviewsModerationClient";

const MOCK_REVIEWS = [
  {
    id: "rev-001",
    author: "Emeka Okonkwo",
    date: "04 Sep 2026",
    hmo: "CarePlus HMO",
    hospital: "St. Nicholas Hospital, Lagos",
    rating: 2,
    comment:
      "Hospital stated my emergency optical check wasn't pre-authorized despite plan brochure stating full coverage.",
    flagReason: "Billing Co-pay Dispute",
    status: "Flagged",
  },
  {
    id: "rev-002",
    author: "Fatima Aliyu",
    date: "03 Sep 2026",
    hmo: "Wellcare HMO",
    hospital: "Cedarcrest Hospital, Abuja",
    rating: 1,
    comment:
      "Customer service hotline was unreachable during night admission at emergency ward.",
    flagReason: "Unreachable Hotline Report",
    status: "Flagged",
  },
  {
    id: "rev-003",
    author: "Chukwudi Eze",
    date: "02 Sep 2026",
    hmo: "Hygeia HMO",
    hospital: "Lagoon Hospital Ikoyi",
    rating: 5,
    comment:
      "Prompt admission and seamless digital card check-in. Specialist consultation was completely covered with zero hassle.",
    flagReason: null,
    status: "Approved",
  },
  {
    id: "rev-004",
    author: "Zainab Mohammed",
    date: "01 Sep 2026",
    hmo: "Reliance HMO",
    hospital: "Aminu Kano Specialist Clinic",
    rating: 4,
    comment:
      "Friendly hospital reception and fast pharmacy dispensary. Maternity scan approval took only 15 minutes.",
    flagReason: null,
    status: "Approved",
  },
  {
    id: "rev-005",
    author: "Tariq Danjuma",
    date: "31 Aug 2026",
    hmo: "Leadway Health",
    hospital: "ECHO Specialist Hospital",
    rating: 3,
    comment:
      "Good care but waited almost 2 hours for HMO officer to issue pre-authorization code for dental extraction.",
    flagReason: null,
    status: "Pending",
  },
  {
    id: "rev-006",
    author: "Blessing Adeyemi",
    date: "29 Aug 2026",
    hmo: "AXA Mansard",
    hospital: "Reddington Hospital VI",
    rating: 5,
    comment:
      "Top-notch pediatric care for my toddler. The app ID card worked without paper verification.",
    flagReason: null,
    status: "Pending",
  },
];

export const metadata = {
  title: "Review Moderation Desk | Admin Portal",
  description: "Audit and moderate member feedback and HMO ratings.",
};

export default function AdminReviewModerationPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Review Moderation
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Audit member reviews, investigate flagged provider feedback, and maintain platform trust.
        </p>
      </header>

      {/* Reviews Moderation Client */}
      <ReviewsModerationClient initialReviews={MOCK_REVIEWS} />
    </div>
  );
}
