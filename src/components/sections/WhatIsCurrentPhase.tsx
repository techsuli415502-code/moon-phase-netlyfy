import Link from "next/link";

/**
 * "What Is the Current Phase of the Moon?" section.
 * Explains what the current phase means in plain English.
 */
export default function WhatIsCurrentPhase() {
  return (
    <section
      id="what-is-current-phase"
      aria-labelledby="what-is-current-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              What It Means
            </p>
            <h2
              id="what-is-current-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
            >
              What Is the Current Phase of the Moon?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
              <p>
                The current phase of the Moon tells you how the Moon looks from
                Earth right now. The Moon itself does not actually change
                shape. It stays the same size. What changes is the angle
                between the Sun, the Moon, and where you stand on Earth.
              </p>
              <p>
                As the Moon moves around our planet, sunlight lights up
                different parts of its near side. The slice that we can see lit
                up is what we call the lunar phase. Over about 29.5 days, the
                Moon runs through a full cycle, from new, to first quarter, to
                full, to third quarter, and back to new again.
              </p>
              <p>
                When you check the live Moon phase above, you are seeing the
                exact slice of lit Moon visible tonight. The matching emoji
                gives you a quick visual you can copy and share. The phase
                shifts slowly, so the emoji can stay the same for a few days,
                then move on to the next step.
              </p>
              <p>
                If you have ever wondered why the Moon looks different from one
                night to the next, this is the reason. The Moon is always
                halfway lit by the Sun. We just see different amounts of that
                lit half as it orbits Earth.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/moon-phases"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                See All Moon Phases
              </Link>
              <Link
                href="/moon-calendar"
                className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Open Moon Calendar
              </Link>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl nebula"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="text-xl font-semibold text-foreground">
                Quick Facts About the Moon Phase
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.92_0.06_75)]"
                    aria-hidden="true"
                  />
                  <span>
                    A full lunar cycle lasts about 29.53 days, called the
                    synodic month.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.92_0.06_75)]"
                    aria-hidden="true"
                  />
                  <span>
                    The Moon always has half of its surface lit by the Sun. We
                    just see different amounts of that lit half.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.92_0.06_75)]"
                    aria-hidden="true"
                  />
                  <span>
                    Waxing means the lit part is growing. Waning means it is
                    shrinking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.92_0.06_75)]"
                    aria-hidden="true"
                  />
                  <span>
                    Each of the eight phases lasts roughly 3 to 4 days before
                    blending into the next.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.92_0.06_75)]"
                    aria-hidden="true"
                  />
                  <span>
                    The Moon emoji on this page is matched to the phase using a
                    standard lunar calculation, not a random guess.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
