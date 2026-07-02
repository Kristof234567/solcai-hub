import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_solcai.png.asset.json";
import heroFood from "@/assets/hero-food.jpg";
import scanFood from "@/assets/scan-food.jpg";
import appStoreBadge from "@/assets/appstore-badge.png.asset.json";
import googlePlayBadge from "@/assets/googleplay-badge.jpg.asset.json";
import avatarMaya from "@/assets/avatar-maya.jpg.asset.json";
import avatarDaniel from "@/assets/avatar-daniel.jpg.asset.json";
import avatarPriya from "@/assets/avatar-priya.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Solc AI" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="text-lg font-semibold tracking-tight">Solc<span className="text-gold-gradient"> AI</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#download" aria-label="Download for iOS on the App Store" className="block transition hover:opacity-80">
            <img src={appStoreBadge.url} alt="Download for iOS" className="h-10 w-auto" />
          </a>
          <a href="#download" aria-label="Download for Android on Google Play" className="block transition hover:opacity-80">
            <img src={googlePlayBadge.url} alt="Download for Android" className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)", opacity: 0.25 }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight">
          Snap your meal.
          <br />
          <span className="text-gold-gradient italic font-normal">Know your calories.</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          Solc AI reads your plate in seconds. No barcodes. No searching. Just point, shoot, and log — with calories and macros you can actually trust.
        </p>
        <div id="download" className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" aria-label="Download on the App Store" className="block transition hover:opacity-80">
            <img src={appStoreBadge.url} alt="Download on the App Store" className="h-14 w-auto" />
          </a>
          <a href="#" aria-label="Get it on Google Play" className="block transition hover:opacity-80">
            <img src={googlePlayBadge.url} alt="Get it on Google Play" className="h-14 w-auto" />
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free to start · No credit card · 4.9 ★ from 12,400+ users</p>

        <div className="relative mt-20 mx-auto max-w-4xl">
          <div className="absolute inset-x-16 -bottom-6 h-24 rounded-full blur-3xl" style={{ background: "var(--gold)", opacity: 0.2 }} />
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-[var(--shadow-elevated)]">
            <img src={heroFood} alt="Healthy meal with salmon, avocado and berries" width={1536} height={1536} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


