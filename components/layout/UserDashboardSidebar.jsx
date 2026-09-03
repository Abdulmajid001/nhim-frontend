"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  FileText,
  IdCard,
  LayoutDashboard,
  Menu,
  Settings,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) =>
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-900">
              NHIM
            </span>
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <nav className="flex flex-col gap-1">
              {userDashboardNav.map((item) => {
                const Icon = iconMap[item.href] || LayoutDashboard;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
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
          </div>
        ) : null}
      </header>

      <aside className="hidden border-b border-slate-200 bg-white lg:block lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:overflow-y-auto">
        <div className="p-5">
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
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
        </div>
      </aside>
    </>
  );
}


