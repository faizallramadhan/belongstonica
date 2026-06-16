'use client';

import { motion } from 'framer-motion';

export default function FloatingDecorations() {
  const decorations = [
    { id: 1, emoji: '✨', top: '10%', left: '5%', delay: 0 },
    { id: 2, emoji: '💫', top: '20%', right: '8%', delay: 0.5 },
    { id: 3, emoji: '✨', bottom: '15%', left: '10%', delay: 1 },
    { id: 4, emoji: '💝', top: '50%', right: '5%', delay: 0.3 },
    { id: 5, emoji: '🌸', bottom: '30%', right: '12%', delay: 0.8 },
    { id: 6, emoji: '✨', top: '70%', left: '8%', delay: 1.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className="absolute text-2xl md:text-3xl"
          style={{
            top: decoration.top,
            bottom: decoration.bottom,
            left: decoration.left,
            right: decoration.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + decoration.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: decoration.delay,
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}

      {/* Gradient orbs for depth */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-rose/10 to-gold/10 rounded-full blur-3xl"
        style={{ top: '20%', left: '-10%' }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-sage/10 to-rose/10 rounded-full blur-3xl"
        style={{ bottom: '10%', right: '-10%' }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
