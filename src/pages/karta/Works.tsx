import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import { PageId } from "@/pages/Index";
import tlgPoster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsPoster from "@/assets/the-boyzs-poster.png";

const FILTERS = ["2026", "2027", "Upcoming"] as const;
type Filter = typeof FILTERS[number];

interface Work {
  code: string;
  title: string;
  category: string;
  year: Filter;
  status: "LIVE" | "SOON" | "ARCHIVE";
  poster?: string;
  objectPos?: "top" | "center";
  action?: PageId;
}

const WORKS: Work[] = [
  { code: "W.001", title: "THE LAST GLITCH", category: "NOVEL", year: "2026", status: "LIVE", poster: tlgPoster, objectPos: "center", action: "glitch" },
  { code: "W.002", title: "KARTA ARCHIVE",   category: "ANTHOLOGY", year: "2026", status: "ARCHIVE" },
  { code: "W.003", title: "THE BOYZS", category: "NOVEL", year: "2026", status: "LIVE", poster: boyzsPoster, objectPos: "top", action: "boyzs" },
  { code: "W.004", title: "PROJECT // CLASSIFIED", category: "ANIMATION", year: "Upcoming", status: "SOON" },
  { code: "W.005", title: "PROJECT // CLASSIFIED", category: "MANGA",     year: "Upcoming", status: "SOON" },
  { code: "W.006", title: "PROJECT // CLASSIFIED", category: "STORYBOARD", year: "Upcoming", status: "SOON" },
];

interface Props {
  onNavigate?: (p: PageId) => void;
}

export const Works = ({ onNavigate }: Props = {}) => {
  const [filter, setFilter] = useState<Filter | "ALL">("ALL");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("ARCHIVE");

  const visible = WORKS.filter((w) => filter === "ALL" || w.year === filter);

  // Group by year for the timeline display
  const grouped = (filter === "ALL" ? FILTERS : [filter]).map((y) => ({
    year: y,
    items: visible.filter((w) => w.year === y),
  })).filter((g) => g.items.length > 0);

  const handleClick = (w: Work) => {
    if (w.action && onNavigate) { onNavigate(w.action); return; }
    setModalTitle(w.title);
    setOpenModal(true);
  };

  return (
    <PageShell title="WORKS">
      {/* Timeline filter */}
      <div className="border-y hairline mb-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-5 overflow-x-auto">
          <button
            onClick={() => setFilter("ALL")}
            className={`font-display text-2xl md:text-3xl tracking-tight transition-colors ${filter === "ALL" ? "text-accent" : "text-foreground hover:text-accent"}`}
          >
            ALL
          </button>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-display text-2xl md:text-3xl tracking-tight transition-colors ${filter === f ? "text-accent" : "text-foreground hover:text-accent"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline list */}
      <div className="space-y-16">
        {grouped.map(({ year, items }) => (
          <section key={year} className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2">
              <div className="font-display text-5xl md:text-7xl text-foreground leading-none">{year}</div>
              <div className="mt-2 font-tech text-[11px] tracking-[0.3em] text-muted-foreground">
                {items.length} {items.length === 1 ? "work" : "works"}
              </div>
            </div>

            <div className="col-span-12 md:col-span-10 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {items.map((w, i) => (
                <button
                  type="button"
                  onClick={() => handleClick(w)}
                  key={w.code}
                  className="card-clean text-left overflow-hidden slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                    {w.poster ? (
                      <img
                        src={w.poster}
                        alt={`${w.title} poster`}
                        className={`w-full h-full object-cover ${w.objectPos === "top" ? "object-top" : "object-center"} transition-transform duration-500 hover:scale-[1.03]`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground font-display text-2xl">
                        — — —
                      </div>
                    )}
                    {w.status === "SOON" && (
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 font-tech text-[10px] tracking-[0.3em] coming-dot">
                        ● COMING SOON
                      </span>
                    )}
                    {w.status === "LIVE" && (
                      <span className="absolute top-3 left-3 bg-foreground text-background px-2 py-1 font-tech text-[10px] tracking-[0.3em]">
                        ▶ LIVE
                      </span>
                    )}
                  </div>
                  <div className="px-3 py-3">
                    <div className="font-display text-base md:text-lg leading-tight truncate">{w.title}</div>
                    <span className="mt-1 inline-block border border-accent text-accent px-2 py-0.5 font-tech text-[10px] tracking-[0.25em]">
                      {w.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}

        {grouped.length === 0 && (
          <div className="text-center py-16 font-tech text-sm tracking-[0.3em] text-muted-foreground">
            ▸ NO WORKS FOR THIS YEAR
          </div>
        )}
      </div>

      <ComingSoonModal
        open={openModal}
        onOpenChange={setOpenModal}
        title={modalTitle}
        message="Details about this work will be released soon."
        code="W / PENDING"
      />
    </PageShell>
  );
};
