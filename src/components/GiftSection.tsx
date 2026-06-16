'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGift } from 'react-icons/fi';

interface GiftSectionProps {
  title?: string;
  giftTitle?: string;
  giftMessage?: string;
  imageUrl?: string;
}

export default function GiftSection({
  title = 'Your Special Gift',
  giftTitle = 'A token of appreciation',
  giftMessage = 'This gift is a reflection of how much you mean to me. Each element has been thoughtfully chosen to remind you of the joy and warmth you bring into my life. Use this special day to celebrate yourself and everything that makes you extraordinary.',
  imageUrl = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop',
}: GiftSectionProps) {
  const [isRevealed, setIsRevealed] = useState(false);

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
    <section className="relative w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 snap-section bg-gradient-to-b from-cream to-beige">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-dusty-rose/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.div className="text-5xl mb-4 text-gold opacity-40 inline-block">
            <FiGift className="w-12 h-12" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-dark">
            {title}
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gift image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageUrl}
                alt="Gift"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dusty-rose/20 to-transparent" />
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-sage-green/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Text content */}
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-dark">
              {giftTitle}
            </h3>

            <p className="text-base sm:text-lg text-dark/70 mb-8 leading-relaxed">
              {giftMessage}
            </p>

            {/* Reveal button */}
            <motion.button
              onClick={() => setIsRevealed(!isRevealed)}
              className="relative w-full sm:w-auto px-8 py-4 font-serif font-semibold uppercase text-sm tracking-widest"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-dusty-rose/70 rounded-none" />
              <div className="absolute inset-0.5 bg-cream rounded-none transition-colors duration-300" />

              {/* Text */}
              <span className="relative z-10 text-dark flex items-center justify-center gap-2">
                {isRevealed ? 'Close Gift' : 'Reveal More'}
              </span>
            </motion.button>

            {/* Hidden message - Reveal */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isRevealed ? 1 : 0,
                height: isRevealed ? 'auto' : 0,
              }}
              transition={{ duration: 0.4 }}
              className="mt-8 pt-8 border-t border-dusty-rose/20 overflow-hidden"
            >
              <p className="text-base sm:text-lg text-dusty-rose italic leading-relaxed">
                "A person like you comes around once in a lifetime. Thank you for being exactly who you are. Happy Birthday to someone truly extraordinary."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
