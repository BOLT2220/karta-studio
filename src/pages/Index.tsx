import { useState } from "react";
import { Background } from "@/components/karta/Background";
import { Header } from "@/components/karta/Header";
import { Footer } from "@/components/karta/Footer";
import { Home } from "@/pages/karta/Home";
import { Works } from "@/pages/karta/Works";
import { About } from "@/pages/karta/About";
import { Blog } from "@/pages/karta/Blog";
import { Contact } from "@/pages/karta/Contact";
import { NovelDetail } from "@/pages/karta/NovelDetail";
import { Reader } from "@/pages/karta/Reader";
import { IntroSequence } from "@/pages/karta/IntroSequence";

export type PageId = "home" | "works" | "about" | "blog" | "contact" | "novel" | "reader" | "intro";

const Index = () => {
  const [page, setPage] = useState<PageId>("home");

  const handleNavigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isImmersive = page === "reader" || page === "intro";

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Background />
      {!isImmersive && <Header active={page} onNavigate={handleNavigate} />}
      {page === "home" && <Home onNavigate={handleNavigate} />}
      {page === "works" && <Works onNavigate={handleNavigate} />}
      {page === "about" && <About />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
      {page === "novel" && <NovelDetail onNavigate={handleNavigate} />}
      {page === "intro" && <IntroSequence onNavigate={handleNavigate} />}
      {page === "reader" && <Reader onNavigate={handleNavigate} />}
      {!isImmersive && <Footer />}
    </div>
  );
};

export default Index;
