import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (lang: "en" | "hi") => void;
}

export const LanguageSelectModal = ({ open, onClose, onSelect }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/85 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select reading language"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 text-white p-6 sm:p-8 shadow-2xl slide-up"
        style={{ borderRadius: 14 }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="font-tech text-[10px] sm:text-[11px] tracking-[0.4em] text-zinc-500 mb-2">
          KARTA STUDIO
        </div>
        <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-1">
          Select Reading Language
        </h2>
        <p className="text-zinc-400 text-sm mb-6">
          Choose how you want to experience this story.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => onSelect("en")}
            className="group min-h-[88px] w-full px-4 py-5 flex flex-col items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-200 hover:border-blue-500 hover:bg-zinc-900 hover:-translate-y-0.5"
            style={{
              boxShadow: "0 0 0 0 rgba(59,130,246,0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px 2px rgba(59,130,246,0.55)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(59,130,246,0)")
            }
          >
            <span className="text-3xl" aria-hidden>🌐</span>
            <span className="font-display text-lg tracking-wide group-hover:text-blue-400">
              English
            </span>
            <span className="font-tech text-[10px] tracking-[0.3em] text-zinc-500">
              EN
            </span>
          </button>

          <button
            onClick={() => onSelect("hi")}
            className="group min-h-[88px] w-full px-4 py-5 flex flex-col items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-200 hover:border-orange-500 hover:bg-zinc-900 hover:-translate-y-0.5"
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px 2px rgba(249,115,22,0.55)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(249,115,22,0)")
            }
          >
            <span className="text-3xl" aria-hidden>🇮🇳</span>
            <span className="font-display text-lg tracking-wide group-hover:text-orange-400">
              Hindi
            </span>
            <span className="font-tech text-[10px] tracking-[0.3em] text-zinc-500">
              हिन्दी
            </span>
          </button>
        </div>

        <p className="mt-6 text-center font-tech text-[10px] tracking-[0.3em] text-zinc-600">
          YOU CAN CHANGE THIS ANYTIME
        </p>
      </div>
    </div>
  );
};
