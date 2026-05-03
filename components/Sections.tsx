"use client";

import {
  Rocket,
  ShieldCheck,
  Smartphone,
  Search,
  LineChart,
  Code2,
  Server,
  Megaphone,
  Sparkles,
  Layout,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Spark } from "./Spark";
import { SectionLabel } from "./SectionLabel";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/* ============================================================ */
/* Trust strip: concise, data-led                                */
/* ============================================================ */

const TRUST_ITEMS = [
  { Icon: Rocket, label: "24-48hr delivery", highlight: true },
  { Icon: ShieldCheck, label: "Secure" },
  { Icon: Smartphone, label: "Mobile-ready" },
  { Icon: Search, label: "Search-focused" },
  { Icon: LineChart, label: "Measurable" },
];

export function TrustStrip() {
  return (
    <section id="trust" className="bg-cloud border-y border-black/5">
      <div className="container-x py-10 md:py-12">
        <Stagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6"
          staggerChildren={0.06}
        >
          {TRUST_ITEMS.map(({ Icon, label, highlight }) => (
            <StaggerItem
              key={label}
              className="flex items-center gap-3 text-ink/70 hover:text-ink transition-colors group"
            >
              <span
                className={
                  highlight
                    ? "w-9 h-9 rounded-full bg-teal-deep text-white flex items-center justify-center shadow-card transition-all group-hover:-translate-y-0.5 group-hover:shadow-cardHover"
                    : "w-9 h-9 rounded-full bg-white border border-black/5 text-teal-deep flex items-center justify-center shadow-card transition-all group-hover:-translate-y-0.5 group-hover:shadow-cardHover"
                }
              >
                <Icon className="w-4 h-4" />
              </span>
              <span
                className={
                  highlight
                    ? "text-[14px] font-semibold text-ink"
                    : "text-[14px] font-medium"
                }
              >
                {label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================ */
/* About: short, sharp                                          */
/* ============================================================ */

export function About() {
  return (
    <section id="about" className="bg-white py-32 md:py-40">
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
        <Reveal className="lg:col-span-5">
          <SectionLabel>About</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Digital systems
            <br />
            <span className="text-ink/40">that actually work.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="lg:col-span-7 lg:pt-4">
          <p className="text-ink/70 text-xl leading-relaxed max-w-prose2">
            ZYRA DIGITAL builds reliable, structured online systems for modern
            business: websites, hosting, search, analytics and ongoing
            management.
          </p>
          <p className="mt-6 text-ink/55 text-[17px] leading-relaxed max-w-prose2">
            No unnecessary complexity. No confusing process. Just digital
            services built with purpose.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Services: tighter grid, hover lift                          */
/* ============================================================ */

const SERVICES = [
  { Icon: Code2, title: "Websites", body: "Structured sites built for speed, clarity and conversion." },
  { Icon: Server, title: "Hosting & Setup", body: "Reliable foundations with stability and protection in mind." },
  { Icon: Megaphone, title: "Digital Marketing", body: "Clear strategies designed for visibility and growth." },
  { Icon: LineChart, title: "Analytics", body: "Measurement systems for better decisions." },
  { Icon: Search, title: "SEO", body: "Modern technical and content optimisation." },
  { Icon: Sparkles, title: "GEO / AI Search", body: "Discoverability across answer engines and AI." },
  { Icon: Wrench, title: "Management", body: "Ongoing updates, fixes and improvements." },
  { Icon: Layout, title: "Landing Pages", body: "Focused pages built for campaigns and offers." },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-teal-deep text-white py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <Spark className="absolute -left-32 top-20 w-[560px] text-white/[0.03] pointer-events-none" />

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <SectionLabel tone="light">What We Do</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-white">
            Web services
            <br />
            <span className="text-white/45">built for modern business.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerChildren={0.05}
        >
          {SERVICES.map(({ Icon, title, body }, i) => (
            <StaggerItem
              key={title}
              className="card-dark-hover p-7 flex flex-col gap-5 group cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/85 transition-all group-hover:bg-white group-hover:text-teal-deep group-hover:border-white">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-[11px] uppercase tracking-wider2 text-white/35">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-[22px] text-white leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-white/55 text-[14px] leading-relaxed">
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
/* Standards data: BIG NUMBERS, data-driven                    */
/* ============================================================ */

type Stat = {
  value: string;
  suffix?: string;
  label: string;
  source: string;
  featured?: boolean;
};

const STATS: Stat[] = [
  {
    value: "24-48",
    suffix: "hr",
    label: "Average delivery on most ZYRA DIGITAL projects. Fast, without cutting corners.",
    source: "Our delivery promise",
    featured: true,
  },
  {
    value: "60",
    suffix: "%",
    label: "of global web traffic now comes from mobile devices.",
    source: "Statcounter, 2024",
  },
  {
    value: "25",
    suffix: "%",
    label: "predicted drop in traditional search volume by 2026 as AI assistants reshape discovery.",
    source: "Gartner, 2024",
  },
  {
    value: "53",
    suffix: "%",
    label: "of mobile users abandon a site that takes longer than 3 seconds to load.",
    source: "Google / SOASTA Research",
  },
];

export function StandardsData() {
  return (
    <section id="insights" className="bg-white py-32 md:py-40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <SectionLabel>The Data</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[52px] text-ink">
            Standards change.
            <br />
            <span className="text-ink/40">Your business should keep up.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerChildren={0.08}
        >
          {STATS.map((s) => {
            const isFeatured = s.featured;
            return (
              <StaggerItem
                key={s.label}
                className={
                  isFeatured
                    ? "relative overflow-hidden rounded-2xl bg-teal-deep text-white p-8 flex flex-col gap-6 group transition-all hover:-translate-y-1 hover:shadow-cardHover"
                    : "card-hover p-8 flex flex-col gap-6 group"
                }
              >
                {isFeatured && (
                  <>
                    <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
                    <Spark className="absolute -right-8 -bottom-8 w-40 text-white/[0.05] pointer-events-none" />
                  </>
                )}
                <div className="relative flex items-baseline gap-1">
                  <motion.span
                    className={
                      isFeatured
                        ? "font-display text-5xl md:text-[64px] text-white tracking-tightest leading-none"
                        : "font-display text-6xl md:text-7xl text-teal-deep tracking-tightest leading-none"
                    }
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {s.value}
                  </motion.span>
                  {s.suffix && (
                    <span
                      className={
                        isFeatured
                          ? "font-display text-2xl md:text-3xl text-white/70"
                          : "font-display text-3xl md:text-4xl text-teal-deep/70"
                      }
                    >
                      {s.suffix}
                    </span>
                  )}
                </div>
                <p
                  className={
                    isFeatured
                      ? "relative text-white/75 text-[15px] leading-relaxed"
                      : "text-ink/70 text-[15px] leading-relaxed"
                  }
                >
                  {s.label}
                </p>
                <div
                  className={
                    isFeatured
                      ? "relative mt-auto pt-4 border-t border-white/15 flex items-center justify-between"
                      : "mt-auto pt-4 border-t border-black/5 flex items-center justify-between"
                  }
                >
                  <span
                    className={
                      isFeatured
                        ? "text-[11px] uppercase tracking-wider2 text-white/55 inline-flex items-center gap-2"
                        : "text-[11px] uppercase tracking-wider2 text-ink/40"
                    }
                  >
                    {isFeatured && <span className="live-dot" />}
                    {s.source}
                  </span>
                  <Spark
                    className={
                      isFeatured
                        ? "w-3 h-3 text-white/50 transition-transform group-hover:rotate-45 group-hover:text-white"
                        : "w-3 h-3 text-teal-deep/30 transition-transform group-hover:rotate-45 group-hover:text-teal-deep"
                    }
                  />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Standards: our principles                                   */
/* ============================================================ */

const STANDARDS = [
  { title: "Performance", body: "Pages should load fast and feel smooth." },
  { title: "Structure", body: "Every page has a clear purpose." },
  { title: "Security", body: "Stable foundations, by default." },
  { title: "Search-ready", body: "Built for modern visibility." },
  { title: "AI-aware", body: "Prepared for emerging search behaviour." },
  { title: "Maintainable", body: "Easy to grow and improve over time." },
];

export function Standards() {
  return (
    <section
      id="standards"
      className="relative bg-teal-deep text-white py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <Reveal className="flex flex-col items-center text-center">
          <Spark className="w-7 h-7 text-white/40 mb-6 animate-twinkle" />
          <SectionLabel tone="light">Our Standard</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl">
            Fast. Secure. Clear.
            <br />
            <span className="text-white/45">Built to perform.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          staggerChildren={0.06}
        >
          {STANDARDS.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="bg-teal-deep p-9 md:p-10 flex flex-col gap-3 group transition-colors hover:bg-teal-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider2 text-white/40">
                  0{i + 1}
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <Spark className="w-3 h-3 text-white/40 transition-transform group-hover:rotate-45 group-hover:text-white/80" />
              </div>
              <h3 className="font-display text-2xl text-white mt-2">
                {s.title}
              </h3>
              <p className="text-white/55 text-[14px] leading-relaxed">
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Process                                                       */
/* ============================================================ */

const PROCESS = [
  { step: "01", title: "Discover", body: "We learn your business and current setup." },
  { step: "02", title: "Build", body: "We design and develop the foundation." },
  { step: "03", title: "Review", body: "You review. We refine." },
  { step: "04", title: "Launch", body: "We launch and support what comes next." },
];

export function Process() {
  return (
    <section id="process" className="bg-cloud py-32 md:py-40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Simple. Clear.
            <br />
            <span className="text-ink/40">Managed.</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerChildren={0.08}
        >
          {PROCESS.map((p) => (
            <StaggerItem
              key={p.step}
              className="card-hover p-8 flex flex-col gap-3 group"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-teal-deep/15 transition-colors group-hover:text-teal-deep/40">
                  {p.step}
                </span>
                <Spark className="w-4 h-4 text-teal-deep/30 transition-transform group-hover:rotate-45 group-hover:text-teal-deep" />
              </div>
              <h3 className="font-display text-2xl text-ink mt-3">{p.title}</h3>
              <p className="text-ink/60 text-[15px] leading-relaxed">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Management                                                    */
/* ============================================================ */

const MGMT_FEATURES = [
  "Full access & ownership",
  "Easy self-serve edits",
  "No lock-in or wait times",
  "Performance checks",
  "Search improvements",
  "Optional ongoing support",
];

export function Management() {
  return (
    <section className="relative bg-teal-deep text-white py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <Spark className="absolute -right-24 bottom-0 w-[480px] text-white/[0.04] pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
        <Reveal className="lg:col-span-6">
          <SectionLabel tone="light">Your Website, Your Keys</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-white">
            You own it.
            <br />
            <span className="text-white/45">You run it.</span>
          </h2>
          <p className="mt-8 text-white/65 text-lg leading-relaxed max-w-xl">
            We hand over the keys. Every website we build comes with full
            access and a simple process so you can make changes yourself,
            no wait times, no lock-in. Need extra help? Our optional
            support is there if you want it.
          </p>
          <a href="#contact" className="btn-light-on-dark mt-10 group">
            Get Started
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <Stagger
          className="lg:col-span-6 grid sm:grid-cols-2 gap-3"
          staggerChildren={0.05}
        >
          {MGMT_FEATURES.map((f) => (
            <StaggerItem
              key={f}
              className="card-dark-hover px-5 py-4 flex items-center gap-3 text-white/85 cursor-default"
            >
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 transition-all group-hover:bg-white group-hover:text-teal-deep">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5l3.5 3.5L16 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[14px]">{f}</span>
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
      <div className="container-x py-32 md:py-40">
        <Reveal className="relative bg-teal-deep text-white rounded-3xl px-8 sm:px-14 lg:px-20 py-20 md:py-24 overflow-hidden text-center flex flex-col items-center">
          <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
          <Spark className="absolute left-1/2 -translate-x-1/2 top-8 w-[520px] text-white/[0.04] pointer-events-none" />
          <Spark className="w-7 h-7 text-white/60 mb-6 animate-twinkle relative" />
          <h2 className="h-display text-4xl md:text-5xl lg:text-[64px] text-white max-w-3xl relative">
            Build a digital presence
            <br />
            <span className="text-white/55">your business can depend on.</span>
          </h2>
          <p className="mt-7 text-white/65 text-lg max-w-xl relative">
            Fast. Secure. Clear. Managed for the modern web.
          </p>
          <a href="#contact" className="btn-light-on-dark mt-10 group relative">
            Start Your Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
