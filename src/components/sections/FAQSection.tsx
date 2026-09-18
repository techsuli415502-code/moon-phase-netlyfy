"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is the current phase of the Moon right now?",
    a: "The live Moon phase shown at the top of this page is the current phase, calculated from today's date and time. It updates on its own as the Moon moves through its cycle. You can also check the Moon calendar for any specific day.",
  },
  {
    q: "How is the current Moon phase calculated?",
    a: "We use the standard synodic month of about 29.53 days. The Moon starts a new cycle from a known New Moon, then we count how many days have passed since that point. The day count maps to one of the eight named phases. This is the same method used by most astronomy references.",
  },
  {
    q: "What moon emoji should I use today?",
    a: "Use the moon emoji shown in the hero section. It matches the current lunar phase for your date and time. Each phase has its own emoji, so checking the live phase first helps you pick the right one for your message or post.",
  },
  {
    q: "What does waxing or waning mean?",
    a: "Waxing means the lit part of the Moon is growing larger each night, moving from New Moon toward Full Moon. Waning means the lit part is shrinking, moving from Full Moon back toward New Moon. The terms come from very old English and still describe the lunar cycle today.",
  },
  {
    q: "How long does one Moon phase last?",
    a: "Each named phase lasts roughly three to four days before blending into the next one. The full synodic cycle takes about 29.53 days from one New Moon to the next. So the Moon spends around a quarter of the cycle in each main quarter phase.",
  },
  {
    q: "Why is the Moon sometimes visible during the day?",
    a: "The Moon is up during the day just as often as it is up at night. It depends on where it sits in its orbit. A First Quarter Moon rises around noon and sets around midnight. A Third Quarter Moon rises near midnight and sets near noon. The bright sky just makes the Moon harder to spot during the day.",
  },
  {
    q: "Does the Moon actually change shape?",
    a: "No. The Moon is always a round ball in space. The shape we see changes because of the angle between the Sun, the Moon, and Earth. As the Moon orbits us, we see different slices of its sunlit half. The Moon itself stays the same.",
  },
  {
    q: "Is the data on this site accurate?",
    a: "The Moon phase tool on this site uses a standard lunar calculation. It is good enough for general reference, learning, and choosing the right moon emoji. For exact astronomical data, like the precise minute of a moonrise, you may want to cross-check with the sources we list.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.92_0.06_75)]">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white glow-text sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Quick answers to the most asked questions about the current Moon
            phase, the lunar cycle, and the moon emojis used on this site.
          </p>
        </div>

        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl border border-white/10 px-5 sm:px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-sm leading-relaxed text-white/75">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
