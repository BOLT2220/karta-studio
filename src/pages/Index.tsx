import { useState } from "react";
import { Header } from "@/components/karta/Header";
import { Footer } from "@/components/karta/Footer";
import { LoadingScreen } from "@/components/karta/LoadingScreen";
import { Home } from "@/pages/karta/Home";
import { Works } from "@/pages/karta/Works";
import { About } from "@/pages/karta/About";
import { Blog } from "@/pages/karta/Blog";
import { Contact } from "@/pages/karta/Contact";
import { NovelDetail } from "@/pages/karta/NovelDetail";
import { Reader } from "@/pages/karta/Reader";
import { IntroSequence } from "@/pages/karta/IntroSequence";
import { BoyzsIntro } from "@/pages/karta/BoyzsIntro";
import { BoyzsReader } from "@/pages/karta/BoyzsReader";

export type PageId = "home" | "works" | "about" | "blog" | "contact" | "novel" | "reader" | "intro" | "boyzs" | "boyzs-intro" | "boyzs-reader";

const Index = () => {
  const [page, setPage] = useState<PageId>("home");

  const handleNavigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isImmersive = page === "reader" || page === "intro" || page === "boyzs-intro" || page === "boyzs-reader";

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      {!isImmersive && <Header active={page} onNavigate={handleNavigate} />}
      {page === "home" && <Home onNavigate={handleNavigate} />}
      {page === "works" && <Works onNavigate={handleNavigate} />}
      {page === "about" && <About />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
      {page === "novel" && <NovelDetail onNavigate={handleNavigate} />}
      {page === "intro" && <IntroSequence onNavigate={handleNavigate} />}
      {page === "reader" && <Reader onNavigate={handleNavigate} />}
      {(page === "boyzs" || page === "boyzs-intro") && <BoyzsIntro onNavigate={handleNavigate} />}
      {page === "boyzs-reader" && <BoyzsReader onNavigate={handleNavigate} />}
      {!isImmersive && <Footer onNavigate={handleNavigate as (p: "works" | "about" | "blog" | "contact") => void} />}
    </div>
  );
};

export default Index;
