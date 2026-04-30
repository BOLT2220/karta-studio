import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import poster from "@/assets/the-last-glitch-poster.jpeg";

interface Props {
  onNavigate: (p: PageId) => void;
}

// Story paragraphs for Episode 1: The 404 Road
const STORY: string[] = [
  "Taking that road was their biggest mistake.",
  "The asphalt stretched endlessly ahead, straight and unnatural, disappearing into the mountains like a snake that had no destination. It didn't curve. It didn't bend. It just… continued.",
  "Sameer glanced at the rearview mirror.",
  "There was nothing behind them.",
  "No turn. No road. No past.",
  "Just mist.",
  "Like the world they came from had been erased.",
  "Inside the SUV, five of them sat in silence — Sameer, Ronak, Sham, Prince, and Arush.",
  "No one spoke.",
  "This wasn't the silence of fatigue.",
  "This was the silence that comes when your brain senses something is wrong… but hasn't yet figured out what.",
  "\"This road… doesn't feel right,\" Arush said quietly.",
  "No one responded.",
  "The GPS screen glowed faintly.",
  "One word:",
  "::404::",
  "No route name.",
  "No highway number.",
  "Just —",
  "::404::",
  "Sameer pressed the brakes.",
  "Nothing happened.",
  "He pressed harder.",
  "The pedal sank completely… but the car didn't slow down.",
  "\"Brakes… aren't working,\" he whispered.",
  "One second.",
  "Two seconds.",
  "Then —",
  "The car began to accelerate on its own.",
  "Dashboard lights started flickering.",
  "Like an old computer glitching.",
  "Like a system about to crash.",
  "\"Bro, do something!\" Ronak shouted.",
  "\"I am trying!\" Sameer gripped the steering wheel tighter.",
  "Then —",
  "A cat appeared.",
  "Right in the middle of the road.",
  "Still. Unmoving. Wrong.",
  "Its eyes…",
  "They weren't natural.",
  "They were red — but not like an animal's.",
  "They looked like pixels.",
  "Like something that hadn't fully loaded.",
  "Sameer reacted instinctively. He swerved.",
  "The tires screamed. The car lost control.",
  "And —",
  "::CRASH!::",
  "The SUV slammed into a dead tree.",
  "The tree was… black. Not dark brown. Not burnt. Just black.",
  "As if it wasn't a tree, but a hole cut into reality.",
  "Airbags deployed.",
  "Silence followed. Heavy. Immediate.",
  "They stumbled out of the car one by one. Shaken. Breathing hard. Alive.",
  "\"We… survived?\" Prince muttered.",
  "No one answered.",
  "But everyone thought the same thing. Maybe.",
  "They were wrong.",
  "\"What the hell was that?!\" Ronak snapped. \"The car is completely destroyed!\"",
  "\"The brakes failed!\" Sameer replied.",
  "\"Then you should've checked it before!\" Sham fired back.",
  "\"I DID!\" Sameer shouted, frustration breaking through.",
  "\"Enough,\" Arush stepped in. \"Fighting won't fix anything. Think.\"",
  "Sameer pulled out his phone. The screen lit up.",
  "::NO SIGNAL::",
  "\"…There's no network,\" he said.",
  "Everyone checked. Same result.",
  "Then — a cold wind passed through them. Dry. Sharp. Unnatural.",
  "::Shhhhhhhh…::",
  "The sound wasn't wind. It felt like… a system noise. Like something running in the background.",
  "\"Staying here is pointless,\" Sameer said. \"We walk.\"",
  "No one argued. They picked up their bags. And started moving forward.",
  "The road didn't change. No turns. No signs. No sound.",
  "They walked. For minutes. Maybe hours. Time felt… broken. Their watches were lagging.",
  "\"Do you feel that?\" Sham said.",
  "\"Feel what?\"",
  "\"Like we're moving… but not getting anywhere.\"",
  "Sameer suddenly stopped. His eyes widened.",
  "\"Look.\"",
  "They ran ahead. And froze.",
  "The SUV. Their SUV. Same wreck. Same smoke. Same place.",
  "\"…How?\" Ronak's voice trembled. \"We walked straight.\"",
  "No answer came.",
  "\"Okay,\" Arush said, forcing calm. \"We split up.\"",
  "\"What?\" Prince looked at him.",
  "\"Different directions. Someone will get out.\"",
  "It was a bad idea. But it was the only idea.",
  "They separated. Five directions. Five paths.",
  "Fifteen minutes later —",
  "Sham returned. Then Prince. Then Arush. Then Sameer.",
  "All back at the car.",
  "Four of them stood there. Breathing. Staring.",
  "\"Wait…\" Sameer said slowly. \"There were five of us.\"",
  "Silence.",
  "They counted. One. Two. Three. Four.",
  "\"Ronak?\"",
  "No answer.",
  "\"RONAK!\"",
  "His voice vanished into the mist.",
  "He wasn't there. Not lost. Not hiding. Not gone.",
  "::Erased.::",
  "The wind returned.",
  "::Shhhhhhhh…::",
  "The road… pulsed. Slow. Rhythmic. Breathing.",
  "And in that moment, they understood —",
  "This wasn't a road. This was a system. A trap. A glitch.",
  "And they weren't traveling on it. They were inside it.",
  "::Loading complete.::",
  "::Program starting_::",
];

