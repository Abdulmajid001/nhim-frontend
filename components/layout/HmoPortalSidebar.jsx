"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  Receipt,
  Settings,
  ShieldCheck,
  Star,
  TrendingUp,
  UserCog,
  Users,
  X,
} from "lucide-react";
import { hmoPortalNav } from "@/config/site";

const iconMap = {
  "/hmo-portal/dashboard": LayoutDashboard,
  "/hmo-portal/analytics": TrendingUp,
  "/hmo-portal/plans": FileSpreadsheet,
  "/hmo-portal/hospitals": Building2,
  "/hmo-portal/enrollees": Users,
  "/hmo-portal/invoices": Receipt,
  "/hmo-portal/reviews": Star,
  "/hmo-portal/staff": UserCog,
  "/hmo-portal/settings": Settings,
};

export function HmoPortalSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/hmo-portal/dashboard") {
      return pathname === href || pathname === "/hmo-portal";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile Top Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-sidebar-border bg-sidebar lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/hmo-portal/dashboard"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground">
                HMO Portal
              </p>
              <p className="text-sm font-semibold text-sidebar-foreground">
                Reliance HMO
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sidebar-border text-sidebar-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen ? (
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-sidebar-border bg-sidebar px-4 py-3">
            <nav className="flex flex-col gap-1">
              {hmoPortalNav.map((item) => {
                const Icon = iconMap[item.href] || LayoutDashboard;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      (active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground") +
                      " flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium"
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 border-t border-sidebar-border pt-3">
              <div className="flex items-center gap-2 px-3 py-2 text-xs text-sidebar-foreground">
                <CheckCircle2 className="h-4 w-4" />
                <span>Accredited NHIM Partner</span>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-72 flex-col justify-between border-r border-sidebar-border bg-sidebar lg:flex lg:overflow-y-auto">
        <div className="p-5">
          {/* HMO Portal Brand Header */}
          <div className="mb-6 flex items-center gap-3 p-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground">
              <Building2 className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sidebar-foreground">
                  HMO Portal
                </p>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <p className="truncate text-base font-bold text-sidebar-foreground">
                Reliance HMO
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {hmoPortalNav.map((item) => {
              const Icon = iconMap[item.href] || LayoutDashboard;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    (active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-medium") +
                    " flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm"
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Accreditation & Info Box */}
        <div className="border-t border-sidebar-border p-5">
          <div className="rounded-2xl border border-sidebar-border bg-sidebar-accent p-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-sidebar-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>NHIM License #034</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}