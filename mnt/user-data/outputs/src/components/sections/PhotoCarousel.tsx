'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'react-icons/fa';

interface PhotoMemory {
  id: number;
  src: string;
  caption: string;
  memory: string;
}

const memories: PhotoMemory[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=600&fit=crop',
    caption: 'Unforgettable Moments',
    memory: 'Every smile, every laugh, every moment with you is a treasure I hold dear.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    caption: 'Adventures Together',
    memory: 'From the smallest gestures to the grandest adventures, you make life beautiful.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1516484640446-481453a4f381?w=800&h=600&fit=crop',
    caption: 'Golden Memories',
    memory: 'Your presence lights up every room and every heart you touch.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop',
    caption: 'Pure Joy',
    memory: 'Thank you for being the kind of person who makes the world a better place.',
  },
];

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [current, setCurrent] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedIndex());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const handlePrevious = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Section Title */}
      <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
          Cherished Memories
        </h2>
        <div className="w-12 h-1 bg-gold mx-auto" />
      </motion.div>

      {/* Carousel */}
      <motion.div className="relative" variants={itemVariants}>
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="min-w-0 flex-[0_0_100%] relative group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={memory.src}
                    alt={memory.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/40" />

                  {/* Caption Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                      {memory.caption}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                      {memory.memory}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white text-dark transition-all duration-300 hover:shadow-lg disabled:opacity-50"
          disabled={!canScrollPrev}
          aria-label="Previous memory"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white text-dark transition-all duration-300 hover:shadow-lg disabled:opacity-50"
          disabled={!canScrollNext}
          aria-label="Next memory"
        >
          <ChevronRight size={20} />
        </button>
      </motion.div>

      {/* Indicators */}
      <motion.div
        className="flex justify-center gap-2 mt-8 md:mt-12"
        variants={itemVariants}
      >
        {memories.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-8 bg-gold'
                : 'w-2 bg-dark/20 hover:bg-dark/40'
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to memory ${idx + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
