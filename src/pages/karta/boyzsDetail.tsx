import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import { LanguageSelectModal } from "@/components/karta/LanguageSelectModal";
import poster from "@/assets/the-boyzs-poster.png";

interface Props {
  onNavigate: (p: PageId) => void;
}

export const BoyzsDetail = ({ onNavigate }: Props) => {
  const [pickLang, setPickLang] = useState(false);
  const openReader = () => setPickLang(true);
  const handleSelect = (lang: "en" | "hi") => {
    setPickLang(false);
    onNavigate(lang === "hi" ? "boyzs-reader" : "boyzs-reader-en");
  };
  return (
    <PageShell title="NOVEL">
      <section className="grid grid-cols-12 gap-10 slide-up">
        <div className="col-span-12 md:col-span-5">
          <div className="card-clean overflow-hidden bg-muted">
            <img
              src={poster}
              alt="The Boyzs — series poster"
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
          </div>
          <div className="mt-6 border-y hairline divide-y hairline text-sm">
            {[
              ["Status", "Ongoing"],
              ["Genre", "Action · Comedy"],
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
            THE BOYZS<span className="text-accent">.</span>
          </h2>
          <p className="mt-2 font-tech text-xs tracking-[0.3em] text-accent">
            "THEY AREN'T JUST STUDENTS — THEY ARE SURVIVORS."
          </p>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground">
            A group of teenagers find themselves trapped in a school hallway
            where reality starts to <span className="text-accent font-semibold">rot</span>.
            Fighting back against a glitch turning their world into a nightmare,
            they must survive with nothing but a{" "}
            <span className="text-accent font-semibold">cricket bat</span> and their wits.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["ACTION", "COMEDY", "SURVIVAL", "2026"].map((t) => (
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
              <span className="col-span-5 font-display text-lg md:text-xl tracking-tight">THE HALLWAY</span>
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

      <StoryEngagement storyId="the-boyzs" />
      <LanguageSelectModal open={pickLang} onClose={() => setPickLang(false)} onSelect={handleSelect} />
    </PageShell>
  );
};
