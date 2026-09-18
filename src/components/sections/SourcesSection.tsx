import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SOURCES } from "@/lib/site";

/**
 * Homepage "Our Sources" section.
 * Lists the three trusted sources used across the site.
 */
export default function SourcesSection() {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Trusted References
          </p>
          <h2
            id="sources-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
          >
            Our Sources
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every lunar phase calculation and fact on this site is checked
            against trusted references. We keep our source list short on
            purpose, so you can verify what you read here. These are the only
            three sources we use for Moon phase data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SOURCES.map((source) => (
            <article
              key={source.url}
              className="glass-card group rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {source.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {source.description}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Visit source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sources"
            className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View full Sources page
          </Link>
        </div>
      </div>
    </section>
  );
}
