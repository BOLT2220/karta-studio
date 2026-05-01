import { useState } from "react";
import { PageShell } from "@/components/karta/PageShell";
import { PageId } from "@/pages/Index";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import boyzsPoster from "@/assets/the-boyzs-banner.png"; // Make sure path is correct

interface Props {
  onNavigate: (p: PageId) => void;
}

export const BoyzsDetail = ({ onNavigate }: Props) => {
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <PageShell title="THE BOYZS">
      <section className="grid grid-cols-12 gap-10 slide-up">
        {/* Left Side: Poster & Info */}
        <div className="col-span-12 md:col-span-5">
          <div className="card-clean overflow-hidden bg-muted">
            <img
              src={boyzsPoster}
              alt="The Boyzs — series poster"
              className="w-full h-auto object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="mt-6 border-y hairline divide-y hairline text-sm">
            {[
              ["Status", "Ongoing"],
              ["Genre", "Action · Horror"],
              ["Episodes", "1 of —"],
              ["Origin", "KARTA STUDIO"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-3 py-3">
                <span className="col-span-5 font-display tracking-wide">{k}</span>
                <span className="col-span-7 text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Story & Episodes */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight uppercase">
            The Boyzs<span className="text-accent">.</span>
          </h2>
          <p className="mt-2 font-tech text-xs tracking-[0.3em] text-accent uppercase">
            "They aren't just students — they are survivors."
          </p>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground">
            A group of teenagers find themselves trapped in a school hallway where 
            reality starts to rot. Surrounded by <span className="text-accent font-semibold">skeletal entities</span> and 
            glowing green vines, they must pick up whatever they find — like a 
            <span className="text-accent font-semibold"> cricket bat</span> — and fight back against 
            a glitch that's turning their world into a nightmare.
          </p>

          <h3 className="mt-12 mb-4 font-display text-2xl md:text-3xl tracking-tight">
            Episodes
          </h3>
          <ul className="border-y hairline divide-y hairline">
            <li
              onClick={() => onNavigate("intro")} // Change "intro" to your story page id
              className="grid grid-cols-12 gap-3 py-5 px-2 cursor-pointer hover:bg-muted transition-colors group"
            >
              <span className="col-span-2 font-tech text-xs tracking-[0.3em] text-accent self-center">EP.001</span>
              <span className="col-span-8 font-display text-lg md:text-2xl tracking-tight">THE HALLWAY</span>
              <span className="col-span-2 text-right font-display text-xl text-accent group-hover:translate-x-1 transition-transform">▸</span>
            </li>
            {Array.from({ length: 2 }).map((_, i) => (
              <li key={i} className="grid grid-cols-12 gap-3 py-5 px-2 opacity-50">
                <span className="col-span-2 font-tech text-xs tracking-[0.3em] self-center">
                  EP.{String(i + 2).padStart(3, "0")}
                </span>
                <span className="col-span-8 font-display text-lg md:text-2xl tracking-tight">— Coming Soon —</span>
                <span className="col-span-2 text-right font-display text-xl">·</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StoryEngagement storyId="the-boyzs" />

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
