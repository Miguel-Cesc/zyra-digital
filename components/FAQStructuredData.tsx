/**
 * FAQ structured data (JSON-LD) for Google rich results.
 * This is a server component so the script renders in SSR HTML.
 */

import { FAQS } from "@/lib/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
