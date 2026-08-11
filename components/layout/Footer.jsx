import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Compare Plans", href: "/plans" },
      { label: "Browse HMOs", href: "/hmos" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    heading: "For HMOs",
    links: [
      { label: "Partner with us", href: "/for-hmos" },
      { label: "HMO login", href: "/login" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/help" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Complaints", href: "/legal/complaints" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                NHIM<span className="text-primary">.ng</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The Nigeria Health Insurance Market — compare, buy, and
              manage health cover from every accredited HMO in one place.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NHIM.ng — Nigeria Health
            Insurance Market. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Registered &amp; regulated marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
}