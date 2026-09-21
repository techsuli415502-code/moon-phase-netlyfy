import type { Metadata } from "next";
import Link from "next/link";
import MoonCalendar from "@/components/MoonCalendar";
import LiveMoonWidget from "@/components/LiveMoonWidget";
import {
  AdSlotLeaderboard,
  AdSlotRectangle,
  AdSlotRectangleCompact,
} from "@/components/AdSlots";
import { ALL_PHASES } from "@/lib/moonPhase";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moon Phase Calendar: Daily Lunar Phases",
  description:
    "Interactive moon phase calendar with the daily lunar phase for any month. Tap a day to see the moon emoji, illumination, lunar age, and more.",
  alternates: { canonical: `${SITE_URL}/moon-calendar` },
  openGraph: {
    title: "Moon Phase Calendar: Daily Lunar Phases",
    description:
      "Interactive moon phase calendar with the daily lunar phase for any month. Tap a day to see the moon emoji and full lunar snapshot.",
    url: `${SITE_URL}/moon-calendar`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Phase Calendar: Daily Lunar Phases",
    description:
      "Interactive moon phase calendar with the daily lunar phase for any month.",
  },
};

export default function MoonCalendarPage() {
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
        name: "Moon Calendar",
        item: `${SITE_URL}/moon-calendar`,
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
                Moon Calendar
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Plan Around the Moon
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground glow-text-strong sm:text-5xl">
              Moon Phase Calendar
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground">
              Browse the lunar phase for any day of any month. Tap a day on
              the calendar to see its full Moon phase details, including
              illumination, lunar age, and the matching Moon emoji. Use the
              arrows to step through the months.
            </p>
          </div>

          <div className="mt-10">
            <MoonCalendar />
          </div>
        </div>
      </section>

      {/* Rectangle right after the interactive calendar - high-value
          placement because users who just used the tool are
          naturally transitioning to next steps. */}
      <AdSlotRectangle />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  How to Read the Calendar
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
                  <p>
                    Each cell on the calendar shows the day of the month with
                    a small Moon emoji. The emoji matches the lunar phase
                    computed for that date at midday.
                  </p>
                  <p>
                    Tap any day to load its full lunar snapshot in the side
                    panel. You will see the phase name, illumination, lunar
                    age, days until next Full Moon, and days until next New
                    Moon.
                  </p>
                  <p>
                    Use the left and right arrows at the top to step back or
                    forward one month at a time. You can also jump straight to
                    the current month with the link in the middle.
                  </p>
                  <p>
                    The calendar is a general reference. The exact minute a
                    Moon phase starts can vary by a few hours from the value
                    shown. For precise timings, please check the sources on
                    our Sources page.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <LiveMoonWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop leaderboard between the "how to read" section and
          the legend section - mid-page high-visibility placement. */}
      <AdSlotLeaderboard />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Legend
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The Eight Moon Emojis
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These are the same Moon emojis that appear on the calendar.
              Each one stands for a specific phase in the lunar cycle.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ALL_PHASES.map((p) => (
              <div
                key={p.key}
                className="glass-card rounded-xl p-5 text-center"
              >
                <div
                  className="text-4xl leading-none moon-glow"
                  aria-hidden="true"
                >
                  {p.emoji}
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  {p.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
