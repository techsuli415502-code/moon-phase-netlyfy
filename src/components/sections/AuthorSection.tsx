import Link from "next/link";
import { AUTHOR, SITE_URL } from "@/lib/site";

/**
 * E-E-A-T section: About the Content Specialist.
 * First-person bio written by Jacob Moses, focused on clear content,
 * research, source checking, and user needs.
 */
export default function AuthorSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    description: AUTHOR.bio,
    url: `${SITE_URL}/about`,
  };

  return (
    <section
      id="about-specialist"
      aria-labelledby="author-heading"
      className="section-padding"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl nebula"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About the Content Specialist
            </p>
            <h2
              id="author-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
            >
              About the Content Specialist
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                <div
                  className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-primary text-2xl font-bold text-primary-foreground shadow-sm"
                  aria-hidden="true"
                >
                  JM
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {AUTHOR.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{AUTHOR.role}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-base leading-relaxed text-foreground">
                  {AUTHOR.bio}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Want to dig deeper? Check the{" "}
                  <Link
                    href="/"
                    className="text-primary hover:underline font-medium"
                  >
                    today&apos;s moon phase
                  </Link>{" "}
                  at the top of this page, browse the{" "}
                  <Link
                    href="/moon-phases"
                    className="text-primary hover:underline font-medium"
                  >
                    moon phases explained
                  </Link>{" "}
                  guide, or open the{" "}
                  <Link
                    href="/moon-calendar"
                    className="text-primary hover:underline font-medium"
                  >
                    moon phase calendar
                  </Link>{" "}
                  to look up any date.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    More About Us
                  </Link>
                  <Link
                    href="/sources"
                    className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    View Our Sources
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
