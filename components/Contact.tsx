"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Chip } from "./ui";
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
      className="relative bg-white py-28 md:py-36 overflow-hidden"
    >
      <div className="container-x grid lg:grid-cols-12 gap-y-14 lg:gap-x-16">
        <Reveal className="lg:col-span-5">
          <Chip>Contact</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Tell us what
            <br />
            <span className="text-ink/40">you sell.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-md">
            Your business name and a link to your products is enough. We come
            back with a free ad and a straight answer.
          </p>

          <dl className="mt-12 flex flex-col gap-6">
            <div>
              <dt className="eyebrow text-ink/40">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:miguel@zyradigital.org"
                  className="link-underline text-ink text-[17px]"
                >
                  miguel@zyradigital.org
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/40">Based in</dt>
              <dd className="mt-1 text-ink text-[17px]">Brisbane, Australia</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink/40">Reply time</dt>
              <dd className="mt-1 text-ink text-[17px]">One business day</dd>
            </div>
          </dl>
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
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-ink/50" htmlFor="needs">
                What you&rsquo;re after
              </label>
              <select id="needs" name="needs" className="field" defaultValue="">
                <option value="" disabled>
                  Choose the closest one
                </option>
                <option value="Free ad">
                  Just the free ad for now ($0)
                </option>
                <option value="First month">
                  Try a first month, everything done for me ($2,000)
                </option>
                <option value="Creative">
                  Make the ads, I&rsquo;ll run them (from $1,500/mo)
                </option>
                <option value="Creative + Media Buying">
                  Make the ads and run them for me (from $3,000/mo plus ad spend)
                </option>
                <option value="Full Funnel">
                  All of that plus landing pages (from $4,500/mo plus ad spend)
                </option>
                <option value="Not sure">
                  Not sure, tell me what fits
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-ink/50" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What do you sell, and where are you advertising it now?"
                className="field-textarea"
              />
            </div>

            {submitted ? (
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-teal-deep/20 bg-teal-deep/[0.04] px-4 py-3 text-teal-deep">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Got it. We&rsquo;ll come back within a business day.
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
                  {sending ? "Sending…" : "Send it"}
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
