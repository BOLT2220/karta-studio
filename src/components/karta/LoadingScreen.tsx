import { useEffect, useState } from "react";

/**
 * Minimalist white loading screen with pulsing red KARTA STUDIO logo.
 * Shown briefly on first mount before the app reveals.
 */
export const LoadingScreen = ({ duration = 900 }: { duration?: number }) => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), duration);
    const t2 = setTimeout(() => setRemoved(true), duration + 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [duration]);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="text-center">
        <div className="font-display text-5xl md:text-7xl tracking-tight leading-none pulse-logo">
          <span className="text-accent">KARTA</span> <span className="text-foreground">STUDIO</span>
        </div>
        <div className="mt-4 font-tech text-[11px] tracking-[0.4em] text-muted-foreground">
          LOADING ···
        </div>
      </div>
    </div>
  );
};
