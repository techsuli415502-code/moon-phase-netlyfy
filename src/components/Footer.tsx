import Link from "next/link";
import { Moon } from "lucide-react";
import { FOOTER_LINKS, SOURCES, CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[oklch(0.06_0.02_275/95%)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-bold text-white"
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.92_0.06_75)] to-[oklch(0.75_0.15_285)] text-[oklch(0.12_0.02_270)]"
                aria-hidden="true"
              >
                <Moon className="h-4 w-4" />
              </span>
              <span className="gradient-text">Moon Phase Emoji</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Your live guide to the current Moon phase, with the right emoji,
              illumination and lunar cycle info for any day.
            </p>
          </div>

          {/* Site links */}
          <nav aria-label="Footer site links">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.site.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label="Footer legal links">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Info
            </h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-white/70 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </nav>

          {/* Sources */}
          <nav aria-label="Footer sources">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Our Sources
            </h2>
            <ul className="space-y-2">
              {SOURCES.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/50">
            &copy; {year} Moon Phase Emoji. All rights reserved. Moon phase
            data is for general reference and education.
          </p>
        </div>
      </div>
    </footer>
  );
}
