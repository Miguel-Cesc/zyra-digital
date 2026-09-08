"use client";

import { Chip } from "./ui";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/**
 * Past client results.
 *
 * Empty on purpose. The standing rule for this business is never fabricate a
 * number, a testimonial or a client, and there is no documented, permissioned
 * result to publish yet. The section renders nothing while the array is empty,
 * so turning it on is a data edit and not a build.
 *
 * Each entry needs: a real figure, the account it came from, the window it was
 * measured over, and the client's permission — even unnamed, since "an
 * Australian garden retailer" is identifiable to anyone in the category.
 */
export type Result = {
  /** e.g. "Outdoor ecommerce" — category only unless the client agrees to be named. */
  category: string;
  /** e.g. { value: "3.1x", label: "Return on ad spend" } */
  headline: { value: string; label: string };
  secondary: { value: string; label: string };
  /** The measurement window and the source. Required — an unsourced figure does not ship. */
  basis: string;
};

export const RESULTS: Result[] = [];

export function Proof() {
  if (RESULTS.length === 0) return null;

  return (
    <section id="results" className="bg-white py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <Chip>Results</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[52px] text-ink">
            What it did
            <br />
            <span className="text-ink/40">for other people.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerChildren={0.07}
        >
          {RESULTS.map((r) => (
            <StaggerItem key={r.category + r.headline.label} className="card-hover p-8 flex flex-col gap-6">
              <span className="eyebrow text-teal-muted">{r.category}</span>
              <div className="flex flex-wrap gap-x-10 gap-y-5">
                {[r.headline, r.secondary].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl md:text-5xl text-teal-deep tracking-tightest leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-ink/55 text-[13px] leading-snug max-w-[16ch]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-auto pt-4 border-t border-black/5 text-[12px] text-ink/40 leading-relaxed">
                {r.basis}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