function HowItWorks() {
  const steps = [
    { n: "01", title: "Snap", body: "Open Solc AI and take a photo of anything on your plate — home cooked, restaurant, or on the go." },
    { n: "02", title: "Solve", body: "Our vision model identifies each ingredient and estimates portion sizes with restaurant-grade accuracy." },
    { n: "03", title: "Sync", body: "Calories, protein, carbs, and fat log to your daily journal instantly. Adjust with a swipe." },
  ];
  return (
    <section id="how" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-gold uppercase tracking-[0.2em] mb-4">How it works</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Three seconds from <span className="text-gold-gradient italic font-normal">plate to log</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border/60 bg-surface p-8 hover:bg-surface-elevated transition">
              <div className="text-gold-gradient text-sm font-mono mb-8">{s.n}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase() {
  return (
    <section id="features" className="py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-[var(--shadow-elevated)]">
            <img src={scanFood} alt="Scanning a meal with Solc AI" width={1280} height={1600} loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <p className="text-sm text-gold uppercase tracking-[0.2em]">Built for real life</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Nutrition tracking that doesn't feel like <span className="italic text-gold-gradient">homework</span>.</h2>
          <div className="space-y-6">
            {[
              { t: "Photo-first logging", d: "Skip the search bar. One tap replaces five minutes of typing." },
              { t: "Restaurant & home food", d: "Trained on 2M+ meals, from ramen to Sunday roasts." },
              { t: "Smart daily goals", d: "Solc AI adapts your targets based on progress, workouts, and sleep." },
              { t: "Private by design", d: "Your photos stay on device. Only anonymous nutrition data is synced." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="mt-1 h-8 w-8 shrink-0 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{f.t}</h4>
                  <p className="text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "3s", l: "Average scan time" },
    { n: "97%", l: "Ingredient accuracy" },
    { n: "2M+", l: "Meals in our database" },
    { n: "4.9★", l: "App Store rating" },
  ];
  return (
    <section className="py-24 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-5xl md:text-6xl font-semibold text-gold-gradient">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Maya R.", role: "Marathon runner", body: "I dropped MyFitnessPal after two days with Solc. It's just… faster. Photo, done.", avatar: avatarMaya.url, stars: 5 },
    { name: "Daniel K.", role: "Busy dad", body: "love your app it helps me keep track of my food without overthinking everything and gives me a visual of my portions plus it's so aesthetic 💓", avatar: avatarDaniel.url, stars: 4 },
    { name: "Priya S.", role: "Nutrition coach", body: "I recommend Solc AI to every client. The macro estimates hold up against my lab reference meals.", avatar: avatarPriya.url, stars: 5 },
  ];
  return (
    <section id="reviews" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-gold uppercase tracking-[0.2em] mb-4">Loved by 12,400+ users</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">People who <span className="italic text-gold-gradient">actually stick</span> with it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-3xl border border-border/60 bg-surface p-8 flex flex-col">
              <div className="text-gold text-lg mb-4">{"★".repeat(r.stars)}<span className="text-muted-foreground/30">{"★".repeat(5 - r.stars)}</span></div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{r.body}"</p>
              <footer className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" width={40} height={40} />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Is Solc AI accurate?", a: "Our vision model was trained on over 2 million labeled meals and benchmarked at 97% ingredient accuracy. You can always tweak portions with a swipe." },
    { q: "Do I need to enter recipes?", a: "No. Just point your camera at the food. Solc AI handles mixed plates, drinks, and side dishes automatically." },
    { q: "Is my data private?", a: "Meal photos never leave your device. Only anonymized nutrition totals sync to your account." },
    { q: "How much does it cost?", a: "Solc AI is free to try with 5 scans per day. Solc Pro unlocks unlimited scans, custom goals, and health integrations." },
    { q: "Which devices are supported?", a: "iPhone 12 and newer, and Android devices running Android 12+ with a modern camera." },
  ];
  return (
    <section id="faq" className="py-32 bg-surface/30">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm text-gold uppercase tracking-[0.2em] mb-4 text-center">Questions</p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center mb-16">Everything you need to know.</h2>
        <div className="space-y-3">
          {items.map((it) => (
            <details key={it.q} className="group rounded-2xl border border-border/60 bg-surface p-6 open:bg-surface-elevated">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-lg">{it.q}</span>
                <span className="text-gold text-2xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-border/60 bg-surface p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at center, var(--gold) 0%, transparent 60%)" }} />
          <div className="relative">
            <img src={logoAsset.url} alt="" width={64} height={64} className="mx-auto h-16 w-16 object-contain mb-8" />
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Your next meal is one <span className="italic text-gold-gradient">snap</span> away.</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">Join thousands who traded calorie counting for calorie snapping.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" aria-label="Download on the App Store" className="block transition hover:opacity-80">
                <img src={appStoreBadge.url} alt="Download on the App Store" className="h-14 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play" className="block transition hover:opacity-80">
                <img src={googlePlayBadge.url} alt="Get it on Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
          <span className="text-sm text-muted-foreground">© 2026 Solc AI. Eat smarter.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Manage subscription</a>
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.86-1.98 1.52-3.02 1.44-.13-1.11.43-2.27 1.1-3 .77-.86 2.09-1.5 3.03-1.42zM20.5 17.5c-.55 1.26-.81 1.82-1.51 2.94-.98 1.55-2.36 3.48-4.07 3.49-1.52.01-1.91-.99-3.97-.98-2.06.01-2.49.99-4.01.98-1.71-.01-3.02-1.75-4-3.3-2.74-4.32-3.03-9.4-1.34-12.1 1.2-1.92 3.09-3.05 4.87-3.05 1.81 0 2.95.99 4.44.99 1.45 0 2.33-.99 4.42-.99 1.58 0 3.26.86 4.45 2.35-3.9 2.14-3.27 7.71.72 8.67z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M3.6 2.3C3.2 2.6 3 3 3 3.6v16.8c0 .6.2 1 .6 1.3l9.9-9.7-9.9-9.7zM14.6 12.7l2.6 2.6-11 6.4 8.4-9zm0-1.4L6.2 2.3l11 6.4-2.6 2.6zm7-1.1L18.4 8.4l-3 3 3 3 3.2-1.8c1-.6 1-2.2 0-2.8z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-4 w-4 text-primary-foreground" aria-hidden="true">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureShowcase />
        <Stats />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
