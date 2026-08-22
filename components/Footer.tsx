import Link from "next/link";
import { Logo } from "./Logo";
import { Spark } from "./Spark";

const NAV_LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#work", label: "The work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/guarantee", label: "Guarantee" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { label: "Your first month", href: "/#pricing" },
  { label: "Creative", href: "/#pricing" },
  { label: "Creative + Media Buying", href: "/#pricing" },
  { label: "Full Funnel", href: "/#pricing" },
  { label: "Meta & Google media buying", href: "/#how" },
  { label: "Offer & landing pages", href: "/#how" },
];

const LEGAL_LINKS = [
  { href: "/guarantee", label: "The Guarantee" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-20 md:py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Logo tone="light" size="md" />
          <p className="text-white/55 text-[15px] leading-relaxed max-w-sm">
            We make your ads and we run them. AI video and still creative for
            Australian businesses, live in 24 hours.
          </p>
          <div className="text-[13px] text-white/40 leading-relaxed">
            <span className="eyebrow text-white/30">Based in</span>
            <div className="mt-1">Brisbane, Australia</div>
            <div className="mt-3">ABN 43 727 670 015</div>
          </div>
        </div>

        <FooterCol title="Navigate" className="lg:col-span-2">
          {NAV_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="What we do" className="lg:col-span-3">
          {SERVICE_LINKS.map((s) => (
            <FooterLink key={s.label} href={s.href}>
              {s.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Legal" className="lg:col-span-3">
          {LEGAL_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
          <a
            href="mailto:miguel@zyradigital.org"
            className="link-underline text-[14px] text-white/55 hover:text-white mt-2"
          >
            miguel@zyradigital.org
          </a>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-white/40">
          <div className="flex items-center gap-2">
            <Spark className="w-3 h-3 text-white/30" />
            <span>© {year} ZYRA DIGITAL. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ""}`}>
      <div className="eyebrow text-white/30">{title}</div>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="link-underline text-[14px] text-white/55 hover:text-white"
    >
      {children}
    </Link>
  );
}