const renderParagraph = (text: string, i: number) => {
  // ::text:: → accent emphasis block
  const isAccent = text.startsWith("::") && text.endsWith("::");
  const isLast = i === STORY.length - 1;

  if (isAccent) {
    const inner = text.slice(2, -2);
    // Last line: replace trailing _ with blinking cursor
    if (isLast && inner.endsWith("_")) {
      return (
        <p
          key={i}
          className="font-tech text-accent text-base md:text-lg tracking-[0.35em] uppercase text-center my-8 text-flicker"
        >
          {inner.slice(0, -1)}
          <span className="cursor-blink">_</span>
        </p>
      );
    }
    return (
      <p
        key={i}
        className="font-tech text-accent text-base md:text-lg tracking-[0.35em] uppercase text-center my-8"
      >
        {inner}
      </p>
    );
  }

  return (
    <p key={i} className="text-white/85">
      {text}
    </p>
  );
};

export const Reader = ({ onNavigate }: Props) => {
  return (
    <main key="reader" className="page-enter relative z-10 min-h-screen bg-[#0a0a0a] text-white">
      {/* Top status strip */}
      <div className="border-b-2 border-white/30 bg-[#0a0a0a] sticky top-0 z-20 backdrop-blur">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 font-tech text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em]">
          <span className="text-accent">P.07 / EP.001</span>
          <span className="hidden md:inline opacity-60">// READING_MODE : ACTIVE</span>
          <button
            onClick={() => onNavigate("novel")}
            className="text-accent hover:text-white transition-colors"
          >
            ◀ BACK
          </button>
        </div>
      </div>

      {/* Poster banner */}
      <div className="relative w-full max-w-3xl mx-auto px-4 md:px-0 pt-6">
        <div className="relative border-2 border-white/40 overflow-hidden">
          <div className="scanline-laser z-20" />
          <img
            src={poster}
            alt="The Last Glitch — Episode 1 cover"
            className="w-full h-auto block"
            loading="eager"
          />
          <div className="absolute top-2 left-2 font-tech text-[10px] tracking-[0.3em] text-accent bg-black/70 px-2 py-1 z-10">
            ▲ EP.001 / KEY VISUAL
          </div>
          <div className="absolute bottom-2 right-2 font-tech text-[10px] tracking-[0.3em] text-accent bg-black/70 px-2 py-1 z-10">
            THE LAST GLITCH
          </div>
        </div>
      </div>

      {/* Reader content */}
      <article className="max-w-2xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-4 text-flicker">
          THE LAST GLITCH / EP.001
        </div>

        <h1 className="font-display text-3xl md:text-6xl leading-[0.95] mb-3 text-cascade">
          {"EPISODE 1: THE 404 ROAD".split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>
        <div className="font-tech text-[11px] tracking-[0.35em] opacity-60 mb-10 text-blink-underline inline-block">
          ▸ A KARTA STUDIO ORIGINAL SERIES
        </div>

        <div className="border-t-2 border-white/30 mb-10" />

        {/* Story body */}
        <div
          className="space-y-5 font-tech text-[15px] md:text-base leading-[1.85] tracking-[0.01em]"
          style={{ fontFamily: "'Inter', 'JetBrains Mono', system-ui, sans-serif" }}
        >
          {STORY.map((p, i) => renderParagraph(p, i))}
        </div>

        <div className="border-t-2 border-white/30 mt-16 mb-8" />

        {/* Prev / Next */}
        <div className="grid grid-cols-2 gap-4">
          <button
            disabled
            className="group border-2 border-white/30 px-4 py-5 text-left opacity-40 cursor-not-allowed"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">◀ PREVIOUS</div>
            <div className="font-display text-xl md:text-3xl leading-none">— —</div>
          </button>
          <button
            disabled
            className="group border-2 border-white/30 px-4 py-5 text-right opacity-60 cursor-not-allowed"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">NEXT ▶</div>
            <div className="font-display text-xl md:text-3xl leading-none">SOON</div>
          </button>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate("novel")}
            className="font-tech text-[11px] tracking-[0.4em] text-accent hover:text-white transition-colors"
          >
            ▲ RETURN TO SERIES PAGE ▲
          </button>
        </div>

        {/* Comments / Ratings / Likes — wrapped to inherit dark theme variables locally */}
        <div className="mt-12 text-white" style={{ ["--background" as any]: "0 0% 4%", ["--foreground" as any]: "0 0% 100%" }}>
          <StoryEngagement storyId="the-last-glitch-ep1" />
        </div>
      </article>
    </main>
  );
};
