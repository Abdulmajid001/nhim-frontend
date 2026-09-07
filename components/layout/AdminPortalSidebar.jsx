"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  FileText,
  LayoutDashboard,
  Menu,
  Receipt,
  ShieldAlert,
  ShieldCheck,
  Star,
  UserCog,
  Users,
  X,
} from "lucide-react";
import { adminNav } from "@/config/site";

const iconMap = {
  "/admin/dashboard": LayoutDashboard,
  "/admin/hmos": ShieldCheck,
  "/admin/hospitals": Building2,
  "/admin/users": Users,
  "/admin/transactions": Receipt,
  "/admin/reviews/moderation": Star,
  "/admin/content": FileText,
  "/admin/reports": BarChart3,
  "/admin/staff-roles": UserCog,
};

export function AdminPortalSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/admin/dashboard") {
      return pathname === href || pathname === "/admin";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile Top Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-sidebar-border bg-sidebar lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                NHIM Control Center
              </p>
              <p className="text-sm font-bold text-sidebar-foreground">
                Admin Portal
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sidebar-border text-sidebar-foreground transition hover:bg-sidebar-accent"
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
              {adminNav.map((item) => {
                const Icon = iconMap[item.href] || LayoutDashboard;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      (active
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-medium") +
                      " flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 border-t border-sidebar-border pt-3">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>Super Administrator Mode</span>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-72 flex-col justify-between border-r border-sidebar-border bg-sidebar lg:flex lg:overflow-y-auto">
        <div className="p-5">
          {/* Admin Portal Brand Header */}
          <div className="mb-6 flex items-center gap-3 rounded-2xl p-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <ShieldCheck  className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  NHIM Admin
                </p>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="truncate text-base font-bold text-sidebar-foreground">
                Control Center
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {adminNav.map((item) => {
              const Icon = iconMap[item.href] || LayoutDashboard;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    (active
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-medium") +
                    " flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors"
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
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
