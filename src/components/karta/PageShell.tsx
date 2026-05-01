import { ReactNode } from "react";

interface Props {
  code?: string;
  title: string;
  children: ReactNode;
  /** Show the red Madhouse-style page banner. */
  banner?: boolean;
}

export const PageShell = ({ title, children, banner = true }: Props) => (
  <main key={title} className="page-enter relative z-10">
    {banner && (
      <div className="hero-banner">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-14">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-none">
            {title}
          </h1>
        </div>
      </div>
    )}

    {/* breadcrumb / strip */}
    <div className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 font-tech text-[11px] tracking-[0.3em] text-muted-foreground">
        TOP <span className="mx-2 text-accent">›</span> {title}
      </div>
    </div>

    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-16">
      {children}
    </div>
  </main>
);
