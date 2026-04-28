import { PageId } from "@/pages/Index";

interface Props {
  onNavigate: (p: PageId) => void;
}

export const Reader = ({ onNavigate }: Props) => {
  return (
    <main key="reader" className="page-enter relative z-10 min-h-screen bg-[#0a0a0a] text-white">
      {/* Top status strip */}
      <div className="border-b-2 border-white/30 bg-[#0a0a0a]">
        <div className="flex items-center justify-between px-6 py-3 font-tech text-[11px] tracking-[0.4em]">
          <span className="text-accent">P.07 / READER</span>
          <span className="hidden md:inline opacity-60">// READING_MODE : ACTIVE</span>
          <button
            onClick={() => onNavigate("novel")}
            className="text-accent hover:text-white transition-colors"
          >
            ◀ BACK
          </button>
        </div>
      </div>

      {/* Reader content */}
      <article className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20">
        {/* Episode meta */}
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-4">
          EP.001 / NOVEL_TITLE
        </div>

        {/* Chapter title */}
        <h1 className="font-display text-4xl md:text-7xl leading-[0.95] mb-3">
          CHAPTER TITLE GOES HERE
        </h1>
        <div className="font-tech text-[11px] tracking-[0.35em] opacity-50 mb-12">
          ▸ SUBTITLE / —
        </div>

        <div className="border-t-2 border-white/30 mb-10" />

        {/* Story body placeholder */}
        <div className="space-y-6 font-tech text-sm md:text-base leading-[1.9] tracking-wide opacity-70">
          <p>STORY TEXT WILL BE ADDED LATER.</p>
          <p className="opacity-40">
            — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
          </p>
          <p className="opacity-40">
            PARAGRAPH_FIELD / EMPTY
          </p>
          <p className="opacity-30">
            PARAGRAPH_FIELD / EMPTY
          </p>
          <p className="opacity-20">
            PARAGRAPH_FIELD / EMPTY
          </p>
        </div>

        <div className="border-t-2 border-white/30 mt-16 mb-8" />

        {/* Prev / Next */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="group border-2 border-white/60 hover:border-accent hover:bg-accent transition-all px-5 py-6 text-left"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] opacity-60 group-hover:opacity-100 mb-2">
              ◀ PREVIOUS
            </div>
            <div className="font-display text-2xl md:text-3xl leading-none opacity-80 group-hover:opacity-100">
              EP.000
            </div>
          </button>
          <button
            className="group border-2 border-white/60 hover:border-accent hover:bg-accent transition-all px-5 py-6 text-right"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] opacity-60 group-hover:opacity-100 mb-2">
              NEXT ▶
            </div>
            <div className="font-display text-2xl md:text-3xl leading-none opacity-80 group-hover:opacity-100">
              EP.002
            </div>
          </button>
        </div>

        {/* Bottom return */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate("novel")}
            className="font-tech text-[11px] tracking-[0.4em] text-accent hover:text-white transition-colors"
          >
            ▲ RETURN TO EPISODE LIST ▲
          </button>
        </div>
      </article>
    </main>
  );
};
