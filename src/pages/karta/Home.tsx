import { PageShell } from "@/components/karta/PageShell";

export const Home = () => {
  return (
    <PageShell code="P.01 / HOME" title="HOME">
      {/* Hero */}
      <section className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-8 slide-up">
          <div className="font-tech text-xs tracking-[0.4em] text-accent mb-4">
            ▲ DIVISION 01 — RAW RENDER LIVE
          </div>
          <h1 className="font-display text-[14vw] md:text-[7vw] leading-[0.9] tracking-tight">
            ANI<span className="text-accent">/</span>MATION<br />
            <span className="text-accent">&amp;</span> MANGA.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 slide-up flex flex-col gap-3" style={{ animationDelay: "0.15s" }}>
          {["DIRECTOR", "STORYBOARD", "KEY ANIMATION", "COMPOSITE"].map((t, i) => (
            <div key={i} className="flex items-center justify-between border-2 border-foreground px-4 py-3 font-tech text-xs tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">
              <span>{t}</span>
              <span className="text-accent">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero canvas — scanline laser */}
      <section className="slide-up" style={{ animationDelay: "0.25s" }}>
        <div className="flex items-center justify-between mb-3 font-tech text-[11px] tracking-[0.35em]">
          <span>▲ CANVAS_01 / RAW RENDER FEED</span>
          <span className="text-accent">SCAN_ACTIVE ●</span>
        </div>
        <div className="relative wire-box bg-background h-[60vh] overflow-hidden">
          {/* sub grid */}
          <div className="absolute inset-0 karta-grid-fine" />
          {/* scanning laser */}
          <div className="scanline-laser" />
          {/* central watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[18vw] md:text-[12vw] leading-none text-foreground/[0.04] select-none">
              KARTA
            </span>
          </div>
          {/* HUD */}
          <div className="absolute top-4 left-4 font-tech text-[10px] tracking-[0.3em] text-accent">FRAME 0247 / 1024</div>
          <div className="absolute top-4 right-4 font-tech text-[10px] tracking-[0.3em]">XY 1920×1080</div>
          <div className="absolute bottom-4 left-4 font-tech text-[10px] tracking-[0.3em]">▲ LAYER 04 / KEY</div>
          <div className="absolute bottom-4 right-4 font-tech text-[10px] tracking-[0.3em] text-accent">REC ●</div>
        </div>
      </section>

      {/* Focus area */}
      <section className="mt-20">
        <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-8">
          <h2 className="font-display text-4xl md:text-6xl">FOCUS</h2>
          <span className="font-tech text-[11px] tracking-[0.3em] text-accent">UPCOMING ▲ 03</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 karta-grid-fine opacity-50" />
              <div className="scanline-laser" style={{ animationDelay: `${i * 0.4}s` }} />
              <div className="absolute top-3 left-3 font-tech text-[10px] tracking-[0.3em] text-accent">PROJECT / 0{i}</div>
              <div className="absolute top-3 right-3 font-tech text-[10px] tracking-[0.3em]">▲</div>
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background">
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="font-display text-2xl">— — —</span>
                  <span className="font-tech text-[10px] tracking-[0.3em] text-accent">TBA</span>
                </div>
                <div className="h-10 border-t border-foreground/30 pulse-wire mx-3 mb-3" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
