import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import tlgPoster from "@/assets/the-last-glitch-banner.jpeg";
import boyzsPoster from "@/assets/the-boyzs-poster.png";

interface Props {
  onNavigate: (p: PageId) => void;
}

interface NovelEntry {
  id: PageId;
  title: string;
  teaser: string;
  meta: string;
  poster: string;
  objectPos?: "top" | "center";
}

const NOVELS: NovelEntry[] = [
  {
    id: "glitch",
    title: "THE LAST GLITCH",
    teaser:
      "Five friends, one road that doesn't exist on any map. The GPS shows only 404. Reality stops loading.",
    meta: "SCI-FI · HORROR · 2026",
    poster: tlgPoster,
    objectPos: "center",
  },
  {
    id: "boyzs",
    title: "THE BOYZS",
    teaser:
      "A normal day spirals into chaos when zombies invade the boys' hostel. No plan. No weapons. Just chaos.",
    meta: "ACTION · COMEDY · 2026",
    poster: boyzsPoster,
    objectPos: "top",
  },
];

export const NovelDetail = ({ onNavigate }: Props) => {
  return (
    <PageShell title="NOVEL">
      <section className="space-y-6 slide-up">
        <header className="flex items-end justify-between border-b hairline pb-4">
          <div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-none">
              DIRECTORY<span className="text-accent">.</span>
            </h2>
            <p className="mt-2 font-tech text-[11px] tracking-[0.3em] text-muted-foreground">
              {NOVELS.length} TITLES · KARTA STUDIO
            </p>
          </div>
          <span className="hidden sm:inline font-tech text-[11px] tracking-[0.3em] text-accent">
            ● LIVE INDEX
          </span>
        </header>

        <ul className="divide-y hairline border-b hairline">
          {NOVELS.map((n, i) => (
            <li key={n.id}>
              <button
                onClick={() => onNavigate(n.id)}
                className="w-full text-left grid grid-cols-12 gap-4 md:gap-6 py-5 px-2 hover:bg-muted transition-colors group"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="col-span-3 sm:col-span-2">
                  <div className="aspect-[3/4] bg-muted overflow-hidden card-clean">
                    <img
                      src={n.poster}
                      alt={`${n.title} poster`}
                      className={`w-full h-full object-cover ${n.objectPos === "top" ? "object-top" : "object-center"}`}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-span-8 sm:col-span-9 flex flex-col justify-center">
                  <div className="font-tech text-[10px] tracking-[0.3em] text-accent">
                    {n.meta}
                  </div>
                  <div className="mt-1 font-display text-2xl md:text-4xl leading-tight tracking-tight">
                    {n.title}
                  </div>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {n.teaser}
                  </p>
                </div>
                <div className="col-span-1 self-center text-right font-display text-2xl md:text-3xl text-accent group-hover:translate-x-1 transition-transform">
                  ▸
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
};
