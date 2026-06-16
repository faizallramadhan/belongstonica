'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const handleScroll = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative element */}
      <motion.div
        className="mb-8 md:mb-12"
        variants={itemVariants}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose to-gold opacity-20 blur-xl" />
        <div className="text-5xl md:text-7xl font-serif text-gold">✨</div>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 md:mb-6 tracking-tight"
        variants={itemVariants}
      >
        Happy Birthday
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-dark/70 mb-8 md:mb-12 font-light tracking-wide max-w-2xl"
        variants={itemVariants}
      >
        A little gift made specially for you
      </motion.p>

      {/* Recipient name */}
      <motion.div
        className="mb-12 md:mb-16"
        variants={itemVariants}
      >
        <p className="text-lg md:text-xl text-sage font-sans uppercase tracking-widest">
          Someone Special
        </p>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="w-12 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mb-12 md:mb-16"
        variants={itemVariants}
      />

      {/* CTA Button */}
      <motion.button
        onClick={handleScroll}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative px-10 md:px-12 py-4 md:py-5 font-sans font-medium uppercase tracking-wider text-cream bg-dark rounded-full overflow-hidden transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose to-gold opacity-0 group-hover:opacity-100"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Text content */}
        <span className="relative z-10 text-sm md:text-base">Open Your Gift</span>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-dark/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
