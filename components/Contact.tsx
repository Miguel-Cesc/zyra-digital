"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-cloud py-32 md:py-40 overflow-hidden"
    >
      <div className="container-x grid lg:grid-cols-12 gap-y-14 lg:gap-x-16">
        <Reveal className="lg:col-span-5">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Let&rsquo;s build
            <br />
            <span className="text-ink/40">something solid.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-md">
            Tell us about your business and what you need. We&rsquo;ll come
            back with a clear next step.
          </p>

          <ul className="mt-12 space-y-5 text-[15px]">
            <li className="flex items-start gap-4 text-ink/75">
              <span className="w-10 h-10 shrink-0 rounded-full bg-white border border-black/5 flex items-center justify-center text-teal-deep shadow-card">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className="eyebrow text-ink/40">Email</div>
                <a
                  href="mailto:admin@zyradigital.org"
                  className="link-underline text-ink"
                >
                  admin@zyradigital.org
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 text-ink/75">
              <span className="w-10 h-10 shrink-0 rounded-full bg-white border border-black/5 flex items-center justify-center text-teal-deep shadow-card">
                <Globe className="w-4 h-4" />
              </span>
              <div>
                <div className="eyebrow text-ink/40">Web</div>
                <span className="text-ink">zyradigital.org</span>
              </div>
            </li>
            <li className="flex items-start gap-4 text-ink/75">
              <span className="w-10 h-10 shrink-0 rounded-full bg-white border border-black/5 flex items-center justify-center text-teal-deep shadow-card">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <div className="eyebrow text-ink/40">Based in</div>
                <span className="text-ink">Brisbane, Australia</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="card p-7 md:p-9 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field
                label="Business name"
                name="business"
                placeholder="Optional"
              />
            </div>
            <Field
              label="Email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
            <Field
              label="What you need"
              name="needs"
              placeholder="Website, hosting, SEO, AI search…"
            />
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-ink/50" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us a little about your project."
                className="field-textarea"
              />
            </div>

            {submitted ? (
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-teal-deep/20 bg-teal-deep/[0.04] px-4 py-3 text-teal-deep">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Thanks. We&rsquo;ll be in touch shortly.
                </span>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mt-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary mt-2 w-full sm:w-fit group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending…" : "Send Enquiry"}
                  {!sending && (
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>
              </>
            )}

            <p className="text-xs text-ink/40 mt-1">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="link-underline text-ink/60">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-ink/50" htmlFor={name}>
        {label}
        {required && <span className="text-teal-deep"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field"
      />
    </div>
  );
}
