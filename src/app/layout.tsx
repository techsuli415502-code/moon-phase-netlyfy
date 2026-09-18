import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnchorAd from "@/components/AnchorAd";
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
  themeColor: "#fbf7f0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Current Phase of the Moon as an Emoji | Moon Phase Today",
    template: "%s | Moon Phase Emoji",
  },
  description:
    "See the current phase of the Moon as an emoji. Live lunar phase today with illumination, lunar age, and a full moon phase calendar. Waxing and waning updates in real time.",
  keywords: [
    "current phase of the moon as an emoji",
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
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Current Phase of the Moon as an Emoji | Moon Phase Today",
    description:
      "See the current phase of the Moon as an emoji. Live lunar phase, illumination, lunar age, and a full moon phase calendar.",
    url: SITE_URL,
    siteName: "Moon Phase Emoji",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moon Phase Emoji - current phase of the moon as an emoji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Phase of the Moon as an Emoji | Moon Phase Today",
    description:
      "See the current phase of the Moon as an emoji. Live lunar phase, illumination, lunar age, and a full moon phase calendar.",
    images: ["/og-image.png"],
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
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
    },
    founder: { "@type": "Person", name: AUTHOR.name },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "techsuli415502@gmail.com",
    },
  };

  // Logo schema tells Google to use this image as the site's official
  // logo in search results (knowledge panel, rich snippets).
  const logoLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}/logo.svg`,
    url: `${SITE_URL}/logo.svg`,
    name: "Moon Phase Emoji logo",
    description:
      "A crescent moon in deep violet on a cream badge with an amber border, surrounded by amber sparkle stars.",
    width: { "@type": "QuantitativeValue", value: 240, unitCode: "E37" },
    height: { "@type": "QuantitativeValue", value: 64, unitCode: "E37" },
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(logoLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-decor`}
      >
        <GoogleAnalytics />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <AnchorAd />
        <Toaster />
      </body>
    </html>
  );
}
