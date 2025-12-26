'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  Heart,
  BookOpen,
  Zap,
  Users,
  Globe,
} from 'lucide-react';

const iconMap = {
  Lightbulb: Lightbulb,
  Heart: Heart,
  BookOpen: BookOpen,
  Zap: Zap,
  Users: Users,
  Globe: Globe,
};

export default function GraduateOutcomes({ data, condensed = false }) {
  if (!data?.outcomes) return null;

  const { title, subtitle, outcomes, preparedPaths } = data;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${condensed ? 'py-12 md:py-16' : 'py-16 md:py-24'} px-4 md:px-8 bg-white dark:bg-neutral-900`}
    >
      <div className={condensed ? 'max-w-3xl mx-auto' : 'max-w-5xl mx-auto'}>
        {/* Header */}
        <div className={condensed ? 'mb-10 md:mb-12' : 'mb-12 md:mb-16'}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            Outcomes
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
            className={`${condensed ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-400`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Outcomes Grid */}
        {outcomes && outcomes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`grid gap-6 md:gap-8 mb-12 md:mb-16 ${
              condensed
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}
          >
            {outcomes.map((outcome, index) => {
              const IconComponent = iconMap[outcome.icon] || Lightbulb;
              return (
                <motion.div
                  key={outcome.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <IconComponent
                        size={24}
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Prepared Paths */}
        {!condensed && preparedPaths && preparedPaths.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-neutral-200 dark:border-neutral-800"
          >
            <h3 className="text-2xl font-light text-neutral-900 dark:text-white mb-8">
              Prepared Paths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preparedPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg border border-primary-200 dark:border-primary-700"
                >
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {path.name}
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {path.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${!condensed ? 'mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800' : 'mt-8 pt-8'}`}
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light italic">
            These are not promises. They are patterns. When you structure learning this way, when you measure success by character and depth, this is what emerges.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
