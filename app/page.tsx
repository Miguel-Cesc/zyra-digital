import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker, TICKER_TOP, TICKER_MID } from "@/components/Ticker";
import { Reel, Demos } from "@/components/Demos";
import {
  GuaranteePromise,
  HowItWorks,
  Toolkit,
  About,
  FinalCTA,
} from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { Proof } from "@/components/Proof";
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
        <GuaranteePromise />
        <HowItWorks />
        <Demos />
        <Toolkit />
        <Ticker items={TICKER_MID} reverse />
        <Pricing />
        {/* Renders nothing until real, permissioned client results exist. */}
        <Proof />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
