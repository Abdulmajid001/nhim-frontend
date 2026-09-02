"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  FileText,
  HeartPulse,
  IdCard,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Star,
  UserCircle2,
  Users,
} from "lucide-react";
// import { userDashboardNav } from "@/app/config/site";

const iconMap = {
  "/dashboard": LayoutDashboard,
  "/dashboard/plan": CreditCard,
  "/dashboard/id-card": IdCard,
  "/dashboard/beneficiaries": Users,
  "/dashboard/claims": FileText,
  "/dashboard/reviews": Star,
  "/dashboard/settings": Settings,
};

export const userDashboardNav = [
  { label: "Overview", href: "/dashboard" },
  { label: "My Plan", href: "/dashboard/plan" },
  { label: "ID Card", href: "/dashboard/id-card" },
  { label: "Beneficiaries", href: "/dashboard/beneficiaries" },
  { label: "Claims", href: "/dashboard/claims" },
  { label: "My Reviews", href: "/dashboard/reviews" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function UserDashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside className="w-full shrink-0 border-r border-slate-200 bg-white/95 backdrop-blur-xl lg:w-72">
      <div className="flex h-full flex-col p-5">
        <div className="mb-6 flex items-center gap-3 px-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Member portal
            </p>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              NHIM<span className="text-primary">.ng</span>
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {userDashboardNav.map((item) => {
            const Icon = iconMap[item.href] || LayoutDashboard;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  (active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900") +
                  " flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
                }
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* <div className="mt-auto rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/10 p-4">
          <div className="mb-2 flex items-center gap-2 text-primary">
            <HeartPulse className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Coverage status
            </span>
          </div>
          <p className="text-lg font-semibold text-slate-900">Active</p>
          <p className="mt-1 text-sm text-slate-600">Renewal due in 19 days</p>
        </div> */}
      </div>
    </aside>
  );
}
