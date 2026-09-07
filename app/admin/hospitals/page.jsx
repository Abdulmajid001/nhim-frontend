import { HospitalsRegistryClient } from "@/components/admin/HospitalsRegistryClient";

const MOCK_HOSPITALS = [
  {
    id: "hosp-001",
    name: "St. Nicholas Hospital",
    city: "Lagos Island",
    state: "Lagos",
    address: "57 Campbell Street",
    code: "HOSP-LA-0012",
    tier: "Tier-1",
    specialty: "Multi-Specialty & Renal Transplant",
    status: "Accredited",
    hmoCount: 16,
  },
  {
    id: "hosp-002",
    name: "Cedarcrest Hospitals",
    city: "Gudu District",
    state: "Abuja (FCT)",
    address: "Plot 1208, Gudu",
    code: "HOSP-AB-0045",
    tier: "Tier-1",
    specialty: "Orthopedic & Trauma Surgery",
    status: "Accredited",
    hmoCount: 14,
  },
  {
    id: "hosp-003",
    name: "Lagoon Hospital Ikoyi",
    city: "Ikoyi",
    state: "Lagos",
    address: "Bourdillon Road",
    code: "HOSP-LA-0019",
    tier: "Tier-1",
    specialty: "Critical Care & Cardiology",
    status: "Accredited",
    hmoCount: 18,
  },
  {
    id: "hosp-004",
    name: "ECHO Specialist Hospital",
    city: "Port Harcourt",
    state: "Rivers",
    address: "Stadium Road",
    code: "HOSP-RV-0082",
    tier: "Tier-2",
    specialty: "General Surgery & Pediatrics",
    status: "Accredited",
    hmoCount: 11,
  },
  {
    id: "hosp-005",
    name: "Aminu Kano Specialist Clinic",
    city: "Nassarawa",
    state: "Kano",
    address: "Zoo Road, Kano",
    code: "HOSP-KN-0024",
    tier: "Tier-2",
    specialty: "Maternity & Internal Medicine",
    status: "Accredited",
    hmoCount: 9,
  },
  {
    id: "hosp-006",
    name: "Reddington Hospital Victoria Island",
    city: "Victoria Island",
    state: "Lagos",
    address: "Idowu Martins Street",
    code: "HOSP-LA-0008",
    tier: "Tier-1",
    specialty: "Comprehensive Tertiary Care",
    status: "Accredited",
    hmoCount: 17,
  },
  {
    id: "hosp-007",
    name: "University College Hospital Outreach",
    city: "Ibadan",
    state: "Oyo",
    address: "Queen Elizabeth Road",
    code: "HOSP-OY-0031",
    tier: "Primary",
    specialty: "Primary Diagnostic & Family Care",
    status: "Accredited",
    hmoCount: 12,
  },
  {
    id: "hosp-008",
    name: "Medicaid Radio-Diagnostics",
    city: "Wuse 2",
    state: "Abuja (FCT)",
    address: "Aminu Kano Crescent",
    code: "HOSP-AB-0091",
    tier: "Primary",
    specialty: "Advanced Diagnostics & Labs",
    status: "Accredited",
    hmoCount: 15,
  },
];

export const metadata = {
  title: "Hospital Master Registry | Admin Portal",
  description: "National master directory of accredited healthcare providers across Nigeria.",
};

export default function AdminHospitalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hospitals
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          National master registry of accredited clinics, secondary general hospitals, and tertiary centers.
        </p>
      </header>

      {/* Hospitals Registry Client */}
      <HospitalsRegistryClient initialHospitals={MOCK_HOSPITALS} />
    </div>
  );
}
