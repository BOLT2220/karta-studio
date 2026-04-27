import { PageShell } from "@/components/karta/PageShell";
import { useState } from "react";

const SIDE_ROWS = ["MAIL", "STUDIO", "PRESS", "RECRUIT", "SOCIAL"];

export const Contact = () => {
  const [glitch, setGlitch] = useState(false);
  return (
    <PageShell code="P.05 / CONTACT" title="CONTACT">
      <div className="flex items-end justify-between border-b-[3px] border-foreground pb-4 mb-10">
        <h1 className="font-display text-7xl md:text-[12rem] leading-[0.85]">
          CON<span className="text-accent">/</span>TACT
        </h1>
        <span className="font-tech text-[11px] tracking-[0.3em] hidden md:block">
          TRANSMIT / 通信
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-span-12 md:col-span-8 border-[3px] border-foreground slide-up"
        >
          {[
            { label: "NAME", code: "F.01" },
            { label: "ORG", code: "F.02" },
            { label: "MAIL", code: "F.03" },
            { label: "SUBJECT", code: "F.04" },
          ].map((f) => (
            <div key={f.label} className="grid grid-cols-12 border-b-2 border-foreground">
              <div className="col-span-4 md:col-span-3 bg-foreground text-background flex items-center justify-between px-4 py-5 font-display text-2xl">
                <span>{f.label}</span>
                <span className="font-tech text-xs text-accent">{f.code}</span>
              </div>
              <input
                type="text"
                className="col-span-8 md:col-span-9 px-4 py-5 bg-background font-tech text-sm tracking-[0.2em] focus:outline-none focus:bg-accent focus:text-background placeholder:text-foreground/30"
                placeholder="▸ INPUT_HERE"
              />
            </div>
          ))}
          <div className="grid grid-cols-12 border-b-2 border-foreground">
            <div className="col-span-4 md:col-span-3 bg-foreground text-background flex items-center justify-between px-4 py-5 font-display text-2xl">
              <span>MSG</span>
              <span className="font-tech text-xs text-accent">F.05</span>
            </div>
            <textarea
              rows={6}
              className="col-span-8 md:col-span-9 px-4 py-5 bg-background font-tech text-sm tracking-[0.2em] focus:outline-none focus:bg-accent focus:text-background placeholder:text-foreground/30 resize-none"
              placeholder="▸ MESSAGE_BODY"
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setGlitch(true)}
            onMouseLeave={() => setGlitch(false)}
            className="relative w-full bg-accent text-background font-display text-6xl md:text-9xl py-10 hover:bg-foreground transition-colors overflow-hidden"
          >
            <span className="glitch-text" data-text="SEND ▲">SEND ▲</span>
            {glitch && (
              <>
                <span className="absolute inset-0 flex items-center justify-center text-foreground/80 translate-x-1 -translate-y-1">SEND ▲</span>
                <span className="absolute inset-0 flex items-center justify-center text-background/40 -translate-x-2 translate-y-1">SEND ▲</span>
              </>
            )}
          </button>
        </form>

        {/* Sidebar table */}
        <aside className="col-span-12 md:col-span-4 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="font-tech text-[11px] tracking-[0.35em] text-accent mb-4">▲ CHANNELS</div>
          <div className="border-[3px] border-foreground">
            {SIDE_ROWS.map((r, i) => (
              <div key={r} className="border-b-2 border-foreground last:border-b-0">
                <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between font-display text-xl">
                  <span>{r}</span>
                  <span className="font-tech text-[10px] text-accent">C.{i + 1}</span>
                </div>
                <div className="p-3">
                  <div className="h-12 pulse-wire flex items-center px-3 font-tech text-[10px] tracking-[0.3em] text-foreground/40">
                    ▸ EMPTY
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PageShell>
  );
};
