import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Social SVG Icons (independent of lucide-react brand removals)
function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterXIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const navigation = {
  company: [
    { label: "About Us", href: "/help" },
    { label: "Blogs", href: "/blog" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/help" },
    { label: "FAQs", href: "/help" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/privacy" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: TwitterXIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 text-foreground transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-sm">
                N
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground">
                NHIM<span className="text-primary">.ng</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground dark:text-zinc-400">
              Nigeria&apos;s premier digital marketplace for health insurance.
              Compare, choose, and buy affordable health insurance from trusted
              HMOs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/60 text-muted-foreground shadow-2xs transition-all duration-200 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-primary dark:hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground dark:text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 pt-4 text-sm text-muted-foreground dark:text-zinc-400">
          <a
            href="mailto:support@nhim.ng"
            className="inline-flex items-center gap-2.5 transition-colors duration-150 hover:text-primary dark:hover:text-white"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>support@nhim.ng</span>
          </a>
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-2.5 transition-colors duration-150 hover:text-primary dark:hover:text-white"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>0800-123-4567</span>
          </a>
          <div className="inline-flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center dark:border-zinc-800 dark:text-zinc-400">
          <p>© 2026 NHIM.ng. All rights reserved.</p>
          <p>Regulated by NHIS (National Health Insurance Scheme)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;