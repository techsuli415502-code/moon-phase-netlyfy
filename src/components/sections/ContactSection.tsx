import { Mail, MessageSquare, User } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

/**
 * Homepage Contact section.
 * Embeds the contact form alongside quick info cards.
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Have a question, correction, or piece of feedback about the Moon
            phase data on this site? We would love to hear from you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <aside className="space-y-4">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.55_0.18_285/20%)] text-[oklch(0.92_0.06_75)]"
                  aria-hidden="true"
                >
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Email</h3>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 block break-all text-sm text-[oklch(0.92_0.06_75)] transition-colors hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.55_0.18_285/20%)] text-[oklch(0.92_0.06_75)]"
                  aria-hidden="true"
                >
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Feedback</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">
                Spotted a typo, a wrong phase emoji, or an unclear
                explanation? Let me know. I read every message and update the
                site based on real reader feedback.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.55_0.18_285/20%)] text-[oklch(0.92_0.06_75)]"
                  aria-hidden="true"
                >
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Content Specialist
                </h3>
              </div>
              <p className="mt-3 text-sm text-white/70">
                You will reach Jacob Moses, the content specialist behind
                Moon Phase Emoji. Most replies arrive within a few days.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
