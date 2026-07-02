'use client';

import HeroSection from '@/components/HeroSection';
import MemoriesSection from '@/components/MemoriesSection';
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
        title="Me, and my dearest Nca"
        subtitle="Memories we'll remember forever"
      />

      {/* <GiftSection
        title="Your Special Gift"
        giftTitle="A token of appreciation"
        giftMessage="This gift is a reflection of how much you mean to me. Each element has been thoughtfully chosen to remind you of the joy and warmth you bring into my life. Use this special day to celebrate yourself and everything that makes you extraordinary."
      /> */}

      <ClosingSection
        message={`Our relationship has never been easy. The distance that once stood between us was already hard enough, and now it feels like there's an even higher wall for me to climb.

From the very beginning, we've come from two completely different worlds. You were born whole and beautiful beneath the moonlight, while I was born from storms—loud, restless, and full of chaos.
But there's one thing I need you to know: I love you. More than I've ever loved myself. And yet, I've learned that love alone isn't always enough.

If one day it turns out that I'm not the person your family can accept, or the one who truly deserves to stand beside you, I hope you'll still find the happiness you deserve. Because that's all I've ever wanted for you.

Happy Birthday, dearest.

I'm so grateful you came into my life.

As you grow another year older, I hope life gives you everything you've ever wanted and everything you'll ever need.
This birthday marks another year of growth, joy, and beautiful moments. I hope your day is filled with everything that makes you smile, and me...`}
        signOff="With all my love,"
        fromName="fai ✦"
      />
    </main>
  );
}
