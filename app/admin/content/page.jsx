import { ContentManagementClient } from "@/components/admin/ContentManagementClient";

const MOCK_CONTENT = [
  {
    id: "art-001",
    title: "How to Choose the Right Health Insurance Plan in Nigeria",
    snippet: "Complete guide explaining HMO tiers, co-pays, deductibles, and family benefits.",
    type: "Guide",
    category: "Consumer Education",
    updatedDate: "03 Sep 2026",
    status: "Published",
  },
  {
    id: "art-002",
    title: "Understanding Pre-Existing Conditions and Waiting Periods",
    snippet: "Everything policyholders must know before utilizing maternity and chronic disease coverage.",
    type: "Guide",
    category: "Policy Literacy",
    updatedDate: "28 Aug 2026",
    status: "Published",
  },
  {
    id: "art-003",
    title: "How Do I Present My Digital ID Card at Partner Hospitals?",
    snippet: "Step-by-step instructions for instant check-in using the NHIM digital QR code.",
    type: "FAQ",
    category: "Member Support",
    updatedDate: "25 Aug 2026",
    status: "Published",
  },
  {
    id: "art-004",
    title: "What Out-of-Pocket Expenses Are Eligible for Claims Reimbursement?",
    snippet: "Detailed breakdown of emergency treatment claims, physician receipts, and timelines.",
    type: "FAQ",
    category: "Claims Guide",
    updatedDate: "20 Aug 2026",
    status: "Published",
  },
  {
    id: "art-005",
    title: "NHIA 2026 Regulatory Accreditation Standards for HMOs",
    snippet: "Official announcement regarding federal accreditation guidelines and Tier-1 benchmarks.",
    type: "Announcement",
    category: "Regulatory Notice",
    updatedDate: "15 Aug 2026",
    status: "Published",
  },
  {
    id: "art-006",
    title: "NHIM Expands Hospital Partner Network Across Northern Nigeria",
    snippet: "Over 120 new diagnostic centers and clinics added to the national provider directory.",
    type: "Announcement",
    category: "Network Expansion",
    updatedDate: "10 Aug 2026",
    status: "Published",
  },
];

export const metadata = {
  title: "Content Management | Admin Portal",
  description: "Manage consumer guides, FAQs, and platform announcements.",
};

export default function AdminContentPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Content
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage health insurance educational articles, FAQ guides, and public marketplace announcements.
        </p>
      </header>

      {/* Content Management Client */}
      <ContentManagementClient initialArticles={MOCK_CONTENT} />
    </div>
  );
}
