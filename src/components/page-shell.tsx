import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_solcai.png.asset.json";
import appStoreBadge from "@/assets/appstore-badge.png.asset.json";
import googlePlayBadge from "@/assets/googleplay-badge.jpg.asset.json";
import type { ReactNode } from "react";

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0">
            <img src={logoAsset.url} alt="Solc AI" width={32} height={32} className="h-8 w-8 object-contain shrink-0" />
            <span className="text-lg font-semibold tracking-tight whitespace-nowrap">Solc<span className="text-gold-gradient"> AI</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" hash="how" className="hover:text-foreground transition">How it works</Link>
            <Link to="/" hash="features" className="hover:text-foreground transition">Features</Link>
            <Link to="/" hash="reviews" className="hover:text-foreground transition">Reviews</Link>
            <Link to="/" hash="faq" className="hover:text-foreground transition">FAQ</Link>
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <Link to="/" hash="download" aria-label="Download for iOS on the App Store" className="block transition hover:opacity-80">
              <img src={appStoreBadge.url} alt="Download for iOS" className="h-10 w-auto" />
            </Link>
            <a href="https://forms.gle/pHp21kD2ERH8DNJW8" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="block transition hover:opacity-80">
              <img src={googlePlayBadge.url} alt="Get it on Google Play" className="h-10 w-auto" />
            </a>
          </div>
          <Link to="/" hash="download" className="sm:hidden inline-flex items-center rounded-full border border-gold/40 bg-surface px-4 py-2 text-sm font-medium text-gold-gradient hover:bg-surface-elevated transition whitespace-nowrap">
            Get the app
          </Link>
        </div>
      </header>
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8 sm:mb-10 text-center">{title}</h1>
          {children}
        </div>
      </main>
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="text-sm text-muted-foreground">© 2026 Solc AI. Eat smarter.</span>
            </div>
            <p className="text-lg md:text-xl font-semibold tracking-tight">Download Solc AI Today!</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Download on the App Store">
                <img src={appStoreBadge.url} alt="Download on the App Store" className="h-12 w-auto object-contain" />
              </a>
              <a href="https://forms.gle/pHp21kD2ERH8DNJW8" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <img src={googlePlayBadge.url} alt="Get it on Google Play" className="h-12 w-auto object-contain" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <Link to="/manage-subscription" className="hover:text-foreground transition">Manage subscription</Link>
            <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
            <Link to="/delete-data" className="hover:text-foreground transition">Delete data</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}