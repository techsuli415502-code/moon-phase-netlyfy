import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, User } from "lucide-react";
import { AdSlotRectangle } from "@/components/AdSlots";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us: Get in Touch with Moon Phase Emoji",
  description:
    "Get in touch with the team behind Moon Phase Emoji. Use the contact form for questions, feedback, or corrections about the lunar phase data on the site.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us: Get in Touch with Moon Phase Emoji",
    description:
      "Use the contact form for questions, feedback, or corrections about the lunar phase data on the site.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Moon Phase Emoji",
    description:
      "Get in touch with the team behind Moon Phase Emoji.",
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Get in Touch
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground glow-text-strong sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground">
              Have a question, correction, or piece of feedback about the Moon
              phase data on this site? We would love to hear from you. The form
              below opens your email client with your message ready to send.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <aside className="space-y-4">
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <Mail className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground">
                    Email
                  </h2>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 block break-all text-sm text-primary transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground">
                    Feedback
                  </h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Spotted a typo, a wrong phase emoji, or an unclear
                  explanation? Let me know. I read every message and update the
                  site based on real reader feedback.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <User className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground">
                    Content Specialist
                  </h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
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

      {/* Rectangle below the contact form - placed after the form so
          it never interferes with form interaction. */}
      <AdSlotRectangle />
    </>
  );
}
