import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
  message?: string;
  code?: string;
}

export const ComingSoonModal = ({
  open,
  onOpenChange,
  title = "TRANSMISSION INCOMING",
  message = "This module is offline. Stand by for the next broadcast.",
  code = "SIG/404",
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-[3px] border-foreground p-0 max-w-lg overflow-hidden">
        <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-2 border-accent">
          <DialogTitle className="font-display text-xl tracking-wide glitch-text" data-text={title}>
            {title}
          </DialogTitle>
          <span className="font-tech text-[10px] tracking-[0.3em] text-accent blink-soft">● LIVE</span>
        </div>
        <DialogDescription className="sr-only">{message}</DialogDescription>

        <div className="relative p-6">
          <div className="absolute inset-0 karta-grid-fine opacity-30 pointer-events-none" />
          <div className="scanline-laser pointer-events-none" />

          <div className="relative space-y-4">
            <div className="font-tech text-[11px] tracking-[0.35em] text-accent">
              ▲ {code} / SYSTEM NOTICE
            </div>
            <p className="font-display text-2xl md:text-3xl leading-tight">
              {message}
            </p>
            <div className="border-t-2 border-foreground pt-4 flex items-center justify-between">
              <span className="font-tech text-[10px] tracking-[0.3em] text-foreground/60">
                STATUS / IN_PRODUCTION
              </span>
              <button
                onClick={() => onOpenChange(false)}
                className="bg-accent text-background font-display text-lg px-5 py-2 hover:bg-foreground transition-colors"
              >
                ACKNOWLEDGE ▶
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
