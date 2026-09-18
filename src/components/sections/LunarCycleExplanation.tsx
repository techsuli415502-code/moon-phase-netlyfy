/**
 * Lunar Cycle explanation section.
 * Walks the reader through the full synodic cycle.
 */
export default function LunarCycleExplanation() {
  const steps = [
    {
      emoji: "\u{1F311}",
      name: "New Moon",
      detail:
        "Day 0. The Moon sits between Earth and the Sun. Its lit side faces away from us, so the night sky is dark.",
    },
    {
      emoji: "\u{1F312}",
      name: "Waxing Crescent",
      detail:
        "Days 1 to 6. A thin sliver of light appears on the right side (in the Northern Hemisphere). It grows larger each night.",
    },
    {
      emoji: "\u{1F313}",
      name: "First Quarter",
      detail:
        "Day 7. The right half of the Moon is lit. It rises at noon and sets at midnight.",
    },
    {
      emoji: "\u{1F314}",
      name: "Waxing Gibbous",
      detail:
        "Days 8 to 13. More than half is lit and still growing. The Moon is bright and high in the sky for most of the night.",
    },
    {
      emoji: "\u{1F315}",
      name: "Full Moon",
      detail:
        "Day 14. The entire near side is lit. The Moon rises at sunset and sets at sunrise.",
    },
    {
      emoji: "\u{1F316}",
      name: "Waning Gibbous",
      detail:
        "Days 15 to 21. The lit part shrinks from the right side. The Moon rises later each evening.",
    },
    {
      emoji: "\u{1F317}",
      name: "Third Quarter",
      detail:
        "Day 22. The left half is lit. The Moon rises near midnight and sets at noon.",
    },
    {
      emoji: "\u{1F318}",
      name: "Waning Crescent",
      detail:
        "Days 23 to 29. A thin sliver on the left side, shrinking toward the next New Moon.",
    },
  ];

  return (
    <section
      id="lunar-cycle"
      aria-labelledby="lunar-cycle-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            How the Cycle Works
          </p>
          <h2
            id="lunar-cycle-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            The Lunar Cycle Explained
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            The lunar cycle, also called the synodic month, is the journey the
            Moon takes from one New Moon to the next. It takes about 29.53
            days. As the Moon orbits Earth, we see different slices of its
            sunlit side. Here is the full cycle in order.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block"
              aria-hidden="true"
            />
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li
                  key={step.name}
                  className="glass-card relative overflow-hidden rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className="text-5xl leading-none moon-glow sm:text-6xl"
                      aria-hidden="true"
                    >
                      {step.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.92_0.06_75)]">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        {step.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
