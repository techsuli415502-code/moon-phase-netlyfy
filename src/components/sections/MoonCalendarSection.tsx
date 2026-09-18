import MoonCalendar from "@/components/MoonCalendar";

/**
 * Homepage Moon Phase Calendar section.
 * Wraps the interactive calendar with intro text.
 */
export default function MoonCalendarSection() {
  return (
    <section
      id="moon-calendar"
      aria-labelledby="calendar-heading"
      className="section-padding scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            Plan Ahead
          </p>
          <h2
            id="calendar-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Interactive Moon Phase Calendar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Tap any day to see the Moon phase for that date. Move forward or
            back by month to plan around an upcoming Full Moon or New Moon.
            Every day shows the matching Moon emoji.
          </p>
        </div>

        <div className="mt-10">
          <MoonCalendar />
        </div>

        <div className="mt-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
