import type { Metadata } from "next";
import Link from "next/link";
import LiveMoonWidget from "@/components/LiveMoonWidget";
import EightPhasesGuide from "@/components/sections/EightPhasesGuide";
import LunarCycleExplanation from "@/components/sections/LunarCycleExplanation";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moon Phases: The Eight Lunar Phases Explained",
  description:
    "Learn the eight moon phases in order, from New Moon to Full Moon and back. See the current lunar phase, what each phase means, and how the lunar cycle works.",
  alternates: { canonical: "https://moonphaseemoji.example/moon-phases" },
  openGraph: {
    title: "Moon Phases: The Eight Lunar Phases Explained",
    description:
      "Learn the eight moon phases in order, from New Moon to Full Moon and back. See the current lunar phase and how the lunar cycle works.",
    url: "https://moonphaseemoji.example/moon-phases",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Phases: The Eight Lunar Phases Explained",
    description:
      "Learn the eight moon phases in order, with the current lunar phase, what each means, and how the lunar cycle works.",
  },
};

export default function MoonPhasesPage() {
  const jsonLd = {
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
        name: "Moon Phases",
        item: `${SITE_URL}/moon-phases`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                Moon Phases
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
                The Eight Lunar Phases
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white glow-text-strong sm:text-5xl">
                Moon Phases, Explained Simply
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                The Moon goes through eight named phases each lunar cycle. This
                page shows the current phase, walks through all eight phases in
                order, and explains how the cycle repeats month after month.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Every phase has a meaning, a visibility window, and a matching
                moon emoji. Use this page as a quick reference whenever you
                want to know what the Moon is doing tonight or any other night.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/moon-calendar"
                  className="inline-flex items-center rounded-lg bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.12_0.02_270)] shadow-[0_0_24px_rgba(255,235,180,0.35)] transition-transform hover:scale-[1.03]"
                >
                  Open Moon Calendar
                </Link>
                <Link
                  href="/sources"
                  className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Sources
                </Link>
              </div>
            </div>

            <LiveMoonWidget />
          </div>
        </div>
      </section>

      <EightPhasesGuide />
      <LunarCycleExplanation />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want to Track the Moon Over Time?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                The Moon phase calendar shows you the phase for every day of
                the month. Tap any day to see its full lunar snapshot, with
                illumination, lunar age, and more.
              </p>
              <Link
                href="/moon-calendar"
                className="mt-6 inline-flex items-center rounded-lg bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.12_0.02_270)] shadow-[0_0_24px_rgba(255,235,180,0.35)] transition-transform hover:scale-[1.03]"
              >
                Open Moon Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
