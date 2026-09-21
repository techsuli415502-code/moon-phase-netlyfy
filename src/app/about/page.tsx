import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotRectangle, AdSlotLeaderboard } from "@/components/AdSlots";
import { AUTHOR, CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Why We Built Moon Phase Emoji",
  description:
    "Learn why Moon Phase Emoji exists, our mission to make lunar phase data simple and useful, and meet the content specialist behind the site.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Us: Why We Built Moon Phase Emoji",
    description:
      "Learn why Moon Phase Emoji exists, our mission, and meet the content specialist behind the site.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Moon Phase Emoji",
    description:
      "Learn why Moon Phase Emoji exists and meet the content specialist behind the site.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      description: AUTHOR.bio,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground glow-text-strong sm:text-5xl">
              Why We Built Moon Phase Emoji
            </h1>
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground">
            <p>
              I built Moon Phase Emoji because the Moon is one of the easiest
              things in the sky to enjoy, but the information about it often
              feels too complex or buried in tables. I wanted a single page
              that just shows what the Moon is doing right now, with the right
              emoji, and a clear explanation of why.
            </p>
            <p>
              The goal is simple. Show the current phase, give it a name and
              an emoji, and explain what that phase means in plain English.
              No jargon. No long detours. Just a useful lunar snapshot you can
              trust, with sources you can check yourself.
            </p>
            <p>
              The site also includes a full Moon phase calendar so you can
              look up the phase for any day. It is not meant to replace
              professional astronomy tools. It is meant to give regular people
              a quick, honest answer to a simple question: what is the Moon
              doing tonight?
            </p>
            <p>
              I check every claim against the trusted sources listed on the
              Sources page. If you spot something that looks off, please get
              in touch. The contact page is the fastest way to reach me.
            </p>
          </div>
        </div>
      </section>

      {/* Rectangle between the mission section and the author bio -
          natural break between two content sections. */}
      <AdSlotRectangle />

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl nebula"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                About the Content Specialist
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl">
                {AUTHOR.name} | {AUTHOR.role}
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
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Contact Me
                </Link>
                <Link
                  href="/sources"
                  className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  See Sources
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop leaderboard above the footer - last visible placement
          before the page ends. */}
      <AdSlotLeaderboard />
    </>
  );
}
