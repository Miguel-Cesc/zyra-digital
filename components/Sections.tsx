"use client";

import { Spark } from "./Spark";
import { Chip, Cta, Tick } from "./ui";
import { StepArt } from "./StepArt";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/* ============================================================ */
/* How it works: two feature rows, then the two steps that are   */
/* entirely ours as a pair. Four identical alternating rows read  */
/* as one long block; breaking the pattern halves the scroll.     */
/* ============================================================ */

type Step = {
  chip: string;
  title: string;
  ticks: string[];
};

const STEPS: Step[] = [
  {
    chip: "You send a link",
    title: "That is the whole brief",
    ticks: [
      "A link to what you sell, and the photos already on your site",
      "We read what you and your competitors are running now",
      "No brief, no shoot day, no scripts to sign off",
    ],
  },
  {
    chip: "We make the creative",
    title: "Video and image, inside 24 hours",
    ticks: [
      "Genuinely different concepts, not one idea in three crops",
      "Built from your own product photos, never stock",
      "You see it all first. One reply approves it",
    ],
  },
  {
    chip: "We run it",
    title: "In your ad account, not ours",
    ticks: [
      "Your account, so it stays yours",
      "Ad spend goes card to platform, never through us",
      "Hooks and angles tested, not budgets nudged",
    ],
  },
  {
    chip: "You see what it did",
    title: "Measured against your revenue",
    ticks: [
      "Platforms claim more than your books show. We report the books",
      "Which hooks and angles converted, named",
      "What changes next month, and why",
    ],
  },
];

export function HowItWorks() {
  const [first, second, ...pair] = STEPS;

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
            Making the ads is the job nobody has time for, so we automated it.
            Your part is a link and an approval.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-20 md:gap-28">
          {[first, second].map((s, i) => {
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

        {/* Steps three and four: entirely ours, so they sit as a pair. */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
          {pair.map((s, i) => (
            <Reveal key={s.chip} delay={i * 0.08} className="flex flex-col">
              <StepArt index={i + 2} />
              <div className="mt-7">
                <Chip>{s.chip}</Chip>
                <h3 className="h-display mt-4 text-[26px] md:text-[30px] text-ink max-w-[20ch]">
                  {s.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {s.ticks.map((t) => (
                    <Tick key={t}>{t}</Tick>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20 flex justify-center">
          <Cta href="#contact">Get a free ad</Cta>
        </Reveal>
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
    body: "Accounts stop working when the same three ads run for six months. Yours get new concepts every month.",
  },
  {
    title: "Twenty angles, not two",
    body: "A shoot day buys one idea. Generating them buys a set, so the platform can find the hook that works.",
  },
  {
    title: "None of the production cost",
    body: "No videographer, no editor, no studio day, no talent fee, no creative on salary.",
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
            Advertising rewards whoever puts the most good ideas in front of an
            audience. That used to be a budget question. Now it is an idea one,
            and you can start on a small spend.
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

      </div>
    </section>
  );
}


/* ============================================================ */
/* The trust objection: the one everybody asks before pricing    */
/* ============================================================ */

const TELLS = [
  {
    k: "Your real product",
    v: "Every ad opens on a photograph of the thing you actually sell. Never stock, never a render of a product that does not exist.",
  },
  {
    k: "Nobody synthetic",
    v: "No generated face speaks to camera for you, so the uncanny valley never gets a chance to open.",
  },
  {
    k: "A person signs it off",
    v: "Nothing runs until someone here has watched it and cut whatever reads as synthetic.",
  },
];

export function Trust() {
  return (
    <section id="trust" className="bg-white py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="h-display text-4xl md:text-5xl lg:text-[52px] text-ink">
            The AI look is the problem.
            <br />
            <span className="text-ink/40">Not the AI.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-prose2">
            What puts customers off is the tell: the warped hand, the face that
            is not quite a face, the product that changes shape between frames.
            Removing those is most of the work.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-16 grid md:grid-cols-3 border-t border-black/[0.08]">
          {TELLS.map((t) => (
            <div
              key={t.k}
              className="py-8 md:py-10 md:px-8 md:first:pl-0 md:last:pr-0 border-b last:border-b-0 md:border-b-0 border-black/[0.08] md:border-l md:first:border-l-0 md:border-l-black/[0.08]"
            >
              <div className="font-display text-[19px] text-ink">{t.k}</div>
              <p className="mt-2.5 text-ink/60 text-[15px] leading-relaxed">
                {t.v}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-14 max-w-2xl">
          <p className="text-ink/70 text-lg leading-relaxed">
            Anyone can put a prompt into a video model and get something back.
            The gap between that and an ad that holds up in a feed is the whole
            job, and that part is ours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ */
/* About: the team                                               */
/* ============================================================ */

/**
 * Set this to the photo's path once the file is in `public/`, e.g.
 * "/team.jpg". Left null, About renders exactly as it did before, so a
 * missing file can never ship a broken image.
 */
const TEAM_PHOTO: string | null = null;

export function About() {
  return (
    <section id="about" className="bg-cloud py-28 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
        <Reveal className="lg:col-span-7">
          <h2 className="h-display text-4xl md:text-5xl lg:text-[52px] text-ink">
            A small team that has
            <br />
            <span className="text-ink/40">run a lot of accounts.</span>
          </h2>
          {TEAM_PHOTO && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={TEAM_PHOTO}
              alt="Miguel and Ibeth, who run Zyra Digital"
              className="mt-8 w-full max-w-2xl aspect-[3/2] object-cover rounded-3xl border border-black/5 shadow-card"
            />
          )}
          <p className="mt-8 text-ink/70 text-lg leading-relaxed max-w-2xl">
            Zyra is Miguel and Ibeth. Between us we have run paid advertising
            for{" "}
            <span className="font-display text-ink">100+</span> businesses, on
            Google Ads and Meta, in ecommerce and in services.
          </p>
          <p className="mt-5 text-ink/55 text-[17px] leading-relaxed max-w-2xl">
            You deal with the people who spent the money and watched it work or
            not work. We are in Brisbane, we stay small on purpose, and it is
            the same people every month.
          </p>
        </Reveal>

        <Stagger className="lg:col-span-5 grid gap-3" staggerChildren={0.07}>
          {[
            { k: "Google Ads", v: "Search, Shopping and Performance Max" },
            { k: "Meta", v: "Advantage+ and manual, creative led not budget led" },
            { k: "AI creative", v: "Video and stills from your own product photos, at volume" },
            { k: "Measurement", v: "The gap between what a platform claims and what you banked" },
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
            attached. If it is no good, you have lost an email.
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
