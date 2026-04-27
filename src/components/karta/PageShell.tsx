import { ReactNode } from "react";

interface Props {
  code: string;
  title: string;
  children: ReactNode;
}

export const PageShell = ({ code, title, children }: Props) => (
  <main key={title} className="page-enter relative z-10">
    {/* Page header strip */}
    <div className="border-b-[3px] border-foreground bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-3 font-tech text-[11px] tracking-[0.4em]">
        <span className="text-accent">{code}</span>
        <span>// CURRENT_VIEW : {title}</span>
        <span className="hidden md:inline text-accent">▲ ▲ ▲</span>
      </div>
    </div>
    <div className="px-4 md:px-10 py-10 md:py-14">{children}</div>
  </main>
);
