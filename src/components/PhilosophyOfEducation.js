'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Heart, Zap } from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  Lightbulb: Lightbulb,
  Heart: Heart,
  Zap: Zap,
};

export default function PhilosophyOfEducation({ data, condensed = false }) {
  if (!data) return null;

  const {
    title,
    subtitle,
    overview,
    pillars,
    summary,
  } = data;

  const pillarIcons = ['BookOpen', 'Lightbulb', 'Heart', 'Zap'];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${condensed ? 'py-12 md:py-16' : 'py-16 md:py-24'} px-4 md:px-8 bg-white dark:bg-neutral-900`}
    >
      <div className={condensed ? 'max-w-3xl mx-auto' : 'max-w-4xl mx-auto'}>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            {condensed ? 'What We Believe' : 'Our Educational Philosophy'}
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
            className={`${condensed ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-400 leading-relaxed`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Overview */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${
            condensed ? 'text-sm mb-8' : 'text-base mb-12 md:mb-16'
          } text-neutral-700 dark:text-neutral-300 leading-relaxed`}
        >
          {overview}
        </motion.p>

        {/* Pillars Grid */}
        {pillars && pillars.length > 0 && (
          <div
            className={`grid gap-6 md:gap-8 mb-12 md:mb-16 ${
              condensed ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillarIcons[index]] || BookOpen;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-primary-50 dark:bg-primary-950 rounded-lg">
                        <IconComponent
                          size={24}
                          className="text-primary-600 dark:text-primary-400"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-3">
                        {pillar.description}
                      </p>
                      {!condensed && pillar.details && (
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed italic">
                          {pillar.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Summary Statement */}
        {summary && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg"
          >
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg leading-relaxed font-light italic">
              {summary}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
