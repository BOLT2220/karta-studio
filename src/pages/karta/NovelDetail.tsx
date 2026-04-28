import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";

interface Props {
  onNavigate: (p: PageId) => void;
}

export const NovelDetail = ({ onNavigate }: Props) => {
  return (
    <PageShell code="P.06 / NOVEL_DETAIL" title="NOVEL">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-glitch-loop" data-text="NOVEL.">
          <span className="text-reveal">NOVEL</span><span className="text-accent text-flicker">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">
          ENTRY / DETAIL
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Cover image placeholder 2:3 */}
        <aside className="col-span-12 md:col-span-4 slide-right">
          <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-3">
            ▲ COVER / 2:3
          </div>
          <div className="wire-box bg-background aspect-[2/3] relative overflow-hidden">
            <div className="absolute inset-0 karta-grid-fine opacity-40" />
            <div className="scanline-laser" />
            <div className="absolute inset-0 flex items-center justify-center font-tech text-[11px] tracking-[0.4em] text-foreground/40">
              COVER_IMAGE
            </div>
            <div className="absolute top-2 left-2 font-tech text-[10px] tracking-[0.3em] text-accent">
              N.001
            </div>
            <div className="absolute bottom-2 right-2 font-tech text-[10px] tracking-[0.3em] text-accent">
              ▲ EMPTY
            </div>
          </div>
          <div className="mt-4 wire-box p-3 font-tech text-[10px] tracking-[0.3em] leading-relaxed">
            <div className="text-accent mb-1">// META</div>
            STATUS / —<br />
            GENRE / —<br />
            VOLUMES / —
          </div>
        </aside>

        {/* Title + episodes */}
        <section className="col-span-12 md:col-span-8 slide-up space-y-8">
          {/* Title */}
          <div>
            <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-2">
              ▲ TITLE
            </div>
            <div className="wire-box px-5 py-8 bg-background relative">
              <div className="font-display text-4xl md:text-6xl leading-[0.95] text-foreground/60 text-cascade">
                {"NOVEL TITLE GOES HERE".split("").map((c, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>{c === " " ? "\u00A0" : c}</span>
                ))}
              </div>
              <div className="mt-3 font-tech text-[11px] tracking-[0.3em] text-foreground/40">
                ▸ SUBTITLE / TAGLINE — EMPTY
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-2">
              ▲ SYNOPSIS
            </div>
            <div className="pulse-wire p-5 min-h-[120px] font-tech text-[11px] tracking-[0.25em] text-foreground/40 leading-relaxed">
              SYNOPSIS_FIELD — EMPTY
            </div>
          </div>

          {/* Episode list */}
          <div>
            <div className="flex items-end justify-between border-b-2 border-foreground pb-2 mb-4">
              <h2 className="font-display text-3xl md:text-5xl leading-none text-blink-underline">
                <span className="text-chroma">EPISODE LIST</span><span className="text-accent text-flicker">.</span>
              </h2>
              <span className="font-tech text-[11px] tracking-[0.3em]">
                COUNT / —
              </span>
            </div>
            <ul className="border-t-2 border-foreground">
              {Array.from({ length: 6 }).map((_, i) => (
                <li
                  key={i}
                  onClick={() => onNavigate("reader")}
                  className="grid grid-cols-12 border-b-2 border-foreground group cursor-pointer red-flash transition-all duration-300"
                >
                  <div className="col-span-3 md:col-span-2 border-r-2 border-foreground/30 px-3 py-4 font-tech text-[11px] tracking-[0.3em] flex items-center">
                    EP.{String(i + 1).padStart(3, "0")}
                  </div>
                  <div className="col-span-7 md:col-span-8 px-3 py-4 flex items-center">
                    <div className="w-full h-10 pulse-wire flex items-center px-3 font-tech text-[11px] tracking-[0.3em] text-foreground/40 group-hover:text-background">
                      ▸ EPISODE_TITLE — EMPTY
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-2 px-3 py-4 flex items-center justify-end gap-3 font-tech text-[10px] tracking-[0.3em]">
                    <span className="hidden md:inline opacity-60 group-hover:opacity-100">READ</span>
                    <span className="font-display text-2xl text-accent group-hover:text-background">→</span>
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
