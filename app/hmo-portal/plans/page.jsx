import Link from "next/link";
import {
  FileSpreadsheet,
  Plus,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { PlansClient } from "@/app/hmo-portal/plans/PlansClient";
import { formatPrice } from "@/lib/utils";

function StatCard({ label, value, detail, icon: Icon, tone }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={`rounded-xl p-2.5 ${tone}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold tracking-tight text-card-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}

const HMO_PLANS = [
  {
    id: "gold-care-plus",
    name: "Gold Care Plus",
    tier: "Premium",
    status: "Active",
    priceAnnual: 640000,
    enrollees: 6230,
    hospitalsCount: 184,
    description: "Comprehensive coverage with private wards, international emergency, and full maternity care.",
    coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical"],
  },
  {
    id: "silver-family",
    name: "Silver Family",
    tier: "Standard",
    status: "Active",
    priceAnnual: 380000,
    enrollees: 4600,
    hospitalsCount: 142,
    description: "Ideal family coverage offering secondary specialist care, pediatric care, and semi-private rooms.",
    coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"],
  },
  {
    id: "bronze-basic",
    name: "Bronze Basic",
    tier: "Basic",
    status: "Active",
    priceAnnual: 180000,
    enrollees: 2670,
    hospitalsCount: 96,
    description: "Essential primary healthcare covering consultations, emergency stabilization, and diagnostics.",
    coverage: ["Outpatient", "Emergency", "Basic Labs"],
  },
  {
    id: "corporate-platinum",
    name: "Corporate Platinum",
    tier: "Enterprise",
    status: "Active",
    priceAnnual: 920000,
    enrollees: 1350,
    hospitalsCount: 220,
    description: "Executive group healthcare tier with zero co-pays and VIP hospital access.",
    coverage: ["Executive Health", "Inpatient", "Maternity", "Surgery", "Dental", "Optical", "Wellness"],
  },
  {
    id: "student-starter",
    name: "Student Starter",
    tier: "Basic",
    status: "Draft",
    priceAnnual: 95000,
    enrollees: 0,
    hospitalsCount: 65,
    description: "Affordable youth and tertiary student healthcare plan with campus partner clinics.",
    coverage: ["Outpatient", "Emergency", "Prescriptions"],
  },
  {
    id: "senior-shield",
    name: "Senior Shield 65+",
    tier: "Specialized",
    status: "Draft",
    priceAnnual: 750000,
    enrollees: 0,
    hospitalsCount: 110,
    description: "Specialized geriatric healthcare plan covering chronic illness management and home visits.",
    coverage: ["Chronic Care", "Inpatient", "Specialist Visits", "Physiotherapy"],
  },
];

export default async function HmoPlansPage() {
  const activeCount = HMO_PLANS.filter((p) => p.status === "Active").length;
  const totalEnrollees = HMO_PLANS.reduce((sum, p) => sum + p.enrollees, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Plan Management
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Insurance Plans
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create, edit, and manage health insurance tiers published on the
            NHIM marketplace.
          </p>
        </div>

        <Link
          href="/hmo-portal/plans/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Plan</span>
        </Link>
      </header>

      {/* Stats Cards */}
      {/* <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <StatCard
          label="Total Plans"
          value={`${HMO_PLANS.length} Plans`}
          detail="All configured tiers"
          icon={FileSpreadsheet}
          tone="bg-muted text-muted-foreground"
        />
        <StatCard
          label="Marketplace Active"
          value={`${activeCount} Active`}
          detail="Open for public purchase"
          icon={ShieldCheck}
          tone="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
        />
        <StatCard
          label="Total Plan Enrollees"
          value={totalEnrollees.toLocaleString()}
          detail="Across active policies"
          icon={Users}
          tone="bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
        />
        <StatCard
          label="Average Annual Price"
          value={formatPrice(494000)}
          detail="Competitive market rate"
          icon={TrendingUp}
          tone="bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"
        />
      </section> */}

      {/* Interactive Plans Table / Grid */}
      <section className="mt-8">
        <PlansClient initialPlans={HMO_PLANS} />
      </section>
    </div>
  );
}
