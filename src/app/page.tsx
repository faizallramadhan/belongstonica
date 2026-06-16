'use client';

import HeroSection from '@/components/HeroSection';
import MemoriesSection from '@/components/MemoriesSection';
import GiftSection from '@/components/GiftSection';
import ClosingSection from '@/components/ClosingSection';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-cream overflow-x-hidden">
      {/* Music Player - persistent across all sections */}
      <MusicPlayer 
        audioUrl="/music/bg music.mp3"
        title="Background Music"
      />

      {/* Page sections */}
      <HeroSection
        greeting="Happy Birthday Nica Sayang!"
        recipientName="Fai"
        message="A little gift made specially for you."
        ctaText="Look inside for a surprise!"
      />

      <MemoriesSection
        title="Our Beautiful Moments"
        subtitle="A collection of memories that matter"
      />

      <GiftSection
        title="Your Special Gift"
        giftTitle="A token of appreciation"
        giftMessage="This gift is a reflection of how much you mean to me. Each element has been thoughtfully chosen to remind you of the joy and warmth you bring into my life. Use this special day to celebrate yourself and everything that makes you extraordinary."
      />

      <ClosingSection
        message="This birthday marks another year of growth, joy, and beautiful moments. I hope your day is filled with everything that makes you smile."
        signOff="With all my love and appreciation,"
        fromName="Someone special ✦"
      />
    </main>
  );
}
