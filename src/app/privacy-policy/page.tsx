import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotRectangle, AdSlotLeaderboard } from "@/components/AdSlots";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Moon Phase Emoji privacy policy. We explain what information we collect, how we use it, and your rights as a visitor.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Moon Phase Emoji",
    description:
      "Read the Moon Phase Emoji privacy policy and your rights as a visitor.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Moon Phase Emoji",
    description:
      "Read the Moon Phase Emoji privacy policy and your rights as a visitor.",
  },
};

export default function PrivacyPage() {
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
        name: "Privacy Policy",
        item: `${SITE_URL}/privacy-policy`,
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
                Privacy Policy
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-foreground glow-text-strong sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Overview
              </h2>
              <p className="mt-3">
                Moon Phase Emoji is a free informational website that shows the
                current Moon phase, the eight lunar phases, and a Moon phase
                calendar. This privacy policy explains what information we
                collect, how we use it, and the choices you have.
              </p>
              <p className="mt-3">
                We try to collect as little information as possible. The site
                works in your browser without requiring you to sign up, log
                in, or share any personal details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Google Analytics and Cookies
              </h2>
              <p className="mt-3">
                This site uses Google Analytics 4 to understand how visitors
                find and use the site. Google Analytics is a third-party
                service provided by Google LLC. It places cookies on your
                device to collect anonymous usage data such as which pages
                you visit, how long you stay, and a general, anonymized
                version of your location.
              </p>
              <p className="mt-3">
                We have enabled IP anonymization in Google Analytics. This
                means your full IP address is never stored by Google. The
                data we see is aggregated and does not identify you as a
                person. We use this data to improve the site, not to track
                individuals.
              </p>
              <p className="mt-3">
                You can opt out of Google Analytics cookies at any time by
                installing the official Google Analytics opt-out browser
                add-on, by clearing your cookies through your browser
                settings, or by enabling the Do Not Track signal in your
                browser. None of the site content is hidden if you block
                these cookies.
              </p>
              <p className="mt-3">
                The Moon phase calculation runs entirely in your browser using
                your device's local clock. The date and time used to compute
                the lunar phase never leaves your device and is never sent to
                Google Analytics.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Advertising
              </h2>
              <p className="mt-3">
                This site displays ads from a third-party ad network. The ad
                network may set cookies or use similar technologies on your
                device to serve and measure ads, and to remember your device
                across pages. Ads are loaded inside isolated iframes so the
                ad network's code never has access to this site's main
                content or to your inputs in the Moon phase tool.
              </p>
              <p className="mt-3">
                Each ad unit is clearly labeled as
                <span className="text-foreground"> Advertisement</span>. Ads never
                cover the navigation, buttons, the live Moon phase tool, or
                the interactive calendar. On small screens, the wider
                desktop ad units are hidden so the page stays usable and
                free of horizontal scrolling.
              </p>
              <p className="mt-3">
                If you want to opt out of interest-based advertising from
                third-party ad networks, you can do so at
                {" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  aboutads.info/choices
                </a>{" "}
                or
                {" "}
                <a
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  youronlinechoices.com
                </a>
                . You can also clear your cookies through your browser
                settings. Blocking ad cookies does not hide the main site
                content.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Information You Choose to Share
              </h2>
              <p className="mt-3">
                The contact form on the Contact Us page helps you send an email
                to the address listed on the form. When you use it, your name,
                email, subject, and message are placed into an email that
                opens in your own email client. You choose whether to send it.
              </p>
              <p className="mt-3">
                If you choose to send that email, the information you include
                goes to the email address listed on the form. We only use it to
                reply to your message. We do not add your email to a mailing
                list and we do not sell or rent it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Server and Hosting Logs
              </h2>
              <p className="mt-3">
                Our hosting provider may keep standard server logs required to
                keep the website online and secure. These logs typically
                include the date and time of a request, the IP address of the
                device that made the request, and basic request details like
                the URL requested and the browser type. We do not use these
                logs to track individual users.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                External Links
              </h2>
              <p className="mt-3">
                This site links to three trusted external sources for Moon
                phase data. Once you click one of those links, you are on a
                different website with its own privacy policy. We have no
                control over and are not responsible for the privacy practices
                of those external sites.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Children
              </h2>
              <p className="mt-3">
                The site is suitable for general audiences. We do not knowingly
                collect personal information from anyone. If you believe a
                child has shared personal information with us through the
                contact form, please reach out and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Your Choices
              </h2>
              <p className="mt-3">
                You can choose not to use the contact form. You can also clear
                cookies set by your browser at any time through your browser
                settings. You can also install the official Google Analytics
                opt-out browser add-on to stop the GA cookies from being set.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                If we change this privacy policy, we will update the date at
                the top of this page and adjust the text below. We will not
                quietly start collecting new kinds of data without an updated
                policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy, please reach
                out through the contact form or email us at{" "}
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
              privacy policy text. */}
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
