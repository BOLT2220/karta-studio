import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { AuthDialog } from "./AuthDialog";
import { toast } from "sonner";
import { z } from "zod";
import { formatDistanceToNow } from "date-fns";

interface Props {
  storyId: string;
}

interface CommentRow {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles?: { username: string | null; display_name: string | null; avatar_url: string | null } | null;
}

const commentSchema = z.string().trim().min(1, "Empty").max(2000, "Too long");

export const StoryEngagement = ({ storyId }: Props) => {
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [comments, setComments] = useState<CommentRow[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [likes, setLikes] = useState(0);
  const [iLiked, setILiked] = useState(false);
  const [myRating, setMyRating] = useState(0);
  const [avgRating, setAvgRating] = useState<number | null>(null);
  const [ratingCount, setRatingCount] = useState(0);

  const requireAuth = () => {
    if (!user) { setAuthOpen(true); return false; }
    return true;
  };

  const load = async () => {
    const [{ data: cs }, { count: lc }, { data: myLike }, { data: ratings }, { data: myR }] = await Promise.all([
      supabase.from("comments").select("id, content, created_at, user_id, profiles(username, display_name, avatar_url)").eq("story_id", storyId).order("created_at", { ascending: false }).limit(100),
      supabase.from("likes").select("id", { count: "exact", head: true }).eq("story_id", storyId),
      user ? supabase.from("likes").select("id").eq("story_id", storyId).eq("user_id", user.id).maybeSingle() : Promise.resolve({ data: null }),
      supabase.from("ratings").select("rating").eq("story_id", storyId),
      user ? supabase.from("ratings").select("rating").eq("story_id", storyId).eq("user_id", user.id).maybeSingle() : Promise.resolve({ data: null }),
    ]);
    setComments((cs ?? []) as CommentRow[]);
    setLikes(lc ?? 0);
    setILiked(!!myLike);
    if (ratings && ratings.length > 0) {
      const avg = ratings.reduce((s, r) => s + r.rating, 0) / ratings.length;
      setAvgRating(avg);
      setRatingCount(ratings.length);
    } else {
      setAvgRating(null);
      setRatingCount(0);
    }
    setMyRating((myR as any)?.rating ?? 0);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [storyId, user?.id]);

  const toggleLike = async () => {
    if (!requireAuth()) return;
    if (iLiked) {
      await supabase.from("likes").delete().eq("story_id", storyId).eq("user_id", user!.id);
      setILiked(false); setLikes((n) => Math.max(0, n - 1));
    } else {
      const { error } = await supabase.from("likes").insert({ story_id: storyId, user_id: user!.id });
      if (error) return toast.error(error.message);
      setILiked(true); setLikes((n) => n + 1);
    }
  };

  const rate = async (n: number) => {
    if (!requireAuth()) return;
    const { error } = await supabase.from("ratings").upsert(
      { story_id: storyId, user_id: user!.id, rating: n },
      { onConflict: "story_id,user_id" },
    );
    if (error) return toast.error(error.message);
    setMyRating(n);
    toast.success(`Rated ${n}/5`);
    load();
  };

  const post = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requireAuth()) return;
    const v = commentSchema.safeParse(draft);
    if (!v.success) return toast.error(v.error.issues[0].message);
    setBusy(true);
    const { error } = await supabase.from("comments").insert({
      story_id: storyId, user_id: user!.id, content: v.data,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    setDraft("");
    load();
  };

  const del = async (id: string) => {
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setComments((cs) => cs.filter((c) => c.id !== id));
  };

  return (
    <section className="mt-16 border-t-[3px] border-foreground pt-10">
      <div className="flex items-end justify-between border-b-2 border-foreground pb-3 mb-6">
        <h2 className="font-display text-3xl md:text-5xl leading-none">
          REACTIONS<span className="text-accent">.</span>
        </h2>
        <span className="font-tech text-[11px] tracking-[0.3em] text-accent">CHANNEL_OPEN</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Like */}
        <button
          onClick={toggleLike}
          className={`border-2 border-foreground px-4 py-4 flex items-center justify-between font-display text-xl transition-colors ${iLiked ? "bg-accent text-background" : "hover:bg-foreground hover:text-background"}`}
        >
          <span>▲ UPVOTE</span>
          <span className="font-tech text-sm tracking-[0.2em]">{likes}</span>
        </button>

        {/* Rating */}
        <div className="border-2 border-foreground px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-tech text-[10px] tracking-[0.3em] text-accent">RATE</span>
            <span className="font-tech text-[10px] tracking-[0.2em]">
              {avgRating !== null ? `${avgRating.toFixed(1)}/5 · ${ratingCount}` : "NO_DATA"}
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => rate(n)}
                aria-label={`Rate ${n} stars`}
                className={`flex-1 h-9 border-2 border-foreground font-display text-lg transition-colors ${n <= myRating ? "bg-accent text-background" : "hover:bg-foreground hover:text-background"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Auth status */}
        <div className="border-2 border-foreground px-4 py-4 flex items-center justify-between">
          <span className="font-tech text-[10px] tracking-[0.3em] text-accent">USER</span>
          {user ? (
            <span className="font-tech text-xs tracking-[0.2em] truncate">
              {user.email?.split("@")[0]} ●
            </span>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="font-display text-base hover:text-accent"
            >
              ▶ LOGIN
            </button>
          )}
        </div>
      </div>

      {/* Comment form */}
      <form onSubmit={post} className="border-[3px] border-foreground mb-6">
        <div className="bg-foreground text-background px-4 py-2 flex items-center justify-between font-tech text-[10px] tracking-[0.3em]">
          <span>POST_COMMENT</span>
          <span className="text-accent">{draft.length}/2000</span>
        </div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value.slice(0, 2000))}
          rows={3}
          placeholder={user ? "▸ TRANSMIT_MESSAGE" : "▸ LOGIN TO COMMENT"}
          disabled={!user}
          className="w-full px-4 py-3 bg-background font-tech text-sm tracking-wide focus:outline-none focus:bg-accent/10 placeholder:text-foreground/30 resize-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !draft.trim()}
          className="w-full bg-accent text-background font-display text-xl py-3 hover:bg-foreground transition-colors disabled:opacity-50"
        >
          {user ? (busy ? "..." : "▶ SEND") : "▶ LOGIN TO COMMENT"}
        </button>
      </form>

      {/* Comment list */}
      <div className="space-y-3">
        {comments.length === 0 && (
          <div className="border-2 border-dashed border-foreground/30 px-4 py-8 text-center font-tech text-[11px] tracking-[0.3em] text-foreground/40">
            ▸ NO TRANSMISSIONS YET — BE THE FIRST
          </div>
        )}
        {comments.map((c) => {
          const handle = c.profiles?.display_name || c.profiles?.username || "ANON";
          const initials = handle.slice(0, 2).toUpperCase();
          return (
            <article key={c.id} className="border-2 border-foreground bg-background">
              <header className="bg-foreground text-background px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {c.profiles?.avatar_url ? (
                    <img src={c.profiles.avatar_url} alt={handle} className="w-6 h-6 object-cover border border-accent" />
                  ) : (
                    <span className="w-6 h-6 bg-accent text-background flex items-center justify-center font-tech text-[10px] tracking-wider">
                      {initials}
                    </span>
                  )}
                  <span className="font-display text-sm tracking-wide">{handle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-tech text-[10px] tracking-[0.2em] text-accent">
                    {formatDistanceToNow(new Date(c.created_at), { addSuffix: true })}
                  </span>
                  {user?.id === c.user_id && (
                    <button onClick={() => del(c.id)} className="font-tech text-[10px] hover:text-accent" aria-label="Delete">
                      ✕
                    </button>
                  )}
                </div>
              </header>
              <p className="px-4 py-3 font-tech text-[13px] leading-[1.7] whitespace-pre-wrap break-words">
                {c.content}
              </p>
            </article>
          );
        })}
      </div>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </section>
  );
};
