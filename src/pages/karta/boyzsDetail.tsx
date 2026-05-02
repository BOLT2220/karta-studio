import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import boyzsPoster from "@/assets/the-boyzs-banner.png"; 

interface Props {
  onNavigate: (p: PageId) => void;
}

export const BoyzsDetail = ({ onNavigate }: Props) => {
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <PageShell title="THE BOYZS">
      <section className="grid grid-cols-12 gap-10 slide-up">
        
        {/* LEFT SIDE: Poster & Info Table */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-8">
          <div className="card-clean overflow-hidden bg-muted aspect-[3/4]">
            <img 
              src={boyzsPoster} 
              className="w-full h-full object-cover" 
              alt="The Boyzs Poster"
            />
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6 text-sm">
            {[
              ["Status", "Ongoing"],
              ["Genre", "Action · Comedy"],
              ["Episodes", "1 of —"],
              ["Origin", "KARTA STUDIO"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b border-white/5">
                <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{k}</span>
                <span className="font-medium uppercase">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Story & Episodes */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-12">
          <div>
            <h2 className="text-6xl font-bold tracking-tighter uppercase">
              The Boyzs<span className="text-red-500">.</span>
            </h2>
            <p className="mt-2 text-red-500 font-medium tracking-[0.3em] text-xs uppercase">
              "They aren't just students — they are survivors."
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              A group of teenagers find themselves trapped in a school hallway where 
              reality starts to rot. Surrounded by <span className="text-red-500 font-semibold">skeletal entities</span> and 
              glowing green vines, they must pick up whatever they find — like a 
              <span className="text-red-500 font-semibold"> cricket bat</span> — and fight back against 
              a glitch that's turning their world into a nightmare.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold uppercase tracking-tight">Episodes</h3>
            
            <div className="space-y-2">
              {/* EPISODE 001 */}
              <div 
                onClick={() => onNavigate("intro")} 
                className="group flex items-center justify-between p-6 bg-muted/30 border border-white/5 hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-red-500 font-mono text-xs tracking-widest">EP.001</span>
                  <span className="text-xl font-bold uppercase group-hover:text-red-500 transition-colors">THE HALLWAY</span>
                </div>
                <div className="text-red-500 group-hover:translate-x-1 transition-transform">▶</div>
              </div>

              {/* COMING SOON EPISODES */}
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between p-6 opacity-30 border border-white/5">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs tracking-widest">EP.00{i + 2}</span>
                    <span className="text-xl font-bold uppercase">— Coming Soon —</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENTS */}
      <div className="mt-20">
        <StoryEngagement storyId="the-boyzs" />
      </div>

      <ComingSoonModal
        open={comingSoon}
        onOpenChange={setComingSoon}
        title="THE BOYZS"
        message="Next episode is in the works."
        code="EP / PROD"
      />
    </PageShell>
  );
};
