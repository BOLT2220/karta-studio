import { PageId } from "@/pages/Index";
import { StoryEngagement } from "@/components/karta/StoryEngagement";
import poster from "@/assets/the-last-glitch-poster.jpeg";

interface Props {
  onNavigate: (p: PageId) => void;
}

const STORY: string[] = [
  "वो रास्ता लेना — उनकी सबसे बड़ी गलती थी।",
  "सड़क खिंची चली जा रही थी। सीधी। अस्वाभाविक। पहाड़ों में समाती हुई — जैसे किसी सांप का कोई मंज़िल ही न हो। न मोड़। न झुकाव। बस… जारी।",
  "समीर ने रियरव्यू मिरर में देखा।",
  "पीछे कुछ नहीं था।",
  "न मोड़। न सड़क। न अतीत।",
  "सिर्फ धुंध।",
  "जैसे जो दुनिया वो छोड़ आए थे — वो delete हो चुकी हो।",
  "SUV के अंदर पाँच थे — समीर, रोनक, शाम, प्रिंस, और आरुष।",
  "कोई नहीं बोला।",
  "ये थकान की चुप्पी नहीं थी।",
  "ये वो चुप्पी थी — जो तब होती है जब दिमाग भाँप ले कि कुछ गलत है… पर समझ न पाए कि क्या।",
  "\"ये रास्ता… ठीक नहीं लगता।\" आरुष ने धीरे कहा।",
  "कोई जवाब नहीं आया।",
  "GPS की screen धीमी रोशनी में जली।",
  "एक ही शब्द:",
  "::404::",
  "न route का नाम। न highway नंबर।",
  "बस —",
  "::404::",
  "समीर ने brake दबाया।",
  "कुछ नहीं हुआ।",
  "ज़ोर से दबाया।",
  "Pedal पूरा धँस गया… पर गाड़ी नहीं रुकी।",
  "\"Brakes… काम नहीं कर रहे,\" उसने फुसफुसाया।",
  "एक सेकंड।",
  "दो सेकंड।",
  "फिर —",
  "गाड़ी खुद accelerate होने लगी।",
  "Dashboard की lights झिलमिलाने लगीं।",
  "जैसे कोई पुराना computer glitch कर रहा हो।",
  "जैसे कोई system crash होने वाला हो।",
  "\"यार, कुछ कर!\" रोनक चिल्लाया।",
  "\"कर तो रहा हूँ!\" समीर ने steering wheel और कसकर पकड़ी।",
  "तभी —",
  "एक बिल्ली आई।",
  "सड़क के बीचोंबीच।",
  "स्थिर। अहिलत। गलत।",
  "उसकी आँखें…",
  "वो natural नहीं थीं।",
  "लाल — पर किसी जानवर जैसी नहीं।",
  "वो pixels जैसी दिखती थीं।",
  "जैसे कोई चीज़ पूरी तरह load ही नहीं हुई।",
  "समीर ने instinct से गाड़ी मोड़ी।",
  "Tyres चीखे। गाड़ी बेकाबू हुई।",
  "और —",
  "::CRASH!::",
  "SUV एक मरे हुए पेड़ से जा टकराई।",
  "पेड़ था… काला। गहरा भूरा नहीं। जला हुआ नहीं। बस काला।",
  "जैसे वो पेड़ नहीं था — बल्कि reality में काटा गया एक छेद था।",
  "Airbags खुले।",
  "फिर सन्नाटा। भारी। तत्काल।",
  "एक-एक करके वो गाड़ी से निकले। हिले हुए। साँस फूली हुई। ज़िंदा।",
  "\"हम… बच गए?\" प्रिंस ने बुदबुदाया।",
  "किसी ने जवाब नहीं दिया।",
  "पर सबने एक ही बात सोची। शायद।",
  "वो गलत थे।",
  "\"ये क्या बकवास था?!\" रोनक फटा। \"गाड़ी पूरी तरह बर्बाद है!\"",
  "\"Brakes fail हो गए थे!\" समीर ने कहा।",
  "\"तो पहले check करना था!\" शाम ने पलटवार किया।",
  "\"किया था मैंने!\" समीर चिल्लाया — frustration आखिरकार टूट गई।",
  "\"बस।\" आरुष बीच में आया। \"लड़ने से कुछ नहीं होगा। सोचो।\"",
  "समीर ने फ़ोन निकाला। Screen जली।",
  "::NO SIGNAL::",
  "\"…Network नहीं है,\" उसने कहा।",
  "सबने check किया। एक ही नतीजा।",
  "फिर — एक ठंडी हवा उनसे गुज़री। सूखी। तीखी। अस्वाभाविक।",
  "::Shhhhhhhh…::",
  "वो आवाज़ हवा की नहीं थी। वो एक system noise जैसी थी। जैसे background में कुछ run हो रहा हो।",
  "\"यहाँ रुकने का कोई फायदा नहीं।\" समीर बोला। \"चलते हैं।\"",
  "किसी ने न कहा। बैग उठाए। और आगे बढ़ने लगे।",
  "रास्ता नहीं बदला। न मोड़। न sign। न आवाज़।",
  "वो चले। मिनटों तक। शायद घंटों तक।",
  "वक्त… टूटा हुआ लग रहा था। उनकी घड़ियाँ lag कर रही थीं।",
  "\"महसूस हो रहा है?\" शाम ने कहा।",
  "\"क्या?\"",
  "\"जैसे हम चल रहे हैं… पर कहीं पहुँच नहीं रहे।\"",
  "समीर अचानक रुका। आँखें फैल गईं।",
  "\"देखो।\"",
  "वो दौड़े। और जम गए।",
  "वही SUV। वही तबाही। वही धुआँ। वही जगह।",
  "\"…कैसे?\" रोनक की आवाज़ काँपी। \"हम सीधे चले थे।\"",
  "कोई जवाब नहीं आया।",
  "\"ठीक है,\" आरुष ने ज़बरदस्ती शांत रहते हुए कहा। \"अलग-अलग दिशाओं में जाते हैं।\"",
  "\"क्या?\" प्रिंस ने उसे देखा।",
  "\"अलग रास्ते। कोई न कोई निकल जाएगा।\"",
  "ये बुरा idea था। पर था यही एकमात्र idea।",
  "वो अलग हुए। पाँच दिशाएँ। पाँच रास्ते।",
  "पंद्रह मिनट बाद —",
  "शाम लौटा। फिर प्रिंस। फिर आरुष। फिर समीर।",
  "सब वापस उसी गाड़ी के पास।",
  "चारों खड़े थे। साँस ले रहे थे। घूर रहे थे।",
  "\"रुको…\" समीर ने धीरे कहा। \"हम पाँच थे।\"",
  "सन्नाटा।",
  "उन्होंने गिना। एक। दो। तीन। चार।",
  "\"रोनक?\"",
  "कोई जवाब नहीं।",
  "\"रोनक!\"",
  "उसकी आवाज़ धुंध में खो गई।",
  "वो वहाँ नहीं था। खोया नहीं था। छुपा नहीं था। गया नहीं था।",
  "::मिटा दिया गया था।::",
  "हवा फिर आई।",
  "::Shhhhhhhh…::",
  "रास्ता… धड़का। धीमे। एक ताल में। साँस लेता हुआ।",
  "और उस पल — उन्हें समझ आया —",
  "ये कोई सड़क नहीं थी। ये एक system था। एक जाल। एक glitch।",
  "और वो इस पर सफर नहीं कर रहे थे। वो इसके अंदर थे।",
  "::Loading complete.::",
  "::Program starting.::",
];

