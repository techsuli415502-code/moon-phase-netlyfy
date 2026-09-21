"use client";

import { useId, useState, memo } from "react";

/**
 * Ad unit configurations provided by the site owner.
 * DO NOT change the keys, URLs, dimensions, or JavaScript structure.
 * Source: highrevenueformat.com ad network.
 */
const AD_UNITS = {
  "300x250": {
    key: "be62dbe03434f8ff9d36359f92b27f30",
    width: 300,
    height: 250,
    label: "Advertisement",
  },
  "728x90": {
    key: "7c6723eb78f85e029f2622b8b4d94239",
    width: 728,
    height: 90,
    label: "Advertisement",
  },
} as const;

export type AdUnitSize = keyof typeof AD_UNITS;

/**
 * Isolated iframe document that loads the ad network's script inside its
 * own window. Each ad unit gets a separate `window.atOptions`, so multiple
 * ad units on the same page do not overwrite each other's config.
 *
 * The iframe also isolates the ad network's JavaScript from the host page,
 * so an ad-network error can never crash React or break site navigation.
 */
function buildSrcDoc(key: string, width: number, height: number): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 0; background: transparent; }
  body { display: flex; align-items: center; justify-content: center; min-height: ${height}px; min-width: ${width}px; overflow: hidden; }
</style>
</head>
<body>
<script>
  atOptions = {
    'key' : '${key}',
    'format' : 'iframe',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/${key}/invoke.js"></script>
</body>
</html>`;
}

interface AdUnitProps {
  /** Which ad size to render. */
  size: AdUnitSize;
  /**
   * Optional className for the outer wrapper. Use it to control
   * placement (e.g. "hidden md:flex justify-center") and to reserve
   * vertical space so ads do not cause layout shift.
   */
  className?: string;
}

function AdUnitBase({ size, className = "" }: AdUnitProps) {
  const config = AD_UNITS[size];
  // useId gives a stable React key for the iframe so React re-renders
  // never reload the iframe or duplicate the network script.
  const reactId = useId();
  // Track whether the iframe fired onload so we can render a graceful
  // placeholder while it loads (or forever if the network is down).
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`ad-unit flex items-center justify-center ${className}`}
      style={{
        // Reserve the ad's footprint so the layout does not jump when
        // the iframe finally fills in (or fails to).
        minHeight: `${config.height}px`,
        minWidth: "100%",
      }}
      aria-label={config.label}
      role="complementary"
    >
      <div
        className="relative"
        style={{ width: `${config.width}px`, maxWidth: "100%", height: `${config.height}px` }}
      >
        {!loaded && (
          <div
            className="absolute inset-0 flex items-center justify-center rounded-lg border border-border/50 bg-muted/40 text-[0.65rem] uppercase tracking-wider text-muted-foreground/60"
            aria-hidden="true"
          >
            {config.label}
          </div>
        )}
        <iframe
          // Keyed by reactId so React keeps the same iframe element
          // across parent re-renders. Without this, the iframe reloads
          // on every render and the network script re-runs.
          key={reactId}
          title={`${size} ${config.label}`}
          srcDoc={buildSrcDoc(config.key, config.width, config.height)}
          width={config.width}
          height={config.height}
          loading="lazy"
          // sandbox: allow scripts so the ad can run, allow same-origin
          // so the network's invoke.js can read atOptions from the
          // iframe document. Do NOT allow-forms / allow-top-navigation
          // to keep the ad from breaking out of the iframe.
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          style={{
            border: "0",
            display: "block",
            width: "100%",
            maxWidth: `${config.width}px`,
            height: `${config.height}px`,
            margin: "0 auto",
          }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

/**
 * Memoized so the parent re-rendering (e.g. on route changes) does not
 * cause the iframe to be torn down and re-created, which would re-load
 * the network script.
 */
const AdUnit = memo(AdUnitBase);
export default AdUnit;
