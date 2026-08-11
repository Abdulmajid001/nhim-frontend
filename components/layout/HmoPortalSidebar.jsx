import Link from "next/link";
import { hmoPortalNav } from "@/config/site";

export function HmoPortalSidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-ink/10 px-4 py-8">
      <nav className="flex flex-col gap-1">
        {hmoPortalNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-graphite hover:bg-paper-dim hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
