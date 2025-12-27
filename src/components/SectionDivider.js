'use client';

import { motion } from 'framer-motion';

export function SectionDivider({ variant = 'simple', showLabel = false, label = '' }) {
  if (variant === 'wave') {
    return (
      <svg
        className="w-full h-12 md:h-20 text-primary-50 dark:text-neutral-800"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent my-8 md:my-12" />
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center items-center gap-3 my-8 md:my-12">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative my-8 md:my-12 flex items-center justify-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
      {showLabel && label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute px-4 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm font-medium"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}

export function SectionTransition({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
