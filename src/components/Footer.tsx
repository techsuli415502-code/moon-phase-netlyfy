import Link from "next/link";
import { Moon } from "lucide-react";
import { FOOTER_LINKS, CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-bold text-foreground"
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.75_0.15_75)] to-[oklch(0.45_0.2_285)] text-white shadow-sm"
                aria-hidden="true"
              >
                <Moon className="h-4 w-4" />
              </span>
              <span className="gradient-text">Moon Phase Emoji</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your live guide to the current Moon phase, with the right emoji,
              illumination and lunar cycle info for any day.
            </p>
          </div>

          {/* Site links */}
          <nav aria-label="Footer site links">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.site.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label="Footer legal links">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Info
            </h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {year} Moon Phase Emoji. All rights reserved. Moon phase
            data is for general reference and education.
          </p>
        </div>
      </div>
    </footer>
  );
}
