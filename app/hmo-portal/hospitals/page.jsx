import {
  Building2,
  CheckCircle2,
  MapPin,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { HospitalsClient } from "@/app/hmo-portal/hospitals/HospitalsClient";

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

const HMO_HOSPITALS = [
  {
    id: "lagoon-ikoyi",
    name: "Lagoon Hospital Ikoyi",
    address: "17B Bourdillon Road, Ikoyi",
    city: "Ikoyi",
    state: "Lagos",
    tier: "Tertiary Specialist",
    enrolleesTreated: 840,
    rating: 4.9,
    reviews: 142,
    status: "Accredited",
  },
  {
    name: "Reddington Hospital",
    id: "reddington-vi",
    address: "12 Idowu Martins Street, Victoria Island",
    city: "Victoria Island",
    state: "Lagos",
    tier: "Tertiary Specialist",
    enrolleesTreated: 690,
    rating: 4.8,
    reviews: 120,
    status: "Accredited",
  },
  {
    name: "Cedarcrest Hospital",
    id: "cedarcrest-abuja",
    address: "Plot 1042, Sam Mbakwe Street, Gudu District",
    city: "Gudu",
    state: "Abuja",
    tier: "Secondary Referral",
    enrolleesTreated: 540,
    rating: 4.7,
    reviews: 88,
    status: "Accredited",
  },
  {
    name: "Lily Hospitals",
    id: "lily-warri",
    address: "6 Emiko Close, Off Deco Road",
    city: "Warri",
    state: "Delta",
    tier: "Secondary Referral",
    enrolleesTreated: 430,
    rating: 4.6,
    reviews: 64,
    status: "Accredited",
  },
  {
    name: "First Cardiology Consultants",
    id: "first-cardiology",
    address: "20 Thompson Avenue, Ikoyi",
    city: "Ikoyi",
    state: "Lagos",
    tier: "Tertiary Specialist",
    enrolleesTreated: 310,
    rating: 4.9,
    reviews: 95,
    status: "Accredited",
  },
  {
    name: "St. Nicholas Hospital",
    id: "st-nicholas-lagos",
    address: "57 Campbell Street, Lagos Island",
    city: "Lagos Island",
    state: "Lagos",
    tier: "Tertiary Specialist",
    enrolleesTreated: 480,
    rating: 4.7,
    reviews: 110,
    status: "Accredited",
  },
  {
    name: "Nizamiye Hospital",
    id: "nizamiye-abuja",
    address: "Plot 113, Cadastral Zone F01, Life Camp",
    city: "Life Camp",
    state: "Abuja",
    tier: "Tertiary Specialist",
    enrolleesTreated: 390,
    rating: 4.8,
    reviews: 76,
    status: "Accredited",
  },
  {
    name: "MECURE Healthcare Diagnostic",
    id: "mecure-oshodi",
    address: "Debo Industrial Compound, Oshodi",
    city: "Oshodi",
    state: "Lagos",
    tier: "Primary & Diagnostic",
    enrolleesTreated: 720,
    rating: 4.6,
    reviews: 130,
    status: "Accredited",
  },
  {
    name: "University College Hospital (UCH)",
    id: "uch-ibadan",
    address: "Queen Elizabeth II Road, Agodi",
    city: "Ibadan",
    state: "Oyo",
    tier: "Teaching Hospital",
    enrolleesTreated: 510,
    rating: 4.5,
    reviews: 104,
    status: "Accredited",
  },
  {
    name: "Aminu Kano Teaching Hospital",
    id: "akth-kano",
    address: "Zaria Road, Tarauni",
    city: "Kano",
    state: "Kano",
    tier: "Teaching Hospital",
    enrolleesTreated: 340,
    rating: 4.4,
    reviews: 58,
    status: "Accredited",
  },
];

export default async function HmoHospitalsPage() {
  const totalStates = new Set(HMO_HOSPITALS.map((h) => h.state)).size;
  const totalVisits = HMO_HOSPITALS.reduce((acc, h) => acc + h.enrolleesTreated, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Provider Network
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Partner Hospitals
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Accredited hospitals, clinics, and diagnostic centers linked to your
            coverage plans.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          <span>Add Hospital Provider</span>
        </button>
      </header>

      {/* KPI Stats Grid */}
      {/* <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <StatCard
          label="Partner Network"
          value={`${HMO_HOSPITALS.length} Centers`}
          detail="100% NHIA compliant"
          icon={Building2}
          tone="bg-muted text-muted-foreground"
        />
        <StatCard
          label="States Covered"
          value={`${totalStates} States & FCT`}
          detail="Nationwide reach"
          icon={MapPin}
          tone="bg-emerald-100 text-emerald-700"
        />
        <StatCard
          label="Enrollee Visits YTD"
          value={totalVisits.toLocaleString()}
          detail="Care encounters verified"
          icon={Users}
          tone="bg-blue-100 text-blue-700"
        />
        <StatCard
          label="Provider Rating"
          value="4.7 / 5.0"
          detail="Patient satisfaction"
          icon={Star}
          tone="bg-amber-100 text-amber-700"
        />
      </section> */}

      {/* Interactive Hospitals Table */}
      <section className="mt-8">
        <HospitalsClient initialHospitals={HMO_HOSPITALS} />
      </section>
    </div>
  );
}
