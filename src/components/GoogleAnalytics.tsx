import Script from "next/script";

/**
 * Google Analytics 4 component.
 * Loads the gtag.js library and initializes the GA4 measurement ID
 * using the `afterInteractive` strategy so it doesn't block the page.
 *
 * Configured via the GA_MEASUREMENT_ID constant. Update the value below
 * to change the tracking ID without touching the layout.
 */
export const GA_MEASUREMENT_ID = "G-E55YTPLR7T";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
