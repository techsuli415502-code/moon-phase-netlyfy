import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Universal 301 redirect to the main site.
 *
 * This proxy (formerly called middleware in Next.js 15 and earlier)
 * is a fallback that runs on any Next.js host (Vercel, Netlify, or
 * self-hosted) in case the platform-level redirects in vercel.json
 * or netlify.toml do not catch a request.
 *
 * Behavior:
 *   - Every URL except /_next/* (Next.js static assets) and /api/*
 *   (API routes) is 301-redirected to https://moonphaseemoji.com/.
 *   - The destination is the site root, not the original path, so
 *   visitors always land on the homepage of the main site.
 *   - No intermediate page, no loading screen, no popup.
 *
 * On Vercel: the vercel.json catch-all redirect runs first (at the
 * edge before Next.js starts), so this middleware only fires for
 * paths that the vercel.json regex did not catch (e.g. /_next/*
 * paths, which we explicitly skip here).
 *
 * On Netlify: the netlify.toml [[redirects]] with force=true runs
 * first at the edge, so this middleware is also a backup.
 *
 * No redirect loop: the destination is a different domain
 * (moonphaseemoji.com), so this site never redirects to itself.
 */

const DESTINATION = "https://moonphaseemoji.com/";

export function proxy(_request: NextRequest) {
  return NextResponse.redirect(DESTINATION, {
    status: 301,
    headers: {
      // Long cache so repeat visitors skip the round-trip entirely.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

/**
 * Matcher: run the proxy on every path EXCEPT:
 *   - /_next/* (Next.js internals: static assets, chunks, etc.)
 *   - /api/* (API routes, if any)
 *
 * The negative lookahead (?!...) ensures those internal paths are
 * served normally so the build and runtime don't break.
 */
export const config = {
  matcher: ["/((?!_next/|api/).*)"],
};
