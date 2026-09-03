import { StaffClient } from "./StaffClient";

const MOCK_STAFF = [
  {
    id: "st-01",
    name: "Dr. Olumide Johnson",
    email: "olumide.johnson@reliancehmo.ng",
    role: "Medical Director",
    department: "Clinical Oversight",
    lastActive: "Today, 10:45 AM",
    status: "Active",
  },
  {
    id: "st-02",
    name: "Halima Garba",
    email: "halima.garba@reliancehmo.ng",
    role: "Claims Lead",
    department: "Claims & Reimbursements",
    lastActive: "Today, 09:12 AM",
    status: "Active",
  },
  {
    id: "st-03",
    name: "Chukwudi Eze",
    email: "chukwudi.eze@reliancehmo.ng",
    role: "Underwriter",
    department: "Risk & Policy Pricing",
    lastActive: "Yesterday",
    status: "Active",
  },
  {
    id: "st-04",
    name: "Fatima Al-Hassan",
    email: "fatima.hassan@reliancehmo.ng",
    role: "Customer Support Lead",
    department: "Member Relations",
    lastActive: "2 days ago",
    status: "Active",
  },
  {
    id: "st-05",
    name: "Kelechi Nwankwo",
    email: "kelechi.nwankwo@reliancehmo.ng",
    role: "Claims Officer",
    department: "Claims & Billing",
    lastActive: "Invited",
    status: "Invited",
  },
];

export default async function HmoStaffPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-500">Team & Access</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Staff & Team
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage organization team members, roles, and administrative permissions.
          </p>
        </div>
      </header>

      {/* Interactive Staff Management */}
      <section className="mt-8">
        <StaffClient initialStaff={MOCK_STAFF} />
      </section>
    </div>
  );
}
