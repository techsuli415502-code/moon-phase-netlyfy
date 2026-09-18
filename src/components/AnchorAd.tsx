"use client";

import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import AdUnit from "@/components/AdUnit";

/**
 * Sticky bottom anchor ad.
 *
 * Implementation note on "anchor support":
 * The supplied ad network (highrevenueformat.com) provides only standard
 * iframe banner codes (300x250, 728x90). It does not ship a dedicated
 * "anchor" or "sticky" script. The supported way to render the network's
 * 728x90 banner as an anchor is to mount it inside a fixed-position
 * container at the bottom of the viewport. That is what this component
 * does - it uses the SAME 728x90 ad code you provided, just placed in
 * a sticky container.
 *
 * Mobile behavior: the 728x90 ad is 728px wide and cannot fit inside a
 * phone viewport without forcing horizontal scroll. The supplied network
 * does not provide a smaller mobile-anchor format (e.g. 320x50). So the
 * anchor is desktop-only. On phones it is hidden via CSS
 * (hidden md:flex) and body padding is removed so nothing is hidden.
 *
 * Dismiss: a clear close button hides the anchor for the current page
 * session (state held in component state, not localStorage - so it
 * reappears on next visit, which is fine).
 *
 * No duplicate loading: this component is mounted exactly once via the
 * root layout. The AdUnit component inside is keyed by useId() so React
 * re-renders never re-trigger the network script.
 */
export default function AnchorAd() {
  const reactId = useId();
  const [dismissed, setDismissed] = useState(false);

  // Toggle body padding so the fixed anchor never hides content.
  useEffect(() => {
    const body = document.body;
    if (dismissed) {
      body.classList.remove("anchor-ad-visible");
    } else {
      body.classList.add("anchor-ad-visible");
    }
    return () => body.classList.remove("anchor-ad-visible");
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`anchor-ad-container fixed bottom-0 left-0 right-0 z-30 hidden md:flex items-center justify-center gap-3 px-4 py-2 ${dismissed ? "pointer-events-none opacity-0" : ""}`}
      role="complementary"
      aria-label="Sponsored anchor content"
    >
      <div className="flex-1 flex justify-center">
        <AdUnit size="728x90" />
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label="Close anchor ad"
        title="Close ad"
      >
        <X className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      <span className="sr-only">
        Advertisement. Close to dismiss.
      </span>
    </div>
  );
}
