import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How ZYRA DIGITAL uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie Policy"
      updated="3 May 2026"
    >
      <p>
        This Cookie Policy explains how ZYRA DIGITAL uses cookies and similar
        technologies on our website. It should be read together with our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help websites operate, remember your preferences and
        understand how the site is used.
      </p>

      <h2>2. Types of cookies we use</h2>

      <h3>Strictly necessary</h3>
      <p>
        Required for the site to function correctly (e.g. security, basic
        navigation). These cannot be disabled.
      </p>

      <h3>Performance & analytics</h3>
      <p>
        Help us understand how visitors interact with our site so we can
        improve it. These may include anonymous usage data such as page views,
        time on page and referring URLs.
      </p>

      <h3>Functional</h3>
      <p>
        Remember choices you make (e.g. preferences) to give you a better
        experience.
      </p>

      <p>
        We do not currently use cookies for cross-site advertising or
        third-party marketing profiling.
      </p>

      <h2>3. Third-party cookies</h2>
      <p>
        Some cookies may be set by third-party services we use, such as
        analytics providers. These third parties have their own privacy and
        cookie policies.
      </p>

      <h2>4. Managing cookies</h2>
      <p>You can control cookies through:</p>
      <ul>
        <li>Your browser settings: most browsers allow you to refuse, accept or delete cookies.</li>
        <li>Device-level controls (e.g. mobile OS privacy settings).</li>
        <li>Opt-out tools provided by third-party analytics services.</li>
      </ul>
      <p>
        Note: disabling cookies may affect the functionality of this and other
        websites.
      </p>

      <h2>5. Changes</h2>
      <p>
        We may update this Cookie Policy from time to time. The current version
        will always be available on this page with a revised &ldquo;Last
        updated&rdquo; date.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href="mailto:admin@zyradigital.org">admin@zyradigital.org</a>.
      </p>
    </LegalLayout>
  );
}
