import { useState } from "react";
import { PageId } from "@/pages/Index";
import { useAuth } from "@/hooks/use-auth";
import { AuthDialog } from "./AuthDialog";

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "works", label: "WORKS" },
  { id: "about", label: "ABOUT" },
  { id: "blog", label: "NEWS" },
  { id: "novel", label: "NOVEL" },
  { id: "contact", label: "CONTACT" },
];

interface Props {
  active: PageId;
  onNavigate: (p: PageId) => void;
}

export const Header = ({ active, onNavigate }: Props) => {
  const { user, signOut } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
      <header className="sticky top-0 z-50 header-blur">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo — fully responsive, never crops */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group min-w-0 shrink"
            aria-label="KARTA STUDIO home"
          >
            <img
              src="/karta-logo.png"
              alt="KARTA STUDIO"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-display text-xl sm:text-2xl md:text-3xl leading-none tracking-tight text-accent whitespace-nowrap">
              KARTA
            </span>
            <span className="font-display text-xl sm:text-2xl md:text-3xl leading-none tracking-tight whitespace-nowrap">
              STUDIO
            </span>
          </button>

          {/* Desktop nav with gap-10 */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => onNavigate(n.id)}
                data-active={active === n.id}
                className="nav-link font-display text-sm tracking-[0.18em] text-foreground hover:text-accent"
              >
                {n.label}
              </button>
            ))}

            {user ? (
              <button
                onClick={() => signOut()}
                className="ml-2 inline-flex items-center justify-center border border-foreground px-4 py-2 font-display text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="ml-2 inline-flex items-center justify-center bg-accent text-accent-foreground px-4 py-2 font-display text-xs tracking-[0.2em] hover:bg-foreground transition-colors"
              >
                LOGIN
              </button>
            )}
          </nav>

          {/* Mobile / tablet selector */}
          <div className="flex lg:hidden items-center gap-2 min-w-0">
            <select
              value={active}
              onChange={(e) => onNavigate(e.target.value as PageId)}
              aria-label="Navigate"
              className="font-display text-sm bg-background border border-foreground px-2 py-1.5 max-w-[8rem]"
            >
              {NAV.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
            <button
              onClick={() => (user ? signOut() : setAuthOpen(true))}
              className="bg-accent text-accent-foreground px-3 py-1.5 font-display text-xs tracking-[0.2em]"
            >
              {user ? "OUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
