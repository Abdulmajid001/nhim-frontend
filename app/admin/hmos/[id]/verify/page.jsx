import { notFound } from "next/navigation";
import { HmoVerifyClient } from "@/components/admin/HmoVerifyClient";
import { getHmos } from "@/lib/api/hmos";

const PENDING_AUDIT_HMOS = {
  "clearline-hmo": {
    id: "clearline-hmo",
    name: "Clearline International Care",
    cacNumber: "RC-8392011",
    nhiaLicense: "NHIA/HMO/2024/048",
    tinNumber: "20938102-0001",
    status: "Pending Audit",
    accreditationTier: "Tier 1 National",
    submittedDate: "04 Sep 2026",
    registeredAddress: "Plot 18, Commercial Avenue, Yaba, Lagos",
    officialEmail: "regulatory@clearline.ng",
    officialPhone: "+234 (0) 1 490 2811",
    bankName: "Zenith Bank PLC (Acct: 1012938472)",
    yearsOperating: "11 Years (Founded 2015)",
    mdName: "Dr. Babatunde Jinadu (MBBS, MPH)",
    hospitalCount: 340,
    initialNotes:
      "All primary corporate documents submitted. CAC registration and NHIA license verified with federal databases. Awaiting final officer sign-off.",
  },
  "zenith-medicare": {
    id: "zenith-medicare",
    name: "Zenith Medicare Assurance",
    cacNumber: "RC-9920145",
    nhiaLicense: "NHIA/HMO/2024/051",
    tinNumber: "38920194-0001",
    status: "Pending Audit",
    accreditationTier: "Tier 1 National",
    submittedDate: "03 Sep 2026",
    registeredAddress: "Zenith Heights, Plot 872, Central Business District, Abuja",
    officialEmail: "compliance@zenithmedicare.ng",
    officialPhone: "+234 (0) 9 461 8200",
    bankName: "Zenith Bank PLC (Acct: 2004819201)",
    yearsOperating: "8 Years (Founded 2018)",
    mdName: "Mrs. Nkiru Okonjo (MBA, ACII)",
    hospitalCount: 410,
    initialNotes: "NHIA and CAC credentials submitted. Professional indemnity under review.",
  },
  "heritage-health": {
    id: "heritage-health",
    name: "Heritage Health Management",
    cacNumber: "RC-4102948",
    nhiaLicense: "NHIA/HMO/2024/053",
    tinNumber: "10948291-0001",
    status: "Pending Audit",
    accreditationTier: "Tier 2 Zonal",
    submittedDate: "02 Sep 2026",
    registeredAddress: "56 Olu Obasanjo Way, Port Harcourt, Rivers State",
    officialEmail: "audit@heritagehealth.ng",
    officialPhone: "+234 (0) 84 291 049",
    bankName: "Access Bank PLC (Acct: 0092817462)",
    yearsOperating: "6 Years (Founded 2020)",
    mdName: "Dr. Magnus Briggs (FWACP)",
    hospitalCount: 185,
    initialNotes: "Zonal application for South-South & South-East regions.",
  },
};

export const metadata = {
  title: "Verify HMO Accreditation | NHIM Control Center",
  description: "Compliance officer audit and regulatory verification desk.",
};

export default async function HmoVerifyPage({ params }) {
  const { id } = await params;

  // Check pending audit records first
  let hmo = PENDING_AUDIT_HMOS[id];

  // If not found in pending, check existing HMOs from API
  if (!hmo) {
    const allHmos = await getHmos();
    const existing = allHmos.find((h) => h.id === id || h.slug === id);
    if (existing) {
      hmo = {
        id: existing.id,
        name: existing.name,
        cacNumber: `RC-${Math.floor(1000000 + Math.random() * 9000000)}`,
        nhiaLicense: `NHIA/HMO/2024/${Math.floor(10 + Math.random() * 90)}`,
        tinNumber: "10948291-0001",
        status: existing.accreditationStatus === "verified" ? "Verified & Accredited" : "Pending Audit",
        accreditationTier: "Tier 1 National",
        submittedDate: "15 Aug 2026",
        registeredAddress: `${existing.locations?.[0] || "Lagos"}, Nigeria`,
        officialEmail: `compliance@${existing.slug}.ng`,
        officialPhone: "+234 (0) 1 800 2938",
        bankName: "Guaranty Trust Bank (Acct: 0192847291)",
        yearsOperating: "10+ Years",
        mdName: "Dr. Chief Medical Officer",
        hospitalCount: 350,
        initialNotes: "Existing accredited provider on NHIM marketplace.",
      };
    }
  }

  // Fallback to default Clearline profile if requested with a generic id like 'verify' or 'new'
  if (!hmo) {
    hmo = {
      id: id || "hmo-req-001",
      name: "Clearline International Care",
      cacNumber: "RC-8392011",
      nhiaLicense: "NHIA/HMO/2024/048",
      tinNumber: "20938102-0001",
      status: "Pending Audit",
      accreditationTier: "Tier 1 National",
      submittedDate: "Today, 10:45 AM",
      registeredAddress: "Plot 18, Commercial Avenue, Yaba, Lagos",
      officialEmail: "regulatory@clearline.ng",
      officialPhone: "+234 (0) 1 490 2811",
      bankName: "Zenith Bank PLC (Acct: 1012938472)",
      yearsOperating: "11 Years (Founded 2015)",
      mdName: "Dr. Babatunde Jinadu (MBBS, MPH)",
      hospitalCount: 340,
      initialNotes:
        "All primary corporate documents submitted. CAC registration and NHIA license verified with federal databases. Awaiting final officer sign-off.",
    };
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <HmoVerifyClient hmo={hmo} />
    </div>
  );
}
