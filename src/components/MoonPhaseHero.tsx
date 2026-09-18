"use client";

import { useEffect, useState } from "react";
import { getMoonPhase, formatMoonDate } from "@/lib/moonPhase";
import type { MoonPhaseData } from "@/lib/moonPhase";

/**
 * Live Moon phase hero.
 * Calculates the current lunar phase on the client using a standard
 * synodic-month algorithm and updates it every minute.
 *
 * The H1 includes the main SEO keyword "current phase of the moon as an
 * emoji" in a natural sentence below the live phase name, so the keyword
 * is present without keyword stuffing.
 */
export default function MoonPhaseHero() {
  const [phase, setPhase] = useState<MoonPhaseData | null>(null);

  useEffect(() => {
    const update = () => setPhase(getMoonPhase(new Date()));
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!phase) {
    // Static placeholder rendered on server and during first paint to
    // avoid hydration mismatch.
    return (
      <div className="flex flex-col items-center text-center">
        <div
          className="text-[7rem] sm:text-[10rem] leading-none moon-glow"
          aria-hidden="true"
        >
          {"\u{1F315}"}
        </div>
        <div className="mt-6 h-8 w-48 animate-pulse rounded bg-muted" />
      </div>
    );
  }

  const trendLabel =
    phase.trend === "waxing" ? "Waxing (growing)" : "Waning (shrinking)";

  return (
    <div className="flex flex-col items-center text-center">
      {/* Live Moon emoji */}
      <div className="relative">
        <div
          className="text-[7rem] sm:text-[10rem] md:text-[12rem] leading-none moon-glow float-anim"
          aria-label={`${phase.name} emoji`}
          role="img"
        >
          {phase.emoji}
        </div>
      </div>

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-accent-foreground">
        Current Moon Phase
      </p>
      {/* H1 carries the live phase name. The keyword "current phase of the
          moon as an emoji" is woven into the supporting line below in a
          natural sentence, so it appears once on the page without
          keyword stuffing. */}
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {phase.name}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        See the <strong className="text-foreground">current phase of the moon as an emoji</strong> live.
        Right now, the Moon is in the{" "}
        <strong className="text-foreground">{phase.name}</strong> phase.
        Here is the live lunar snapshot for today.
      </p>

      {/* Quick stats */}
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <Stat label="Illumination" value={`${phase.illumination}%`} />
        <Stat label="Lunar Age" value={`${phase.age} days`} />
        <Stat label="Trend" value={trendLabel} />
        <Stat
          label="Cycle Progress"
          value={`${Math.round(phase.cycleProgress * 100)}%`}
        />
      </dl>

      <p className="mt-6 text-sm text-muted-foreground">
        Live as of {formatMoonDate(phase.date)}
      </p>

      <noscript>
        <p className="mt-4 rounded-md bg-muted px-4 py-2 text-sm text-muted-foreground">
          The live Moon phase tool needs JavaScript. Please enable JavaScript
          to see the current phase update in real time.
        </p>
      </noscript>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card rounded-xl px-4 py-3 text-center">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-foreground sm:text-base">
        {value}
      </dd>
    </div>
  );
}
