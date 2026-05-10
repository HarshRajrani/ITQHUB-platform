/**
 * BackgroundDepth — Full-page layered atmospheric lighting
 *
 * Multiple stacked radial gradients at very low opacity to create
 * the illusion of depth and dimensional lighting on a true black canvas.
 * Think of it as stage lighting — barely visible, but you'd notice if it's gone.
 */
export default function BackgroundDepth() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1 — Top-center overhead light wash (warm) */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[70vh] w-[80vw] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(148,163,184,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Layer 2 — Top-right cool tone orb */}
      <div
        className="absolute top-[5%] right-[8%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.025) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 3 — Left-center subtle warm presence */}
      <div
        className="absolute top-[40%] -left-[5%] h-[500px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Layer 4 — Bottom-center ground glow */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[300px] w-[60vw] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(56,189,248,0.015) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Layer 5 — Very faint mid-page bloom */}
      <div
        className="absolute top-[60%] right-[15%] h-[350px] w-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(148,163,184,0.02) 0%, transparent 60%)",
          filter: "blur(70px)",
        }}
      />

      {/* Layer 6 — Topmost gradient vignette for edge darkness */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
