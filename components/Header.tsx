"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Spark } from "./Spark";
import { Cta } from "./ui";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/#work", label: "The work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Floating over the dark hero: only before the first scroll, and only
  // on a page that actually has one behind it.
  const light = overlay && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        !light
          ? "bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_1px_0_rgba(11,20,24,0.04)] text-ink"
          : "bg-transparent border-b border-transparent text-white"
      )}
    >
      <div className="container-x h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="ZYRA DIGITAL home"
          className="transition-opacity hover:opacity-80"
        >
          <Logo tone={light ? "light" : "dark"} size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "link-underline text-[14px] transition-colors",
                light ? "text-white/75 hover:text-white" : "text-ink/70 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Cta href="/#contact" tone={light ? "light" : "dark"} className="!h-10 !text-[11px]">
            Get a free ad
          </Cta>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border transition-colors",
            light
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-black/10 text-ink hover:bg-black/[0.03]"
          )}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-white border-b border-black/5 transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-x py-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-2 py-3 text-[15px] text-ink/80 hover:text-ink hover:bg-black/[0.03] rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-cta mt-3 w-full justify-center group"
          >
            <span className="btn-cta-tile">
              <Spark className="w-3.5 h-3.5" />
            </span>
            Get a free ad
          </Link>
        </div>
      </div>
    </header>
  );
}
