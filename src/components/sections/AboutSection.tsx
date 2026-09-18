import { AUTHOR, CONTACT_EMAIL } from "@/lib/site";

/**
 * Expanded "About Us" section for the homepage.
 * Covers the mission of the site, who is behind it, and the values that
 * guide the content. Distinct from the short author bio at the end.
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            About Us
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Why We Built Moon Phase Emoji
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            The Moon is one of the easiest things in the sky to enjoy, but
            clear information about it often hides in tables and tools built
            for astronomers. This site tries to fix that.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">
              Simple, Not Simplistic
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              We strip the jargon away. The lunar cycle is explained in plain
              English, with short sentences and clear examples. No fluff, no
              filler, no walls of text.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">
              Verified Sources
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Every claim is checked against trusted astronomy references. We
              keep the source list short so you can verify anything you read
              here in a few minutes.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">
              Built for Users
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              The site answers the questions users actually ask. What is the
              Moon doing tonight? What emoji matches it? When is the next
              Full Moon? Find it fast.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Our Mission
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
              <p>
                Moon Phase Emoji exists to make lunar phase data useful for
                regular people. We combine a live Moon phase tool with plain
                English explanations of the lunar cycle, the eight named
                phases, and the right moon emoji for each day.
              </p>
              <p>
                The site is a free resource. We do not run ads, we do not sell
                your data, and we do not use tracking cookies. The Moon phase
                tool runs entirely in your browser using your device's clock,
                so the calculation never leaves your device.
              </p>
              <p>
                If you spot a typo, a wrong emoji, or an unclear explanation,
                please reach out through the contact form below. I read every
                message and update the site based on real reader feedback.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Get in Touch
              </a>
              <a
                href="#sources"
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See Sources
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
