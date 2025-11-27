import About from "@/components/About";
import BandMembers from "@/components/BandMembers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lyrics from "@/components/Lyrics";
import MobileHero from "@/components/MobileHero";
import Music from "@/components/Music";
import Navigation from "@/components/Navigation";
import SafetyReminder from "@/components/SafetyReminder";
import SocialMedia from "@/components/SocialMedia";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
      <MobileHero />
      <main>
        <About />
        <BandMembers />
        <Music />
        <Video />
        <Lyrics />
        <SocialMedia />
        <SafetyReminder />
      </main>
      <Footer />
    </div>
  );
}
