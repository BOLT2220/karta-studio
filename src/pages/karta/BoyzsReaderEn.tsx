import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import poster from "@/assets/the-boyzs-poster.png";

interface Props {
  onNavigate: (p: PageId) => void;
}

interface Block {
  type: "h" | "p" | "accent" | "dialog";
  text: string;
}

const STORY: Block[] = [
  { type: "h", text: "THE CONFUSION" },
  { type: "p", text: "TWO IDIOTS, ONE VERY BAD DAY" },
  { type: "p", text: "The world was ending. Sagar and Harsh had absolutely zero clue." },
  { type: "p", text: "They were just heading to summer extra class — two guys, two cycles, zero survival instincts. The kind of ordinary Tuesday that shouldn't exist in a story. But the road? Dead silent. Not \"early morning\" quiet. Not \"holiday\" quiet. More like someone had grabbed the city by the throat and squeezed all the noise out of it." },
  { type: "dialog", text: "\"Yo Sagar!\" Harsh yelled, already cranking his cycle faster. \"Look how empty this road is — let's race, full speed! Let's see whose aura hits harder!\"" },
  { type: "dialog", text: "Sagar shot him a look. \"Bro, are you actually insane? What if a car comes? Slow down. And... why IS the road this empty?\"" },
  { type: "p", text: "Harsh wasn't built to listen. They hit a blind turn and both bikes screamed — SCREEEECH! — tyres shrieking like they'd seen a ghost. They had. Sort of." },
  { type: "p", text: "In front of them: one overturned truck, leaking something thick and chemical-green onto the asphalt. And standing in that liquid, unbothered — twenty figures. Rotting skin. Torn eyes. Hungry stares locked directly onto them like heat-seeking missiles." },
  { type: "p", text: "Zombies. Real ones. Their expressions? Exactly like their Maths teacher's face when he's grading papers at 2 AM." },

  { type: "h", text: "\"CHHOTU\" — THE ANKLE MENACE" },
  { type: "p", text: "Nobody moved. The zombies stared at them. They stared back. The wind blew. It was cinematic in the worst possible way." },
  { type: "dialog", text: "\"...I figured it out,\" Sagar whispered, barely breathing. \"This is why the road was empty.\"" },
  { type: "dialog", text: "Harsh raised one hand in a casual wave. \"Hey guys! Sorry to interrupt the whole... gathering. You do your thing — we'll just head out, yeah?\"" },
  { type: "p", text: "The moment they turned their cycles around, the zombies sprinted. Not shuffled. Not stumbled. Sprinted — like the last school bell of the year just rang." },
  { type: "accent", text: "BRAAAAAINS!" },
  { type: "p", text: "And then — out of nowhere — one tiny zombie kid. Barely three feet tall. Moving at 100 kmph. He locked onto Harsh's ankle like a guided missile and grabbed." },
  { type: "dialog", text: "\"BRO! LITTLE MAN! WHAT ARE YOU DOING?! LET GO — WHAT IS THIS?!\" Harsh screamed." },
  { type: "dialog", text: "\"STOP PLAYING AROUND AND RUN!\" Sagar bellowed from behind. \"RIGHT NOW! GO!\"" },
  { type: "p", text: "Harsh's brain kicked in — rare event, mark your calendars. He yanked his leg toward the bike's chain. ZRRRAT! Little dude's hand got caught in the chain and he snapped backwards onto the ground. Clean." },
  { type: "p", text: "Both of them floored it. Their tyres obliterated everything in the path as they blazed forward." },
  { type: "dialog", text: "\"Bro, what even happened back there?!\" Harsh panted. \"How did everyone just... turn into zombies?!\"" },
  { type: "dialog", text: "\"First we get out alive,\" Sagar shot back. \"Philosophy later!\"" },

  { type: "h", text: "THE LEGEND OF THE FLYING PANTS" },
  { type: "p", text: "The school gate was right there. Right. There. Zombies still a little behind them. Safe zone basically in arm's reach. This was almost a win." },
  { type: "p", text: "Then fate hit them with a Double Cross." },
  { type: "dialog", text: "\"BRO MY TYRE JUST BLEW OUT!\" Harsh screamed." },
  { type: "dialog", text: "\"Leave the bike! SPRINT — the gate's right there!\" Sagar drifted hard and blew through the entrance." },
  { type: "p", text: "The guard had the gate cracked open. Sagar was in. But Harsh was still behind. No hesitation — he hurled his punctured cycle straight into the nearest zombie's face. CLANK! Then he ran. Legs pumping. Gate getting closer. Almost there—" },
  { type: "p", text: "A hand grabbed his leg. One zombie, fingers locked around his ankle. Sagar pulling him from inside. The guard yanking too. The zombie hauling from outside. A full three-way tug-of-war. The prize: one Harsh." },
  { type: "p", text: "Then came the sound." },
  { type: "accent", text: "ZRRRRRIP." },
  { type: "p", text: "The zombie let go. In its hand: one pair of pants. Just the pants. Nothing else." },
  { type: "p", text: "Harsh crashed through the gate in nothing but his underwear. The guard slammed it shut — KHATAK! — zombies on one side, full school on the other, and Harsh sitting on the ground looking like he'd lost a fight with a washing machine." },
  { type: "dialog", text: "\"MOVE! Get to class — don't just stand there!\" the guard barked." },
  { type: "dialog", text: "\"Bro... my pants are gone,\" Harsh said quietly, the grief real and heavy. \"Everyone's gonna see.\"" },
  { type: "dialog", text: "Sagar grabbed his arm. \"It's a boys' school. Everyone's a bro here. NOW MOVE.\"" },

  { type: "h", text: "THIRD FLOOR. NO LIFT. STILL IN UNDERWEAR." },
  { type: "p", text: "Three floors. No elevator. Full sprint. By the time they hit the classroom door — it was locked from the inside." },
  { type: "dialog", text: "Harsh slammed his fist on it. \"OPEN UP! There are ZOMBIES outside and you lot are in there playing hard to get?!\"" },
  { type: "p", text: "The door swung open. Ishu let them in. The whole crew was there — Sameer, Ronak, Sham, Rohit, Karan, Prince, Arush — every single one of them, staring. Sagar dropped into the seat next to Ronak." },
  { type: "p", text: "Ishu looked at Harsh. Then looked down. Then looked back up." },
  { type: "dialog", text: "\"...Harsh. Where are your pants? Did you forget them like you forget your water bottle?!\"" },
  { type: "p", text: "Harsh sat down on the bench — no shame, no apology, full composure." },
  { type: "dialog", text: "\"Don't ask, bro. A zombie out there had good taste in brands.\"" },
  { type: "p", text: "Ishu pinched the bridge of his nose and turned to face the room." },
  { type: "dialog", text: "\"Listen up. All of you.\" His voice dropped serious. \"The people outside — they're infected. If they bite you, you become one of them. Nobody leaves this classroom. We stay here. That's the plan.\"" },
  { type: "dialog", text: "\"Bro that's wild!\" Rohit grinned, clapping. \"We literally know how this works — we've watched every zombie movie ever made!\"" },
  { type: "dialog", text: "\"And here's the part you don't know,\" Ishu continued. \"That overturned truck in front of the school? It was carrying chemicals. When it flipped, everything leaked. That's what caused this. The virus is spreading fast — nearly 90% of the city is already infected.\"" },
  { type: "dialog", text: "\"...Ishu bhai,\" Rohit said slowly. \"It's 3:30. Shouldn't we eat lunch?\"" },
  { type: "dialog", text: "\"Bro it's 3:35 lunch time,\" Harsh said, completely serious. \"Five minutes left.\"" },
  { type: "dialog", text: "\"ARE YOU BOTH BRAIN-DEAD?!\" Ishu exploded. \"The moment the food runs out, who's going outside to get more?! Ration everything — nobody wastes a single bite. That's an order!\"" },
  { type: "p", text: "Rohit pulled out his phone. Calm. Collected. Dripping swagger." },
  { type: "dialog", text: "\"Relax, Ishu bhai. I'll just order online. Five minutes, delivery's here.\"" },
  { type: "p", text: "The entire class erupted. Clapping. Cheering. Two guys actually stood up. Rohit soaked it all in like he'd just won the Champions League." },

  { type: "h", text: "THE CHIPKALI INCIDENT & THE GREAT BAG WAR OF CLASS 9" },
  { type: "p", text: "The celebration didn't last. The school speaker crackled to life:" },
  { type: "accent", text: "STUDENTS. THE ZOMBIES ARE CLOSE TO BREAKING THROUGH THE GATE. STAY SAFE. YOU'RE ON YOUR OWN NOW." },
  { type: "p", text: "The room went cold. Every face dropped. Nobody spoke. Then — a lizard slipped off the wall and landed directly on Sham's neck." },
  { type: "dialog", text: "\"A ZOMBIE BIT ME! I'M TURNING! I'M TURNING INTO ONE OF THEM — AAAAAAAAHHH!\"" },
  { type: "accent", text: "CHAPAAAK!" },
  { type: "p", text: "Rohit slapped him without even thinking. Harsh, trying not to laugh, lobbed his bag toward Sham — and missed. Hit Karan clean in the face instead. Karan launched his water bottle in retaliation — it cracked Ronak across the shoulder. Ronak and Sagar grabbed Arush's bag and hurled it at Karan — but Sameer stepped into the crossfire and ate the full hit." },
  { type: "p", text: "Sameer's eyes went dark. He grabbed Prince. Combo. Combo. Combo." },
  { type: "dialog", text: "\"STOP! Everyone STOP!\" Ishu was screaming now, arms out, voice breaking. \"GUYS — PLEASE!\"" },
  { type: "p", text: "But the room was already gone. Bags flying. Bottles spinning. Friendships dissolving in real time." },
  { type: "p", text: "Then the speaker cut through everything — one final, ice-cold announcement:" },
  { type: "accent", text: "THE GATE IS DOWN. ZOMBIES ARE INSIDE THE BUILDING." },
  { type: "p", text: "Every hand froze. Bags hung in mid-air. The chaos stopped like someone had hit pause on the universe." },
  { type: "p", text: "From beyond the door — the sound of dragging feet. Slow. Heavy. Getting closer." },
  { type: "p", text: "No weapons. No plan. One guy in his underwear. One online order still processing. One lizard that started all of this. And the zombies were already inside." },
];

