/**
 * FAQ structured data (JSON-LD) for Google rich results.
 * This is a server component so the script renders in SSR HTML.
 */

const FAQS = [
  {
    q: "What does ZYRA DIGITAL build?",
    a: "Websites, hosting setups, digital marketing, analytics, SEO, GEO/AI search and optional ongoing management.",
  },
  {
    q: "How fast can you deliver?",
    a: "We deliver most projects within 24 to 48 hours. Larger builds take 2 to 6 weeks depending on scope, and we confirm a clear timeline before we start.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. You get full access and ownership from day one. You can make changes yourself at any time, no need to wait on us.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. There are no lock-in contracts. You own your website and can manage it independently. Ongoing support is available if you want it, but it is entirely optional.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes. We can host and manage your website, or work with your existing setup.",
  },
  {
    q: "What is GEO / AI search?",
    a: "Optimisation for AI-driven discovery and answer engines. The next layer beyond traditional SEO.",
  },
];

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
