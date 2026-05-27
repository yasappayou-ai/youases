import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/youases-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border/40" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10">
            <div className="absolute inset-0 rounded-lg bg-primary/30 blur-md group-hover:bg-primary/50 transition-colors" />
            <img src={logo} alt="YouAses" className="relative h-full w-full object-contain drop-shadow-[0_0_8px_oklch(0.7_0.22_250/0.6)]" />
          </div>
          <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
            You<span className="text-primary">Ases</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border border-primary/40 text-foreground hover:border-primary hover:shadow-[0_0_20px_oklch(0.7_0.22_250/0.4)] transition-all bg-primary/5"
        >
          Coming Soon
        </a>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-5 rounded-2xl glass p-5 animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-full text-sm font-medium border border-primary/40 text-foreground bg-primary/10"
            >
              Coming Soon
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}