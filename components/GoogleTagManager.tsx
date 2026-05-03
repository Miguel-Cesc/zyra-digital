import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Google Tag Manager component.
 *
 * Add NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX to .env.local to activate.
 * When the ID is not set, nothing is rendered.
 *
 * This component injects the GTM data layer and script tag in a
 * Next.js–compatible way (using next/script with afterInteractive strategy).
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
      {/* Initialise dataLayer before GTM script loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          `,
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
    </>
  );
}

/**
 * GTM <noscript> fallback for the body.
 * Place inside <body> as high as possible.
 */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
