import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import { LanguageSelectModal } from "@/components/karta/LanguageSelectModal";
import poster from "@/assets/the-last-glitch-banner.jpeg";

interface Props {
  onNavigate: (p: PageId) => void;
}

export const LastGlitchDetail = ({ onNavigate }: Props) => {
  const [pickLang, setPickLang] = useState(false);
  const openReader = () => setPickLang(true);
  const handleSelect = (lang: "en" | "hi") => {
    setPickLang(false);
    onNavigate(lang === "hi" ? "reader-hi" : "reader");
  };
  return (
    <PageShell title="NOVEL">
      <section className="grid grid-cols-12 gap-10 slide-up">
        {/* Left: Poster + Metadata */}
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
              ["Year", "2026"],
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

        {/* Right: Title + Synopsis + Episodes */}
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

          <div className="mt-6 flex flex-wrap gap-2">
            {["SCI-FI", "HORROR", "MYSTERY", "2026"].map((t) => (
              <span
                key={t}
                className="border border-accent text-accent px-2 py-0.5 font-tech text-[10px] tracking-[0.25em]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={openReader}
              className="bg-accent text-accent-foreground font-display text-base px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              READ EP.001 ▸
            </button>
          </div>

          <h3 className="mt-12 mb-4 font-display text-2xl md:text-3xl tracking-tight">
            Episodes
          </h3>
          <ul className="border-y hairline divide-y hairline">
            <li className="grid grid-cols-12 gap-3 py-5 px-2 items-center group">
              <span className="col-span-2 font-tech text-xs tracking-[0.3em] text-accent">EP.001</span>
              <span className="col-span-5 font-display text-lg md:text-xl tracking-tight">THE 404 ROAD</span>
              <span className="col-span-2 font-tech text-[10px] tracking-[0.25em] text-muted-foreground">2026.05</span>
              <button
                onClick={openReader}
                className="col-span-3 justify-self-end bg-foreground text-background font-display text-xs tracking-[0.2em] px-4 py-2 hover:bg-accent transition-colors"
              >
                READ ▸
              </button>
            </li>
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="grid grid-cols-12 gap-3 py-5 px-2 items-center opacity-50">
                <span className="col-span-2 font-tech text-xs tracking-[0.3em]">
                  EP.{String(i + 2).padStart(3, "0")}
                </span>
                <span className="col-span-5 font-display text-lg md:text-xl tracking-tight">— Coming Soon —</span>
                <span className="col-span-2 font-tech text-[10px] tracking-[0.25em] text-muted-foreground">TBA</span>
                <span className="col-span-3 justify-self-end font-display text-xs tracking-[0.2em] text-muted-foreground">·</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StoryEngagement storyId="the-last-glitch" />
      <LanguageSelectModal open={pickLang} onClose={() => setPickLang(false)} onSelect={handleSelect} />
    </PageShell>
  );
};
