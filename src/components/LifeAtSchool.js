'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

export default function LifeAtSchool({ data }) {
  const [hoverId, setHoverId] = useState(null);

  if (!data?.sections) return null;

  const { title, subtitle, sections } = data;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            Daily Life
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
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grid - Desktop / Scroll - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoverId(section.id)}
              onMouseLeave={() => setHoverId(null)}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 aspect-square"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    opacity: hoverId === section.id ? 0.8 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-600"
                >
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl opacity-30">📸</span>
                  </div>
                </motion.div>
              </div>

              {/* Caption Overlay */}
              <motion.div
                animate={{
                  opacity: hoverId === section.id ? 1 : 0,
                  y: hoverId === section.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent flex items-end p-4"
              >
                <div>
                  <p className="text-white text-sm md:text-base font-light leading-tight">
                    {section.caption}
                  </p>
                </div>
              </motion.div>

              {/* Fallback text on mobile */}
              <div className="md:hidden absolute inset-0 flex items-end p-3 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent">
                <p className="text-white text-xs font-light line-clamp-2">
                  {section.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light italic max-w-3xl">
            A day at Excel is structured, purposeful, and human. Prayer anchors our day. Learning happens in focused sessions. Play and rest are protected. This rhythm creates space for real development.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
