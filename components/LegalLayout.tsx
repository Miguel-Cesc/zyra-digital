import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SectionLabel } from "./SectionLabel";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-cloud border-b border-black/5">
          <div className="container-x py-20 md:py-28">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] text-ink/55 hover:text-ink transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to home
            </Link>
            <div className="mt-8 max-w-3xl">
              <SectionLabel>{eyebrow}</SectionLabel>
              <h1 className="h-display mt-5 text-4xl md:text-5xl lg:text-[64px] text-ink">
                {title}
              </h1>
              <p className="mt-6 text-ink/50 text-sm">
                Last updated: {updated}
              </p>
            </div>
          </div>
        </section>

        <article className="container-x py-20 md:py-28">
          <div className="prose-zyra max-w-3xl">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
