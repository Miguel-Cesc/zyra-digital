import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import {
  TrustStrip,
  About,
  Services,
  StandardsData,
  Standards,
  Process,
  Management,
  FinalCTA,
} from "@/components/Sections";
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
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Marquee />
        <About />
        <Services />
        <StandardsData />
        <Standards />
        <Process />
        <Management />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
