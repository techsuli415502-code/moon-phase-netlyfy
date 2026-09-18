import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Moon Phase Emoji privacy policy. We explain what information we collect, how we use it, and your rights as a visitor.",
  alternates: { canonical: "https://moonphaseemoji.example/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Moon Phase Emoji",
    description:
      "Read the Moon Phase Emoji privacy policy and your rights as a visitor.",
    url: "https://moonphaseemoji.example/privacy-policy",
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
            className="mb-6 text-sm text-white/60"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 transition-colors hover:text-[oklch(0.92_0.06_75)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white glow-text-strong sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/50">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80">
            <div>
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
                Information We Do Not Collect
              </h2>
              <p className="mt-3">
                We do not run web analytics on this site. We do not use
                tracking pixels, advertising tags, or third-party marketing
                scripts. We do not place cookies on your device for tracking,
                ads, or analytics.
              </p>
              <p className="mt-3">
                The Moon phase calculation runs entirely in your browser using
                your device's local clock. The date and time used to compute
                the lunar phase never leaves your device.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
                Your Choices
              </h2>
              <p className="mt-3">
                You can choose not to use the contact form. You can also clear
                cookies set by your browser at any time through your browser
                settings. Since we do not run analytics or ads, there are no
                tracking cookies from us to clear.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
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
              <h2 className="text-lg font-semibold text-white">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy, please reach
                out through the contact form or email us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[oklch(0.92_0.06_75)] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
