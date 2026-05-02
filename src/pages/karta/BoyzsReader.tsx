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
  { type: "h", text: "TWO IDIOTS, ONE VERY BAD DAY" },
  { type: "p", text: "Duniya khatam hone wali thi — lekin Sagar aur Harsh ko iska bilkul andaza nahi tha. Woh toh apni summer extra class ke liye ja rahe the, jaise koi normal insaan. Lekin road par aisa sannata tha jaise puri city ne collectively decide kar liya ho ki aaj ghar se bahar nahi niklenge." },
  { type: "dialog", text: "\"Oye Sagar! Dekh road kitni khali hai — full speed race lagate hain! Dekhte hain kiska aura zyada hai!\" Harsh ne apni cycle ki speed badhate hue chillaya." },
  { type: "dialog", text: "\"Abe pagal hai kya?! Koi car aa gayi toh? Dhire chal... aur yaar, poori road khali kyun hai?\" Sagar ne thoda ghabrate hue jawab diya." },
  { type: "p", text: "Harsh kahan sunne wala tha. Dono ne ek andhe mod par apni cycles aise drift maari ki SCREEEECH! — tyres se cheekh nikal gayi. Par saamne jo tha, usne unke brakes toh kya, puri aatma jam kar di." },
  { type: "p", text: "Ek ulta pada hua truck. Usme se kuch liquid chemicals beh rahe the zameen par. Aur us liquid ke paas khade the... 20 zombies. Sadi hui skin, fati aankhein, aur bhookha expression bilkul waisa jaise unka Maths teacher papers check karte waqt karta hai." },

  { type: "h", text: "\"CHHOTU\" — THE ANKLE MENACE" },
  { type: "p", text: "Zombies aur yeh dono ek doosre ko ghoor rahe the. Poora scene ekdum filmy — background mein sirf hawa ki awaaz." },
  { type: "dialog", text: "\"Pata chal gaya Harsh...\" Sagar ne dheere se phusphusaya. \"Aaj road khali kyun hai.\"" },
  { type: "dialog", text: "\"Hello bhaiyyon!\" Harsh ne haath hilate hue kaha. \"Sorry disturb karne ke liye, aap log apni party karo — hum nikalte hain!\"" },
  { type: "p", text: "Jaise hi unhone cycles ghumayi, zombies ne aisi daud lagayi jaise school ki last period chhutti ki ghanti baji ho." },
  { type: "accent", text: "BRAAAAAINS!" },
  { type: "p", text: "Tabhi — ek chota zombie baccha, barely teen feet ka, 100 ki speed se aaya aur seedha Harsh ka pair pakad liya." },
  { type: "dialog", text: "\"BHAI! CHHOTU! KYA KAR RAHA HAI TU?! CHHAAD DE MUJHE — YE KAUNSA GAME HAI?!\" Harsh chillaya." },
  { type: "dialog", text: "\"BHAI MAZAAK CHHOD, BHAAG! ABHI! TURANT!\" Sagar ne peeche se warn kiya." },
  { type: "p", text: "Harsh ne dimag lagaya — jo ki ek rare occurrence tha. Usne apna pair cycle ki chain ke paas le gaya. ZRRRAT! — Chhotu ka hath chain mein fas gaya aur woh peeche jhatkese gir gaya." },
  { type: "p", text: "Dono full speed mein cycle bhagaane lage. Cycle ke tyres raste mein kuch bhi tod-phodkar aage badh rahe the." },
  { type: "dialog", text: "\"Yaar yahan hua kya hai? Sab zombie kaise bane?!\" Harsh ne haanfate hue poocha." },
  { type: "dialog", text: "\"Pehle yahan se bhaag! Baad mein philosophy karte hain!\" Sagar ne chillaya." },

  { type: "h", text: "THE LEGEND OF THE FLYING PANTS" },
  { type: "p", text: "Main road par pahunchte hi saamne tha — school ka gate. Peeche zombies thodi door the. Safe zone almost aa gaya tha." },
  { type: "p", text: "Tabhi kismat ne \"Double Cross\" mode activate kiya." },
  { type: "dialog", text: "\"BHAI MERI CYCLE PUNCTURE HO GAYI!\" Harsh ne cheekh kar kaha." },
  { type: "dialog", text: "\"Chhaad cycle ko! Full speed bhaag — gate aa gaya hai!\" Sagar ne drift maari aur school ke andar ghus gaya." },
  { type: "p", text: "Guard ne gate khola tha. Lekin Harsh peeche reh gaya. Usne apni punctured cycle seedha zombie ke mooh par phenki — CLANK! — aur paidal daud lagayi. Bilkul gate par pahunchte hi ek zombie ne Harsh ki taang pakad li. Sagar ek taraf se kheench raha tha, guard doosri taraf se, zombie bahar se. Yeh scene bilkul ek tug-of-war jaisa tha — aur prize? Harsh khud." },
  { type: "p", text: "Phir aai woh awaaz:" },
  { type: "accent", text: "ZRRRRRIP!" },
  { type: "p", text: "Zombie ke hath mein reh gaya sirf — ek pair of pants." },
  { type: "p", text: "Harsh, underwear mein, school ke andar gira. Guard ne KHATAK! se gate band kar diya. Peeche zombies. Aage full school. Aur Harsh ke paas koi pant nahi." },
  { type: "dialog", text: "\"JALDI! Class mein jao! Yahan mat ruko!\" Guard ne chillakar kaha." },
  { type: "dialog", text: "\"Meri pant chali gayi yaar... sab dekh rahe hain!\" Harsh ne dukh mein kaha." },
  { type: "dialog", text: "\"Boys school hai — sab apne hi bhai hain. AB CHAL!\" Sagar ne haath pakda." },

  { type: "h", text: "THIRD FLOOR, NO LIFT, STILL IN UNDERWEAR" },
  { type: "p", text: "Teen maazile chadhne ke baad, haanfate hue dono class ke darwaaze par pahunche — jo andar se lock tha." },
  { type: "dialog", text: "Harsh ne darawaza peeta. \"KHOLO YAAR! BAHAR ZOMBIES AA GAYE HAIN AUR ANDAR TUM NAKHRE DIKHA RAHE HO!\"" },
  { type: "p", text: "Gate khula. Ishu ne andar liya. Poori gang thi — Sameer, Ronak, Sham, Rohit, Karan, Prince, Arush — sab log present. Sagar jaakar Ronak ke paas baith gaya." },
  { type: "dialog", text: "\"Harsh...\" Ishu ne sar pakad liya. \"Teri pant kahan hai? Pani ki bottle ki tarah pant bhi bhool gaya kya?!\"" },
  { type: "dialog", text: "\"Bhai mat pooch,\" Harsh ne underwear mein hi bench par baithte hue, full dignity ke saath jawab diya. \"Ek zombie ko meri pant ka brand pasand aa gaya tha.\"" },
  { type: "dialog", text: "Ishu ne serious mode on kiya. \"Suno sab. Bahar jo hain, woh beemaar hain. Agar unhone kaat liya toh tum bhi unke jaisa ban jaoge. Hum sab isi class mein rahenge.\"" },
  { type: "dialog", text: "\"Wah wah!\" Rohit ne taaliyan bajayi. \"Zombies toh hum pehle se jaante hain — movies dekhi hain humne!\"" },
  { type: "dialog", text: "\"Aur suno,\" Ishu ne aage kaha, \"woh truck jo school ke aage ulta pada hai — usme chemical tha. Woh palat gaya. Us chemical se hi yeh sab zombie bane hain. Yeh virus bahut tezi se fail raha hai. Almost 90% city already infected ho chuki hai.\"" },
  { type: "dialog", text: "\"Ishu bhai...\" Rohit ne thodi der baad kaha. \"3:30 ho gaye. Lunch kar lete hain?\"" },
  { type: "dialog", text: "\"Bhai, 3:35 pe hota hai lunch,\" Harsh ne seriously correct kiya. \"Abhi 5 minute hain.\"" },
  { type: "dialog", text: "\"DIMAAG THIK HAI TERA?!\" Ishu ka gussa phoot pada. \"Khana khatam hua toh bahar kaun jayega?! Jo bhi khana hai — sab bachao! Koi kuch bhi waste nahi karega!\"" },
  { type: "dialog", text: "Rohit ne phone nikala, swagger ke saath bola, \"Fikar kyun karte ho Ishu bhai? Online order kar leta hoon — 5 minute mein delivery aa jayegi!\"" },
  { type: "p", text: "Poori class ne Rohit ke liye taaliyan bajayi jaise usne koi Nobel Prize jeeta ho. Kuch bacche toh khadey ho gaye." },

  { type: "h", text: "THE CHIPKALI INCIDENT & THE GREAT BAG WAR OF CLASS 9" },
  { type: "p", text: "Khushi zyada der nahi tiki. Speaker se announcement aayi:" },
  { type: "accent", text: "BACHO, AB ZOMBIES KABHI BHI GATE TOD SAKTE HAIN. APNA KHAYAL KHUD RAKHO." },
  { type: "p", text: "Class mein sannata chha gaya. Poora kamra shaant. Sab ke chehere par darr tha. Tab — deewar se ek chipkali fisli aur seedha Sham ki gardan par ja giri." },
  { type: "dialog", text: "\"ZOMBIE NE MUJHE KAAT LIYA! MAIN ZOMBIE BANNA WALA HOON! AAAAAAAAH!\" Sham ne poori building sunaa di." },
  { type: "p", text: "Rohit ne bina soche ek CHAPAAAK! Sham ko maara. Harsh ne majak mein apna bag Sham ki taraf phenka — jo directly Karan ko laga. Karan ne gusse mein bottle phenki — woh Ronak ko lagi. Ronak aur Sagar ne milkar Arush ka bag uthaya aur Karan par phenka — lekin beech mein Sameer aa gaya. Sameer ko laga Prince ne maara. Sameer ne Prince ko pakda aur COMBO PE COMBO dena shuru kar diya." },
  { type: "dialog", text: "\"Ruk jao! Stop it guys! BHAI LOG PLEASE!\" Ishu chillata raha — par class mein bags ud rahe the, bottles ghoom rahi thi, aur dosti ka janaza nikal raha tha." },
  { type: "p", text: "Tabhi speaker se aakhiri, khaufnaak awaaz aayi:" },
  { type: "accent", text: "GATE TUT GAYA. ZOMBIES ANDAR AA GAYE HAIN!" },
  { type: "p", text: "Sabke haath wahi jam gaye. Bags beech hawaai mein ruk gaye. Darwaaze ke bahar se kuch ghisne ki awaaz aayi... aur phir dheere dheere, zombie ke kadam." },
  { type: "p", text: "Koi plan nahi tha. Koi hathiyaar nahi tha. Ek ladka underwear mein tha. Ek online order on the way tha. Ek chipkali thi jisne yeh sab shuru kiya tha." },
  { type: "p", text: "Aur zombies... andar aa rahe the." },
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

