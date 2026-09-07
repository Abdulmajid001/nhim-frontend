import { AdminPortalSidebar } from "@/components/layout/AdminPortalSidebar";

export const metadata = {
  title: "Admin Dashboard | NHIM.ng Control Center",
  description: "Nigeria Health Insurance Market regulatory & administrative control center.",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground lg:flex-row">
      {/* Sticky Desktop Sidebar & Mobile Header */}
      <div className="z-30 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0">
        <AdminPortalSidebar />
      </div>

      {/* Main Content Area */}
      <main className="min-w-0 flex-1 pt-16 lg:pt-0">{children}</main>
    </div>
  );
}
