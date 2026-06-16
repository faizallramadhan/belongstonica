'use client';

import { motion } from 'framer-motion';

export default function MessageSection() {
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Decorative element */}
      <motion.div
        className="flex justify-center mb-8 md:mb-12"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="text-5xl md:text-6xl">💝</div>
      </motion.div>

      {/* Main message */}
      <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">
          A Birthday Wish
        </h2>
        <div className="w-12 h-1 bg-gold mx-auto mb-8" />
        
        <p className="text-lg md:text-xl text-dark/75 font-light leading-relaxed mb-8">
          On your special day, I want you to know how much you mean to me. You bring
          joy, warmth, and light into the lives of everyone around you. Your kindness,
          your laughter, and your unique spirit make the world a better place.
        </p>

        <p className="text-lg md:text-xl text-dark/75 font-light leading-relaxed">
          May this year bring you endless moments of happiness, new adventures to
          explore, and all the love and support you deserve. Here's to celebrating
          you and everything beautiful that makes you who you are.
        </p>
      </motion.div>

      {/* Wishes Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        variants={containerVariants}
      >
        {[
          {
            emoji: '✨',
            title: 'Health & Happiness',
            description: 'Wishing you radiant health and boundless joy',
          },
          {
            emoji: '🌟',
            title: 'Growth & Dreams',
            description: 'May all your dreams come true this year',
          },
          {
            emoji: '💫',
            title: 'Love & Connection',
            description: 'Surrounded by people who cherish you always',
          },
        ].map((wish, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-lg bg-white/50 border border-gold/20 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{wish.emoji}</div>
            <h3 className="font-serif text-xl font-bold text-dark mb-3">
              {wish.title}
            </h3>
            <p className="text-dark/70 font-light">{wish.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing message */}
      <motion.div className="text-center" variants={itemVariants}>
        <p className="font-serif text-2xl md:text-3xl text-gold italic mb-6">
          "Your life is a gift. Make it count."
        </p>
        <p className="text-dark/60 font-sans text-sm md:text-base">
          With all my love and best wishes,
          <br />
          Your Friend & Well-Wisher 🎂
        </p>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="flex justify-center gap-3 mt-12 md:mt-16"
        variants={containerVariants}
      >
        {['🎁', '🌸', '✨', '🌸', '🎁'].map((emoji, idx) => (
          <motion.span
            key={idx}
            className="text-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: idx * 0.2,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
