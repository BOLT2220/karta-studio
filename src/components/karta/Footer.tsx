export const Footer = () => (
  <footer className="relative z-10 border-t-[3px] border-foreground mt-20">
    <div className="grid grid-cols-1 md:grid-cols-4 border-b-2 border-foreground">
      {["SECTOR / 火-01", "BUILD / 04.27", "FRAME / 24", "STATUS / LIVE"].map((t, i) => (
        <div key={i} className="px-6 py-5 border-r-2 border-foreground/20 font-tech text-xs tracking-[0.3em] flex items-center justify-between">
          <span>{t}</span>
          <span className="text-accent">●</span>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-foreground text-background font-tech text-[11px] tracking-[0.3em]">
      <span>© KARTA STUDIO — INTERNAL PORTAL</span>
      <span className="text-accent">▲ END OF TRANSMISSION ▲</span>
    </div>
  </footer>
);
