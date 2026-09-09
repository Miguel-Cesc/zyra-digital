"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

/**
 * Client testimonials.
 *
 * Empty on purpose, exactly like `Proof`. The standing rule is never
 * fabricate a testimonial, and the section renders nothing while the array is
 * empty, so switching it on is a data edit and not a build.
 *
 * Each entry needs all four fields filled and the client's explicit
 * permission to be quoted by name. Rules carried from the rest of the site:
 * quote is three lines at most (cut the original if it runs long, a landing
 * page quote is a snippet not a full review), attribution is a person plus
 * their role, and no dashes in the rendered text.
 *
 * Paste the words in as text rather than as a screenshot of Slack. A
 * screenshot is unreadable on a phone, cannot be selected or read aloud, and
 * carries whatever else was on screen at the time.
 */
export type Testimonial = {
  /** The quote itself. Three lines at most once rendered. */
  quote: string;
  /** The person who said it. Real name, with their permission. */
  name: string;
  /** Their role and business, e.g. "Owner, an outdoor equipment retailer". */
  role: string;
  /** What the work was, e.g. "Google Ads, 2026". Keeps the quote anchored. */
  context: string;
};

export const TESTIMONIALS: Testimonial[] = [];

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="bg-white py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="h-display text-4xl md:text-5xl lg:text-[52px] text-ink">
            What the people
            <br />
            <span className="text-ink/40">who paid us say.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerChildren={0.07}
        >
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="card-hover p-8 flex flex-col">
              <p className="text-ink/75 text-[17px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-7">
                <div className="font-display text-[17px] text-ink">{t.name}</div>
                <div className="mt-1 text-ink/55 text-[14px]">{t.role}</div>
                <div className="mt-3 pt-3 border-t border-black/5 text-ink/40 text-[12px]">
                  {t.context}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
