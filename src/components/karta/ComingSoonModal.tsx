import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { forwardRef } from "react";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
  message?: string;
  code?: string;
}

export const ComingSoonModal = forwardRef<HTMLDivElement, Props>(({
  open,
  onOpenChange,
  title = "Coming Soon",
  message = "This module is offline. Stand by for the next update.",
  code = "SIG / 404",
}, ref) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent ref={ref} className="bg-background border hairline shadow-2xl p-0 max-w-lg overflow-hidden rounded-none">
        <div className="bg-accent text-accent-foreground px-5 py-3 flex items-center justify-between">
          <DialogTitle className="font-display text-xl tracking-wide">
            {title}
          </DialogTitle>
          <span className="font-tech text-[10px] tracking-[0.3em] coming-dot">● LIVE</span>
        </div>
        <DialogDescription className="sr-only">{message}</DialogDescription>

        <div className="p-6 space-y-5">
          <div className="font-tech text-[11px] tracking-[0.35em] text-accent">
            {code}
          </div>
          <p className="font-display text-2xl md:text-3xl leading-tight">
            {message}
          </p>
          <div className="border-t hairline pt-4 flex items-center justify-between">
            <span className="font-tech text-[10px] tracking-[0.3em] text-muted-foreground">
              STATUS · IN PRODUCTION
            </span>
            <button
              onClick={() => onOpenChange(false)}
              className="bg-foreground text-background font-display text-base px-5 py-2 hover:bg-accent transition-colors"
            >
              ACKNOWLEDGE ▸
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

ComingSoonModal.displayName = "ComingSoonModal";
