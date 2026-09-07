import { UsersManagementClient } from "@/components/admin/UsersManagementClient";

const MOCK_USERS = [
  {
    id: "usr-001",
    name: "Dr. Olanrewaju Adebayo",
    email: "o.adebayo@healthmail.ng",
    phone: "+234 803 192 8472",
    hasPolicy: true,
    plan: "Gold Executive Plus",
    hmo: "Hygeia HMO",
    policyId: "NHM-LA-8291",
    joinedDate: "12 Jan 2026",
    status: "Active",
  },
  {
    id: "usr-002",
    name: "Amina Bello",
    email: "amina.bello@abuja-co.ng",
    phone: "+234 812 492 0184",
    hasPolicy: true,
    plan: "Silver Family Shield",
    hmo: "Reliance HMO",
    policyId: "NHM-AB-1903",
    joinedDate: "03 Feb 2026",
    status: "Active",
  },
  {
    id: "usr-003",
    name: "Kester Chidubem",
    email: "kester.c@gmail.com",
    phone: "+234 809 384 7192",
    hasPolicy: true,
    plan: "Individual Basic Care",
    hmo: "Leadway Health",
    policyId: "NHM-RV-4820",
    joinedDate: "18 Mar 2026",
    status: "Active",
  },
  {
    id: "usr-004",
    name: "Grace Okafor",
    email: "grace.okafor@outlook.com",
    phone: "+234 701 928 3746",
    hasPolicy: true,
    plan: "Gold Care Plus",
    hmo: "Reliance HMO",
    policyId: "NHM-GK-4872",
    joinedDate: "02 Apr 2026",
    status: "Active",
  },
  {
    id: "usr-005",
    name: "Tunde Bakare",
    email: "tunde@bakare-enterprises.ng",
    phone: "+234 802 819 2837",
    hasPolicy: true,
    plan: "SME Corporate Health",
    hmo: "AXA Mansard",
    policyId: "NHM-LA-9021",
    joinedDate: "14 May 2026",
    status: "Active",
  },
  {
    id: "usr-006",
    name: "Ibrahim Shehu",
    email: "ibrahim.shehu@kanomarket.ng",
    phone: "+234 805 192 8374",
    hasPolicy: false,
    plan: null,
    hmo: null,
    policyId: null,
    joinedDate: "22 Jun 2026",
    status: "Active",
  },
  {
    id: "usr-007",
    name: "Folake Adeleke",
    email: "folake.adeleke@yahoo.com",
    phone: "+234 818 293 8471",
    hasPolicy: false,
    plan: null,
    hmo: null,
    policyId: null,
    joinedDate: "08 Jul 2026",
    status: "Active",
  },
];

export const metadata = {
  title: "User Management | Admin Portal",
  description: "Manage registered members, policyholders, and user accounts.",
};

export default function AdminUsersPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Users
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage registered members, individual policyholders, and account access.
        </p>
      </header>

      {/* Users Management Client */}
      <UsersManagementClient initialUsers={MOCK_USERS} />
    </div>
  );
}
