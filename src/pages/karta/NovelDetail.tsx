import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import poster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsBanner from "@/assets/the-boyzs-banner.png";

interface Props {
  onNavigate: (p: PageId) => void;
}

export const NovelDetail = ({ onNavigate }: Props) => {
  const [boyzsOpen, setBoyzsOpen] = useState(false);
  return (
    <PageShell code="P.06 / NOVEL / SERIES_INDEX" title="NOVEL">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-8">
        <h1 className="font-display text-4xl md:text-7xl leading-[0.9] text-glitch-loop" data-text="THE LAST GLITCH.">
          <span className="text-reveal">THE LAST GLITCH</span>
          <span className="text-accent text-flicker">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">
          SERIES / S.001
        </span>
      </div>

      {/* Banner poster */}
      <div className="wire-box relative overflow-hidden mb-10 bg-background">
        <div className="absolute inset-0 karta-grid-fine opacity-30 z-10 pointer-events-none" />
        <div className="scanline-laser z-20" />
        <img
          src={poster}
          alt="The Last Glitch — official series poster"
          className="w-full h-auto max-h-[70vh] object-cover object-center"
          loading="eager"
        />
        <div className="absolute top-3 left-3 font-tech text-[10px] tracking-[0.3em] text-accent z-20 bg-background/70 px-2 py-1">
          ▲ KEY VISUAL / 001
        </div>
        <div className="absolute bottom-3 right-3 font-tech text-[10px] tracking-[0.3em] text-accent z-20 bg-background/70 px-2 py-1">
          KARTA // S.001
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Meta sidebar */}
        <aside className="col-span-12 md:col-span-4 slide-right">
          <div className="wire-box p-4 font-tech text-[11px] tracking-[0.3em] leading-[1.9] bg-background">
            <div className="text-accent mb-2">// META</div>
            STATUS / ONGOING<br />
            GENRE / SCI-FI · HORROR<br />
            EPISODES / 1<br />
            ORIGIN / KARTA STUDIO
          </div>
          <div className="mt-4 pulse-wire p-4 font-tech text-[11px] tracking-[0.3em] leading-[1.9]">
            <div className="text-accent mb-2">// TAGLINE</div>
            "TAKING THAT ROAD WAS THEIR BIGGEST MISTAKE."
          </div>
        </aside>

        {/* Synopsis + Episodes */}
        <section className="col-span-12 md:col-span-8 slide-up space-y-8">
          <div>
            <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-2">
              ▲ SYNOPSIS
            </div>
            <div className="wire-box p-5 bg-background font-tech text-[12px] md:text-sm leading-[1.9] tracking-wide">
              Five friends take a road trip. The road they pick doesn't exist on
              any map. The GPS shows only one word: <span className="text-accent">404</span>.
              The brakes fail. A cat with pixel-red eyes appears. The world behind
              them stops loading. They aren't traveling on this road — they are
              <span className="text-accent"> inside it</span>.
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between border-b-2 border-foreground pb-2 mb-4">
              <h2 className="font-display text-3xl md:text-5xl leading-none">
                <span className="text-chroma">EPISODE LIST</span>
                <span className="text-accent text-flicker">.</span>
              </h2>
              <span className="font-tech text-[11px] tracking-[0.3em]">COUNT / 01</span>
            </div>

            <ul className="border-t-2 border-foreground">
              <li
                onClick={() => onNavigate("intro")}
                className="grid grid-cols-12 border-b-2 border-foreground group cursor-pointer red-flash transition-all duration-300"
              >
                <div className="col-span-3 md:col-span-2 border-r-2 border-foreground/30 px-3 py-5 font-tech text-[11px] tracking-[0.3em] flex items-center">
                  EP.001
                </div>
                <div className="col-span-7 md:col-span-8 px-3 py-5 flex items-center">
                  <div className="font-display text-xl md:text-3xl leading-none group-hover:text-background">
                    THE 404 ROAD
                  </div>
                </div>
                <div className="col-span-2 md:col-span-2 px-3 py-5 flex items-center justify-end gap-3 font-tech text-[10px] tracking-[0.3em]">
                  <span className="hidden md:inline opacity-60 group-hover:opacity-100">READ</span>
                  <span className="font-display text-2xl text-accent group-hover:text-background">→</span>
                </div>
              </li>

              {/* Coming soon placeholders */}
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 border-b-2 border-foreground opacity-50"
                >
                  <div className="col-span-3 md:col-span-2 border-r-2 border-foreground/30 px-3 py-4 font-tech text-[11px] tracking-[0.3em] flex items-center">
                    EP.{String(i + 2).padStart(3, "0")}
                  </div>
                  <div className="col-span-7 md:col-span-8 px-3 py-4 flex items-center">
                    <div className="w-full h-10 pulse-wire flex items-center px-3 font-tech text-[11px] tracking-[0.3em] text-foreground/40">
                      ▸ COMING SOON
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-2 px-3 py-4 flex items-center justify-end font-tech text-[10px] tracking-[0.3em]">
                    —
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </PageShell>
  );
};
