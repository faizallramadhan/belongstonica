'use client';

import { motion } from 'framer-motion';
import PhotoCarousel from './PhotoCarousel';

interface Memory {
  id: string;
  image: string;
  caption: string;
  story: string;
}

interface MemoriesSectionProps {
  title?: string;
  subtitle?: string;
  memories?: Memory[];
}

const sampleMemories: Memory[] = [
  {
    id: '1',
    image: 'images/1.jpeg',
    caption: '',
    story: '',
  },
  {
    id: '2',
    image: 'images/2.jpeg',
    caption: '',
    story: '',
  },
  {
    id: '3',
    image: 'images/3.jpeg',
    caption: '',
    story: '',
  },
  // {
  //   id: '4',
  //   image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dda?w=1000&h=600&fit=crop',
  //   caption: 'Golden Hours',
  //   story: 'The way the light catches your face during sunset reminds me why every day with you is precious.',
  // },
];

export default function MemoriesSection({
  title = 'Our Beautiful Moments',
  subtitle = 'A collection of memories that matter',
  memories = sampleMemories,
}: MemoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="memories-section"
      className="relative w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 snap-section bg-cream"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dusty-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section header */}
        <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
          {/* Decorative ornament */}
          <motion.div className="text-4xl mb-4 text-gold opacity-40">✦</motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-serif font-bold mb-4 text-dark tracking-tight">
            {title}
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-dark/60 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={itemVariants} className="mb-12">
          <PhotoCarousel photos={memories.map(m => ({
            id: m.id,
            src: m.image,
            caption: m.caption,
            memory: m.story,
          }))} />
        </motion.div>

        {/* Closing message */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed italic">
            Every moment with you is a memory I cherish. Here's to more beautiful moments ahead.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
