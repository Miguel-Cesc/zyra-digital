"use client";

import { Spark } from "./Spark";
import { Chip, Cta, Tick } from "./ui";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * ⚠️ THESE PRICES ARE NOT SIGNED OFF.
 * They are the recommendation from ticket 12 (`.scratch/client-one/issues/
 * 12-tier-pricing-confirmation.md`). The build spec is explicit: do not ship
 * prices Miguel has not confirmed. Confirm before this branch is deployed.
 */
const TIERS = [
  {
    name: "Creative",
    price: "$1,500",
    cadence: "per month",
    blurb: "We make the ads. You run them.",
    features: [
      "An agreed set of genuinely new concepts every month",
      "Built from your own product photography",
      "Delivered as finished files, ready to upload",
      "You keep control of the ad account",
      "Delivery guarantee — we do not promise results on media we do not run",
    ],
    featured: false,
  },
  {
    name: "Creative + Media Buying",
    price: "$3,000",
    cadence: "per month, plus ad spend",
    blurb: "We make the ads and we run the account.",
    features: [
      "Everything in Creative",
      "Campaigns built and run inside your own ad account",
      "Hooks and angles tested against each other, not budgets nudged",
      "Monthly numbers reported against your revenue, not the platform's",
      "The money-back guarantee covers your first month",
    ],
    featured: true,
  },
  {
    name: "Full Funnel",
    price: "$4,500",
    cadence: "per month, plus ad spend",
    blurb: "The ads, the account, and what they point at.",
    features: [
      "Everything in Creative + Media Buying",
      "The offer itself rebuilt, if the offer is the problem",
      "Landing pages built to match the ad rather than the homepage",
      "Measurement set up end to end and checked before launch",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-cloud py-28 md:py-36 overflow-hidden">
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <Chip>Pricing</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Everyone starts
            <br />
            <span className="text-ink/40">the same way.</span>
          </h2>
        </Reveal>

        {/* Entry offer ------------------------------------------------ */}
        <Reveal delay={0.05} className="mt-14">
          <div className="relative text-white rounded-3xl overflow-hidden p-8 md:p-12">
            <div className="aurora" />
            <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
            <Spark className="absolute -right-16 -bottom-20 w-72 text-white/[0.07] pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow text-white/55">Start here</div>
                <h3 className="h-display mt-3 text-3xl md:text-[42px] text-white">
                  Your first month
                </h3>
                <p className="mt-5 text-white/70 text-[17px] leading-relaxed max-w-xl">
                  One price whichever plan you are heading for, and only the
                  scope changes. This is the month the guarantee covers, and the
                  whole fee comes off your next invoice if you carry on.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="flex items-baseline gap-2 lg:justify-end">
                  <span className="font-display text-6xl md:text-7xl text-white tracking-tightest leading-none">
                    $2,000
                  </span>
                </div>
                <div className="mt-2 text-white/55 text-[14px]">
                  once, plus ad spend
                </div>
                <div className="mt-7 lg:flex lg:justify-end">
                  <Cta href="#contact" tone="light">
                    Start this month
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tiers ------------------------------------------------------ */}
        <div className="mt-6 md:mt-8">
          <p className="text-center text-ink/45 text-[13px] uppercase tracking-wider2">
Then, if it worked
          </p>
        </div>

        <Stagger
          className="mt-8 grid lg:grid-cols-3 gap-4 items-start"
          staggerChildren={0.08}
        >
          {TIERS.map((t) => (
            <StaggerItem
              key={t.name}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300",
                t.featured
                  ? "bg-ink text-white shadow-cardHover lg:-mt-4 lg:pb-12"
                  : "card hover:-translate-y-1 hover:shadow-cardHover"
              )}
            >
              {t.featured && (
                <>
                  <div className="absolute inset-0 bg-dot-grid opacity-30 rounded-3xl pointer-events-none" />
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 h-6 px-3 rounded-full bg-emerald-400 text-ink text-[10px] font-semibold uppercase tracking-wider2">
                    Most take this one
                  </span>
                </>
              )}
              <div className="relative">
                <h3
                  className={cn(
                    "font-display text-[22px] leading-snug",
                    t.featured ? "text-white" : "text-ink"
                  )}
                >
                  {t.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-[14px]",
                    t.featured ? "text-white/55" : "text-ink/50"
                  )}
                >
                  {t.blurb}
                </p>

                <div className="mt-7 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "font-display text-5xl tracking-tightest leading-none",
                      t.featured ? "text-white" : "text-teal-deep"
                    )}
                  >
                    {t.price}
                  </span>
                </div>
                <div
                  className={cn(
                    "mt-2 text-[13px]",
                    t.featured ? "text-white/50" : "text-ink/45"
                  )}
                >
                  {t.cadence}
                </div>

                <ul className="mt-8 flex flex-col gap-3.5">
                  {t.features.map((f) => (
                    <Tick key={f} tone={t.featured ? "light" : "dark"}>
                      <span className="text-[14px]">{f}</span>
                    </Tick>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 pt-2">
                <Cta href="#contact" tone={t.featured ? "light" : "dark"}>
                  Enquire
                </Cta>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <p className="flex items-start gap-3 max-w-2xl text-ink/55 text-[14px] leading-relaxed">
            <Spark className="w-3.5 h-3.5 mt-1 shrink-0 text-teal-deep" />
            <span>
              Ad spend is separate. It goes straight from your card to the ad platform, we
              never invoice it and we never take a cut of it. No lock-in on any
              plan, one month&rsquo;s notice to stop.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
