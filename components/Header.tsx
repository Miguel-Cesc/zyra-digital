"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#standards", label: "Standards" },
  { href: "/#process", label: "Process" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_1px_0_rgba(11,20,24,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-x h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="ZYRA DIGITAL home"
          className="transition-opacity hover:opacity-80"
        >
          <Logo size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-[14px] text-ink/70 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/#contact" className="btn-primary group">
            Start Your Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-black/10 text-ink hover:bg-black/[0.03] transition-colors"
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
            className="btn-primary mt-3 w-full"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
