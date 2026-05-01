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
  { date: "2026.04", code: "N.001", title: "KARTA STUDIO portal goes live",            excerpt: "Our official site is now online. Welcome to the KARTA Studio universe." },
  { date: "2026.04", code: "N.002", title: "THE LAST GLITCH — Episode 01 released",     excerpt: "Read the first chapter of THE 404 ROAD inside the NOVEL section." },
  { date: "2026.05", code: "N.003", title: "THE BOYZS — official teaser",               excerpt: "Action-comedy series enters pre-production. More details soon." },
  { date: "2026.05", code: "N.004", title: "Account system & social login deployed",     excerpt: "Email and Google sign-in are now available. Comments and ratings are live." },
  { date: "2026.06", code: "N.005", title: "Cinematic intro added to THE LAST GLITCH",   excerpt: "An 11-slide cinematic prologue opens the series for the full reading experience." },
  { date: "2026.06", code: "N.006", title: "KARTA Anthology archive opened",             excerpt: "Older fragments and concept boards re-cataloged under WORKS." },
  { date: "2026.07", code: "N.007", title: "Episode 02 storyboarding underway",          excerpt: "Storyboard team is wiring up the loop. Frame test passes are incoming." },
  { date: "2026.07", code: "N.008", title: "Production status: GREEN across all desks",  excerpt: "Direction, key animation and post — every department reporting GREEN." },
];

export const Blog = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Entry | null>(null);

  const openEntry = (e: Entry) => { setActive(e); setOpen(true); };

  return (
    <PageShell title="NEWS">
      <div className="border-y hairline">
        <ul className="divide-y hairline">
          {ENTRIES.map((e, i) => (
            <li
              key={e.code}
              onClick={() => openEntry(e)}
              className="grid grid-cols-12 gap-4 px-2 md:px-4 py-6 cursor-pointer hover:bg-muted transition-colors slide-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="col-span-3 md:col-span-2 font-tech text-xs tracking-[0.3em] text-accent self-center">
                {e.date}
              </div>
              <div className="col-span-9 md:col-span-9">
                <div className="font-display text-lg md:text-xl leading-tight">{e.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{e.excerpt}</div>
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-end font-display text-2xl text-accent">
                ›
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ComingSoonModal
        open={open}
        onOpenChange={setOpen}
        title={active ? active.title : "DISPATCH"}
        message={active ? `${active.excerpt} Full bulletin coming soon.` : "Bulletin coming soon."}
        code="NEWS / DRAFT"
      />
    </PageShell>
  );
};
