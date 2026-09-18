import Link from "next/link";

/**
 * Custom 404 page.
 * In the sandbox preview, only the `/` route is visible. Any other URL
 * triggers this page. We give the user a clean way back home.
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-[oklch(0.55_0.18_285/20%)] blur-3xl nebula"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[oklch(0.6_0.1_230/15%)] blur-3xl nebula"
        style={{ animationDelay: "-12s" }}
        aria-hidden="true"
      />

      <div className="relative">
        <div
          className="text-7xl moon-glow float-anim sm:text-8xl"
          aria-hidden="true"
        >
          {"\u{1F314}"}
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white glow-text-strong sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
          The page you are looking for is not here. The Moon may have moved
          on, just like this URL. Head back to the homepage to see the
          current lunar phase.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[oklch(0.92_0.06_75)] to-[oklch(0.85_0.12_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.12_0.02_270)] shadow-[0_0_24px_rgba(255,235,180,0.35)] transition-transform hover:scale-[1.03]"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
