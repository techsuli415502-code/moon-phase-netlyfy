import Link from "next/link";
import { ALL_PHASES } from "@/lib/moonPhase";

const PHASE_DETAILS: Record<
  string,
  { meaning: string; visibility: string }
> = {
  new: {
    meaning:
      "The Moon sits between Earth and Sun. Its lit side faces away from us, so the night sky is dark. This marks the start of a new lunar cycle.",
    visibility: "Hard to see, rises and sets with the Sun.",
  },
  waxingCrescent: {
    meaning:
      "A thin silver sliver of the Moon appears in the west after sunset. It is growing larger each night.",
    visibility: "Low in the western sky after sunset.",
  },
  firstQuarter: {
    meaning:
      "Half of the Moon's near side is lit. It is high in the sky at sunset and sets around midnight.",
    visibility: "Visible from afternoon to midnight.",
  },
  waxingGibbous: {
    meaning:
      "More than half is lit and still growing. The Moon rises in the afternoon and stays up most of the night.",
    visibility: "Visible most of the evening and night.",
  },
  full: {
    meaning:
      "The whole near side of the Moon is lit. It rises at sunset and sets at sunrise, the brightest Moon of the cycle.",
    visibility: "Visible all night long.",
  },
  waningGibbous: {
    meaning:
      "The lit part is shrinking. The Moon rises later each night after sunset.",
    visibility: "Rises late evening, sets after sunrise.",
  },
  thirdQuarter: {
    meaning:
      "Half of the near side is lit, the opposite half from First Quarter. It rises near midnight and sets at noon.",
    visibility: "Visible from midnight to noon.",
  },
  waningCrescent: {
    meaning:
      "A thin crescent returns. The Moon is shrinking each night as it moves toward the next New Moon.",
    visibility: "Low in the eastern sky before sunrise.",
  },
};

export default function EightPhasesGuide() {
  return (
    <section
      id="eight-phases"
      aria-labelledby="eight-phases-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            The Eight Moon Phases
          </p>
          <h2
            id="eight-phases-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
          >
            A Complete Guide to the Eight Moon Phases
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every lunar cycle passes through eight named phases. Each one
            describes how much of the Moon's near side is lit by the Sun as
            seen from Earth. Here they are in order, with what to look for.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_PHASES.map((phase, i) => {
            const detail = PHASE_DETAILS[phase.key];
            return (
              <article
                key={phase.key}
                className="glass-card group rounded-2xl p-6 text-center"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground/80">
                  <span>Phase {i + 1}</span>
                  <span>of 8</span>
                </div>
                <div
                  className="mt-3 text-6xl leading-none moon-glow transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {phase.emoji}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {phase.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {detail.meaning}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                  {detail.visibility}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/moon-phases"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
          >
            Explore the Moon Phases page
          </Link>
        </div>
      </div>
    </section>
  );
}
