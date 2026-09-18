import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, AUTHOR, GOOGLE_SITE_VERIFICATION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0820",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Current Phase of the Moon Emoji | Moon Phase Today",
    template: "%s | Moon Phase Emoji",
  },
  description:
    "See the current phase of the Moon as an emoji. Live lunar phase today with illumination, lunar age, and a full moon phase calendar. Waxing and waning updates in real time.",
  keywords: [
    "current phase of the moon emoji",
    "moon phase today",
    "current moon phase",
    "moon emoji",
    "current moon emoji",
    "lunar phase",
    "lunar cycle",
    "moon phase calendar",
    "waxing moon",
    "waning moon",
  ],
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  applicationName: "Moon Phase Emoji",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Current Phase of the Moon Emoji | Moon Phase Today",
    description:
      "See the current Moon phase as an emoji. Live lunar phase, illumination, lunar age, and a full moon phase calendar.",
    url: SITE_URL,
    siteName: "Moon Phase Emoji",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Phase of the Moon Emoji | Moon Phase Today",
    description:
      "See the current Moon phase as an emoji. Live lunar phase, illumination, lunar age, and a full moon phase calendar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "science",

  // Google Search Console verification meta tag.
  // Renders as: <meta name="google-site-verification" content="..." />
  // on every page (server-rendered into <head> by Next.js Metadata API).
  // Update the value in src/lib/site.ts (GOOGLE_SITE_VERIFICATION).
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moon Phase Emoji",
    url: SITE_URL,
    description:
      "See the current phase of the Moon as an emoji, with live lunar phase data and a moon phase calendar.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moon Phase Emoji",
    url: SITE_URL,
    founder: { "@type": "Person", name: AUTHOR.name },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "techsuli415502@gmail.com",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <StarField />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
