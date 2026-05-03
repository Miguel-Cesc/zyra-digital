import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "ZYRA DIGITAL is committed to making our website accessible to as many people as possible.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Accessibility Statement"
      updated="3 May 2026"
    >
      <p>
        ZYRA DIGITAL is committed to making our website accessible to as many
        people as possible, including people with disabilities. We aim to meet
        the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level
        AA</strong> as a baseline standard.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Use semantic, accessible HTML across the site.</li>
        <li>Maintain sufficient colour contrast for readable text.</li>
        <li>Ensure interactive elements are keyboard navigable.</li>
        <li>Provide descriptive alt text for meaningful imagery.</li>
        <li>Respect <strong>prefers-reduced-motion</strong> for users who choose to limit motion.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        Despite our efforts, some content or features may not yet be fully
        accessible. We are working to identify and address these.
      </p>

      <h2>Feedback</h2>
      <p>
        If you experience an accessibility barrier on our site, please contact
        us at{" "}
        <a href="mailto:admin@zyradigital.org">admin@zyradigital.org</a>. We
        aim to respond within a reasonable timeframe and will do our best to
        provide the information or service you need in an accessible format.
      </p>

      <h2>Disability Discrimination Act</h2>
      <p>
        Our commitment is informed by the{" "}
        <strong>Disability Discrimination Act 1992 (Cth)</strong> and the{" "}
        <strong>Anti-Discrimination Act 1991 (Qld)</strong>.
      </p>
    </LegalLayout>
  );
}
