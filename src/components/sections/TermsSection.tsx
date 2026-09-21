import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Homepage Terms of Use section.
 * Honest, plain-English terms describing what the site provides and the
 * limits of liability.
 */
export default function TermsSection() {
  return (
    <section
      id="terms-of-use"
      aria-labelledby="terms-heading"
      className="section-padding scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            Legal
          </p>
          <h2
            id="terms-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Terms of Use
          </h2>
          <p className="mt-3 text-sm text-white/50">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Accepting the Terms
            </h3>
            <p className="mt-3">
              By visiting Moon Phase Emoji, you agree to these terms of use.
              If you do not agree with any part of them, please do not use
              the site. We may update these terms from time to time, and we
              will change the date at the top of this section whenever we
              do.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              What We Provide
            </h3>
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
            <h3 className="text-lg font-semibold text-white">
              Accuracy of Lunar Data
            </h3>
            <p className="mt-3">
              We work hard to make the lunar phase data accurate. The Moon
              phase tool uses a standard synodic-month calculation, which is
              good enough for general use and for matching the right Moon
              emoji. However, the exact minute a phase starts can vary by a
              few hours from the value shown. For exact timings, please
              check the sources listed in the Sources section.
            </p>
            <p className="mt-3">
              We do not promise that the data is free from errors. We are
              not liable for decisions made based on the lunar information
              shown on this site.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Acceptable Use
            </h3>
            <p className="mt-3">
              You agree to use the site in a lawful and respectful way. You
              agree not to attempt to disrupt the site, overload it with
              automated requests, scrape its content for resale, or use it in
              a way that could damage it or harm other users.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Your Content</h3>
            <p className="mt-3">
              If you send us a message through the contact form or by email,
              you own the content of that message. You give us permission to
              read it and reply to it. We do not publish, sell, or share
              your message without your permission.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Our Content</h3>
            <p className="mt-3">
              The written explanations, design, layout, and original code on
              this site belong to Moon Phase Emoji. You are welcome to read,
              learn from, and share links to our sections. Please ask before
              republishing long excerpts or full sections elsewhere.
            </p>
            <p className="mt-3">
              The Moon emojis shown on this site are part of the Unicode
              standard and belong to their respective rights holders. We use
              them to label lunar phases, not to claim ownership.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              External Links
            </h3>
            <p className="mt-3">
              The site links to three trusted external sources for Moon phase
              data. We are not responsible for the content, accuracy, or
              practices of those external websites. Visiting them is at your
              own risk.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Limitation of Liability
            </h3>
            <p className="mt-3">
              The site is provided as is, without warranties of any kind. To
              the fullest extent allowed by law, Moon Phase Emoji and its
              content specialist are not liable for any loss or damage
              arising from your use of the site or reliance on the lunar
              information shown here.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Changes to the Site
            </h3>
            <p className="mt-3">
              We may change, pause, or stop the site at any time without
              notice. We may also remove or update content as we learn more
              or as readers point out issues.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3">
              Questions about these terms? Please reach out through the
              contact form above or email us at{" "}
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
