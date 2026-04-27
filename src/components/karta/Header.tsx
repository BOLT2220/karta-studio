import { PageId } from "@/pages/Index";

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "works", label: "WORKS" },
  { id: "about", label: "ABOUT" },
  { id: "blog", label: "BLOG" },
  { id: "contact", label: "CONTACT" },
];

interface Props {
  active: PageId;
  onNavigate: (p: PageId) => void;
}

export const Header = ({ active, onNavigate }: Props) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="flex items-stretch justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="group relative flex items-center gap-3 px-6 py-4 border-r-[3px] border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          <span className="font-display text-3xl md:text-4xl leading-none glitch-text" data-text="KARTA">
            KARTA
          </span>
          <span className="font-display text-3xl md:text-4xl leading-none text-accent">
            ●
          </span>
          <span className="font-display text-3xl md:text-4xl leading-none glitch-text" data-text="STUDIO">
            STUDIO
          </span>
          <span className="hidden md:block font-tech text-[10px] tracking-[0.3em] text-accent ml-2">
            / 火 / EST.
          </span>
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-stretch">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              data-active={active === n.id}
              className="nav-link font-display text-xl tracking-wider px-6 flex items-center border-l-2 border-foreground/10 hover:text-accent transition-colors"
            >
              {n.label}
            </button>
          ))}
          <div className="flex items-center px-6 border-l-[3px] border-foreground bg-foreground text-background font-tech text-xs tracking-[0.25em]">
            REC ●
          </div>
        </nav>

        {/* Mobile selector */}
        <select
          value={active}
          onChange={(e) => onNavigate(e.target.value as PageId)}
          className="md:hidden font-display text-lg bg-background border-l-2 border-foreground px-4"
        >
          {NAV.map((n) => (
            <option key={n.id} value={n.id}>{n.label}</option>
          ))}
        </select>
      </div>

      {/* Marquee strip */}
      <div className="bg-foreground text-background overflow-hidden border-t-2 border-accent">
        <div className="marquee-track flex whitespace-nowrap py-1 font-tech text-[11px] tracking-[0.35em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[
                "INTERNAL PORTAL // PRODUCTION COMMITTEE",
                "BUILD 04.27 // FRAME 24FPS",
                "KARTA STUDIO 火 ANIMATION DIVISION",
                "SECURE CHANNEL // RAW RENDER",
                "監督 // 演出 // 作画",
              ].map((t, j) => (
                <span key={j} className="px-8 flex items-center gap-3">
                  <span className="text-accent">▲</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
