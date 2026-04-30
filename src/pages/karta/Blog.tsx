import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";

export const Blog = () => {
  const [open, setOpen] = useState(false);
  return (
    <PageShell code="P.04 / BLOG" title="BLOG">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
          NEWS<span className="text-accent">.</span>
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">
          DISPATCH
        </span>
      </div>

      <ul className="border-t-2 border-foreground">
        {Array.from({ length: 8 }).map((_, i) => (
          <li
            key={i}
            onClick={() => setOpen(true)}
            className="grid grid-cols-12 border-b-2 border-foreground group cursor-pointer red-flash transition-all duration-300 slide-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="col-span-3 md:col-span-2 border-r-2 border-foreground/30 px-4 py-6 flex items-center justify-center">
              <div className="w-full h-12 pulse-wire flex items-center justify-center font-tech text-[10px] tracking-[0.3em] text-accent group-hover:text-background">
                YYYY / MM
              </div>
            </div>
            <div className="col-span-2 md:col-span-2 border-r-2 border-foreground/30 px-4 py-6 flex items-center font-tech text-[11px] tracking-[0.3em]">
              N.{String(i + 1).padStart(3, "0")}
            </div>
            <div className="col-span-7 md:col-span-7 px-4 py-6 flex items-center">
              <div className="w-full h-14 pulse-wire flex items-center px-4 font-tech text-[11px] tracking-[0.35em] text-foreground/40 group-hover:text-background">
                ▸ TITLE_FIELD / EXCERPT_FIELD — EMPTY
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
        title="DISPATCH // PENDING"
        message="This bulletin is still being authored. Tune back in soon."
        code="N/DRAFT"
      />
    </PageShell>
  );
};
