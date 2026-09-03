import { EnrolleesClient } from "./EnrolleesClient";

const MOCK_ENROLLEES = [
  {
    id: "enr-01",
    name: "Grace Okafor",
    email: "grace.okafor@gmail.com",
    policyNumber: "NHM-GK-4872",
    planName: "Gold Care Plus",
    beneficiariesCount: 2,
    renewalDate: "24 Sep 2026",
    status: "Active",
  },
  {
    id: "enr-02",
    name: "Babajide Adeleke",
    email: "b.adeleke@outlook.com",
    policyNumber: "NHM-BA-1903",
    planName: "Silver Family",
    beneficiariesCount: 3,
    renewalDate: "15 Oct 2026",
    status: "Active",
  },
  {
    id: "enr-03",
    name: "Chioma Nwosu",
    email: "chioma.nwosu@yahoo.com",
    policyNumber: "NHM-CN-8291",
    planName: "Gold Care Plus",
    beneficiariesCount: 0,
    renewalDate: "04 Nov 2026",
    status: "Active",
  },
  {
    id: "enr-04",
    name: "Emeka Danjuma",
    email: "emeka.danjuma@gmail.com",
    policyNumber: "NHM-ED-5612",
    planName: "Bronze Basic",
    beneficiariesCount: 1,
    renewalDate: "12 Dec 2026",
    status: "Active",
  },
  {
    id: "enr-05",
    name: "Amina Bello",
    email: "amina.bello@fct.gov.ng",
    policyNumber: "NHM-AB-3420",
    planName: "Corporate Platinum",
    beneficiariesCount: 4,
    renewalDate: "18 Aug 2026",
    status: "Pending",
  },
  {
    id: "enr-06",
    name: "Tunde Bakare",
    email: "tundebakare@gmail.com",
    policyNumber: "NHM-TB-9104",
    planName: "Silver Family",
    beneficiariesCount: 2,
    renewalDate: "01 Jul 2026",
    status: "Expired",
  },
  {
    id: "enr-07",
    name: "Folake Alabi",
    email: "folake.alabi@techcorp.ng",
    policyNumber: "NHM-FA-7731",
    planName: "Corporate Platinum",
    beneficiariesCount: 1,
    renewalDate: "29 Jan 2027",
    status: "Active",
  },
  {
    id: "enr-08",
    name: "Ibrahim Musa",
    email: "ibrahim.musa@gmail.com",
    policyNumber: "NHM-IM-2849",
    planName: "Bronze Basic",
    beneficiariesCount: 0,
    renewalDate: "14 Feb 2027",
    status: "Active",
  },
];

export default async function HmoEnrolleesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-500">Enrollee Directory</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enrollees
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage subscribed members, policy verification, and coverage history.
          </p>
        </div>
      </header>

      {/* Interactive Enrollees Table */}
      <section className="mt-8">
        <EnrolleesClient initialEnrollees={MOCK_ENROLLEES} />
      </section>
    </div>
  );
}
