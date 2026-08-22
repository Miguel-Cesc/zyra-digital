import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the ZYRA DIGITAL website and services, governed by the laws of Queensland, Australia.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="3 May 2026"
    >
      <p>
        These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) govern
        your access to and use of the website and services provided by ZYRA
        DIGITAL (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>
        &rdquo;, &ldquo;<strong>our</strong>&rdquo;), based in Brisbane,
        Queensland, Australia. By accessing this website or engaging our
        services, you agree to these Terms.
      </p>

      <h2>1. Use of the website</h2>
      <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit the use of the site by any other person.</p>
      <p>You must not:</p>
      <ul>
        <li>Use the site in any way that breaches any applicable Australian law or regulation.</li>
        <li>Attempt to gain unauthorised access to any part of the site, server or network.</li>
        <li>Introduce viruses, trojans, worms or any other malicious material.</li>
        <li>Reproduce, duplicate, copy or resell any portion of the site contrary to these Terms.</li>
      </ul>

      <h2>2. Services</h2>
      <p>
        Where you engage us to provide services (e.g. website design,
        development, hosting, marketing, SEO or management), the specific
        scope, fees, timeline and deliverables will be set out in a separate
        proposal, statement of work or quote (&ldquo;<strong>Engagement</strong>
        &rdquo;). The Engagement, together with these Terms, forms the
        agreement between us.
      </p>

      <h2>3. Fees and payment</h2>
      <ul>
        <li>Fees are quoted in Australian Dollars (AUD) and are exclusive of GST unless stated otherwise.</li>
        <li>Invoices are payable within 14 days of issue, unless otherwise agreed in writing.</li>
        <li>We may suspend services for overdue accounts.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        All content on this website (including logos, branding, text, graphics
        and code) is owned by ZYRA DIGITAL or its licensors and is protected
        by Australian and international copyright laws. You may not reproduce,
        distribute or create derivative works without our written permission.
      </p>
      <p>
        For client projects, intellectual property in deliverables is assigned
        or licensed as set out in the relevant Engagement, generally upon full
        payment.
      </p>

      <h2>5. Third-party services</h2>
      <p>
        Our services may rely on third-party providers (e.g. hosting, analytics,
        domain registrars). We are not responsible for the availability,
        performance or terms of those third-party services.
      </p>

      <h2>6. Warranties and liability</h2>
      <p>
        Nothing in these Terms excludes, restricts or modifies any rights you
        may have under the <strong>Australian Consumer Law</strong> or other
        laws that cannot lawfully be excluded.
      </p>
      <p>
        Subject to those rights, the website and our services are provided on
        an &ldquo;as is&rdquo; basis. To the maximum extent permitted by law:
      </p>
      <ul>
        <li>We exclude all implied warranties.</li>
        <li>We are not liable for indirect, incidental, special or consequential loss.</li>
        <li>Our total liability is limited to the fees paid by you for the relevant services in the 12 months preceding the claim.</li>
      </ul>

      <h2>7. Indemnity</h2>
      <p>
        You agree to indemnify us against any loss, damage, claim or expense
        arising out of your breach of these Terms or your unlawful use of the
        website or services.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your use of the website is also governed by our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>9. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The current version will
        always be available on this page with a revised &ldquo;Last
        updated&rdquo; date.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the{" "}
        <strong>State of Queensland, Australia</strong>. The parties submit to
        the exclusive jurisdiction of the courts of Queensland and the courts
        of appeal from them.
      </p>

      <h2>11. Contact</h2>
      <p>
        ZYRA DIGITAL
        <br />
        Brisbane, Queensland, Australia
        <br />
        Email:{" "}
        <a href="mailto:miguel@zyradigital.org">miguel@zyradigital.org</a>
      </p>
    </LegalLayout>
  );
}
