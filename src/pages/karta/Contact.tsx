import { PageShell } from "@/components/karta/PageShell";
import { useState } from "react";
import { ComingSoonModal } from "@/components/karta/ComingSoonModal";

const CHANNELS: { label: string; value: string }[] = [
  { label: "Mail",    value: "bolt2220yt@gmail.com" },
  { label: "HQ",      value: "Delhi, India" },
  { label: "Press",   value: "press@kartastudio.in" },
  { label: "Recruit", value: "recruit@kartastudio.in" },
];

export const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageShell title="CONTACT">
      <div className="grid grid-cols-12 gap-10 md:gap-16">
        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setOpen(true); }}
          className="col-span-12 md:col-span-8 slide-up space-y-6"
        >
          {[
            { name: "name",    label: "Name" },
            { name: "org",     label: "Organisation" },
            { name: "mail",    label: "Email" },
            { name: "subject", label: "Subject" },
          ].map((f) => (
            <div key={f.name} className="grid grid-cols-12 gap-3 items-center">
              <label className="col-span-12 md:col-span-3 font-display text-base tracking-wide">
                {f.label}
              </label>
              <input
                type={f.name === "mail" ? "email" : "text"}
                required
                className="col-span-12 md:col-span-9 border-b hairline bg-transparent py-3 text-base focus:outline-none focus:border-accent"
                placeholder="—"
              />
            </div>
          ))}

          <div className="grid grid-cols-12 gap-3">
            <label className="col-span-12 md:col-span-3 font-display text-base tracking-wide pt-3">
              Message
            </label>
            <textarea
              rows={6}
              required
              className="col-span-12 md:col-span-9 border hairline bg-transparent p-4 text-base focus:outline-none focus:border-accent resize-none"
              placeholder="Write your message…"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-10 py-4 font-display text-lg tracking-[0.2em] hover:bg-foreground transition-colors"
            >
              SEND ▸
            </button>
          </div>
        </form>

        {/* Sidebar table */}
        <aside className="col-span-12 md:col-span-4 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="font-display text-2xl mb-4">Channels</div>
          <div className="border-y hairline divide-y hairline">
            {CHANNELS.map((r) => (
              <div key={r.label} className="grid grid-cols-12 gap-3 py-4">
                <div className="col-span-4 font-display text-base">{r.label}</div>
                <div className="col-span-8 text-sm text-muted-foreground break-all">{r.value}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <ComingSoonModal
        open={open}
        onOpenChange={setOpen}
        title="Message queued"
        message="The contact uplink is being wired. For now, please reach us via the listed mail channel."
        code="MSG / PENDING"
      />
    </PageShell>
  );
};
