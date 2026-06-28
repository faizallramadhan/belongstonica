'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Photo {
  id: string;
  src: string;
  caption: string;
  memory?: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function PhotoCarousel({
  photos,
  autoplay = true,
  autoplayInterval = 5000,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const autoplayRef = useRef<NodeJS.Timeout>();

  if (photos.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-beige rounded-lg">
        <p className="text-dark/50">No photos available</p>
      </div>
    );
  }

  const currentPhoto = photos[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index % photos.length);
  }, [photos.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay) return;

    autoplayRef.current = setInterval(nextSlide, autoplayInterval);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, nextSlide, autoplayInterval]);

  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(autoplay);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel */}
      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg bg-beige">
        {/* Slides */}
        <div className="relative w-full h-full">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Caption overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-cream z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          key={currentIndex}
        >
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
            {currentPhoto.caption}
          </h3>
          {currentPhoto.memory && (
            <p className="text-sm sm:text-base text-cream/90 max-w-2xl">
              {currentPhoto.memory}
            </p>
          )}
        </motion.div>

        {/* Navigation buttons */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cream/80 hover:bg-cream text-dark transition-all"
          whileHover={{ scale: 1.1, backgroundColor: '#F8F5F0' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cream/80 hover:bg-cream text-dark transition-all"
          whileHover={{ scale: 1.1, backgroundColor: '#F8F5F0' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FiChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots navigation */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {photos.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-8 bg-dusty-rose'
                : 'w-2 bg-dusty-rose/30 hover:bg-dusty-rose/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="text-center mt-4 text-dark/50 text-sm uppercase tracking-widest font-serif">
        {currentIndex + 1} of {photos.length}
      </div>
    </motion.div>
  );
}
