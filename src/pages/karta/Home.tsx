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
      action: "intro",
      objectPos: "center",
    },
    {
      code: "W.002",
      title: "THE BOYZS",
      category: "NOVEL · ACTION-COMEDY",
      year: "2027",
      status: "SOON",
      poster: boyzsPoster,
      onClick: () => setBoyzsOpen(true),
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 slide-up">
            <div className="font-tech text-xs tracking-[0.4em] text-accent mb-5">
              ANIMATION · MANGA · NOVEL — EST. 2026
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight">
              STORIES BUILT<br />
              <span className="text-accent">FOR THE WORLD</span>,<br />
              FROM <span className="underline decoration-accent decoration-4 underline-offset-8">INDIA</span>.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
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
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none">WORKS</h2>
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
