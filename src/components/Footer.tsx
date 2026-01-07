import Link from "next/link";
import { Logo } from "./Logo";

const navigation = {
  product: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pilot Program", href: "/pilot" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <span className="font-semibold text-foreground text-lg">
                Nexly
              </span>
            </Link>
            <p className="text-sm text-foreground-muted mb-4 max-w-xs">
              Automated lead response infrastructure for Twin Cities service companies.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground-muted">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Twin Cities metro
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sales@hennepinlogic.xyz"
                  className="text-sm text-foreground-muted hover:text-primary transition-colors"
                >
                  sales@hennepinlogic.xyz
                </a>
              </li>
              <li>
                <a
                  href="tel:+16125551234"
                  className="text-sm text-foreground-muted hover:text-primary transition-colors"
                >
                  (612) 695-1337
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/hennepinlogic-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground-muted hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Schedule Demo
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-foreground-muted">
              © {new Date().getFullYear()} Nexly. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-foreground-muted mt-4">
            All automated messaging follows TCPA guidelines. Opt out instructions included in every message.
          </p>
        </div>
      </div>
    </footer>
  );
}
