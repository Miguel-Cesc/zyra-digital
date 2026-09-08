import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "The guarantee",
  description:
    "How ZYRA DIGITAL's money-back guarantee works: what is promised, what it depends on, and what happens if we miss it.",
  alternates: { canonical: "/guarantee" },
};

export default function GuaranteePage() {
  return (
    <LegalLayout
      eyebrow="The guarantee"
      title="If it doesn't work, you don't pay for it."
      updated="22 August 2026"
    >
      <p>
        Your first month with us carries a number. Not a promise to improve
        things, not a best-effort clause. A figure worked out from your own
        margin and your own budget, written down and agreed before anything
        goes live. If we miss it, the fee for that month comes back to you.
      </p>

      <h2>What the number is</h2>
      <p>
        It is set so that the month pays for itself. For a business selling
        products, that means the revenue the ads need to generate for your
        gross margin to cover both the ad spend and our fee. For a business
        selling services, it is a count of booked jobs at your average job
        value, worked out the same way and rounded up to at least one.
      </p>
      <p>
        You will see the arithmetic before you agree to it. If the number looks
        unreachable to you, say so then, because that is a much better
        conversation than the one at the end of the month.
      </p>

      <h2>Whose figures decide it</h2>
      <p>
        Yours. Your store&rsquo;s own revenue reporting, or the jobs you confirm
        you actually booked. Advertising platforms consistently report more
        conversions than a set of books shows, for reasons that are structural
        rather than dishonest, and we are not going to settle a refund on a
        number that flatters us. The platform&rsquo;s figures are for steering
        the account. They do not adjudicate this.
      </p>

      <h2>What it depends on</h2>
      <p>
        Four conditions. They are here rather than in fine print because a
        guarantee stated without its conditions is not really a guarantee. If
        we cannot agree on all four, we will tell you, and the guarantee simply
        does not attach to your month.
      </p>
      <ul>
        <li>
          <strong>A budget that clears the floor.</strong> We calculate a
          minimum daily spend for your account. Below it, no advertising
          account gathers enough data to get out of the platform&rsquo;s
          learning phase, and a promise made on an account that structurally
          cannot perform would be an empty one.
        </li>
        <li>
          <strong>Creative approved within two business days.</strong> Ads
          fatigue faster than a slow approval loop can replace them. If
          approvals stall, the account degrades while it waits, and that is not
          something we can be held to.
        </li>
        <li>
          <strong>The offer stays put for the month.</strong> Change what is
          being sold, or what it costs, and the test is measuring a different
          business than the one the number was set against.
        </li>
        <li>
          <strong>Measurement working before day one.</strong> Tracking has to
          be in place and verified before the month starts, not retrofitted
          afterwards. Without it there is nothing to settle the guarantee on.
        </li>
      </ul>

      <h2>What you get back</h2>
      <p>
        The fee you paid us for that month, in full. Ad spend is not refunded,
        because it was never ours. It went from your card to the advertising
        platform and it bought the impressions it bought. Anyone offering to
        refund your ad spend is either not telling you the truth or is pricing
        that risk into the fee somewhere you cannot see it.
      </p>

      <h2>Who tells you</h2>
      <p>
        We do, within seven days of the month closing, whether we hit it or
        not. You will not have to ask, and you will not have to work it out
        from a dashboard. If we missed and were close, we will say so, refund
        the fee, and offer to run another month at our cost of creative if we
        think the next one lands. If we missed and were not close, we will
        refund the fee and tell you honestly that we are not the right fit.
      </p>

      <h2>Where it does not apply</h2>
      <ul>
        <li>
          <strong>Ongoing months.</strong> The guarantee covers your first
          month. After that the arrangement is month to month on results you
          can see, and there is no fee to hold back against a promise.
        </li>
        <li>
          <strong>Creative-only work.</strong> If we make the ads and you run
          them, you get a delivery guarantee rather than a performance one. We
          are not going to promise a result on media we do not control.
        </li>
      </ul>

      <p>
        The full terms are in the services agreement you sign, and this page is
        written to match it. If you spot a place where the two disagree, tell
        us and we will fix the disagreement rather than argue about which one
        wins.
      </p>
    </LegalLayout>
  );
}
