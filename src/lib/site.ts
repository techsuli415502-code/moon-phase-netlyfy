/**
 * Trusted sources used across the site.
 * Only these three references are used for lunar phase data on this site.
 */
export interface SourceRef {
  name: string;
  url: string;
  description: string;
}

export const SOURCES: SourceRef[] = [
  {
    name: "Moon Phase Emoji",
    url: "https://www.moonphaseemoji.com/",
    description:
      "A focused reference for matching the correct Moon emoji to each lunar phase. Useful for quick checks and visual comparisons.",
  },
  {
    name: "Wikipedia: Lunar Phase",
    url: "https://en.wikipedia.org/wiki/Lunar_phase",
    description:
      "A detailed overview of the lunar cycle, including the geometry of Earth, Moon and Sun, and the standard phase names used in astronomy.",
  },
  {
    name: "Timeanddate: Moon Phases",
    url: "https://www.timeanddate.com/moon/phases/",
    description:
      "A reliable tool for checking Moon phase dates and times for any location or year, including exact times for each quarter and full Moon.",
  },
];

/** Site brand contact email */
export const CONTACT_EMAIL = "techsuli415502@gmail.com";

/** Author info for E-E-A-T */
export const AUTHOR = {
  name: "Jacob Moses",
  role: "Content Specialist",
  bio: "I am Jacob Moses, a content specialist focused on clear, useful explanations of lunar phase information. I spend my time researching the Moon cycle, checking primary sources, and writing explanations that help real readers understand the lunar cycle in plain English. My goal is to make each page helpful on its own, with verified facts, simple wording, and answers to the questions users actually ask. I check every claim against trusted astronomy references before publishing, and I keep content updated as I learn more about the Moon and its phases.",
};

/** Site navigation */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/moon-phases", label: "Moon Phases" },
  { href: "/moon-calendar", label: "Moon Calendar" },
  { href: "/about", label: "About Us" },
  { href: "/sources", label: "Sources" },
  { href: "/contact", label: "Contact Us" },
];

/** Footer navigation groups */
export const FOOTER_LINKS = {
  site: [
    { href: "/", label: "Home" },
    { href: "/moon-phases", label: "Moon Phases" },
    { href: "/moon-calendar", label: "Moon Calendar" },
    { href: "/about", label: "About Us" },
  ],
  legal: [
    { href: "/contact", label: "Contact Us" },
    { href: "/sources", label: "Sources" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-use", label: "Terms of Use" },
  ],
};

/** Site domain used for canonical URLs and OG tags */
export const SITE_URL = "https://moonphaseemoji.example";
