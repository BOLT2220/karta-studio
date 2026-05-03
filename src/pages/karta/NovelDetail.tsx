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
  

  return (
    <PageShell title="NOVEL">
      {/* THE BOYZS — featured banner (top-cover, no crop) */}
      <section className="mb-16 slide-up">
        <button
          onClick={() => onNavigate("boyzs")}
          className="block w-full text-left card-clean overflow-hidden group"
        >
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden bg-muted">
            <img
              src={boyzsBanner}
              alt="THE BOYZS — upcoming KARTA STUDIO novel"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
            <span className="absolute top-4 left-4 bg-foreground text-background px-3 py-1.5 font-tech text-[11px] tracking-[0.3em]">
              ▶ LIVE
            </span>
          </div>
          <div className="px-5 py-4 flex items-end justify-between">
            <div>
              <div className="font-display text-2xl md:text-4xl tracking-tight leading-none">THE BOYZS</div>
              <div className="mt-1 font-tech text-[11px] tracking-[0.3em] text-muted-foreground">
                NOVEL · ACTION-COMEDY · 2027
              </div>
            </div>
            <span className="hidden sm:inline font-display text-base text-accent">PREVIEW ▸</span>
          </div>
        </button>
      </section>

      {/* THE LAST GLITCH — main entry */}
      <section className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <div className="card-clean overflow-hidden bg-muted">
            <img
              src={poster}
              alt="The Last Glitch — series poster"
              className="w-full h-auto object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="mt-6 border-y hairline divide-y hairline text-sm">
            {[
              ["Status", "Ongoing"],
              ["Genre", "Sci-fi · Horror"],
              ["Episodes", "1 of —"],
              ["Origin", "KARTA STUDIO"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-3 py-3">
                <span className="col-span-5 font-display tracking-wide">{k}</span>
                <span className="col-span-7 text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            THE LAST GLITCH<span className="text-accent">.</span>
          </h2>
          <p className="mt-2 font-tech text-xs tracking-[0.3em] text-accent">
            "TAKING THAT ROAD WAS THEIR BIGGEST MISTAKE."
          </p>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground">
            Five friends take a road trip. The road they pick doesn't exist on
            any map. The GPS shows only one word: <span className="text-accent font-semibold">404</span>.
            The brakes fail. A cat with pixel-red eyes appears. The world behind
            them stops loading. They aren't traveling on this road —
            they are <span className="text-accent font-semibold">inside it</span>.
          </p>

          <h3 className="mt-12 mb-4 font-display text-2xl md:text-3xl tracking-tight">
            Episodes
          </h3>
          <ul className="border-y hairline divide-y hairline">
            <li
              onClick={() => onNavigate("intro")}
              className="grid grid-cols-12 gap-3 py-5 px-2 cursor-pointer hover:bg-muted transition-colors group"
            >
              <span className="col-span-2 font-tech text-xs tracking-[0.3em] text-accent self-center">EP.001</span>
              <span className="col-span-8 font-display text-lg md:text-2xl tracking-tight">THE 404 ROAD</span>
              <span className="col-span-2 text-right font-display text-xl text-accent group-hover:translate-x-1 transition-transform">▸</span>
            </li>
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="grid grid-cols-12 gap-3 py-5 px-2 opacity-50">
                <span className="col-span-2 font-tech text-xs tracking-[0.3em] self-center">
                  EP.{String(i + 2).padStart(3, "0")}
                </span>
                <span className="col-span-8 font-display text-lg md:text-2xl tracking-tight">— Coming Soon —</span>
                <span className="col-span-2 text-right font-display text-xl">·</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StoryEngagement storyId="the-last-glitch" />

      <ComingSoonModal
        open={boyzsOpen}
        onOpenChange={setBoyzsOpen}
        title="THE BOYZS"
        message="Currently in pre-production. A new KARTA STUDIO masterpiece is on its way — stay tuned."
        code="EP / PRE-PROD"
      />
    </PageShell>
  );
};
