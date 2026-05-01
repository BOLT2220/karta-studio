import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import poster from "@/assets/the-last-glitch-poster.jpeg";

interface Props {
  onNavigate: (p: PageId) => void;
}

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
  "::Program starting.::",
];

const renderParagraph = (text: string, i: number) => {
  const isAccent = text.startsWith("::") && text.endsWith("::");
  if (isAccent) {
    return (
      <p
        key={i}
        className="font-display text-accent text-xl md:text-2xl tracking-[0.25em] uppercase text-center my-10"
      >
        {text.slice(2, -2)}
      </p>
    );
  }
  return (
    <p key={i} className="text-foreground/85">
      {text}
    </p>
  );
};

export const Reader = ({ onNavigate }: Props) => {
  return (
    <main key="reader" className="page-enter relative z-10 min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b hairline sticky top-0 z-20 bg-background/85 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[11px] tracking-[0.3em]">
          <span className="text-accent">EP.001 · THE 404 ROAD</span>
          <button
            onClick={() => onNavigate("novel")}
            className="text-foreground hover:text-accent transition-colors"
          >
            ◀ BACK
          </button>
        </div>
      </div>

      {/* Poster banner */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
        <div className="card-clean overflow-hidden bg-muted">
          <img
            src={poster}
            alt="The Last Glitch — Episode 1 cover"
            className="w-full h-auto block object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Reader content */}
      <article className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-3">
          A KARTA STUDIO ORIGINAL SERIES
        </div>

        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-3 tracking-tight">
          EPISODE 1: THE 404 ROAD
        </h1>
        <div className="font-tech text-[11px] tracking-[0.3em] text-muted-foreground mb-8">
          THE LAST GLITCH
        </div>

        <div className="border-t hairline mb-10" />

        <div
          className="space-y-5 text-[16px] md:text-[17px] leading-[1.85]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif" }}
        >
          {STORY.map((p, i) => renderParagraph(p, i))}
        </div>

        <div className="border-t hairline mt-16 mb-8" />

        <div className="grid grid-cols-2 gap-4">
          <button
            disabled
            className="border hairline px-4 py-5 text-left opacity-40 cursor-not-allowed"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">◀ PREVIOUS</div>
            <div className="font-display text-xl md:text-2xl leading-none">— —</div>
          </button>
          <button
            disabled
            className="border hairline px-4 py-5 text-right opacity-60 cursor-not-allowed"
          >
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">NEXT ▶</div>
            <div className="font-display text-xl md:text-2xl leading-none">SOON</div>
          </button>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate("novel")}
            className="font-tech text-[11px] tracking-[0.4em] text-accent hover:underline"
          >
            RETURN TO SERIES
          </button>
        </div>

        <div className="mt-12">
          <StoryEngagement storyId="the-last-glitch-ep1" />
        </div>
      </article>
    </main>
  );
};
