'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Layers,
  Users,
  BookOpen,
  Home,
  Heart,
} from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Layers: Layers,
  Users: Users,
  BookOpen: BookOpen,
  Home: Home,
  Heart: Heart,
};

export default function InstitutionalProof({ data, condensed = false }) {
  if (!data) return null;

  const { title, subtitle, introduction, sections } = data;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${condensed ? 'py-12 md:py-16' : 'py-16 md:py-24'} px-4 md:px-8 bg-neutral-50 dark:bg-neutral-950`}
    >
      <div className={condensed ? 'max-w-3xl mx-auto' : 'max-w-5xl mx-auto'}>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            Proven Strength
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

        {/* Introduction */}
        {!condensed && introduction && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12 md:mb-16"
          >
            {introduction}
          </motion.p>
        )}

        {/* Proof Grid */}
        {sections && sections.length > 0 && (
          <div
            className={`grid gap-6 md:gap-8 ${
              condensed
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || Building2;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md dark:hover:shadow-primary-900/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <IconComponent
                        size={28}
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="mb-3">
                    <div className="text-2xl md:text-3xl font-light text-primary-600 dark:text-primary-400 mb-1">
                      {section.metric}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>

                  {/* Description */}
                  {!condensed && (
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
}
