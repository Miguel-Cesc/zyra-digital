"use client";

import { Spark } from "./Spark";
import { Chip, Cta, Tick } from "./ui";
import { StepArt } from "./StepArt";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/* ============================================================ */
/* How it works: alternating feature rows                        */
/* ============================================================ */

type Step = {
  chip: string;
  title: string;
  ticks: string[];
  cta: string;
};

const STEPS: Step[] = [
  {
    chip: "You send a link",
    title: "That is the whole brief",
    ticks: [
      "A link to what you sell, and the photos already on your own site",
      "We read what you and your competitors are running right now",
      "No creative brief, no shoot day, no scripts to sign off",
    ],
    cta: "Send us a link",
  },
  {
    chip: "We make the creative",
    title: "Video and image, inside 24 hours",
    ticks: [
      "A set of genuinely different concepts, not one idea in three crops, because that is what the platform needs to learn",
      "Generated from your own product photography, never stock, never a synthetic person",
      "You see everything before it runs, and one reply is all it takes to approve",
    ],
    cta: "See the demos",
  },
  {
    chip: "We run it",
    title: "In your ad account, not ours",
    ticks: [
      "Campaigns built and launched inside your own ad account, so it stays yours",
      "Ad spend goes straight from your card to the platform, never through us",
      "Tested across hooks and angles rather than by nudging budgets",
    ],
    cta: "See what that costs",
  },
  {
    chip: "You see what it did",
    title: "Measured against your revenue",
    ticks: [
      "Platforms always claim more than your books show. We report the books",
      "Which hooks and angles actually converted, named",
      "What changes next month, and the reason it is changing",
    ],
    cta: "Start this month",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-white py-28 md:py-36 overflow-hidden">
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <Chip>How it works</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Four steps, and
            <br />
            <span className="text-ink/40">three of them are ours.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-prose2">
            The reason people stop advertising is that making the ads is a job
            nobody has time for. So we automated that job. Your part is a link
            and an approval.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-20 md:gap-28">
          {STEPS.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={s.chip}
                className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-center"
              >
                <Reveal
                  direction={flipped ? "left" : "right"}
                  className={flipped ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"}
                >
                  <Chip>{s.chip}</Chip>
                  <h3 className="h-display mt-5 text-[30px] md:text-4xl text-ink max-w-[18ch]">
                    {s.title}
                  </h3>
                  <ul className="mt-7 flex flex-col gap-3.5">
                    {s.ticks.map((t) => (
                      <Tick key={t}>{t}</Tick>
                    ))}
                  </ul>
                  <Cta href="#contact" className="mt-9">
                    {s.cta}
                  </Cta>
                </Reveal>

                <Reveal
                  direction={flipped ? "right" : "left"}
                  delay={0.1}
                  className={flipped ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"}
                >
                  <StepArt index={i} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Why AI: the volume argument, in three points                  */
/* ============================================================ */

const WHY_AI = [
  {
    title: "Creative that never goes stale",
    body: "Accounts stop working because the same three ads run for six months. We can put genuinely new concepts in front of your audience every month, because making them is automated rather than booked.",
  },
  {
    title: "Twenty angles, not two",
    body: "A shoot day buys you one idea. Generating them buys you a set, so the platform can find the hook that works instead of you paying to guess which one to film.",
  },
  {
    title: "None of the production cost",
    body: "No videographer, no editor, no studio day, no talent fee, no in-house creative on salary. That is the whole reason a small business can now run the volume of creative that used to need a team.",
  },
];

export function WhyAI() {
  return (
    <section id="why-ai" className="relative text-white py-28 md:py-36 overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <Spark className="absolute -right-32 -bottom-40 w-[520px] text-white/[0.05] pointer-events-none" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <Chip tone="light">Why we make them with AI</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[52px] text-white">
            New ads every month,
            <br />
            <span className="text-white/45">without a production budget.</span>
          </h2>
          <p className="mt-7 text-white/70 text-lg leading-relaxed max-w-prose2">
            Advertising rewards whoever can put the most good ideas in front of
            an audience. That used to be a budget question, which is why it was
            a large company&rsquo;s game. Generating the creative moves it back
            to being an idea question, and you can start on a small spend.
          </p>
        </Reveal>

        <Stagger
          className="mt-16 grid md:grid-cols-3 gap-4"
          staggerChildren={0.07}
        >
          {WHY_AI.map(({ title, body }, i) => (
            <StaggerItem
              key={title}
              className="card-dark-hover p-8 flex flex-col gap-5 group cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[13px] tracking-wider2 text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Spark className="w-3 h-3 text-white/25 transition-transform duration-500 group-hover:rotate-90 group-hover:text-white/70" />
              </div>
              <div>
                <h3 className="font-display text-[22px] text-white leading-snug">
                  {title}
                </h3>
                <p className="mt-2.5 text-white/60 text-[15px] leading-relaxed">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <p className="flex items-start gap-3 max-w-2xl text-white/55 text-[14px] leading-relaxed text-left">
            <Spark className="w-3.5 h-3.5 mt-1 shrink-0 text-white/50" />
            <span>
              Every ad still opens on a real photograph of your real product,
              a person signs off on all of it before it runs, and no synthetic
              face ever speaks to camera for you.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ */
/* About: the team, deliberately unnamed                         */
/* ============================================================ */

export function About() {
  return (
    <section id="about" className="bg-cloud py-28 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
        <Reveal className="lg:col-span-7">
          <Chip>Who runs it</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[52px] text-ink">
            A small team that has
            <br />
            <span className="text-ink/40">run a lot of accounts.</span>
          </h2>
          <p className="mt-8 text-ink/70 text-lg leading-relaxed max-w-2xl">
            Between us we have run paid advertising for more than a hundred
            businesses, across both Google Ads and Meta, in ecommerce and in
            services. That is the whole pitch. You get people who have actually
            spent the money and watched it work or not work, rather than an
            account manager passing your notes to someone else.
          </p>
          <p className="mt-5 text-ink/55 text-[17px] leading-relaxed max-w-2xl">
            We are in Brisbane, we stay small on purpose, and you deal with the
            same people every month.
          </p>
        </Reveal>

        <Stagger className="lg:col-span-5 grid gap-3" staggerChildren={0.07}>
          {[
            { k: "Google Ads", v: "Search, Shopping and Performance Max, across ecommerce and lead generation" },
            { k: "Meta", v: "Advantage+ and manual, creative-led rather than budget-led" },
            { k: "AI creative", v: "Video and still ads generated from your own product photography, at volume" },
            { k: "Measurement", v: "Pixels, events, and the gap between what a platform claims and what you banked" },
          ].map((row) => (
            <StaggerItem key={row.k} className="card-hover p-6">
              <div className="font-display text-[19px] text-ink">{row.k}</div>
              <p className="mt-1.5 text-ink/55 text-[14px] leading-relaxed">
                {row.v}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Final CTA                                                     */
/* ============================================================ */

export function FinalCTA() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container-x py-28 md:py-36">
        <Reveal className="relative text-white rounded-[32px] px-8 sm:px-14 lg:px-20 py-20 md:py-24 overflow-hidden text-center flex flex-col items-center">
          <div className="aurora" />
          <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
          <Spark className="absolute left-1/2 -translate-x-1/2 top-6 w-[560px] text-white/[0.05] pointer-events-none" />
          <Spark className="w-7 h-7 text-white/60 mb-6 relative" />
          <h2 className="h-display text-4xl md:text-5xl lg:text-[64px] text-white max-w-[18ch] relative">
            Let us make you one
            <br />
            <span className="text-white/55">and you can judge it.</span>
          </h2>
          <p className="mt-7 text-white/65 text-lg max-w-xl relative">
            One ad, built from your own photos, at no cost and with nothing
            attached to it. If it is no good, you have lost an email.
          </p>
          <div className="mt-10 relative">
            <Cta href="#contact" tone="light">
              Get a free ad
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
