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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
              What It Means
            </p>
            <h2
              id="what-is-current-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
            >
              What Is the Current Phase of the Moon?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80">
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
              <a
                href="#moon-phases"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.12_0.02_270)] shadow-[0_0_24px_rgba(255,235,180,0.3)] transition-transform hover:scale-[1.03]"
              >
                See All Moon Phases
              </a>
              <a
                href="#moon-calendar"
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Open Moon Calendar
              </a>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.55_0.18_285/25%)] blur-3xl nebula"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="text-xl font-semibold text-white">
                Quick Facts About the Moon Phase
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
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
