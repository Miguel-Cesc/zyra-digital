import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker, TICKER_TOP } from "@/components/Ticker";
import { Reel, Demos } from "@/components/Demos";
import {
  HowItWorks,
  WhyAI,
  Trust,
  About,
  FinalCTA,
} from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { Proof } from "@/components/Proof";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FAQStructuredData } from "@/components/FAQStructuredData";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://zyradigital.org",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FAQStructuredData />
      <Header overlay />
      <main id="top" className="-mt-16 md:-mt-20">
        <Hero />
        <Reel />
        <Ticker items={TICKER_TOP} tone="light" />
        <HowItWorks />
        <Demos />
        <WhyAI />
        <Trust />
        <Pricing />
        {/* Renders nothing until real, permissioned client results exist. */}
        <Proof />
        {/* Renders nothing until real, permissioned client quotes exist. */}
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
