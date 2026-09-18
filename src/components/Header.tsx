"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

/**
 * Sticky header with hash-based navigation.
 * Links scroll to sections on the same page so they work in the preview
 * sandbox as well as in production deployments.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");

  // Track active section for nav highlight
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  function isActive(href: string): boolean {
    const id = href.replace("#", "");
    return activeSection === id;
  }

  function handleClick(href: string) {
    setOpen(false);
    // Allow hash to update naturally; smooth scroll handled by CSS
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[oklch(0.07_0.025_280/85%)] backdrop-blur-lg supports-[backdrop-filter]:bg-[oklch(0.07_0.025_280/75%)]">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          onClick={() => handleClick("#top")}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.92_0.06_75)] to-[oklch(0.75_0.15_285)] text-[oklch(0.12_0.02_270)] shadow-[0_0_18px_rgba(180,160,255,0.4)]"
            aria-hidden="true"
          >
            <Moon className="h-4 w-4" />
          </span>
          <span className="text-base sm:text-lg">
            <span className="gradient-text">Moon Phase Emoji</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:bg-white/5 hover:text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <ul className="mx-4 mb-3 flex flex-col gap-1 rounded-lg border border-white/10 bg-[oklch(0.1_0.03_275/95%)] p-3 backdrop-blur-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
