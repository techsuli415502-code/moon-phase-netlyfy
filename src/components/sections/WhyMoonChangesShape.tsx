import Link from "next/link";

/**
 * "Why Does the Moon Change Shape?" explanation section.
 * Plain-English explanation of the geometry behind lunar phases.
 */
export default function WhyMoonChangesShape() {
  return (
    <section
      id="why-moon-changes"
      aria-labelledby="why-changes-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            The Science of Moon Phases
          </p>
          <h2
            id="why-changes-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
          >
            Why Does the Moon Change Shape?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The Moon does not really change shape. It is always a round ball
            in space. The shape we see changes because of where the Moon sits
            in its orbit around Earth, and how sunlight hits it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-lg font-bold text-primary"
                aria-hidden="true"
              >
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Sun Light Hits One Half
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              The Sun lights up exactly half of the Moon at all times. The
              other half stays in shadow. This never changes. The Moon has no
              light of its own. We only see the part that reflects sunlight
              back to us.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-lg font-bold text-primary"
                aria-hidden="true"
              >
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Earth Sees Different Slices
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              As the Moon moves around Earth, the angle between the Sun, the
              Moon, and your eyes shifts. Sometimes we see the full lit half.
              Sometimes we see only a thin edge of it. Sometimes we see none
              at all. That slice is what we call the Moon phase.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-lg font-bold text-primary"
                aria-hidden="true"
              >
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                The Cycle Repeats
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              After about 29.5 days, the Moon returns to the same spot between
              Earth and Sun, and the cycle starts over. This is why the same
              phases show up in the same order, month after month, year after
              year.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <div className="glass-card rounded-2xl p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  A Simple Way to Picture It
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  Hold a ball in front of a lamp in a dark room. Stand to the
                  side and walk around the ball. The lit part of the ball
                  appears to grow and shrink as you move, even though the
                  ball itself never changes. The Moon works the same way, with
                  the Sun as the lamp and Earth as your eye.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  The phases we see, like waxing crescent or third quarter, are
                  just labels for how much of that lit half is facing us on a
                  given night.
                </p>
                <div className="mt-6">
                  <Link
                    href="/moon-phases"
                    className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    See all moon phases explained
                  </Link>
                </div>
              </div>

              <div className="relative flex aspect-square items-center justify-center rounded-xl border border-border bg-gradient-to-br from-[oklch(0.12_0.03_275/80%)] to-[oklch(0.07_0.02_270/90%)] p-8">
                <div
                  className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[oklch(0.95_0.08_75)] shadow-[0_0_60px_rgba(255,235,180,0.6)]"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                  <div
                    className="text-7xl moon-glow float-anim"
                    aria-hidden="true"
                  >
                    {"\u{1F314}"}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Sun lights the right half from outside the frame.
                    <br />
                    We see a waxing gibbous Moon from Earth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
