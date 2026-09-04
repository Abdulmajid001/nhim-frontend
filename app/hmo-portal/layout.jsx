import { HmoPortalSidebar } from "@/components/layout/HmoPortalSidebar";

export default function HmoPortalLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground lg:flex-row">
      {/* Sticky Desktop Sidebar & Mobile Header */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0 z-30">
        <HmoPortalSidebar />
      </div>

      {/* Main Content Area that scrolls independently */}
      <main className="flex-1 min-w-0 pt-16 lg:pt-0">{children}</main>
    </div>
  );
}
