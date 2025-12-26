'use client';

import { motion } from 'framer-motion';

export default function StudentSnapshots({ data, variant = 'grid' }) {
  if (!data?.snapshots) return null;

  const { title, subtitle, snapshots } = data;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            Evidence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-4 leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grid of Snapshots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {snapshots.map((snapshot, index) => (
            <motion.div
              key={snapshot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-gradient-to-br from-neutral-400 to-neutral-600 dark:from-neutral-600 dark:to-neutral-800 flex items-center justify-center relative"
              >
                {/* Slight desaturation effect */}
                <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-900/30"></div>

                {/* Placeholder emoji */}
                <span className="text-4xl md:text-5xl opacity-30 relative z-10">📷</span>
              </motion.div>

              {/* Caption - Always visible on mobile, visible on hover on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent flex items-end p-4 md:opacity-0 md:group-hover:opacity-100"
              >
                <p className="text-white text-sm md:text-base font-light leading-snug">
                  {snapshot.caption}
                </p>
              </motion.div>

              {/* Mobile caption (always visible) */}
              <div className="absolute inset-0 md:hidden flex items-end p-3 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent">
                <p className="text-white text-xs font-light line-clamp-2">
                  {snapshot.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800 text-center"
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light italic max-w-3xl mx-auto">
            These moments are not posed. They are real. They are what every day looks like here.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
