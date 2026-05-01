import { forwardRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const emailSchema = z.string().trim().email("Invalid email").max(255);
const passwordSchema = z.string().min(6, "Min 6 characters").max(72);
const usernameSchema = z.string().trim().min(2, "Min 2 chars").max(30, "Max 30 chars");

const getAuthRedirectUrl = () => {
  if (typeof window === "undefined") return "/";
  return `${window.location.origin}/`;
};

export const AuthDialog = forwardRef<HTMLDivElement, Props>(({ open, onOpenChange }, ref) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;

    const emailV = emailSchema.safeParse(email);
    if (!emailV.success) return toast.error(emailV.error.issues[0].message);
    const pwV = passwordSchema.safeParse(password);
    if (!pwV.success) return toast.error(pwV.error.issues[0].message);

    setBusy(true);
    try {
      if (mode === "signup") {
        const userV = usernameSchema.safeParse(username);
        if (!userV.success) { setBusy(false); return toast.error(userV.error.issues[0].message); }
        const { error } = await supabase.auth.signUp({
          email: emailV.data,
          password: pwV.data,
          options: {
            emailRedirectTo: getAuthRedirectUrl(),
            data: { username: userV.data, display_name: userV.data },
          },
        });
        if (error) throw error;
        toast.success("Account created. Check your email to verify.");
        onOpenChange(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: emailV.data,
          password: pwV.data,
        });
        if (error) throw error;
        toast.success("Signed in.");
        onOpenChange(false);
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Authentication failed");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setBusy(true);
    const redirectTo = getAuthRedirectUrl();
    try {
      const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: redirectTo });
      if (result.error) throw result.error;
      if (result.redirected) return;
      onOpenChange(false);
    } catch (err: any) {
      const msg = (err?.message || "").toLowerCase();
      if (msg.includes("oauth secret") || msg.includes("unsupported provider") || msg.includes("validation_failed")) {
        toast.error("Admin Alert: Google sign-in is not yet configured.", {
          description: "Please use email & password for now, or contact the studio admin.",
        });
      } else {
        toast.error(err?.message ?? "Google sign-in failed");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent ref={ref} className="bg-background border hairline shadow-2xl p-0 max-w-md overflow-hidden rounded-none">
        <div className="bg-accent text-accent-foreground px-5 py-3 flex items-center justify-between">
          <DialogTitle className="font-display text-xl tracking-wide">
            {mode === "login" ? "Sign in" : "Create account"}
          </DialogTitle>
          <span className="font-tech text-[10px] tracking-[0.3em] opacity-90">SECURE</span>
        </div>
        <DialogDescription className="sr-only">Authentication</DialogDescription>

        <form onSubmit={submit} className="p-6 space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block font-display text-xs tracking-[0.25em] mb-1.5">USERNAME</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border hairline px-3 py-3 bg-background text-sm focus:outline-none focus:border-accent"
                placeholder="your handle"
                maxLength={30}
              />
            </div>
          )}
          <div>
            <label className="block font-display text-xs tracking-[0.25em] mb-1.5">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border hairline px-3 py-3 bg-background text-sm focus:outline-none focus:border-accent"
              placeholder="user@domain.com"
              maxLength={255}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block font-display text-xs tracking-[0.25em] mb-1.5">PASSWORD</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border hairline pl-3 pr-11 py-3 bg-background text-sm focus:outline-none focus:border-accent"
                placeholder="••••••"
                maxLength={72}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-accent focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full bg-accent text-accent-foreground font-display text-lg tracking-[0.18em] py-3.5 hover:bg-foreground transition-colors disabled:opacity-50"
          >
            {busy ? "..." : mode === "login" ? "SIGN IN ▸" : "CREATE ACCOUNT ▸"}
          </button>

          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px hairline border-t" />
            <span className="font-tech text-[10px] tracking-[0.3em] text-muted-foreground">OR</span>
            <div className="flex-1 h-px hairline border-t" />
          </div>

          <button
            type="button"
            onClick={google}
            disabled={busy}
            className="w-full border border-foreground py-3 font-display text-base tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
          >
            CONTINUE WITH GOOGLE
          </button>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="w-full text-center font-tech text-[11px] tracking-[0.3em] text-accent hover:underline pt-1"
          >
            {mode === "login" ? "NEW HERE? CREATE ACCOUNT" : "ALREADY REGISTERED? SIGN IN"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
});

AuthDialog.displayName = "AuthDialog";
