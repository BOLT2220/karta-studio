import { useState } from "react";
import { PageId } from "@/pages/Index";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/use-auth";
import { AuthDialog } from "./AuthDialog";

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "works", label: "WORKS" },
  { id: "about", label: "ABOUT" },
  { id: "blog", label: "BLOG" },
  { id: "novel", label: "NOVEL" },
  { id: "contact", label: "CONTACT" },
];

interface Props {
  active: PageId;
  onNavigate: (p: PageId) => void;
}

export const Header = ({ active, onNavigate }: Props) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="flex items-stretch justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="group relative flex items-center gap-2 px-5 py-3 border-r-[3px] border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          <span className="font-display text-2xl md:text-3xl leading-none glitch-text" data-text="KARTA">
            KARTA
          </span>
          <span className="font-display text-2xl md:text-3xl leading-none text-accent">
            ●
          </span>
          <span className="font-display text-2xl md:text-3xl leading-none glitch-text" data-text="STUDIO">
            STUDIO
          </span>
          <span className="hidden md:block font-tech text-[10px] tracking-[0.3em] text-accent ml-2">
            / EST. /
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

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex items-center gap-3 px-5 border-l-[3px] border-foreground hover:bg-foreground hover:text-background transition-colors group"
          >
            <span className={`font-display text-sm tracking-[0.2em] ${!isDark ? "text-accent" : "opacity-40"}`}>
              LIGHT
            </span>
            <span className="relative inline-flex h-6 w-12 items-center border-2 border-foreground group-hover:border-background">
              <span
                className={`absolute top-0 bottom-0 w-[20px] bg-accent transition-all ${
                  isDark ? "left-[calc(100%-20px)]" : "left-0"
                }`}
              />
            </span>
            <span className={`font-display text-sm tracking-[0.2em] ${isDark ? "text-accent" : "opacity-40"}`}>
              DARK
            </span>
          </button>

          <div className="flex items-center px-6 border-l-[3px] border-foreground bg-foreground text-background font-tech text-xs tracking-[0.25em]">
            REC ●
          </div>
        </nav>

        {/* Mobile: toggle + selector */}
        <div className="flex md:hidden items-stretch">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="px-3 border-l-2 border-foreground font-tech text-[10px] tracking-[0.2em]"
          >
            {isDark ? "DARK" : "LIGHT"}
          </button>
          <select
            value={active}
            onChange={(e) => onNavigate(e.target.value as PageId)}
            className="font-display text-lg bg-background border-l-2 border-foreground px-3"
          >
            {NAV.map((n) => (
              <option key={n.id} value={n.id}>{n.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="bg-foreground text-background overflow-hidden border-t-2 border-accent">
        <div className="marquee-track flex whitespace-nowrap py-1 font-tech text-[11px] tracking-[0.35em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[
                "INTERNAL PORTAL // PRODUCTION COMMITTEE",
                "BUILD 04.27 // FRAME 24FPS",
                "KARTA STUDIO // ANIMATION DIVISION",
                "SECURE CHANNEL // RAW RENDER",
                "DIRECTOR // STORYBOARD // KEY ANIMATION",
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
