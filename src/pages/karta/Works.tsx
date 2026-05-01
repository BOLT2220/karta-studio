import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import { PageId } from "@/pages/Index";
import tlgPoster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsPoster from "@/assets/the-boyzs-poster.png";

const FILTERS = ["ALL", "2020s", "2010s"];

interface Work {
  code: string;
  title: string;
  category: string;
  year: string;
  era: string;
  status: "LIVE" | "SOON" | "ARCHIVE";
  poster?: string;
  action?: PageId;
}

const WORKS: Work[] = [
  {
    code: "W.001",
    title: "THE LAST GLITCH",
    category: "NOVEL / SCI-FI · HORROR",
    year: "2026",
    era: "2020s",
    status: "LIVE",
    poster: tlgPoster,
    action: "novel",
  },
  {
    code: "W.002",
    title: "THE BOYZS",
    category: "NOVEL / ACTION-COMEDY",
    year: "2026",
    era: "2020s",
    status: "SOON",
    poster: boyzsPoster,
  },
  {
    code: "W.003",
    title: "KARTA ARCHIVE",
    category: "ANTHOLOGY / RAW RENDER",
    year: "2025",
    era: "2020s",
    status: "ARCHIVE",
  },
  { code: "W.004", title: "PROJECT // CLASSIFIED", category: "ANIMATION / TBA", year: "2026", era: "2020s", status: "SOON" },
  { code: "W.005", title: "PROJECT // CLASSIFIED", category: "MANGA / TBA", year: "2025", era: "2020s", status: "SOON" },
  { code: "W.006", title: "PROJECT // CLASSIFIED", category: "STORYBOARD / TBA", year: "2024", era: "2020s", status: "SOON" },
];

interface Props {
  onNavigate?: (p: PageId) => void;
}

export const Works = ({ onNavigate }: Props = {}) => {
  const [filter, setFilter] = useState("ALL");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("ARCHIVE // LOCKED");

  const visible = WORKS.filter((w) => filter === "ALL" || w.era === filter);

  const handleClick = (w: Work) => {
    if (w.action && onNavigate) {
      onNavigate(w.action);
      return;
    }
    setModalTitle(`${w.title} // LOCKED`);
    setOpenModal(true);
  };

  return (
    <PageShell code="P.02 / WORKS" title="WORKS">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
          WORKS<span className="text-accent">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">ARCHIVE</span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 slide-right">
          <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-4">▲ TIMELINE FILTER</div>
          <div className="flex md:flex-col gap-2 border-2 border-foreground">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`group relative text-left w-full px-4 py-4 border-b-2 border-foreground last:border-b-0 font-display text-2xl md:text-3xl leading-none transition-all duration-300 ${
                  filter === f
                    ? "bg-foreground text-accent"
                    : "text-accent hover:bg-accent hover:text-background hover:scale-[1.03] hover:translate-x-2"
                }`}
              >
                {f}
                <span className="block font-tech text-[10px] tracking-[0.3em] text-foreground/60 mt-1 group-hover:text-background">
                  ▸ ARCHIVE
                </span>
              </button>
            ))}
          </div>
          <div className="mt-6 wire-box p-4 font-tech text-[11px] tracking-[0.25em] leading-relaxed">
            <div className="text-accent mb-2">// SYS</div>
            INDEX_OPEN<br />
            STREAM / RAW<br />
            ENTRIES / {visible.length.toString().padStart(2, "0")}
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-5">
          {visible.map((w, i) => (
            <button
              type="button"
              onClick={() => handleClick(w)}
              key={w.code}
              className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up text-left cursor-pointer group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {w.poster ? (
                <img
                  src={w.poster}
                  alt={`${w.title} poster`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 karta-grid-fine opacity-50" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
              <div className="scanline-laser" style={{ animationDelay: `${(i % 4) * 0.3}s` }} />
              <div className="absolute top-2 left-2 font-tech text-[10px] tracking-[0.3em] text-accent bg-black/60 px-2 py-1">
                {w.code}
              </div>
              <div className="absolute top-2 right-2 font-tech text-[10px] tracking-[0.3em] text-white bg-black/60 px-2 py-1">
                {w.status === "LIVE" ? "▶ LIVE" : w.status === "SOON" ? "● SOON" : "■ ARCHIVE"}
              </div>
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base md:text-lg leading-none truncate">{w.title}</span>
                  <span className="font-tech text-[10px] tracking-[0.3em] text-accent">{w.year}</span>
                </div>
                <div className="font-tech text-[9px] tracking-[0.25em] text-foreground/70 mt-1 truncate">
                  {w.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ComingSoonModal
        open={openModal}
        onOpenChange={setOpenModal}
        title={modalTitle}
        message="This work is still being rendered. The archive opens soon."
        code="W/PENDING"
      />
    </PageShell>
  );
};
