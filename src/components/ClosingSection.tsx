'use client';

import { motion } from 'framer-motion';

interface ClosingSectionProps {
  message?: string;
  signOff?: string;
  fromName?: string;
}

export default function ClosingSection({
  message = 'This birthday marks another year of growth, joy, and beautiful moments. I hope your day is filled with everything that makes you smile.',
  signOff = 'With all my love and appreciation,',
  fromName = 'Someone special ✦',
}: ClosingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section className="relative w-full py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 snap-section overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige via-cream to-light-gray opacity-60" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto min-h-96 lg:min-h-screen lg:flex lg:items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Top ornament */}
        <motion.div className="text-6xl mb-8 text-gold opacity-30" variants={itemVariants}>
          ⟡
        </motion.div>

        {/* Main message */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl font-serif font-medium mb-8 text-dark leading-8 text-left whitespace-pre-line max-w-3xl mx-auto"
        >
          {message}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-dusty-rose to-transparent my-8"
        />

        {/* Sign off */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark/70 mb-2 font-light"
        >
          {signOff}
        </motion.p>

        {/* Name */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl font-serif font-semibold text-dusty-rose tracking-wide"
        >
          {fromName}
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="text-5xl mt-12 text-gold opacity-20"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ❦
        </motion.div>

        {/* Footer message */}
        <motion.p
          variants={itemVariants}
          className="mt-16 pt-8 text-sm text-dark/40 uppercase tracking-widest border-t border-dusty-rose/10"
        >
          Thank you for being you. Happy Birthday.
        </motion.p>
      </motion.div>
    </section>
  );
}
