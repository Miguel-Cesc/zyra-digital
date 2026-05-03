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
    default: "ZYRA DIGITAL · Digital systems that work",
    template: "%s · ZYRA DIGITAL",
  },
  description:
    "ZYRA DIGITAL is a Brisbane-based digital studio building reliable, structured websites and digital systems for modern business. Fast. Secure. Clear.",
  keywords: [
    "digital agency Brisbane",
    "website design Brisbane",
    "website development",
    "SEO",
    "GEO",
    "AI search",
    "hosting",
    "digital marketing",
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
    title: "ZYRA DIGITAL · Digital systems that work",
    description:
      "Reliable, structured websites and digital systems for modern business. Brisbane, Australia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ZYRA DIGITAL · A digital presence your business can rely on.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRA DIGITAL · Digital systems that work",
    description:
      "Reliable, structured websites and digital systems for modern business.",
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
  email: "admin@zyradigital.org",
  description:
    "Brisbane-based digital studio building reliable, structured websites and digital systems for modern business. Fast. Secure. Clear.",
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
    name: "Digital Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Website Design & Development" },
      { "@type": "OfferCatalog", name: "Hosting & Setup" },
      { "@type": "OfferCatalog", name: "SEO & GEO / AI Search" },
      { "@type": "OfferCatalog", name: "Digital Marketing" },
      { "@type": "OfferCatalog", name: "Analytics" },
      { "@type": "OfferCatalog", name: "Ongoing Management" },
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
