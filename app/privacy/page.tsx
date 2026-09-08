import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZYRA DIGITAL collects, uses, stores and protects your personal information under the Australian Privacy Act 1988 and the Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="3 May 2026"
    >
      <p>
        ZYRA DIGITAL (&ldquo;<strong>we</strong>&rdquo;, &ldquo;
        <strong>us</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;) is
        committed to protecting your privacy. This Privacy Policy explains how
        we collect, use, hold and disclose personal information in accordance
        with the <strong>Privacy Act 1988 (Cth)</strong> and the{" "}
        <strong>Australian Privacy Principles</strong> (APPs).
      </p>
      <p>
        We operate from <strong>Brisbane, Queensland, Australia</strong>. If
        applicable, we also comply with relevant Queensland and Commonwealth
        privacy obligations.
      </p>

      <h2>1. What we collect</h2>
      <p>We may collect the following personal information:</p>
      <ul>
        <li>Identity information: name, business name, job title.</li>
        <li>Contact information: email address, phone number, postal address.</li>
        <li>
          Project information: details you provide about your business, goals
          or website.
        </li>
        <li>
          Technical information: IP address, device, browser type, operating
          system, referring URLs and pages viewed via cookies and analytics.
        </li>
        <li>
          Communication records: messages, emails and enquiries you send to
          us.
        </li>
      </ul>
      <p>
        We do not knowingly collect sensitive information (as defined under the
        Privacy Act) without your consent.
      </p>

      <h2>2. How we collect it</h2>
      <ul>
        <li>Directly from you when you contact us, submit a form or engage our services.</li>
        <li>Automatically when you visit our website (cookies, server logs, analytics).</li>
        <li>From third parties such as analytics providers, hosting providers and referrals, only where lawful.</li>
      </ul>

      <h2>3. Why we collect and use it</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to enquiries and provide our services.</li>
        <li>Build, host, manage and support websites and digital systems.</li>
        <li>Improve our website, services and customer experience.</li>
        <li>Send service-related communications (e.g. project updates).</li>
        <li>Comply with our legal and regulatory obligations.</li>
      </ul>
      <p>
        We will only use your personal information for the primary purpose for
        which it was collected, or for a related purpose you would reasonably
        expect.
      </p>

      <h2>4. Disclosure of your information</h2>
      <p>We may disclose your personal information to:</p>
      <ul>
        <li>Trusted service providers who help us operate our business (e.g. hosting, email, analytics, payment processors).</li>
        <li>Professional advisors (e.g. accountants, lawyers) where reasonably necessary.</li>
        <li>Government, regulatory or law enforcement bodies where required by law.</li>
      </ul>
      <p>
        We do not sell your personal information.
      </p>

      <h2>5. Overseas disclosure</h2>
      <p>
        Some of our service providers (such as cloud hosting, email and
        analytics providers) may store or process data outside Australia,
        including in the <strong>United States</strong> and the{" "}
        <strong>European Union</strong>. Where this occurs, we take reasonable
        steps to ensure overseas recipients handle your information consistently
        with the APPs.
      </p>

      <h2>6. Cookies and analytics</h2>
      <p>
        Our website uses cookies and similar technologies to operate the site,
        understand usage and improve performance. You can control cookies
        through your browser settings. For more detail, see our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>7. Data security</h2>
      <p>
        We take reasonable steps to protect your personal information from
        misuse, interference, loss, unauthorised access, modification or
        disclosure. This includes secure hosting, access controls, encryption
        in transit and limited internal access. No method of transmission over
        the internet is 100% secure.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We retain personal information only as long as necessary to provide our
        services, comply with legal obligations, resolve disputes and enforce
        our agreements. When no longer required, we will take reasonable steps
        to securely destroy or de-identify the information.
      </p>

      <h2>9. Your rights</h2>
      <p>Under the Privacy Act, you have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you.</li>
        <li>Request correction of information that is inaccurate or out of date.</li>
        <li>Withdraw consent (where consent is the basis for our processing).</li>
        <li>Make a privacy complaint (see below).</li>
      </ul>
      <p>
        To make a request, email{" "}
        <a href="mailto:miguel@zyradigital.org">miguel@zyradigital.org</a>. We
        will respond within a reasonable period, generally within 30 days.
      </p>

      <h2>10. Complaints</h2>
      <p>
        If you believe we have breached the APPs, contact us first at{" "}
        <a href="mailto:miguel@zyradigital.org">miguel@zyradigital.org</a>. We
        will investigate and respond.
      </p>
      <p>
        If you are not satisfied with our response, you may contact the{" "}
        <strong>
          Office of the Australian Information Commissioner (OAIC)
        </strong>
        :
      </p>
      <ul>
        <li>
          Website:{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            oaic.gov.au
          </a>
        </li>
        <li>Phone: 1300 363 992</li>
      </ul>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The most current
        version will always be published on this page with a revised
        &ldquo;Last updated&rdquo; date.
      </p>

      <h2>12. Contact us</h2>
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
