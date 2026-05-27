export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0.18 250 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.18 250 / 0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* glowing orbs */}
      <div className="absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 h-[460px] w-[460px] rounded-full bg-accent/20 blur-[140px]" />
      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-primary/60"
          style={{
            width: 2,
            height: 2,
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            boxShadow: "0 0 8px oklch(0.75 0.2 250 / 0.9)",
            animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}