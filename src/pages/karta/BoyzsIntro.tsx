import { useEffect, useState } from "react";
import { PageId } from "@/pages/Index";
import poster from "@/assets/the-boyzs-poster.png";

interface Props {
  onNavigate: (p: PageId) => void;
}

interface Slide {
  code: string;
  kicker?: string;
  title: string;
  sub?: string;
  variant?: "title" | "episode" | "plot";
}

const SLIDES: Slide[] = [
  { code: "S.001", kicker: "A KARTA STUDIO ORIGINAL", title: "THE BOYZS", sub: "SERIES · 2026", variant: "title" },
  { code: "S.002", kicker: "EPISODE 01", title: "THE CONFUSION", sub: "RUN-TIME · ~14 MIN", variant: "episode" },
  { code: "S.003", kicker: "PLOT POINT · 01", title: "EMPTY STREETS", sub: "THE CITY DECIDED NOT TO STEP OUT TODAY.", variant: "plot" },
  { code: "S.004", kicker: "PLOT POINT · 02", title: "THE TRUCK", sub: "OVERTURNED. LEAKING. WAITING.", variant: "plot" },
  { code: "S.005", kicker: "PLOT POINT · 03", title: "TWENTY HUNGRY EYES", sub: "ROTTING SKIN. EMPTY STARES.", variant: "plot" },
  { code: "S.006", kicker: "PLOT POINT · 04", title: "CHHOTU", sub: "THREE FEET TALL. PURE NIGHTMARE.", variant: "plot" },
  { code: "S.007", kicker: "PLOT POINT · 05", title: "THE FLYING PANTS", sub: "DIGNITY LEFT AT THE GATE.", variant: "plot" },
  { code: "S.008", kicker: "PLOT POINT · 06", title: "NO HELP COMING", sub: "90% OF THE CITY IS ALREADY GONE.", variant: "plot" },
  { code: "S.009", kicker: "PLOT POINT · 07", title: "THE CHIPKALI", sub: "ONE LIZARD. TOTAL CHAOS.", variant: "plot" },
  { code: "S.010", kicker: "PLOT POINT · 08", title: "THE BAG WAR", sub: "FRIENDSHIP DIED IN THIS CLASSROOM.", variant: "plot" },
  { code: "S.011", kicker: "PLOT POINT · 09", title: "GATE TUT GAYA", sub: "ZOMBIES ANDAR AA GAYE HAIN.", variant: "plot" },
];

export const BoyzsIntro = ({ onNavigate }: Props) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (index >= SLIDES.length) { setDone(true); return; }
    const t = setTimeout(() => setIndex((i) => i + 1), 2200);
    return () => clearTimeout(t);
  }, [index, done]);

  const handleSkip = () => {
    setDone(true);
    onNavigate("boyzs-reader");
  };

  return (
    <main key="boyzs-intro" className="page-enter fixed inset-0 z-50 bg-[#0a0a0a] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "grayscale(0.4) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-white/20 bg-black/40 backdrop-blur">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[10px] md:text-[11px] tracking-[0.3em]">
          <span className="text-accent">KARTA · INTRO SEQUENCE</span>
          <span className="hidden md:inline opacity-60">LOADING SERIES</span>
          <span className="opacity-60">{done ? "11 / 11" : `${String(Math.min(index + 1, SLIDES.length)).padStart(2, "0")} / ${SLIDES.length}`}</span>
        </div>
      </div>

      {/* SKIP */}
      <button
        type="button"
        onClick={handleSkip}
        aria-label="Skip intro"
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[9999] pointer-events-auto bg-accent text-accent-foreground px-4 py-2 md:px-5 md:py-2.5 font-display text-xs md:text-sm tracking-[0.25em] hover:bg-white hover:text-accent transition-colors shadow-lg"
      >
        SKIP ▸
      </button>

      <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
        {!done ? (
          <SlideView key={index} slide={SLIDES[Math.min(index, SLIDES.length - 1)]} />
        ) : (
          <div className="text-center max-w-2xl">
            <div className="font-tech text-[11px] md:text-xs tracking-[0.5em] text-accent mb-6">
              TRANSMISSION READY
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] mb-4 tracking-tight">
              THE BOYZS
            </h2>
            <div className="font-tech text-[11px] tracking-[0.4em] opacity-70 mb-10">
              EP.001 — THE CONFUSION
            </div>
            <button
              onClick={() => onNavigate("boyzs-reader")}
              className="relative inline-block bg-accent text-accent-foreground px-8 md:px-12 py-4 md:py-5 font-display text-base md:text-lg tracking-[0.3em] hover:bg-white hover:text-accent transition-colors shadow-[0_0_25px_hsl(var(--accent)/0.6)]"
            >
              [ INITIALIZE STORY ] ▸
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/20 bg-black/40 backdrop-blur">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[10px] tracking-[0.3em]">
          <span className="text-accent">REC ●</span>
          <button onClick={handleSkip} className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
            SKIP TO READER ▸
          </button>
        </div>
      </div>
    </main>
  );
};

const SlideView = ({ slide }: { slide: Slide }) => {
  const isTitle = slide.variant === "title";
  return (
    <div className="text-center w-full max-w-4xl">
      <div className="font-tech text-[10px] md:text-xs tracking-[0.5em] text-accent mb-3 md:mb-5">
        {slide.code} {slide.kicker ? `· ${slide.kicker}` : ""}
      </div>
      <h1 className={`font-display ${isTitle ? "text-[14vw] md:text-[10vw]" : "text-[10vw] md:text-[7vw]"} leading-[0.9] tracking-tight`}>
        {slide.title}
      </h1>
      {slide.sub && (
        <div className="mt-5 md:mt-8 font-tech text-[11px] md:text-sm tracking-[0.35em] text-white/80">
          <span className="inline-block border-t-2 border-accent pt-3 px-4">{slide.sub}</span>
        </div>
      )}
    </div>
  );
};
