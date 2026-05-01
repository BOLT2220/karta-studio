import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";

interface Entry {
  date: string;
  code: string;
  title: string;
  excerpt: string;
}

const ENTRIES: Entry[] = [
  {
    date: "2026 / 04",
    code: "N.001",
    title: "BOOT // KARTA STUDIO PORTAL ONLINE",
    excerpt: "Internal terminal goes live. RAW RENDER feed initialized at 24FPS.",
  },
  {
    date: "2026 / 04",
    code: "N.002",
    title: "DROP // THE LAST GLITCH — EP.001",
    excerpt: "First transmission of THE 404 ROAD is now readable inside the NOVEL channel.",
  },
  {
    date: "2026 / 05",
    code: "N.003",
    title: "TEASER // THE BOYZS — INCOMING",
    excerpt: "Action-comedy unit spotted. Pre-production protocols engaged. Stay tuned.",
  },
  {
    date: "2026 / 05",
    code: "N.004",
    title: "SYS // AUTH GRID UPGRADED",
    excerpt: "Login + Google sign-in deployed. Comments and upvotes now live for verified users.",
  },
  {
    date: "2026 / 06",
    code: "N.005",
    title: "PATCH // CINEMATIC INTRO 11/11",
    excerpt: "Eleven-slide pre-roll added to THE LAST GLITCH. Skip protocol restored.",
  },
  {
    date: "2026 / 06",
    code: "N.006",
    title: "ARCHIVE // KARTA ANTHOLOGY OPEN",
    excerpt: "Older fragments and concept boards re-cataloged under WORKS / ARCHIVE.",
  },
  {
    date: "2026 / 07",
    code: "N.007",
    title: "DRAFT // EP.002 STORYBOARD",
    excerpt: "Storyboard team is wiring up the loop. Frame test passes incoming.",
  },
  {
    date: "2026 / 07",
    code: "N.008",
    title: "SIGNAL // RAW RENDER LIVE",
    excerpt: "Director, key animation, composite — all desks reporting GREEN.",
  },
];

export const Blog = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Entry | null>(null);

  const openEntry = (e: Entry) => {
    setActive(e);
    setOpen(true);
  };

  return (
    <PageShell code="P.04 / BLOG" title="BLOG">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
          NEWS<span className="text-accent">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">DISPATCH</span>
      </div>

      <ul className="border-t-2 border-foreground">
        {ENTRIES.map((e, i) => (
          <li
            key={e.code}
            onClick={() => openEntry(e)}
            className="grid grid-cols-12 border-b-2 border-foreground group cursor-pointer red-flash transition-all duration-300 slide-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="col-span-3 md:col-span-2 border-r-2 border-foreground/30 px-4 py-6 flex items-center justify-center">
              <div className="w-full h-12 pulse-wire flex items-center justify-center font-tech text-[10px] tracking-[0.3em] text-accent group-hover:text-background">
                {e.date}
              </div>
            </div>
            <div className="col-span-2 md:col-span-2 border-r-2 border-foreground/30 px-4 py-6 flex items-center font-tech text-[11px] tracking-[0.3em]">
              {e.code}
            </div>
            <div className="col-span-7 md:col-span-7 px-4 py-6 flex flex-col justify-center">
              <div className="font-display text-sm md:text-lg leading-tight group-hover:text-background">
                {e.title}
              </div>
              <div className="font-tech text-[10px] tracking-[0.25em] text-foreground/60 mt-1 group-hover:text-background">
                ▸ {e.excerpt}
              </div>
            </div>
            <div className="col-span-12 md:col-span-1 flex items-center justify-center font-display text-3xl text-accent group-hover:text-background">
              →
            </div>
          </li>
        ))}
      </ul>

      <ComingSoonModal
        open={open}
        onOpenChange={setOpen}
        title={active ? `${active.code} // ${active.title}` : "DISPATCH // PENDING"}
        message={
          active
            ? `${active.excerpt} — Full bulletin is still being authored. Tune back in soon.`
            : "This bulletin is still being authored. Tune back in soon."
        }
        code="N/DRAFT"
      />
    </PageShell>
  );
};
