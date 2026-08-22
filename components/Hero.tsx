"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Spark } from "./Spark";
import { Cta } from "./ui";

export function Hero() {
  const reduced = useReducedMotion();

  // With reduced motion the hero renders in place rather than fading in from
  // opacity 0, which would otherwise leave it blank for those users.
  const fadeUp = reduced
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: () => ({ opacity: 1, y: 0, transition: { duration: 0 } }),
      }
    : {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section id="hero" className="relative text-white overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <Spark className="absolute -right-40 -top-32 w-[720px] text-white/[0.045] pointer-events-none" />
      <Spark className="absolute -left-48 bottom-[-8rem] w-[560px] text-white/[0.035] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <div className="container-x relative pt-28 sm:pt-32 md:pt-44 pb-24 md:pb-32 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="pill-light !bg-emerald-400/[0.10] !border-emerald-300/25 text-emerald-100">
            <span className="live-dot" aria-hidden="true" />
            <span className="tracking-wider2">TAKING NEW CLIENTS</span>
          </span>
          <span className="pill-light">
            <span className="tracking-wider2">BRISBANE, AU</span>
          </span>
        </motion.div>

        <motion.h1
          className="h-display mt-8 text-[44px] sm:text-7xl lg:text-[92px] xl:text-[108px] text-white max-w-[16ch]"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          We make your ads.
          <br />
          <span className="text-gradient-teal">Then we run them.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-white/75 text-[17px] sm:text-xl leading-relaxed"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Video and image ads that convert, live inside 48 hours, with nothing
          for you to write, film or brief. Send us a link to what you sell.
          We do the rest and we run the campaigns behind it.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Cta href="#contact" tone="light">
              Get a free ad
            </Cta>
            <Link href="#pricing" className="btn-outline-light !h-12 !px-6">
              See pricing
            </Link>
          </div>
          <p className="text-white/55 text-[13px]">
            One ad, made from your own photos. No charge, nothing attached.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 w-full max-w-3xl border-t border-white/12 pt-8"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <HeroStat value="48" suffix="hr" label="From brief to live" />
            <HeroStat value="0" suffix="" label="Hours of your time" />
            <HeroStat value="$0" suffix="" label="Cost of your first ad" />
          </div>
        </motion.div>

        <motion.a
          href="#reel"
          aria-label="Scroll to next section"
          className="mt-14 inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 1.1, duration: reduced ? 0 : 0.6 }}
        >
          <span className="eyebrow">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

function HeroStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-4xl lg:text-5xl text-white tracking-tightest leading-none">
          {value}
        </span>
        {suffix && (
          <span className="font-display text-xl text-white/60">{suffix}</span>
        )}
      </div>
      <span className="text-[11px] uppercase tracking-wider2 text-white/45">
        {label}
      </span>
    </div>
  );
}
