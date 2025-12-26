'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function LearningJourney({ data, condensed = false }) {
  if (!data?.stages) return null;

  const { title, subtitle, stages } = data;

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
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            The Path Forward
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

        {/* Timeline */}
        <div className={`space-y-8 ${!condensed ? 'md:space-y-12' : ''}`}>
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-300 to-primary-100 dark:from-primary-700 dark:to-primary-900"></div>
              )}

              {/* Timeline dot */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 border-4 border-white dark:border-neutral-900 relative z-10">
                    <span className="text-2xl font-light text-primary-600 dark:text-primary-400">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-1">
                    {stage.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {stage.ageRange} • {stage.duration}
                  </p>

                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 font-light">
                    <span className="font-semibold">Focus:</span> {stage.focus}
                  </p>

                  {!condensed && (
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Key Areas */}
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 uppercase tracking-wide">
                          Key Areas
                        </h4>
                        <ul className="space-y-2">
                          {stage.keyAreas?.map((area, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Developed */}
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 uppercase tracking-wide">
                          Skills Developed
                        </h4>
                        <ul className="space-y-2">
                          {stage.skillsDeveloped?.map((skill, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {condensed && (
                    <div className="space-y-2 text-sm">
                      <p className="text-neutral-700 dark:text-neutral-300">
                        <span className="font-semibold">Develops:</span>{' '}
                        {stage.skillsDeveloped?.slice(0, 2).join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light italic">
            This is not a race. At each stage, we ensure your child has the time, support, and space to grow. The journey matters as much as the destination.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
