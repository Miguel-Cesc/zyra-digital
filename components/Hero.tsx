"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronDown, Rocket, MapPin } from "lucide-react";
import { Spark } from "./Spark";

export function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : i * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative bg-teal-deep text-white overflow-hidden"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />

      {/* Soft glowing orbs */}
      <div
        className="orb"
        style={{
          left: "-10%",
          top: "10%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(10,107,112,0.55), transparent 60%)",
          opacity: 0.55,
        }}
      />
      <div
        className="orb"
        style={{
          right: "-15%",
          bottom: "-20%",
          width: "640px",
          height: "640px",
          background:
            "radial-gradient(circle, rgba(0,63,70,0.9), transparent 65%)",
          opacity: 0.7,
        }}
      />

      {/* Decorative sparks */}
      <Spark className="absolute -right-32 -top-24 w-[640px] text-white/[0.05] pointer-events-none" />
      <Spark className="absolute -left-40 bottom-0 w-[480px] text-white/[0.04] pointer-events-none" />

      {/* Soft top gradient for header blend */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

      <div className="container-x relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-32 md:pb-40 lg:pb-48 min-h-[min(94vh,920px)] flex flex-col">
        {/* Pills row: status + USP + location */}
        <motion.div
          className="flex flex-wrap items-center gap-2"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="pill-light !bg-emerald-400/[0.08] !border-emerald-300/20 text-emerald-200">
            <span className="live-dot" aria-hidden="true" />
            <span className="tracking-wider2">AVAILABLE NOW</span>
          </span>
          <span className="pill-light">
            <Rocket className="w-3.5 h-3.5" />
            <span className="tracking-wider2">24-48 HR DELIVERY</span>
          </span>
          <span className="pill-light hidden sm:inline-flex">
            <MapPin className="w-3.5 h-3.5" />
            <span className="tracking-wider2">BRISBANE, AU</span>
          </span>
        </motion.div>

        <motion.h1
          className="h-display mt-7 sm:mt-8 text-[42px] sm:text-6xl lg:text-[88px] xl:text-[104px] text-white max-w-5xl"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          A digital presence
          <br className="hidden sm:block" />{" "}
          <span className="sm:inline">your business</span>{" "}
          <span className="text-gradient-teal">can rely on.</span>
        </motion.h1>

        <motion.p
          className="mt-7 sm:mt-8 max-w-xl text-white/70 text-[17px] sm:text-lg leading-relaxed"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Fast. Secure. Clear. We build websites and digital systems that
          actually work, for the modern web and what comes next. Most projects
          ship in <span className="text-white font-medium">24 to 48 hours</span>.
        </motion.p>

        <motion.div
          className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Link href="#contact" className="btn-light-on-dark group">
            Start Your Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="#services" className="btn-outline-light group">
            View Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Hero stat strip: stacks vertically on mobile, 3-col on sm+ */}
        <motion.div
          className="mt-14 sm:mt-16 w-full border-t border-white/10 pt-7"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <HeroStat value="24-48" suffix="hr" label="Average delivery" />
            <HeroStat value="100" suffix="%" label="Mobile-first" />
            <HeroStat value="0" suffix="" label="Lock-in contracts" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#trust"
          aria-label="Scroll to next section"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 inline-flex flex-col items-center gap-2 text-white/55 hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="eyebrow">Scroll</span>
          <span className="relative w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2">
            <motion.span
              className="block w-1 h-2 rounded-full bg-white/70"
              animate={
                reduced ? {} : { y: [0, 12, 0], opacity: [0.6, 1, 0.6] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
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
    <div className="flex flex-col items-center sm:items-start gap-1 py-2 sm:py-0 border-b sm:border-b-0 border-white/10 last:border-b-0">
      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-3xl sm:text-3xl lg:text-4xl text-white tracking-tightest leading-none">
          {value}
        </span>
        {suffix && (
          <span className="font-display text-lg sm:text-lg text-white/60">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-xs sm:text-xs uppercase tracking-wider2 text-white/45 text-center sm:text-left">
        {label}
      </span>
    </div>
  );
}
