import { PageShell } from "@/components/karta/PageShell";

const ROWS_PROFILE = ["NAME", "FOUNDED", "DIVISION", "HEADQUARTERS", "STAFF", "SPECIALTY"];
const ROWS_VISION = ["MISSION", "MANIFESTO", "AESTHETIC", "PROCESS", "OUTPUT"];

export const About = () => {
  return (
    <PageShell code="P.03 / ABOUT" title="ABOUT">
      <section className="mb-16 slide-up">
        <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-8">
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-accent">
            PROFILE
          </h1>
          <span className="font-tech text-[11px] tracking-[0.3em]">// RECORD</span>
        </div>

        <div className="border-[3px] border-foreground">
          {ROWS_PROFILE.map((label, i) => (
            <div key={label} className="grid grid-cols-12 border-b-2 border-foreground last:border-b-0 min-h-[88px]">
              <div className="col-span-4 md:col-span-3 border-r-2 border-foreground bg-foreground text-background flex items-center justify-between px-4 md:px-6 font-display text-xl md:text-2xl">
                <span>{label}</span>
                <span className="font-tech text-xs text-accent">0{i + 1}</span>
              </div>
              <div className="col-span-8 md:col-span-9 relative p-4">
                <div className="h-full w-full pulse-wire flex items-center px-4 font-tech text-[11px] tracking-[0.35em] text-foreground/40">
                  ▸ EMPTY_FIELD / READY_FOR_INPUT
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="slide-up" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-8">
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9] text-accent">
            VISION
          </h2>
          <span className="font-tech text-[11px] tracking-[0.3em]">// DOCTRINE</span>
        </div>

        <div className="border-[3px] border-foreground">
          {ROWS_VISION.map((label, i) => (
            <div key={label} className="grid grid-cols-12 border-b-2 border-foreground last:border-b-0 min-h-[110px]">
              <div className="col-span-4 md:col-span-3 border-r-2 border-foreground bg-foreground text-background flex items-center justify-between px-4 md:px-6 font-display text-xl md:text-2xl">
                <span>{label}</span>
                <span className="font-tech text-xs text-accent">V.{i + 1}</span>
              </div>
              <div className="col-span-8 md:col-span-9 relative p-4">
                <div className="h-full w-full pulse-wire flex items-center px-4 font-tech text-[11px] tracking-[0.35em] text-foreground/40">
                  ▸ DRAFT_ZONE / RAW
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
