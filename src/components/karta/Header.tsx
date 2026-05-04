import { useState, useEffect } from "react";
import { PageId } from "@/pages/Index";
import { useAuth } from "@/hooks/use-auth";
import { AuthDialog } from "./AuthDialog";
import { Menu, X, Home as HomeIcon } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (p: PageId) => {
    onNavigate(p);
    setMenuOpen(false);
  };

  return (
    <>
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
      <header className="sticky top-0 z-50 header-blur">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 md:h-20 flex items-center justify-between gap-3">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 group min-w-0 shrink"
            aria-label="KARTA STUDIO home"
          >
            <img
              src="/karta-logo.png"
              alt="KARTA STUDIO"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-display text-lg sm:text-2xl md:text-3xl leading-none tracking-tight text-accent whitespace-nowrap">
              KARTA
            </span>
            <span className="hidden xs:inline font-display text-lg sm:text-2xl md:text-3xl leading-none tracking-tight whitespace-nowrap">
              STUDIO
            </span>
          </button>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-foreground"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b hairline">
              <span className="font-display text-lg tracking-tight">
                <span className="text-accent">KARTA</span> MENU
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 inline-flex items-center justify-center"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  data-active={active === n.id}
                  className={`text-left font-display text-2xl tracking-[0.15em] py-4 border-b hairline min-h-[44px] ${
                    active === n.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  user ? signOut() : setAuthOpen(true);
                }}
                className="mt-6 inline-flex items-center justify-center bg-accent text-accent-foreground px-4 py-4 font-display text-base tracking-[0.25em] min-h-[44px]"
              >
                {user ? "LOGOUT" : "LOGIN"}
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Sticky bottom nav (mobile only) */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t hairline bg-background/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-3">
          <button
            onClick={() => onNavigate("home")}
            className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] font-tech text-[10px] tracking-[0.2em]"
            aria-label="Home"
          >
            <HomeIcon size={20} className={active === "home" ? "text-accent" : ""} />
            HOME
          </button>
          <a
            href="https://discord.gg/9BT2bYZYWt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] font-tech text-[10px] tracking-[0.2em] border-x hairline"
            aria-label="Discord"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.6-.717 1.382-.98 1.997a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.99-1.997.077.077 0 0 0-.079-.037c-1.31.226-2.563.62-3.76 1.169a.07.07 0 0 0-.032.027C2.07 8.045 1.36 11.617 1.708 15.144a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.13 13.13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128c-.598.349-1.22.642-1.873.891a.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.177-.838-7.72-3.549-10.748a.06.06 0 0 0-.031-.028zM8.02 13.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            DISCORD
          </a>
          <a
            href="https://tapas.io/series/THE-LAST-GLITCH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] font-tech text-[10px] tracking-[0.2em]"
            aria-label="Tapas"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            TAPAS
          </a>
        </div>
      </nav>
    </>
  );
};