export const BoyzsReader = ({ onNavigate }: Props) => {
  return (
    <main key="boyzs-reader" className="page-enter relative z-10 min-h-screen bg-background text-foreground">
      <div className="border-b hairline sticky top-0 z-20 bg-background/85 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[11px] tracking-[0.3em]">
          <span className="text-accent">EP.001 · THE CONFUSION</span>
          <button onClick={() => onNavigate("home")} className="text-foreground hover:text-accent transition-colors">
            ◀ BACK
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
        <div className="card-clean overflow-hidden bg-muted">
          <img
            src={poster}
            alt="The Boyzs — Episode 1 cover"
            className="w-full h-auto block object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-3">
          A KARTA STUDIO ORIGINAL SERIES
        </div>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-3 tracking-tight">
          EPISODE 1: THE CONFUSION
        </h1>
        <div className="font-tech text-[11px] tracking-[0.3em] text-muted-foreground mb-2">
          THE BOYZS
        </div>
        <p className="font-tech text-[11px] tracking-[0.25em] text-accent mb-8">
          THE JOURNEY BEGINS (WITH NO PANTS)
        </p>

        <div className="border-t hairline mb-10" />

        <div
          className="space-y-5 text-[16px] md:text-[17px] leading-[1.85]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif" }}
        >
          {STORY.map((b, i) => renderBlock(b, i))}

          <p className="font-tech text-center text-accent mt-12 tracking-[0.3em]">
            — EPISODE 1 SAMAAPT —
          </p>
          <p className="text-center text-muted-foreground text-sm">
            Agli baar: Episode 2 — <span className="text-accent">Boyz On Action</span>
            <br />
            "Koi ladega. Koi royega. Aur HARSH ki pant mil jaygi."
          </p>
          <p className="font-tech text-accent text-center text-lg mt-10">
            &gt; END_OF_TRANSMISSION<span className="terminal-cursor">_</span>
          </p>
        </div>

        <div className="border-t hairline mt-16 mb-8" />

        <div className="grid grid-cols-2 gap-4">
          <button disabled className="border hairline px-4 py-5 text-left opacity-40 cursor-not-allowed">
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">◀ PREVIOUS</div>
            <div className="font-display text-xl md:text-2xl leading-none">— —</div>
          </button>
          <button disabled className="border hairline px-4 py-5 text-right opacity-60 cursor-not-allowed">
            <div className="font-tech text-[10px] tracking-[0.4em] mb-2">NEXT ▶</div>
            <div className="font-display text-xl md:text-2xl leading-none">SOON</div>
          </button>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate("home")}
            className="font-tech text-[11px] tracking-[0.4em] text-accent hover:underline"
          >
            RETURN HOME
          </button>
        </div>

        <div className="mt-12">
          <StoryEngagement storyId="the-boyzs-ep1" />
        </div>
      </article>
    </main>
  );
};
