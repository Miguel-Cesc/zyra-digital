import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-cloud min-h-[70vh] flex items-center justify-center">
      <div className="container-x text-center py-20">
        <p className="font-display text-8xl md:text-9xl text-teal-deep/20">404</p>
        <h1 className="h-display mt-4 text-3xl md:text-4xl text-ink">
          Page not found.
        </h1>
        <p className="mt-4 text-ink/55 text-lg max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8 group">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
