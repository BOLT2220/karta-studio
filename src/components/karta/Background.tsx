export const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base grids */}
      <div className="absolute inset-0 karta-grid" />
      <div className="absolute inset-0 karta-grid-fine opacity-40" />

      {/* Vertical sweeping laser */}
      <div className="absolute inset-y-0 left-[12%] w-px bg-accent/20" />
      <div className="absolute inset-y-0 left-[12%]">
        <div className="scanline-laser-h" />
      </div>
      <div className="absolute inset-y-0 right-[12%] w-px bg-accent/20" />
      <div className="absolute inset-y-0 right-[12%]">
        <div className="scanline-laser-h" style={{ animationDelay: "1.6s" }} />
      </div>

      {/* Floating tech tags */}
      <span className="floating-tag top-[18%] left-[4%]">// FRAME_001</span>
      <span className="floating-tag top-[68%] left-[2%]" style={{ animationDelay: "1.2s" }}>// CH_火</span>
      <span className="floating-tag top-[28%] right-[3%]" style={{ animationDelay: "0.8s" }}>RENDER ▲ 24fps</span>
      <span className="floating-tag bottom-[12%] right-[5%]" style={{ animationDelay: "2s" }}>SEC // KARTA</span>

      {/* Corner reticles */}
      <div className="absolute top-24 left-4 w-6 h-6 border-l-2 border-t-2 border-accent" />
      <div className="absolute top-24 right-4 w-6 h-6 border-r-2 border-t-2 border-accent" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent" />
    </div>
  );
};
