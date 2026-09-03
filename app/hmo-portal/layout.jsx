import { HmoPortalSidebar } from "@/components/layout/HmoPortalSidebar";

export default function HmoPortalLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col lg:flex-row">
      {/* Sticky Desktop Sidebar & Mobile Header */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0 z-30">
        <HmoPortalSidebar />
      </div>

      {/* Main Content Area that scrolls independently */}
      <main className="flex-1 min-w-0 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
