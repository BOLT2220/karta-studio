import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import tlgPoster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsPoster from "@/assets/the-boyzs-poster.png";

interface HomeProps {
  onNavigate: (p: PageId) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  const [boyzsOpen, setBoyzsOpen] = useState(false);
  const [tbaOpen, setTbaOpen] = useState(false);
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
          {/* THE LAST GLITCH — featured project card */}
          <article
            onClick={() => onNavigate("intro")}
            className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up cursor-pointer group"
            style={{ animationDelay: `0.1s` }}
          >
            <img
              src={tlgPoster}
              alt="The Last Glitch — featured KARTA STUDIO novel"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
            <div className="absolute inset-0 karta-grid-fine opacity-30" />
            <div className="scanline-laser" />
            <div className="absolute top-3 left-3 font-tech text-[10px] tracking-[0.3em] text-accent bg-black/60 px-2 py-1">
              PROJECT / 01
            </div>
            <div className="absolute top-3 right-3 font-tech text-[10px] tracking-[0.3em] text-white bg-black/60 px-2 py-1">
              NOVEL
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background">
              <div className="px-4 pt-3 pb-2 flex items-center justify-between">
                <span className="font-display text-xl md:text-2xl leading-none">THE LAST GLITCH</span>
                <span className="font-tech text-[10px] tracking-[0.3em] text-accent">EP.01</span>
              </div>
              <p className="px-4 pb-3 font-tech text-[10px] leading-[1.6] tracking-wide text-foreground/80">
                Five friends, one road, and a digital error that rewrites reality. Can they escape the loop before they are processed?
              </p>
              <div className="mx-3 mb-3 border-t-2 border-accent flex items-center justify-between px-2 py-2 font-tech text-[10px] tracking-[0.3em] text-accent text-glitch-loop" data-text="▶ INITIATE">
                ▶ INITIATE
                <span>→</span>
              </div>
            </div>
          </article>

          {/* THE BOYZS — coming soon */}
          <article
            onClick={() => setBoyzsOpen(true)}
            className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up cursor-pointer group"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={boyzsPoster}
              alt="THE BOYZS — coming soon novel"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
            <div className="absolute inset-0 karta-grid-fine opacity-30" />
            <div className="scanline-laser" />
            <div className="absolute top-3 left-3 font-tech text-[10px] tracking-[0.3em] text-accent bg-black/60 px-2 py-1">
              PROJECT / 02
            </div>
            <div className="absolute top-3 right-3 coming-soon-badge font-tech text-[10px] tracking-[0.3em] text-white bg-accent px-2 py-1">
              ● COMING SOON
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background">
              <div className="px-4 pt-3 pb-2 flex items-center justify-between">
                <span className="font-display text-xl md:text-2xl leading-none">THE BOYZS</span>
                <span className="font-tech text-[10px] tracking-[0.3em] text-accent">SOON</span>
              </div>
              <p className="px-4 pb-3 font-tech text-[10px] leading-[1.6] tracking-wide text-foreground/80">
                NOVEL / ACTION-COMEDY — A new masterpiece is loading. Stay tuned.
              </p>
              <div className="mx-3 mb-3 border-t-2 border-accent flex items-center justify-between px-2 py-2 font-tech text-[10px] tracking-[0.3em] text-accent">
                ▶ PREVIEW
                <span>→</span>
              </div>
            </div>
          </article>

          {/* TBA placeholder */}
          <button
            type="button"
            onClick={() => setTbaOpen(true)}
            className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up text-left"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 karta-grid-fine opacity-50" />
            <div className="scanline-laser" style={{ animationDelay: "0.4s" }} />
            <div className="absolute top-3 left-3 font-tech text-[10px] tracking-[0.3em] text-accent">PROJECT / 03</div>
            <div className="absolute top-3 right-3 font-tech text-[10px] tracking-[0.3em]">▲</div>
            <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background">
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="font-display text-2xl">— — —</span>
                <span className="font-tech text-[10px] tracking-[0.3em] text-accent">TBA</span>
              </div>
              <div className="h-10 border-t border-foreground/30 pulse-wire mx-3 mb-3" />
            </div>
          </button>
        </div>
      </section>

      <ComingSoonModal
        open={boyzsOpen}
        onOpenChange={setBoyzsOpen}
        title="THE BOYZS // SIG/404"
        message="Abhi is par kaam chal raha hai, ye jald hi aayegi! Tayyar raho MASTERPIECE ke liye."
        code="EP/PRE-PROD"
      />
      <ComingSoonModal
        open={tbaOpen}
        onOpenChange={setTbaOpen}
        title="PROJECT // CLASSIFIED"
        message="This slot is still encrypted. A new KARTA STUDIO transmission is coming soon."
        code="P/TBA"
      />
    </PageShell>
  );
};
