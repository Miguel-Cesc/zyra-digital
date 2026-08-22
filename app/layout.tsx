import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const SITE_URL = "https://zyradigital.org";

export const viewport: Viewport = {
  themeColor: "#003F46",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZYRA DIGITAL · We make your ads and we run them",
    template: "%s · ZYRA DIGITAL",
  },
  description:
    "ZYRA DIGITAL makes video and image ads for Australian businesses and runs the campaigns behind them. Live in 48 hours, with nothing for you to write, film or brief. Brisbane.",
  keywords: [
    "Meta ads Brisbane",
    "Facebook ads agency Australia",
    "video ad creative",
    "AI video ads",
    "media buying Brisbane",
    "Google Ads Brisbane",
    "ecommerce advertising Australia",
    "AI ad creative",
    "ZYRA DIGITAL",
  ],
  authors: [{ name: "ZYRA DIGITAL" }],
  creator: "ZYRA DIGITAL",
  publisher: "ZYRA DIGITAL",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "ZYRA DIGITAL",
    title: "ZYRA DIGITAL · We make your ads and we run them",
    description:
      "Video and image ads that convert, live in 48 hours, with nothing for you to brief. Brisbane, Australia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ZYRA DIGITAL · We make your ads. Then we run them.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRA DIGITAL · We make your ads and we run them",
    description:
      "Video and image ads that convert, live in 48 hours. Brisbane, Australia.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "ZYRA DIGITAL",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: "miguel@zyradigital.org",
  description:
    "Brisbane advertising studio making video and image ad creative for Australian businesses and running the campaigns behind it.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brisbane",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    postalCode: "4000",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.4698,
    longitude: 153.0251,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -27.4698,
      longitude: 153.0251,
    },
    geoRadius: "100 km",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advertising Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Video Ad Creative" },
      { "@type": "OfferCatalog", name: "Meta Media Buying" },
      { "@type": "OfferCatalog", name: "Google Ads Management" },
      { "@type": "OfferCatalog", name: "Offer & Landing Page Build" },
      { "@type": "OfferCatalog", name: "Measurement & Reporting" },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        <GoogleTagManager />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <GoogleTagManagerNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
