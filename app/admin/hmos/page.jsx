import { HmoRegistryClient } from "@/components/admin/HmoRegistryClient";
import { getHmos } from "@/lib/api/hmos";

const PENDING_HMOS = [
  {
    id: "clearline-hmo",
    name: "Clearline International Care",
    cacNumber: "RC-8392011",
    nhiaLicense: "NHIA/HMO/2024/048",
    headquarters: "Lagos, Nigeria",
    submittedDate: "Today, 10:45 AM",
  },
  {
    id: "zenith-medicare",
    name: "Zenith Medicare Assurance",
    cacNumber: "RC-9920145",
    nhiaLicense: "NHIA/HMO/2024/051",
    headquarters: "Abuja, FCT",
    submittedDate: "Yesterday",
  },
  {
    id: "heritage-health",
    name: "Heritage Health Management",
    cacNumber: "RC-4102948",
    nhiaLicense: "NHIA/HMO/2024/053",
    headquarters: "Port Harcourt, Rivers",
    submittedDate: "2 days ago",
  },
];

export const metadata = {
  title: "HMO Providers | Admin Portal",
  description: "Manage HMO provider licensing, audits, and verification.",
};

export default async function AdminHmosPage() {
  const verifiedHmos = await getHmos();

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          HMO Providers
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Audit provider licensing, inspect corporate credentials, and manage accreditation.
        </p>
      </header>

      {/* Interactive Registry Table */}
      <HmoRegistryClient initialHmos={verifiedHmos} pendingHmos={PENDING_HMOS} />
    </div>
  );
}
