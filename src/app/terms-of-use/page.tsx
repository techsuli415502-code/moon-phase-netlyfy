import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotRectangle } from "@/components/AdSlots";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Moon Phase Emoji terms of use. We explain how the site is provided, the limits of liability, and how the lunar data should be used.",
  alternates: { canonical: `${SITE_URL}/terms-of-use` },
  openGraph: {
    title: "Terms of Use | Moon Phase Emoji",
    description:
      "Read the Moon Phase Emoji terms of use and the limits of liability for the lunar data on the site.",
    url: `${SITE_URL}/terms-of-use`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Moon Phase Emoji",
    description:
      "Read the Moon Phase Emoji terms of use and the limits of liability for the lunar data on the site.",
  },
};

export default function TermsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Use",
        item: `${SITE_URL}/terms-of-use`,
      },
    ],
  };

  const lastUpdated = "September 2026";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">
                Terms of Use
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-foreground glow-text-strong sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Accepting the Terms
              </h2>
              <p className="mt-3">
                By visiting Moon Phase Emoji, you agree to these terms of use.
                If you do not agree with any part of them, please do not use
                the site. We may update these terms from time to time, and we
                will change the date at the top of this page whenever we do.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                What We Provide
              </h2>
              <p className="mt-3">
                Moon Phase Emoji is a free, informational website. It shows the
                current lunar phase, the eight named phases, and a Moon phase
                calendar. The Moon phase calculation runs in your browser using
                a standard lunar algorithm and the time on your device.
              </p>
              <p className="mt-3">
                The site is intended for general interest, learning, and quick
                reference. It is not an official astronomy service, a
                navigation aid, or a replacement for professional tools used in
                research, sailing, farming, or other fields where exact lunar
                data is critical.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Accuracy of Lunar Data
              </h2>
              <p className="mt-3">
                We work hard to make the lunar phase data accurate. The Moon
                phase tool uses a standard synodic-month calculation, which is
                good enough for general use and for matching the right Moon
                emoji. However, the exact minute a phase starts can vary by a
                few hours from the value shown. For exact timings, please
                check the sources listed on our Sources page.
              </p>
              <p className="mt-3">
                We do not promise that the data is free from errors. We are
                not liable for decisions made based on the lunar information
                shown on this site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Acceptable Use
              </h2>
              <p className="mt-3">
                You agree to use the site in a lawful and respectful way. You
                agree not to attempt to disrupt the site, overload it with
                automated requests, scrape its content for resale, or use it
                in a way that could damage it or harm other users.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Your Content
              </h2>
              <p className="mt-3">
                If you send us a message through the contact form or by email,
                you own the content of that message. You give us permission to
                read it and reply to it. We do not publish, sell, or share
                your message without your permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Our Content
              </h2>
              <p className="mt-3">
                The written explanations, design, layout, and original code on
                this site belong to Moon Phase Emoji. You are welcome to read,
                learn from, and share links to our pages. Please ask before
                republishing long excerpts or full pages elsewhere.
              </p>
              <p className="mt-3">
                The Moon emojis shown on this site are part of the Unicode
                standard and belong to their respective rights holders. We use
                them to label lunar phases, not to claim ownership.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                External Links
              </h2>
              <p className="mt-3">
                The site links to three trusted external sources for Moon
                phase data. We are not responsible for the content, accuracy,
                or practices of those external websites. Visiting them is at
                your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                The site is provided as is, without warranties of any kind. To
                the fullest extent allowed by law, Moon Phase Emoji and its
                content specialist are not liable for any loss or damage
                arising from your use of the site or reliance on the lunar
                information shown here.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Changes to the Site
              </h2>
              <p className="mt-3">
                We may change, pause, or stop the site at any time without
                notice. We may also remove or update content as we learn more
                or as readers point out issues.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms? Please reach out through the
                contact form or email us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Mid-content rectangle - natural break in the long-form
              terms of use text. */}
          <div className="my-10">
            <AdSlotRectangle />
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
