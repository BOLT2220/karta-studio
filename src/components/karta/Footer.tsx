interface FooterProps {
  onNavigate?: (p: "works" | "about" | "blog" | "contact") => void;
}

export const Footer = ({ onNavigate }: FooterProps = {}) => (
  <footer className="relative z-10 mt-24">
    {/* Red Madhouse-style block */}
    <div className="bg-accent text-accent-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl md:text-4xl tracking-tight leading-none">
            KARTA <span className="opacity-80">STUDIO</span>
          </div>
          <div className="mt-3 font-tech text-[11px] tracking-[0.3em] opacity-80">
            ANIMATION · MANGA · NOVEL
          </div>
          <div className="mt-6 text-xs opacity-80 leading-relaxed">
            International-level mangas and anime from Indian roots.
          </div>
        </div>

        <div>
          <div className="font-display text-sm tracking-[0.25em] mb-4 opacity-90">SITEMAP</div>
          <ul className="space-y-2 text-sm">
            {(["works", "about", "blog", "contact"] as const).map((id) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate?.(id)}
                  className="hover:underline underline-offset-4 capitalize"
                >
                  {id === "blog" ? "News" : id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-sm tracking-[0.25em] mb-4 opacity-90">OFFICIAL</div>
          <ul className="space-y-2 text-sm">
            <li>bolt2220yt@gmail.com</li>
            <li>Delhi, India</li>
            <li className="opacity-80">© {new Date().getFullYear()} KARTA STUDIO. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between font-tech text-[10px] tracking-[0.3em]">
        <span>KARTA STUDIO — OFFICIAL PORTAL</span>
        <span>EST. 2026</span>
      </div>
    </div>
  </footer>
);
