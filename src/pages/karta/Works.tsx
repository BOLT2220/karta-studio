import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";

const FILTERS = ["ALL", "2020s", "2010s"];

export const Works = () => {
  const [filter, setFilter] = useState("ALL");
  const [openModal, setOpenModal] = useState(false);
  return (
    <PageShell code="P.02 / WORKS" title="WORKS">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
          WORKS<span className="text-accent">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">
          ARCHIVE
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Vertical timeline filter */}
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
            ENTRIES / —
          </div>
        </aside>

        {/* Grid */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              key={i}
              className="card-hover wire-box bg-background aspect-[3/4] relative overflow-hidden slide-up text-left cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 karta-grid-fine opacity-40" />
              <div className="scanline-laser" style={{ animationDelay: `${(i % 4) * 0.3}s` }} />
              <div className="absolute top-2 left-2 font-tech text-[10px] tracking-[0.3em] text-accent">
                W.{String(i + 1).padStart(3, "0")}
              </div>
              <div className="absolute top-2 right-2 font-tech text-[10px] tracking-[0.3em]">▲</div>
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-foreground bg-background px-3 py-2 flex items-center justify-between">
                <span className="font-display text-xl">— — —</span>
                <span className="font-tech text-[10px] tracking-[0.3em] text-accent">{filter}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
};
