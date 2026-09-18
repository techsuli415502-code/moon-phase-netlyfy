import AdUnit from "@/components/AdUnit";

/**
 * Pre-built ad slot components for the homepage.
 *
 * Design rules:
 *  - The 728x90 unit is desktop-only. On mobile it is hidden with
 *    "hidden md:flex" so a 728px-wide iframe never overflows the
 *    viewport or forces horizontal scrolling.
 *  - The 300x250 unit renders at all sizes; its outer wrapper keeps
 *    maxWidth 100% and centers the iframe so on phones it sits in the
 *    middle of the column without overflowing.
 *  - Each slot reserves its vertical space up-front so there is no
 *    layout shift while the iframe loads.
 *  - Each slot is wrapped in a section with a "sponsored" label
 *    visible only to screen readers (aria-label) plus a small visible
 *    label, keeping the page honest for users and SEO.
 */

const Label = () => (
  <p className="mb-2 text-center text-[0.6rem] font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
    Advertisement
  </p>
);

/** Desktop leaderboard. Hidden on screens narrower than 768px. */
export function AdSlotLeaderboard() {
  return (
    <section
      aria-label="Sponsored content - leaderboard"
      className="hidden md:block"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Label />
        <AdUnit size="728x90" className="justify-center" />
      </div>
    </section>
  );
}

/**
 * Medium rectangle. Renders on every screen size; the iframe is capped
 * to 300px wide so it never overflows a phone column.
 */
export function AdSlotRectangle() {
  return (
    <section
      aria-label="Sponsored content - rectangle"
      className="block"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Label />
        <AdUnit size="300x250" className="justify-center" />
      </div>
    </section>
  );
}

/**
 * In-content rectangle that fits nicely between two text-heavy
 * sections. Uses reduced vertical padding so it doesn't push the
 * narrative too far apart.
 */
export function AdSlotRectangleCompact() {
  return (
    <section
      aria-label="Sponsored content - in content"
      className="block"
    >
      <div className="mx-auto max-w-3xl px-4 py-3 sm:px-6">
        <Label />
        <AdUnit size="300x250" className="justify-center" />
      </div>
    </section>
  );
}
