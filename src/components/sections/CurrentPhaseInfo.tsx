"use client";

import { useEffect, useState } from "react";
import { getMoonPhase, formatMoonDate } from "@/lib/moonPhase";
import type { MoonPhaseData } from "@/lib/moonPhase";

/**
 * Current Moon Phase information card.
 * Shows detailed stats about the current phase in a glass card grid.
 */
export default function CurrentPhaseInfo() {
  const [phase, setPhase] = useState<MoonPhaseData | null>(null);

  useEffect(() => {
    const update = () => setPhase(getMoonPhase(new Date()));
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!phase) {
    return (
      <section
        id="current-phase"
        aria-labelledby="current-phase-heading"
        className="section-padding"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="h-8 w-48 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </section>
    );
  }

  const trendText =
    phase.trend === "waxing"
      ? "The Moon is currently waxing, which means its lit side is growing larger each night. We are moving toward the next Full Moon."
      : "The Moon is currently waning, which means its lit side is shrinking each night. We are moving toward the next New Moon.";

  const stats = [
    {
      label: "Illumination",
      value: `${phase.illumination}%`,
      detail:
        "Approximate percentage of the Moon's near side that is lit by the Sun right now.",
    },
    {
      label: "Lunar Age",
      value: `${phase.age} days`,
      detail: "Days since the most recent New Moon in the current cycle.",
    },
    {
      label: "Cycle Progress",
      value: `${Math.round(phase.cycleProgress * 100)}%`,
      detail:
        "How far we are through the full synodic month, which lasts about 29.53 days.",
    },
    {
      label: "Next Full Moon",
      value: `in ${phase.daysUntilFull} days`,
      detail: "Approximate wait until the next Full Moon lights up the night sky.",
    },
    {
      label: "Next New Moon",
      value: `in ${phase.daysUntilNew} days`,
      detail: "Approximate wait until the next New Moon begins a new cycle.",
    },
    {
      label: "Waxing or Waning",
      value: phase.trend === "waxing" ? "Waxing" : "Waning",
      detail: trendText,
    },
  ];

  return (
    <section
      id="current-phase"
      aria-labelledby="current-phase-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Current Phase Details
          </p>
          <h2
            id="current-phase-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
          >
            Current Moon Phase Information
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Here is the full breakdown of the Moon right now. Every stat below
            updates on its own as the lunar cycle moves forward.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground glow-text">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div
                className="text-6xl leading-none moon-glow"
                aria-hidden="true"
              >
                {phase.emoji}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Live Snapshot
                </p>
                <h3 className="mt-1 text-2xl font-bold text-foreground">
                  {phase.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {formatMoonDate(phase.date)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {phase.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
