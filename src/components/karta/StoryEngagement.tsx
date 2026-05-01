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
      supabase.from("comments").select("id, content, created_at, user_id").eq("story_id", storyId).order("created_at", { ascending: false }).limit(100),
      supabase.from("likes").select("id", { count: "exact", head: true }).eq("story_id", storyId),
      user ? supabase.from("likes").select("id").eq("story_id", storyId).eq("user_id", user.id).maybeSingle() : Promise.resolve({ data: null }),
      supabase.from("ratings").select("rating").eq("story_id", storyId),
      user ? supabase.from("ratings").select("rating").eq("story_id", storyId).eq("user_id", user.id).maybeSingle() : Promise.resolve({ data: null }),
    ]);

    let withProfiles: CommentRow[] = (cs ?? []) as CommentRow[];
    const userIds = Array.from(new Set((cs ?? []).map((c) => c.user_id)));
    if (userIds.length > 0) {
      const { data: profs } = await supabase
        .from("profiles")
        .select("id, username, display_name, avatar_url")
        .in("id", userIds);
      const map = new Map((profs ?? []).map((p) => [p.id, p]));
      withProfiles = (cs ?? []).map((c) => ({
        ...c,
        profiles: map.get(c.user_id)
          ? {
              username: map.get(c.user_id)!.username,
              display_name: map.get(c.user_id)!.display_name,
              avatar_url: map.get(c.user_id)!.avatar_url,
            }
          : null,
      }));
    }
    setComments(withProfiles);
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
    <section className="mt-16 border-t hairline pt-10">
      <div className="flex items-end justify-between border-b hairline pb-3 mb-6">
        <h2 className="font-display text-3xl md:text-4xl leading-none tracking-tight">
          Reactions<span className="text-accent">.</span>
        </h2>
        <span className="font-tech text-[11px] tracking-[0.3em] text-accent">CHANNEL OPEN</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={toggleLike}
          className={`border hairline px-4 py-4 flex items-center justify-between font-display text-lg transition-colors ${iLiked ? "bg-accent text-accent-foreground border-accent" : "hover:bg-muted"}`}
        >
          <span>▲ UPVOTE</span>
          <span className="font-tech text-sm tracking-[0.2em]">{likes}</span>
        </button>

        <div className="border hairline px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-tech text-[10px] tracking-[0.3em] text-accent">RATE</span>
            <span className="font-tech text-[10px] tracking-[0.2em] text-muted-foreground">
              {avgRating !== null ? `${avgRating.toFixed(1)}/5 · ${ratingCount}` : "NO DATA"}
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => rate(n)}
                aria-label={`Rate ${n} stars`}
                className={`flex-1 h-9 border hairline font-display text-lg transition-colors ${n <= myRating ? "bg-accent text-accent-foreground border-accent" : "hover:bg-muted"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="border hairline px-4 py-4 flex items-center justify-between">
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
              SIGN IN ▸
            </button>
          )}
        </div>
      </div>

      <form onSubmit={post} className="border hairline mb-6">
        <div className="bg-muted text-foreground px-4 py-2 flex items-center justify-between font-tech text-[10px] tracking-[0.3em] border-b hairline">
          <span>POST COMMENT</span>
          <span className="text-accent">{draft.length}/2000</span>
        </div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value.slice(0, 2000))}
          rows={3}
          placeholder={user ? "Write your message…" : "Sign in to comment"}
          disabled={!user}
          className="w-full px-4 py-3 bg-background text-sm leading-relaxed focus:outline-none placeholder:text-muted-foreground resize-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !draft.trim()}
          className="w-full bg-accent text-accent-foreground font-display text-lg tracking-[0.18em] py-3 hover:bg-foreground transition-colors disabled:opacity-50"
        >
          {user ? (busy ? "..." : "SEND ▸") : "SIGN IN TO COMMENT"}
        </button>
      </form>

      <div className="space-y-3">
        {comments.length === 0 && (
          <div className="border border-dashed hairline px-4 py-8 text-center font-tech text-[11px] tracking-[0.3em] text-muted-foreground">
            NO COMMENTS YET — BE THE FIRST
          </div>
        )}
        {comments.map((c) => {
          const handle = c.profiles?.display_name || c.profiles?.username || "Anon";
          const initials = handle.slice(0, 2).toUpperCase();
          return (
            <article key={c.id} className="border hairline bg-background">
              <header className="bg-muted px-3 py-2 flex items-center justify-between border-b hairline">
                <div className="flex items-center gap-2">
                  {c.profiles?.avatar_url ? (
                    <img src={c.profiles.avatar_url} alt={handle} className="w-6 h-6 object-cover border hairline" />
                  ) : (
                    <span className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center font-tech text-[10px]">
                      {initials}
                    </span>
                  )}
                  <span className="font-display text-sm tracking-wide">{handle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                    {formatDistanceToNow(new Date(c.created_at), { addSuffix: true })}
                  </span>
                  {user?.id === c.user_id && (
                    <button onClick={() => del(c.id)} className="font-tech text-[10px] hover:text-accent" aria-label="Delete">
                      ✕
                    </button>
                  )}
                </div>
              </header>
              <p className="px-4 py-3 text-[14px] leading-[1.7] whitespace-pre-wrap break-words">
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
