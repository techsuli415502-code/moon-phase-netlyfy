"use client";

import { useEffect, useState } from "react";
import { getMoonPhase, formatMoonDate } from "@/lib/moonPhase";
import type { MoonPhaseData } from "@/lib/moonPhase";

/**
 * Compact live Moon phase widget for use on non-homepage pages.
 * Updates every minute.
 */
export default function LiveMoonWidget() {
  const [phase, setPhase] = useState<MoonPhaseData | null>(null);

  useEffect(() => {
    const update = () => setPhase(getMoonPhase(new Date()));
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!phase) {
    return (
      <div className="glass-card rounded-2xl p-6 text-center">
        <div className="text-6xl moon-glow" aria-hidden="true">
          {"\u{1F315}"}
        </div>
        <div className="mt-4 h-6 w-40 animate-pulse rounded bg-muted" />
      </div>
    );
  }

  const trendLabel =
    phase.trend === "waxing" ? "Waxing (growing)" : "Waning (shrinking)";

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col items-center text-center">
        <div
          className="text-7xl leading-none moon-glow float-anim"
          role="img"
          aria-label={`${phase.name} emoji`}
        >
          {phase.emoji}
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Current Moon Phase
        </p>
        <h2 className="mt-2 text-3xl font-bold text-foreground glow-text">
          {phase.name}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {formatMoonDate(phase.date)}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Illumination" value={`${phase.illumination}%`} />
        <Stat label="Age" value={`${phase.age}d`} />
        <Stat label="Trend" value={trendLabel} />
        <Stat
          label="Cycle"
          value={`${Math.round(phase.cycleProgress * 100)}%`}
        />
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {phase.description}
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-center">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-xs font-semibold text-foreground sm:text-sm">
        {value}
      </dd>
    </div>
  );
}
