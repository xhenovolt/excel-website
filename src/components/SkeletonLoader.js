'use client';

import { motion } from 'framer-motion';

export function SkeletonLoader({ count = 1, variant = 'text', height = 'h-4' }) {
  const pulse = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  if (variant === 'card') {
    return (
      <motion.div
        animate="animate"
        variants={pulse}
        className="bg-neutral-200 dark:bg-neutral-700 rounded-lg p-4 space-y-3"
      >
        <div className="h-40 bg-neutral-300 dark:bg-neutral-600 rounded-md" />
        <div className="h-4 bg-neutral-300 dark:bg-neutral-600 rounded" />
        <div className="h-4 w-5/6 bg-neutral-300 dark:bg-neutral-600 rounded" />
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          animate="animate"
          variants={pulse}
          className={`bg-neutral-200 dark:bg-neutral-700 rounded ${height}`}
        />
      ))}
    </div>
  );
}

export function HeroSkeletonLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-12 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-3/4"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
          className="h-20 bg-neutral-300 dark:bg-neutral-700 rounded-lg"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className="h-32 bg-neutral-300 dark:bg-neutral-700 rounded-lg"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
