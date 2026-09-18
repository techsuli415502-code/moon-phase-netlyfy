import Link from "next/link";
import MoonPhaseHero from "@/components/MoonPhaseHero";

/**
 * Homepage hero section.
 * Contains the live Moon emoji, the current phase name, and key stats.
 */
export default function HeroSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://moonphaseemoji.example/",
      },
    ],
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative nebula blobs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl nebula"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-secondary/40 blur-3xl nebula"
        style={{ animationDelay: "-12s" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        <MoonPhaseHero />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/moon-phases"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Browse Moon Phases
          </Link>
          <Link
            href="/moon-calendar"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-muted sm:w-auto"
          >
            Open Moon Calendar
          </Link>
        </div>

        <p
          id="hero-heading"
          className="sr-only"
        >
          Current phase of the Moon with live lunar data
        </p>
      </div>
    </section>
  );
}
