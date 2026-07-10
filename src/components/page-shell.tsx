import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_solcai.png.asset.json";
import type { ReactNode } from "react";

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Solc AI" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold tracking-tight">Solc<span className="text-gold-gradient"> AI</span></span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition">← Back to home</Link>
        </div>
      </header>
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 text-center">{title}</h1>
          {children}
        </div>
      </main>
      <footer className="border-t border-border/40 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 Solc AI. Eat smarter.
        </div>
      </footer>
    </div>
  );
}