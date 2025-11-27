import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BandMembers from '@/components/BandMembers';
import Music from '@/components/Music';
import Video from '@/components/Video';
import Lyrics from '@/components/Lyrics';
import SocialMedia from '@/components/SocialMedia';
import SafetyReminder from '@/components/SafetyReminder';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
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
