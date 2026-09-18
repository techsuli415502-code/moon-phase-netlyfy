import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Homepage Privacy Policy section.
 * Plain-English policy that only describes what this site actually does.
 */
export default function PrivacySection() {
  return (
    <section
      id="privacy-policy"
      aria-labelledby="privacy-heading"
      className="section-padding scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            Legal
          </p>
          <h2
            id="privacy-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Privacy Policy
          </h2>
          <p className="mt-3 text-sm text-white/50">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80">
          <div>
            <h3 className="text-lg font-semibold text-white">Overview</h3>
            <p className="mt-3">
              Moon Phase Emoji is a free informational website that shows the
              current Moon phase, the eight lunar phases, and a Moon phase
              calendar. This privacy policy explains what information we
              collect, how we use it, and the choices you have.
            </p>
            <p className="mt-3">
              We try to collect as little information as possible. The site
              works in your browser without requiring you to sign up, log in,
              or share any personal details.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Information We Do Not Collect
            </h3>
            <p className="mt-3">
              We do not run web analytics on this site. We do not use tracking
              pixels, advertising tags, or third-party marketing scripts. We
              do not place cookies on your device for tracking, ads, or
              analytics.
            </p>
            <p className="mt-3">
              The Moon phase calculation runs entirely in your browser using
              your device's local clock. The date and time used to compute
              the lunar phase never leaves your device.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Information You Choose to Share
            </h3>
            <p className="mt-3">
              The contact form on this page helps you send an email to the
              address listed on the form. When you use it, your name, email,
              subject, and message are placed into an email that opens in
              your own email client. You choose whether to send it.
            </p>
            <p className="mt-3">
              If you choose to send that email, the information you include
              goes to the email address listed on the form. We only use it to
              reply to your message. We do not add your email to a mailing
              list and we do not sell or rent it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Server and Hosting Logs
            </h3>
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
            <h3 className="text-lg font-semibold text-white">External Links</h3>
            <p className="mt-3">
              This site links to three trusted external sources for Moon
              phase data. Once you click one of those links, you are on a
              different website with its own privacy policy. We have no
              control over and are not responsible for the privacy practices
              of those external sites.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Children</h3>
            <p className="mt-3">
              The site is suitable for general audiences. We do not knowingly
              collect personal information from anyone. If you believe a child
              has shared personal information with us through the contact
              form, please reach out and we will delete it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Your Choices</h3>
            <p className="mt-3">
              You can choose not to use the contact form. You can also clear
              cookies set by your browser at any time through your browser
              settings. Since we do not run analytics or ads, there are no
              tracking cookies from us to clear.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Changes to This Policy
            </h3>
            <p className="mt-3">
              If we change this privacy policy, we will update the date at the
              top of this section and adjust the text. We will not quietly
              start collecting new kinds of data without an updated policy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3">
              If you have questions about this privacy policy, please reach
              out through the contact form above or email us at{" "}
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
      </div>
    </section>
  );
}
