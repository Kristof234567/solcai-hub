import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/manage-subscription")({
  head: () => ({
    meta: [
      { title: "Manage Subscription — Solc AI" },
      { name: "description", content: "Manage your Solc AI web subscription." },
    ],
  }),
  component: ManageSubscription,
});

function ManageSubscription() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/support.solcai@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Solc AI — Manage Subscription request",
          _template: "table",
          type: "Manage subscription",
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageShell title="Manage Subscription">
      <p className="text-center text-muted-foreground mb-10 leading-relaxed">
        If you purchased your subscription on the web, please enter the email address you subscribed with in order to change your subscription.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gold mb-2">Email</label>
          <input
            id="email"
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-border/60 bg-surface px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/60"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-foreground text-background font-semibold py-4 hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && (
          <p className="text-sm text-center text-gold">Thanks — we'll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-center text-red-400">Something went wrong. Please email support.solcai@gmail.com directly.</p>
        )}
      </form>
    </PageShell>
  );
}