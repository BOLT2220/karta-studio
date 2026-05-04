import { useState } from "react";
import { PageId } from "@/pages/Index";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import tlgPoster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsPoster from "@/assets/the-boyzs-poster.png";

interface HomeProps {
  onNavigate: (p: PageId) => void;
}

interface Card {
  code: string;
  title: string;
  category: string;
  year: string;
  status: "LIVE" | "SOON" | "TBA";
  poster?: string;
  action?: PageId;
  onClick?: () => void;
  objectPos?: "top" | "center";
}

export const Home = ({ onNavigate }: HomeProps) => {
  const [boyzsOpen, setBoyzsOpen] = useState(false);
  const [tbaOpen, setTbaOpen] = useState(false);

  const cards: Card[] = [
    {
      code: "W.001",
      title: "THE LAST GLITCH",
      category: "NOVEL · SCI-FI / HORROR",
      year: "2026",
      status: "LIVE",
      poster: tlgPoster,
      action: "glitch",
      objectPos: "center",
    },
    {
      code: "W.002",
      title: "THE BOYZS",
      category: "NOVEL · ACTION-COMEDY",
      year: "2026",
      status: "LIVE",
      poster: boyzsPoster,
      action: "boyzs",
      objectPos: "top",
    },
    {
      code: "W.003",
      title: "PROJECT // CLASSIFIED",
      category: "ANIMATION · TBA",
      year: "Upcoming",
      status: "TBA",
      onClick: () => setTbaOpen(true),
    },
  ];

  return (
    <main className="page-enter">
      {/* Hero — clean, editorial */}
      <section className="border-b hairline">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-24 grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-8 slide-up">
            <div className="font-tech text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-accent mb-4 sm:mb-5">
              ANIMATION · MANGA · NOVEL — EST. 2026
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
              STORIES BUILT<br />
              <span className="text-accent">FOR THE WORLD</span>,<br />
              FROM <span className="underline decoration-accent decoration-4 underline-offset-8">INDIA</span>.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              KARTA STUDIO is an independent animation, manga and novel house —
              crafting international-level series with a distinctly Indian voice.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 slide-up flex flex-col justify-end gap-3" style={{ animationDelay: "0.15s" }}>
            {[
              { k: "DIRECTION", v: "01" },
              { k: "STORYBOARD", v: "02" },
              { k: "KEY ANIMATION", v: "03" },
              { k: "POST / COMPOSITE", v: "04" },
            ].map((t) => (
              <div key={t.k} className="flex items-center justify-between border-b hairline py-3 font-tech text-xs tracking-[0.25em]">
                <span>{t.k}</span>
                <span className="text-accent">{t.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS strip — Madhouse-style */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl tracking-tight leading-none">WORKS</h2>
          <button
            onClick={() => onNavigate("works")}
            className="font-display text-sm tracking-[0.25em] text-foreground hover:text-accent transition-colors"
          >
            MORE ▸
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <article
              key={c.code}
              onClick={c.onClick ?? (c.action ? () => onNavigate(c.action!) : undefined)}
              className="card-clean cursor-pointer slide-up overflow-hidden"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                {c.poster ? (
                  <img
                    src={c.poster}
                    alt={`${c.title} poster`}
                    className={`w-full h-full object-cover ${c.objectPos === "top" ? "object-top" : "object-center"} transition-transform duration-500 hover:scale-[1.03]`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-display text-3xl">
                    KARTA
                  </div>
                )}
                {c.status !== "LIVE" && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 font-tech text-[10px] tracking-[0.3em] coming-dot">
                    ● {c.status === "SOON" ? "COMING SOON" : "TBA"}
                  </span>
                )}
              </div>
              <div className="px-4 py-4">
                <div className="font-display text-lg md:text-xl leading-tight">{c.title}</div>
                <div className="mt-1 inline-block border border-accent text-accent px-2 py-0.5 font-tech text-[10px] tracking-[0.25em]">
                  {c.category.split("·")[0].trim()}
                </div>
                <div className="mt-2 font-tech text-[11px] text-muted-foreground tracking-wide">
                  {c.category} · {c.year}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none">
              KARTA STUDIO <span className="text-accent">ROADMAP</span>
            </h2>
            <span className="font-tech text-[11px] tracking-[0.3em] text-muted-foreground hidden md:block">
              ▸ 2026 — BEYOND
            </span>
          </div>

          <div className="relative grid grid-cols-12 gap-6">
            {/* vertical line */}
            <div className="hidden md:block absolute left-[8.333%] top-2 bottom-2 w-px bg-border" />

            {[
              {
                phase: "PHASE 01",
                status: "ACTIVE",
                title: "THE BOYZS",
                desc: "Our flagship action-comedy novel is live. New episodes rolling out as the universe expands.",
              },
              {
                phase: "PHASE 02",
                status: "IN DEVELOPMENT",
                title: "NEW MANGA & NOVELS",
                desc: "Expanding the KARTA library with original manga series and new novels across genres.",
              },
              {
                phase: "PHASE 03",
                status: "VISION",
                title: "PROJECT // MASTERPIECE",
                desc: "Our long-term mission: a full-scale original anime production made in India for the world.",
              },
            ].map((p, i) => (
              <div
                key={p.phase}
                className="col-span-12 md:col-span-12 grid grid-cols-12 gap-6 slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="col-span-12 md:col-span-2 relative">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                  <div className="font-tech text-xs tracking-[0.3em] text-accent md:text-center">{p.phase}</div>
                </div>
                <div className="col-span-12 md:col-span-10 border hairline p-6 md:p-8 hover:border-accent transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`font-tech text-[10px] tracking-[0.3em] px-2 py-1 ${
                        p.status === "ACTIVE"
                          ? "bg-accent text-accent-foreground coming-dot"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      {p.status === "ACTIVE" ? "● " : ""}{p.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl tracking-tight leading-none mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE REVOLUTION */}
      <section className="border-t hairline bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 slide-up">
            <div className="font-tech text-xs tracking-[0.4em] text-accent mb-5">
              ▸ OPEN CALL — UNPAID / VISIONARY
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
              JOIN THE <span className="text-accent">REVOLUTION</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg opacity-80 leading-relaxed">
              We are looking for <span className="text-accent font-semibold">30+ FREE Visionary Artists & Writers</span> who
              want to build something legendary. No pay, no gatekeeping — just pure
              storytelling and the chance to shape KARTA STUDIO from day one.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 slide-up flex md:items-end md:justify-end" style={{ animationDelay: "0.15s" }}>
            <a
              href="https://discord.gg/9BT2bYZYWt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 font-display text-lg tracking-[0.25em] hover:opacity-90 transition-opacity"
            >
              JOIN NOW <span aria-hidden>▸</span>
            </a>
          </div>
        </div>
      </section>

      <ComingSoonModal
        open={boyzsOpen}
        onOpenChange={setBoyzsOpen}
        title="THE BOYZS"
        message="Currently in pre-production. A new KARTA STUDIO masterpiece is on its way — stay tuned."
        code="EP / PRE-PROD"
      />
      <ComingSoonModal
        open={tbaOpen}
        onOpenChange={setTbaOpen}
        title="PROJECT // CLASSIFIED"
        message="Details about this project will be revealed soon."
        code="P / TBA"
      />
    </main>
  );
};
