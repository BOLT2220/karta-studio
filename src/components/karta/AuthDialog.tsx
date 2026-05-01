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

const isEmbeddedPreview = () => {
  if (typeof window === "undefined") return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
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
      toast.error(err.message ?? "Authentication failed");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setBusy(true);
    const redirectTo = getAuthRedirectUrl();
    try {
      // Always use Lovable-managed Google OAuth (no client secret setup required).
      const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: redirectTo });
      if (result.error) throw result.error;
      if (result.redirected) return;
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message ?? "Google sign-in failed");
      setBusy(false);
      return;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent ref={ref} className="bg-background border-[3px] border-foreground p-0 max-w-md">
        <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-2 border-accent">
          <DialogTitle className="font-display text-2xl tracking-wide">
            {mode === "login" ? "ACCESS // LOGIN" : "REGISTER // INIT"}
          </DialogTitle>
          <span className="font-tech text-[10px] tracking-[0.3em] text-accent">SECURE ●</span>
        </div>
        <DialogDescription className="sr-only">
          Authentication form
        </DialogDescription>

        <form onSubmit={submit} className="p-5 space-y-3">
          {mode === "signup" && (
            <div className="border-2 border-foreground">
              <div className="bg-foreground text-background px-3 py-2 font-tech text-[10px] tracking-[0.3em] flex justify-between">
                <span>USERNAME</span><span className="text-accent">F.00</span>
              </div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-3 bg-background font-tech text-sm focus:outline-none focus:bg-accent focus:text-background"
                placeholder="▸ handle"
                maxLength={30}
              />
            </div>
          )}
          <div className="border-2 border-foreground">
            <div className="bg-foreground text-background px-3 py-2 font-tech text-[10px] tracking-[0.3em] flex justify-between">
              <span>EMAIL</span><span className="text-accent">F.01</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 bg-background font-tech text-sm focus:outline-none focus:bg-accent focus:text-background"
              placeholder="▸ user@domain.net"
              maxLength={255}
              autoComplete="email"
            />
          </div>
          <div className="border-2 border-foreground">
            <div className="bg-foreground text-background px-3 py-2 font-tech text-[10px] tracking-[0.3em] flex justify-between">
              <span>PASSWORD</span><span className="text-accent">F.02</span>
            </div>
            <div className="relative flex items-center bg-background focus-within:bg-accent group/pw">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 pr-12 bg-transparent font-tech text-sm focus:outline-none focus:text-background"
                placeholder="▸ ••••••"
                maxLength={72}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 border-l-2 border-accent/40 p-2 text-foreground group-focus-within/pw:text-background hover:text-accent group-focus-within/pw:hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full bg-accent text-background font-display text-2xl py-4 hover:bg-foreground transition-colors disabled:opacity-50"
          >
            {busy ? "..." : mode === "login" ? "▶ INITIATE" : "▶ REGISTER"}
          </button>

          <div className="flex items-center gap-2 py-1">
            <div className="flex-1 h-px bg-foreground/20" />
            <span className="font-tech text-[10px] tracking-[0.3em] text-foreground/50">OR</span>
            <div className="flex-1 h-px bg-foreground/20" />
          </div>

          <button
            type="button"
            onClick={google}
            disabled={busy}
            className="w-full border-2 border-foreground py-3 font-display text-lg hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
          >
            ▲ CONTINUE WITH GOOGLE
          </button>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="w-full text-center font-tech text-[11px] tracking-[0.3em] text-accent hover:underline pt-2"
          >
            {mode === "login" ? "▸ NEW HERE? CREATE ACCOUNT" : "▸ ALREADY REGISTERED? LOGIN"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
});

AuthDialog.displayName = "AuthDialog";
