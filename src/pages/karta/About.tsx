import { PageShell } from "@/components/karta/PageShell";

const PROFILE: { label: string; value: string }[] = [
  { label: "Studio Name", value: "KARTA STUDIO" },
  { label: "Founders", value: "Sagar & Ronak" },
  { label: "Established", value: "2026" },
  { label: "Division", value: "Animation · Manga · Novel" },
  { label: "Headquarters", value: "Delhi, India" },
  { label: "Specialty", value: "International-quality storytelling rooted in Indian culture." },
];

export const About = () => {
  return (
    <PageShell title="ABOUT">
      {/* Tabs (visual only) */}
      <div className="border hairline mb-14 grid grid-cols-2 md:grid-cols-4 text-center font-display tracking-[0.2em]">
        {[
          { k: "PROFILE", active: true },
          { k: "HISTORY" },
          { k: "AWARDS" },
          { k: "CONTACT" },
        ].map((t) => (
          <div
            key={t.k}
            className={`px-4 py-4 text-sm md:text-base border-r hairline last:border-r-0 ${t.active ? "bg-accent text-accent-foreground" : ""}`}
          >
            {t.k}
          </div>
        ))}
      </div>

      {/* Profile editorial */}
      <section className="grid grid-cols-12 gap-10 md:gap-16 mb-20">
        <div className="col-span-12 md:col-span-3">
          <h2 className="font-display text-5xl md:text-7xl text-accent leading-none">PROFILE</h2>
        </div>
        <div className="col-span-12 md:col-span-9 divide-y hairline border-y hairline">
          {PROFILE.map((row) => (
            <div key={row.label} className="grid grid-cols-12 gap-4 py-5">
              <div className="col-span-12 md:col-span-4 font-display text-base md:text-lg tracking-wide">
                {row.label}
              </div>
              <div className="col-span-12 md:col-span-8 text-sm md:text-base leading-relaxed text-foreground">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="grid grid-cols-12 gap-10 md:gap-16">
        <div className="col-span-12 md:col-span-3">
          <h2 className="font-display text-5xl md:text-7xl text-accent leading-none">VISION</h2>
        </div>
        <div className="col-span-12 md:col-span-9 space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            We are building a new home for original animation and manga that
            speaks the language of the world while staying anchored in our roots.
          </p>
          <p>
            Every frame, every panel, every sentence is crafted with the discipline
            of a film studio and the heart of an independent atelier.
          </p>
          <blockquote className="border-l-4 border-accent pl-5 italic text-xl md:text-2xl text-foreground">
            "Stories are how a culture talks to the future."
          </blockquote>
        </div>
      </section>
    </PageShell>
  );
};
