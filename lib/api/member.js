import { getPlanById } from "./plans";

const MEMBER = {
  firstName: "Adaeze",
  lastName: "Okafor",
  email: "adaeze.okafor@example.com",
  policyNumber: "NHM-CP-STANDARD-2481",
  enrolledOn: "12 Mar 2025",
  renewsOn: "12 Mar 2027",
  dependants: 2,
  beneficiaries: [
    {
      id: "ben-1",
      name: "Chukwudi Okafor",
      relationship: "Spouse",
      dateOfBirth: "14 Jun 1991",
      status: "Active",
      initials: "CO",
    },
    {
      id: "ben-2",
      name: "Kamsi Okafor",
      relationship: "Child",
      dateOfBirth: "02 Sep 2018",
      status: "Active",
      initials: "KO",
    },
  ],
  claimsUsed: 3,
  claimsTotal: 8,
  balance: 0,
  claims: [
    {
      id: "CLM-20481",
      type: "Pharmacy reimbursement",
      facility: "HealthPlus Pharmacy",
      date: "18 Aug 2026",
      amount: 18500,
      status: "Approved",
    },
    {
      id: "CLM-20422",
      type: "Consultation",
      facility: "Lagoon Hospital",
      date: "04 Aug 2026",
      amount: 8000,
      status: "Processing",
    },
    {
      id: "CLM-20376",
      type: "Lab investigations",
      facility: "Eko Hospital",
      date: "22 Jul 2026",
      amount: 12500,
      status: "Approved",
    },
    {
      id: "CLM-20118",
      type: "Dental consultation",
      facility: "Reddington Hospital",
      date: "11 Jun 2026",
      amount: 22000,
      status: "Declined",
    },
  ],
  reviews: [
    {
      id: "REV-01",
      provider: "Lagoon Hospital",
      service: "Outpatient consultation",
      date: "06 Aug 2026",
      rating: 5,
      comment: "The care team was kind and I was seen quickly.",
    },
    {
      id: "REV-02",
      provider: "HealthPlus Pharmacy",
      service: "Pharmacy reimbursement",
      date: "22 Aug 2026",
      rating: 4,
      comment: "Clear process and helpful support team.",
    },
  ],
  recentClaims: [
    {
      type: "Pharmacy reimbursement",
      date: "18 Aug 2026",
      amount: 18500,
      status: "Approved",
    },
    {
      type: "Consultation",
      date: "04 Aug 2026",
      amount: 8000,
      status: "Processing",
    },
    {
      type: "Lab investigations",
      date: "22 Jul 2026",
      amount: 12500,
      status: "Approved",
    },
  ],
};

export async function getMemberDashboard() {
  const plan = await getPlanById("cp-standard");
  return { ...MEMBER, plan };
}