const renderParagraph = (text: string, i: number) => {
  const isAccent = text.startsWith("::") && text.endsWith("::");
  if (isAccent) {
    return (
      <p key={i} className="font-display text-accent text-xl md:text-2xl tracking-[0.25em] uppercase text-center my-10">
        {text.slice(2, -2)}
      </p>
    );
  }
  return <p key={i} className="text-foreground/85">{text}</p>;
};

export const ReaderHi = ({ onNavigate }: Props) => {
  return (
    <main key="reader-hi" className="page-enter relative z-10 min-h-screen bg-background text-foreground">
      <div className="border-b hairline sticky top-0 z-20 bg-background/85 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between font-tech text-[11px] tracking-[0.3em]">
          <span className="text-accent">EP.001 · 404 रोड · हिन्दी</span>
          <button onClick={() => onNavigate("glitch")} className="text-foreground hover:text-accent transition-colors">
            ◀ BACK
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
        <div className="card-clean overflow-hidden bg-muted">
          <img src={poster} alt="The Last Glitch — Episode 1" className="w-full h-auto block object-cover object-top" loading="eager" />
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="font-tech text-[11px] tracking-[0.4em] text-accent mb-3">A KARTA STUDIO ORIGINAL SERIES</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-3 tracking-tight">एपिसोड 1: द 404 रोड</h1>
        <div className="font-tech text-[11px] tracking-[0.3em] text-muted-foreground mb-8">द लास्ट ग्लिच</div>
        <div className="border-t hairline mb-10" />
        <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.85]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          {STORY.map(renderParagraph)}
        </div>
        <div className="border-t hairline mt-16 mb-8" />
        <div className="text-center">
          <button onClick={() => onNavigate("glitch")} className="font-tech text-[11px] tracking-[0.4em] text-accent hover:underline">
            RETURN TO SERIES
          </button>
        </div>
        <div className="mt-12">
          <StoryEngagement storyId="the-last-glitch-ep1-hi" />
        </div>
      </article>
    </main>
  );
};
