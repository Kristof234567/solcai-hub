import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Solc AI" },
      { name: "description", content: "Solc AI refund, cancellation and withdrawal policy for subscriptions." },
    ],
  }),
  component: Refund,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function Refund() {
  return (
    <PageShell title="Refund Policy – Solc AI">
      <p className="text-center text-sm text-muted-foreground -mt-6 mb-10">
        Effective: 28 July 2026 · Last updated: 28 July 2026
      </p>

      <Section title="1. Overview">
        <p>
          This Refund Policy explains when and how you can cancel a Solc AI subscription and request a refund. It
          applies to all purchases of Solc AI Pro, whether made on our website or through a mobile app store.
        </p>
        <p>
          We want you to be happy with Solc AI. If the app is not right for you, you can cancel at any time, and in the
          cases described below you can also ask for your money back.
        </p>
      </Section>

      <Section title="2. Who you are buying from">
        <p>
          <strong className="text-foreground">Purchases made on our website</strong> are processed by our payment
          provider, <strong className="text-foreground">Paddle.com Market Ltd</strong>, which acts as the Merchant of
          Record. This means Paddle handles the payment, invoicing, applicable taxes, and processes refunds on our
          behalf. Your card or bank statement will show a charge from Paddle.
        </p>
        <p>
          <strong className="text-foreground">Purchases made inside the iOS app</strong> (via In-App Purchase) are
          processed by <strong className="text-foreground">Apple</strong>. In that case Apple's refund rules apply and
          refunds must be requested from Apple — see section 6.
        </p>
      </Section>

      <Section title="3. Free trial">
        <p>
          Where a free trial is offered (for example, a 3-day trial on the yearly plan), you will not be charged during
          the trial period. If you cancel before the trial ends, you pay nothing.
        </p>
        <p>
          If you do not cancel before the end of the trial, the subscription automatically converts to a paid
          subscription and the first payment is taken. The trial length and price are always shown clearly at checkout
          before you confirm your purchase.
        </p>
      </Section>

      <Section title="4. 30-day money-back guarantee">
        <p>
          For subscriptions purchased on our website, we offer a{" "}
          <strong className="text-foreground">30-day money-back guarantee</strong>. If you are not satisfied with Solc
          AI, contact us within 30 days of your payment and we will refund that payment in full — no questions asked.
        </p>
        <p>
          The guarantee applies to your most recent payment. Refunds are issued to the original payment method and are
          normally processed by Paddle within 5–10 business days, depending on your bank or card issuer.
        </p>
      </Section>

      <Section title="5. EU/EEA and UK right of withdrawal">
        <p>
          If you are a consumer in the European Union, the European Economic Area or the United Kingdom, you have a
          statutory right to withdraw from a distance contract within{" "}
          <strong className="text-foreground">14 days</strong> without giving any reason.
        </p>
        <p>
          Because Solc AI is digital content supplied immediately, you are asked at checkout to consent to immediate
          performance and to acknowledge that you thereby lose your right of withdrawal once the service has been fully
          supplied. Nevertheless, our 30-day money-back guarantee in section 4 is more generous than the statutory
          minimum and applies in addition to your legal rights, which remain unaffected.
        </p>
      </Section>

      <Section title="6. Purchases made through the Apple App Store">
        <p>
          If you subscribed inside the iOS app, the payment was taken by Apple and we are not able to issue the refund
          ourselves. Please request the refund directly from Apple:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Go to{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              reportaproblem.apple.com
            </a>{" "}
            and sign in with your Apple ID.
          </li>
          <li>Select the Solc AI purchase and choose "Request a refund".</li>
        </ul>
        <p>
          You can also manage or cancel an App Store subscription on your iPhone under Settings → your name →
          Subscriptions.
        </p>
      </Section>

      <Section title="7. How to cancel your subscription">
        <p>
          You can cancel at any time. Cancelling stops future renewals; you keep full access until the end of the period
          you have already paid for.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">Website subscriptions:</strong> use the link in your Paddle receipt
            email, or contact us at{" "}
            <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">
              support.solcai@gmail.com
            </a>{" "}
            and we will cancel it for you.
          </li>
          <li>
            <strong className="text-foreground">App Store subscriptions:</strong> iPhone Settings → your name →
            Subscriptions → Solc AI → Cancel Subscription.
          </li>
        </ul>
      </Section>

      <Section title="8. Renewals and partial periods">
        <p>
          Subscriptions renew automatically at the end of each billing period at the price shown at purchase, unless
          cancelled beforehand. We do not generally refund unused parts of a billing period after the 30-day guarantee
          window has passed, but if you were charged unexpectedly — for example, you intended to cancel and did not —
          contact us and we will look at it fairly and in good faith.
        </p>
      </Section>

      <Section title="9. Exceptions">
        <p>We may decline a refund where:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the request is made more than 30 days after the payment;</li>
          <li>the account shows evidence of fraud, abuse, or violation of our Terms of Use;</li>
          <li>a refund has already been issued for the same payment;</li>
          <li>the purchase was made through a third-party store, in which case that store's policy applies.</li>
        </ul>
      </Section>

      <Section title="10. How to request a refund">
        <p>
          Email us at{" "}
          <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">
            support.solcai@gmail.com
          </a>{" "}
          from the address you used at checkout, and include the order or receipt number if you have it. We aim to reply
          within 2 business days.
        </p>
        <p>
          For website purchases you may also contact Paddle directly at{" "}
          <a
            href="https://paddle.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            paddle.net
          </a>
          , where you can look up your order and manage your subscription.
        </p>
      </Section>

      <Section title="11. Changes to this policy">
        <p>
          We may update this Refund Policy from time to time. The version published on this page at the time of your
          purchase is the one that applies to that purchase.
        </p>
      </Section>
    </PageShell>
  );
}
