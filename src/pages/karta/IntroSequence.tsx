import { useEffect, useState, type MouseEvent, type PointerEvent } from "react";
import { PageId } from "@/pages/Index";
import poster from "@/assets/the-last-glitch-banner.jpeg";

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
  { code: "S.001", kicker: "A KARTA STUDIO ORIGINAL", title: "THE LAST GLITCH", sub: "SERIES // 2026", variant: "title" },
  { code: "S.002", kicker: "EPISODE 01", title: "THE 404 ROAD", sub: "RUN-TIME // ~12 MIN", variant: "episode" },
  { code: "S.003", kicker: "PLOT POINT // 01", title: "THE WRONG ROAD", sub: "FIVE FRIENDS. ONE ROAD. NO MAP.", variant: "plot" },
  { code: "S.004", kicker: "PLOT POINT // 02", title: "ERROR 404", sub: "THE GPS SHOWS ONLY ONE WORD.", variant: "plot" },
  { code: "S.005", kicker: "PLOT POINT // 03", title: "THE BRAKES FAIL", sub: "THE CAR ACCELERATES ON ITS OWN.", variant: "plot" },
  { code: "S.006", kicker: "PLOT POINT // 04", title: "THE CAT", sub: "RED PIXEL EYES. NOT FULLY LOADED.", variant: "plot" },
  { code: "S.007", kicker: "PLOT POINT // 05", title: "THE CRASH", sub: "INTO A TREE THAT IS NOT A TREE.", variant: "plot" },
  { code: "S.008", kicker: "PLOT POINT // 06", title: "NO SIGNAL", sub: "THE NETWORK IS GONE. SO IS THE PAST.", variant: "plot" },
  { code: "S.009", kicker: "PLOT POINT // 07", title: "THE LOOP", sub: "THEY WALK STRAIGHT AND RETURN.", variant: "plot" },
  { code: "S.010", kicker: "PLOT POINT // 08", title: "ERASED", sub: "ONE OF THEM IS GONE. NOT LOST. ERASED.", variant: "plot" },
  { code: "S.011", kicker: "PLOT POINT // 09", title: "THE SYSTEM", sub: "THIS WAS NEVER A ROAD. IT IS A TRAP.", variant: "plot" },
];

export const IntroSequence = ({ onNavigate }: Props) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (index >= SLIDES.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 2200);
    return () => clearTimeout(t);
  }, [index, done]);

  const skip = (event?: MouseEvent<HTMLButtonElement> | PointerEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    setDone(true);
    onNavigate("reader");
  };

  return (
    <main key="intro" className="page-enter fixed inset-0 z-50 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background grid + scanlines */}
      <div className="absolute inset-0 karta-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 karta-grid-fine opacity-30 pointer-events-none" />
      <div className="scanline-laser z-10" />

      {/* Faded poster wash */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.4) contrast(1.2) hue-rotate(-10deg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

      {/* HUD strips */}
      <div className="absolute top-0 left-0 right-0 border-b-2 border-white/30 px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[10px] md:text-[11px] tracking-[0.35em] z-20 bg-black/40 backdrop-blur">
        <span className="text-accent">▲ KARTA // INTRO_SEQUENCE</span>
        <span className="hidden md:inline opacity-60">// LOADING SERIES PROTOCOL</span>
     <button 
  type="button" 
  onClick={skip} 
  onPointerUp={skip} 
  className="fixed top-4 right-6 z-[9999] cursor-pointer pointer-events-auto bg-red-600/30 border-2 border-red-500 px-4 py-2 font-black text-[12px] text-white hover:bg-red-600 transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)] uppercase tracking-tighter"
>
  SKIP_SYSTEM_INT //
</button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-white/30 px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[10px] tracking-[0.3em] z-20 bg-black/40 backdrop-blur">
        <span className="text-accent">REC ●</span>
        <span className="opacity-60">{done ? "SLIDE 11 / 11" : `SLIDE ${String(Math.min(index + 1, SLIDES.length)).padStart(2, "0")} / ${SLIDES.length}`}</span>
        <span className="opacity-60 hidden md:inline">XY 1920×1080</span>
      </div>

      {/* Slide content */}
      <div className="relative z-20 h-full w-full flex items-center justify-center px-6">
        {!done ? (
          <SlideView key={index} slide={SLIDES[Math.min(index, SLIDES.length - 1)]} />
        ) : (
          <div className="text-center max-w-2xl">
            <div className="font-tech text-[11px] md:text-xs tracking-[0.5em] text-accent mb-6 text-flicker">
              ▲ TRANSMISSION READY ▲
            </div>
            <h2
              className="font-display text-5xl md:text-8xl leading-[0.9] mb-4 text-glitch-loop"
              data-text="THE LAST GLITCH"
            >
              THE LAST GLITCH
            </h2>
            <div className="font-tech text-[11px] tracking-[0.4em] opacity-70 mb-10">
              EP.001 — THE 404 ROAD
            </div>
            <button
              onClick={() => onNavigate("reader")}
              className="group relative inline-block border-2 border-accent px-8 md:px-12 py-5 md:py-6 font-tech text-sm md:text-base tracking-[0.45em] text-white bg-accent/10 hover:bg-accent transition-all duration-200 text-glitch-loop"
              data-text="[ INITIALIZE STORY ]"
            >
              [ INITIALIZE STORY ]
              <span className="absolute -inset-1 border border-accent/40 pointer-events-none animate-pulse" />
            </button>
            <div className="mt-8 font-tech text-[10px] tracking-[0.4em] opacity-50">
              ▸ PRESS BUTTON TO BEGIN READING
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

const SlideView = ({ slide }: { slide: Slide }) => {
  const isTitle = slide.variant === "title";
  return (
    <div className="text-center w-full max-w-4xl">
      <div className="font-tech text-[10px] md:text-xs tracking-[0.5em] text-accent mb-3 md:mb-5 text-flicker">
        ▲ {slide.code} {slide.kicker ? `// ${slide.kicker}` : ""}
      </div>
      <h1
        className={`font-display ${isTitle ? "text-[14vw] md:text-[10vw]" : "text-[10vw] md:text-[7vw]"} leading-[0.9] tracking-tight text-glitch-loop`}
        data-text={slide.title}
      >
        <span className="text-cascade">
          {slide.title.split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </span>
      </h1>
      {slide.sub && (
        <div className="mt-5 md:mt-8 font-tech text-[11px] md:text-sm tracking-[0.4em] text-white/80">
          <span className="inline-block border-t-2 border-accent pt-3 px-4">
            {slide.sub}
          </span>
        </div>
      )}
      {/* progress bar */}
      <div className="mt-10 mx-auto h-[3px] w-48 md:w-72 bg-white/15 overflow-hidden">
        <div className="h-full bg-accent" style={{ animation: "textBar 2.2s linear forwards" }} />
      </div>
    </div>
  );
};