const renderBlock = (b: Block, i: number) => {
  if (b.type === "accent") {
    return (
      <p key={i} className="font-display text-accent text-xl md:text-2xl tracking-[0.25em] uppercase text-center my-10">
        ::{b.text}::
      </p>
    );
  }
  if (b.type === "h") {
    return (
      <h2 key={i} className="font-display text-2xl md:text-3xl tracking-tight mt-12 mb-4 text-accent uppercase">
        {b.text}
      </h2>
    );
  }
  if (b.type === "dialog") {
    return (
      <p key={i} className="text-foreground/90 italic border-l-2 border-accent/60 pl-4">
        {b.text}
      </p>
    );
  }
  return <p key={i} className="text-foreground/85">{b.text}</p>;
};

export const BoyzsReaderEn = ({ onNavigate }: Props) => {
  return (
    <main key="boyzs-reader-en" className="page-enter relative z-10 min-h-screen bg-background text-foreground">
      <div className="border-b hairline sticky top-0 z-20 bg-background/85 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[11px] tracking-[0.3em]">
          <span className="text-accent">EP.001 · THE CONFUSION · ENGLISH</span>
          <button onClick={() => onNavigate("boyzs")} className="text-foreground hover:text-accent transition-colors">
            ◀ BACK
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
        <div className="card-clean overflow-hidden bg-muted">
          <img src={poster} alt="The Boyzs — Episode 1 cover" className="w-full h-auto block object-cover object-top" loading="eager" />
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-3">A KARTA STUDIO ORIGINAL SERIES</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-3 tracking-tight">
          EPISODE 1: THE JOURNEY BEGINS (WITH NO PANTS)
        </h1>
        <div className="font-tech text-[11px] tracking-[0.3em] text-muted-foreground mb-8">THE BOYZ</div>
        <div className="border-t hairline mb-10" />
        <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.85]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          {STORY.map(renderBlock)}
          <p className="font-tech text-center text-accent mt-12 tracking-[0.3em]">— END OF EPISODE 1 —</p>
          <p className="text-center text-muted-foreground text-sm">
            Next time on THE BOYZ: Episode 2 — <span className="text-accent">Boyz On Action</span>
            <br />
            "Someone's gonna fight. Someone's gonna cry. And Harsh might just get his pants back."
          </p>
        </div>

        <div className="border-t hairline mt-16 mb-8" />
        <div className="text-center">
          <button onClick={() => onNavigate("boyzs")} className="font-tech text-[11px] tracking-[0.4em] text-accent hover:underline">
            RETURN TO SERIES
          </button>
        </div>
        <div className="mt-12">
          <StoryEngagement storyId="the-boyzs-ep1-en" />
        </div>
      </article>
    </main>
  );
};
