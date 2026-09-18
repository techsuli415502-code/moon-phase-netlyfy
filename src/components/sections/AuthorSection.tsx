import { AUTHOR } from "@/lib/site";

/**
 * E-E-A-T section: About the Content Specialist.
 * First-person bio written by Jacob Moses, focused on clear content,
 * research, source checking, and user needs.
 */
export default function AuthorSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    description: AUTHOR.bio,
    url: "https://moonphaseemoji.example/about",
  };

  return (
    <section
      id="about-specialist"
      aria-labelledby="author-heading"
      className="section-padding scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.55_0.18_285/20%)] blur-3xl nebula"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
              About the Content Specialist
            </p>
            <h2
              id="author-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
            >
              About the Content Specialist
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                <div
                  className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.92_0.06_75)] to-[oklch(0.75_0.15_285)] text-2xl font-bold text-[oklch(0.12_0.02_270)] shadow-[0_0_28px_rgba(180,160,255,0.4)]"
                  aria-hidden="true"
                >
                  JM
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {AUTHOR.name}
                  </p>
                  <p className="text-sm text-white/60">{AUTHOR.role}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-base leading-relaxed text-white/85">
                  {AUTHOR.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    More About Us
                  </a>
                  <a
                    href="#sources"
                    className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    View Our Sources
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
