'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  greeting?: string;
  message?: string;
  recipientName?: string;
  ctaText?: string;
  onCTA?: () => void;
}

const FloatingParticle = ({ delay, duration }: { delay: number; duration: number }) => {
  const [coords, setCoords] = useState<{ left: string; top: string; x: number } | null>(null);

  useEffect(() => {
    // Generate random position and x-offset only on the client after mount
    setCoords({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * 50 - 25,
    });
  }, []);

  if (!coords) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-dusty-rose/30 rounded-full"
      animate={{
        y: [0, -100, 0],
        x: [0, coords.x, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
      }}
      style={{
        left: coords.left,
        top: coords.top,
      }}
    />
  );
};

export default function HeroSection({
  greeting = 'Happy Birthday',
  message = 'A little gift made specially for you.',
  recipientName = 'Beloved',
  ctaText = 'Open Your Gift',
  onCTA,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particle array only on the client to avoid SSR mismatch
  const [particles, setParticles] = useState<{ id: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: i * 0.2,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(p);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handleScroll = () => {
    onCTA?.();
    setTimeout(() => {
      const nextSection = document.getElementById('memories-section');
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-screen overflow-hidden flex items-center justify-center snap-section bg-gradient-to-br from-cream via-beige to-cream"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-to-br from-dusty-rose/10 via-transparent to-sage-green/10"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative ornament */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-5xl opacity-40 text-gold"
        >
          ✦
        </motion.div>

        {/* Greeting */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-dark tracking-wide"
        >
          {greeting}
        </motion.h1>

        {/* Recipient Name */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dusty-rose mb-8 font-light tracking-widest uppercase"
        >
          {recipientName}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
        />

        {/* Message */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-dark/70 mb-12 max-w-lg leading-relaxed"
        >
          {message}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={handleScroll}
          className="relative px-8 sm:px-10 py-3 sm:py-4 font-serif text-dark font-semibold uppercase text-sm sm:text-base tracking-widest"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button background with gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-soft-gold opacity-20 rounded-none" />
          <div className="absolute inset-0.5 bg-cream rounded-none" />
          
          {/* Button text */}
          <span className="relative z-10 flex items-center gap-2">
            {ctaText}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>

          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-dusty-rose/5 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-dusty-rose/40 text-xs uppercase tracking-widest">
            Love You Nica!
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
