"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Spark } from "./Spark";
import { Chip, Cta } from "./ui";

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

      <div className="container-x relative pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-24 flex flex-col items-center text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Chip tone="light">AI ad creative &middot; Brisbane, Australia</Chip>
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
          Send a link to what you sell. We build the video and image ads with
          AI, then run the campaigns behind them.
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
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-14 w-full max-w-3xl border-t border-white/12 pt-8"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            <HeroStat value="24" suffix="hr" label="From link to live ads" />
            <HeroStat value="100+" suffix="" label="Businesses advertised for" />
            <HeroStat value="$0" suffix="" label="For your first ad" />
          </div>
        </motion.div>

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
        <span className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tightest leading-none">
          {value}
        </span>
        {suffix && (
          <span className="font-display text-xl text-white/60">{suffix}</span>
        )}
      </div>
      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider2 text-white/45 leading-snug">
        {label}
      </span>
    </div>
  );
}
