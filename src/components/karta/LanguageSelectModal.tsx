import { useEffect, useMemo, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (lang: "en" | "hi") => void;
}

type Phase = "choose" | "burst" | "form" | "reveal";

export const LanguageSelectModal = ({ open, onClose, onSelect }: Props) => {
  const [phase, setPhase] = useState<Phase>("choose");
  const [chosen, setChosen] = useState<"en" | "hi" | null>(null);

  // Lock scroll + ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && phase === "choose" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, phase]);

  // Reset when reopened
  useEffect(() => {
    if (open) {
      setPhase("choose");
      setChosen(null);
    }
  }, [open]);

  // Pre-compute particles (deterministic per render of cinematic phase)
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, i) => {
        const angle = (i / 70) * Math.PI * 2 + Math.random() * 0.8;
        const dist = 180 + Math.random() * 320;
        return {
          id: i,
          startX: Math.cos(angle) * dist,
          startY: Math.sin(angle) * dist,
          curveX: Math.cos(angle + 1.2) * (40 + Math.random() * 120),
          curveY: Math.sin(angle + 1.2) * (40 + Math.random() * 120),
          size: 4 + Math.random() * 14,
          delay: Math.random() * 350,
          duration: 900 + Math.random() * 500,
          opacity: 0.35 + Math.random() * 0.55,
        };
      }),
    [chosen],
  );

  const handleSelect = (lang: "en" | "hi") => {
    setChosen(lang);
    setPhase("burst");
    // Burst → particles swirl
    setTimeout(() => setPhase("form"), 450);
    // Logo forms and holds
    setTimeout(() => setPhase("reveal"), 1900);
    // Final reveal — close & navigate
    setTimeout(() => {
      onSelect(lang);
    }, 2700);
  };

  if (!open) return null;

  const accentColor = chosen === "hi" ? "#f97316" : "#3b82f6";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Select reading language"
      style={{
        background:
          phase === "reveal"
            ? "rgba(0,0,0,1)"
            : "radial-gradient(ellipse at center, rgba(20,20,22,0.95) 0%, rgba(0,0,0,0.96) 70%)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition: "background 700ms ease",
      }}
      onClick={() => phase === "choose" && onClose()}
    >
      {/* Soft paper / watercolor texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 45%)",
          mixBlendMode: "screen",
        }}
      />

      {/* PHASE 1 — CHOOSE */}
      {phase === "choose" && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl text-white text-center lsm-fade-in"
        >
          <div className="font-tech text-[10px] sm:text-[11px] tracking-[0.5em] text-zinc-500 mb-3">
            KARTA STUDIO
          </div>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight mb-2">
            Select Reading Language
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-10">
            Choose how you want to experience this story.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            <LanguageCard
              label="English"
              sub="EN"
              icon="🌐"
              glow="#3b82f6"
              onClick={() => handleSelect("en")}
            />
            <LanguageCard
              label="Hindi"
              sub="हिन्दी"
              icon="🇮🇳"
              glow="#f97316"
              onClick={() => handleSelect("hi")}
            />
          </div>

          <button
            onClick={onClose}
            className="mt-10 font-tech text-[10px] tracking-[0.4em] text-zinc-500 hover:text-white"
          >
            ✕ CLOSE
          </button>
        </div>
      )}

      {/* PHASE 2 — BURST: chosen word glows then dissolves */}
      {phase === "burst" && chosen && (
        <div className="relative flex items-center justify-center">
          <div
            className="font-display text-6xl sm:text-8xl tracking-tight lsm-burst"
            style={{
              color: "#fff",
              textShadow: `0 0 40px ${accentColor}, 0 0 90px ${accentColor}`,
            }}
          >
            {chosen === "hi" ? "Hindi" : "English"}
          </div>
        </div>
      )}

      {/* PHASE 3 — INK PARTICLES SWIRL TO LOGO */}
      {(phase === "form" || phase === "reveal") && (
        <div className="relative flex items-center justify-center w-full h-full">
          {phase === "form" &&
            particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full lsm-particle"
                style={
                  {
                    width: p.size,
                    height: p.size,
                    background: `radial-gradient(circle, ${accentColor} 0%, rgba(255,255,255,0.7) 60%, transparent 100%)`,
                    opacity: p.opacity,
                    filter: "blur(1.5px)",
                    ["--sx" as string]: `${p.startX}px`,
                    ["--sy" as string]: `${p.startY}px`,
                    ["--cx" as string]: `${p.curveX}px`,
                    ["--cy" as string]: `${p.curveY}px`,
                    animationDelay: `${p.delay}ms`,
                    animationDuration: `${p.duration}ms`,
                  } as React.CSSProperties
                }
              />
            ))}

          {/* Logo forming — appears as particles converge */}
          <div
            className="relative text-center lsm-logo-form"
            style={{
              filter: phase === "reveal" ? "blur(0px)" : "blur(0.5px)",
            }}
          >
            <div
              className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none"
              style={{
                color: "#fff",
                textShadow: `0 0 30px ${accentColor}99, 0 0 80px ${accentColor}55`,
              }}
            >
              <span style={{ color: "hsl(354 82% 56%)" }}>KARTA</span>{" "}
              <span>STUDIO</span>
            </div>
            <div className="mt-3 font-tech text-[10px] sm:text-xs tracking-[0.5em] text-zinc-400">
              {chosen === "hi" ? "हिन्दी संस्करण" : "ENGLISH EDITION"}
            </div>
          </div>
        </div>
      )}

      {/* PHASE 4 — final cross-dissolve overlay */}
      {phase === "reveal" && (
        <div className="absolute inset-0 bg-black lsm-dissolve pointer-events-none" />
      )}

      <style>{`
        .lsm-fade-in {
          animation: lsmFadeIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes lsmFadeIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .lsm-card {
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.3s ease;
          will-change: transform, box-shadow;
          animation: lsmFloat 5s ease-in-out infinite;
        }
        .lsm-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255,255,255,0.3);
        }
        @keyframes lsmFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .lsm-burst {
          animation: lsmBurst 0.45s cubic-bezier(0.7,0,0.84,0) both;
        }
        @keyframes lsmBurst {
          0% { opacity: 1; transform: scale(1); filter: blur(0); }
          60% { opacity: 1; transform: scale(1.25); filter: blur(0.5px); }
          100% { opacity: 0; transform: scale(2.4); filter: blur(8px); }
        }

        .lsm-particle {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translate(var(--sx), var(--sy));
          animation-name: lsmSwirl;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
          will-change: transform, opacity, filter;
        }
        @keyframes lsmSwirl {
          0% {
            transform: translate(-50%, -50%) translate(var(--sx), var(--sy)) scale(1.4);
            opacity: 0;
            filter: blur(4px);
          }
          25% {
            opacity: 1;
            filter: blur(2px);
          }
          70% {
            transform: translate(-50%, -50%) translate(var(--cx), var(--cy)) scale(0.8);
            opacity: 0.9;
            filter: blur(1px);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0;
            filter: blur(0);
          }
        }

        .lsm-logo-form {
          animation: lsmLogoForm 1.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes lsmLogoForm {
          0% { opacity: 0; transform: scale(0.92); filter: blur(14px); letter-spacing: 0.2em; }
          55% { opacity: 1; filter: blur(2px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); letter-spacing: 0; }
        }

        .lsm-dissolve {
          animation: lsmDissolve 0.8s cubic-bezier(0.7,0,0.84,0) both;
        }
        @keyframes lsmDissolve {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const LanguageCard = ({
  label,
  sub,
  icon,
  glow,
  onClick,
}: {
  label: string;
  sub: string;
  icon: string;
  glow: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="lsm-card group relative min-h-[140px] w-full px-6 py-7 flex flex-col items-center justify-center gap-2 rounded-2xl text-white"
    style={{ boxShadow: `0 10px 40px -20px ${glow}80` }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 0 60px 4px ${glow}aa, inset 0 0 30px ${glow}33`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `0 10px 40px -20px ${glow}80`;
    }}
  >
    <span className="text-4xl" aria-hidden>{icon}</span>
    <span
      className="font-display text-2xl sm:text-3xl tracking-wide transition-colors"
      style={{ color: "#fff" }}
    >
      {label}
    </span>
    <span className="font-tech text-[10px] tracking-[0.4em] text-zinc-400">
      {sub}
    </span>
  </button>
);
