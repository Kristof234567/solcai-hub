import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/delete-data")({
  head: () => ({
    meta: [
      { title: "Delete Data — Solc AI" },
      { name: "description", content: "Request deletion of your Solc AI data or account." },
    ],
  }),
  component: DeleteData,
});

function DeleteData() {
  return (
    <PageShell title="Delete Data">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <p className="text-xl md:text-2xl font-semibold leading-snug">
          Do you want to delete some of your data(s) or your account?
        </p>
        <p className="text-lg text-muted-foreground">Send an Email!</p>
        <a
          href="mailto:support.solcai@gmail.com?subject=Solc%20AI%20—%20Data%20deletion%20request"
          className="inline-block rounded-full bg-foreground text-background font-semibold px-8 py-4 hover:opacity-90 transition"
        >
          support.solcai@gmail.com
        </a>
        <p className="text-sm text-muted-foreground">
          Requests are typically processed within 7 business days.
        </p>
      </div>
    </PageShell>
  );
}