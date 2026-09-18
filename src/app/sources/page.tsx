import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SOURCES, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Sources for Moon Phase Data",
  description:
    "The trusted references we use for Moon phase data on this site. A short, verified source list you can check yourself.",
  alternates: { canonical: "https://moonphaseemoji.example/sources" },
  openGraph: {
    title: "Our Sources for Moon Phase Data",
    description:
      "The trusted references we use for Moon phase data on this site. A short, verified source list you can check yourself.",
    url: "https://moonphaseemoji.example/sources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Sources for Moon Phase Data",
    description:
      "The trusted references we use for Moon phase data on this site.",
  },
};

export default function SourcesPage() {
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
        name: "Sources",
        item: `${SITE_URL}/sources`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-white/60"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Sources
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
              Trusted References
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white glow-text-strong sm:text-5xl">
              Our Sources
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              We keep our source list short on purpose. These three trusted
              references are the only places we check for Moon phase data. Use
              them to verify anything you read on this site.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {SOURCES.map((source) => (
              <article
                key={source.url}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white">
                      {source.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {source.description}
                    </p>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-[oklch(0.92_0.06_75)] transition-colors hover:bg-white/10"
                  >
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-4 break-all text-xs text-white/40">
                  {source.url}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">
                Why a Short Source List
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                A short source list is easier to check. It also keeps us
                honest. When you see a Moon phase on this site, you can match
                it against any of these three references and trust the result.
                We do not pull data from random sources, and we do not invent
                numbers.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.12_0.02_270)] shadow-[0_0_24px_rgba(255,235,180,0.35)] transition-transform hover:scale-[1.03]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
