"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Chip } from "./ui";
import { Reveal } from "./Reveal";
import { FAQS } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-28 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-16">
        <Reveal className="lg:col-span-4">
          <Chip>FAQ</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[52px] text-ink">
            The questions
            <br />
            <span className="text-ink/40">everyone asks.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="lg:col-span-8">
          <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  >
                    <span
                      className={cn(
                        "font-display text-lg md:text-xl transition-colors",
                        isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all",
                        isOpen
                          ? "bg-teal-deep border-teal-deep text-white rotate-45"
                          : "border-black/15 text-ink/60 group-hover:border-teal-deep group-hover:text-teal-deep"
                      )}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-14 text-ink/65 text-[16px] leading-relaxed max-w-prose2">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
