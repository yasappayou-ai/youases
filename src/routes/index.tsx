import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Zap,
  Brain,
  ShieldCheck,
  Rocket,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { BackgroundFX } from "@/components/BackgroundFX";
import logo from "@/assets/youases-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YouAses — Building the future of digital innovation" },
      { name: "description", content: "YouAses is a modern technology company building intelligent digital solutions, AI, and software for the next generation." },
      { property: "og:title", content: "YouAses — Building the future of digital innovation" },
      { property: "og:description", content: "Modern technology company building intelligent digital solutions, AI, and advanced software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <BackgroundFX />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Vision />
        <Technology />
        <Waitlist />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-xs sm:text-sm text-muted-foreground animate-fade-up">
          <Sparkles size={14} className="text-primary" />
          <span>The next generation of digital experiences</span>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="absolute inset-0 -m-10 rounded-full bg-primary/20 blur-3xl" />
          <img
            src={logo}
            alt="YouAses logo"
            className="relative w-36 sm:w-48 md:w-56 h-auto animate-pulse-glow"
          />
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight animate-fade-up" style={{ animationDelay: "0.2s", fontFamily: "'Space Grotesk', sans-serif" }}>
          You<span className="text-gradient">Ases</span>
        </h1>
        <div className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <h2 className="mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.1] animate-fade-up" style={{ animationDelay: "0.3s", fontFamily: "'Space Grotesk', sans-serif" }}>
          Building the future of <span className="text-gradient">digital innovation.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
          We create innovative digital technologies designed to improve
          people's lives, learning experiences, and future opportunities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-[0_0_30px_oklch(0.72_0.18_250/0.5)] hover:shadow-[0_0_50px_oklch(0.72_0.18_250/0.8)] hover:scale-[1.03] transition-all"
          >
            Coming Soon
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Discover our vision →
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-[80%] bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-32 w-[60%] bg-primary/20 blur-3xl rounded-full" />
    </section>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs tracking-[0.25em] uppercase text-primary font-medium">{tag}</div>
      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function About() {
  const pillars = [
    { icon: Layers, title: "Simplicity", text: "Complex made effortless through clean, intuitive design." },
    { icon: Zap, title: "Performance", text: "Engineered for speed, scale, and reliability." },
    { icon: Brain, title: "Intelligence", text: "Smart systems that adapt to people, not the opposite." },
  ];
  return (
    <section id="about" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Who We Are"
          title={<>Innovation. Simplicity. <span className="text-gradient">Impact.</span></>}
        />
        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              YouAses is an innovative technology company focused on creating
              modern digital solutions and intelligent technologies that help
              people in their daily lives, education, productivity, and future development.
            </p>
            <p>We believe technology should be simple, powerful, and meaningful.</p>
            <p>
              Our team is building unique technologies and advanced digital experiences
              that will be revealed soon — including future innovations in artificial
              intelligence, software, and smart digital systems.
            </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group relative rounded-2xl p-6 glass hover:border-primary/40 transition-all hover:-translate-y-1 ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4 group-hover:shadow-[0_0_20px_oklch(0.72_0.18_250/0.5)] transition-shadow">
                  <p.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const orbitIcons = [Rocket, ShieldCheck, Sparkles, Cpu];
  return (
    <section id="vision" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            tag="Our Vision"
            title={<>A smarter <span className="text-gradient">digital future.</span></>}
            subtitle="Our vision is to shape a smarter digital future through innovation, creativity, and advanced technology. We aim to create powerful solutions that inspire people, simplify complex tasks, and unlock new possibilities in learning, communication, and digital experiences."
          />
        </div>
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-6 rounded-full border border-primary/15" />
          <div className="absolute inset-12 rounded-full border border-primary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="" className="w-28 h-28 animate-float drop-shadow-[0_0_30px_oklch(0.72_0.18_250/0.6)]" />
          </div>
          {orbitIcons.map((Icon, i) => {
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const r = 44;
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <div
                key={i}
                className="absolute h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-xl glass flex items-center justify-center text-primary"
                style={{ left: `${x}%`, top: `${y}%`, animation: `float ${5 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                <Icon size={18} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const cards = [
    { icon: Brain, title: "Artificial Intelligence", text: "Adaptive intelligence built around real human needs." },
    { icon: Cpu, title: "Advanced Software", text: "Robust digital systems designed for scale and precision." },
    { icon: Layers, title: "Smart Experiences", text: "Seamless, beautiful interfaces that feel inevitable." },
    { icon: ShieldCheck, title: "Trust by Design", text: "Privacy, security, and resilience at the core." },
  ];
  return (
    <section id="technology" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Innovation & Technology"
          title={<>The engine behind <span className="text-gradient">tomorrow.</span></>}
          subtitle="At YouAses, we are developing our own technologies and digital systems designed for the next generation of intelligent experiences. From artificial intelligence to advanced software, we combine simplicity, performance, and innovation."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl p-6 glass hover:border-primary/40 hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center text-primary mb-5 border border-primary/20">
                <c.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="waitlist" className="relative px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl glass p-8 sm:p-14 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-6">
              <Mail size={22} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Be the first to know <span className="text-gradient">when we launch.</span>
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md">Stay updated with our journey. No spam, just milestones.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mt-8 w-full max-w-lg flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full bg-input/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.72_0.18_250/0.3)] transition-all"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_30px_oklch(0.72_0.18_250/0.7)] hover:scale-[1.02] transition-all"
              >
                {submitted ? "You're in ✓" : "Notify Me"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const socials = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590554395056" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/youases.official" },
  { name: "Email", icon: Mail, href: "mailto:youases.official@gmail.com" },
];

function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-primary font-medium">Follow Us</div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Join the <span className="text-gradient">YouAses</span> journey.
        </h3>
        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="h-12 w-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_oklch(0.72_0.18_250/0.5)] transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Contact:{" "}
          <a href="mailto:youases.official@gmail.com" className="text-foreground hover:text-primary transition-colors">
            youases.official@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-5 sm:px-8 py-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="YouAses" className="h-8 w-8 object-contain drop-shadow-[0_0_6px_oklch(0.7_0.22_250/0.6)]" />
          <span className="text-base font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            You<span className="text-primary">Ases</span>
          </span>
        </a>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} YouAses. All rights reserved.</p>
        <a href="mailto:youases.official@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
          youases.official@gmail.com
        </a>
      </div>
    </footer>
  );
}