'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  FileText,
  Users,
  CheckCircle,
  ArrowDown,
} from 'lucide-react';

const iconMap = {
  MapPin: MapPin,
  FileText: FileText,
  Users: Users,
  CheckCircle: CheckCircle,
};

export default function AdmissionsLadder({ data }) {
  if (!data || !data.steps) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    show: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-neutral-50 via-blue-50/20 to-neutral-50 dark:from-neutral-900 dark:via-blue-900/10 dark:to-neutral-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4 font-light">
            {data.subtitle}
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 shadow-soft">
            <p className="text-blue-900 dark:text-blue-200 font-semibold text-sm">
              ✓ {data.message}
            </p>
          </div>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800 md:transform md:-translate-x-1/2">
            {/* Animated progress line */}
            <motion.div
              variants={lineVariants}
              className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {data.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center`}
                >
                  {/* Content - Left on desktop (even) or right on desktop (odd) */}
                  <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        relative overflow-hidden rounded-2xl p-8 md:p-10
                        bg-white dark:bg-neutral-800
                        border border-neutral-200 dark:border-neutral-700
                        shadow-card hover:shadow-elevated
                        transition-all duration-300
                        ${
                          index === 0
                            ? 'bg-gradient-to-br from-white to-blue-50 dark:from-neutral-800 dark:to-blue-900/20'
                            : index === 1
                              ? 'bg-gradient-to-br from-white to-cyan-50 dark:from-neutral-800 dark:to-cyan-900/20'
                              : index === 2
                                ? 'bg-gradient-to-br from-white to-teal-50 dark:from-neutral-800 dark:to-teal-900/20'
                                : 'bg-gradient-to-br from-white to-green-50 dark:from-neutral-800 dark:to-green-900/20'
                        }
                      `}
                    >
                      <div className="relative z-10">
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                            Step {step.number}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 text-sm">
                          {step.description}
                        </p>

                        {/* What Happens */}
                        <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-6 mb-6 shadow-soft">
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3 text-sm uppercase tracking-wide">
                            What Happens
                          </h4>
                          <ul className="space-y-2">
                            {step.whatHappens.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-neutral-700 dark:text-neutral-300 text-sm"
                              >
                                <span className="text-blue-500 dark:text-blue-400 font-bold">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Timeline */}
                        <div className="flex items-center gap-3 text-sm">
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 font-semibold shadow-soft">
                            {step.timeline}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Circle Icon - Center on desktop */}
                  <div className="md:col-start-2 md:col-end-3 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        relative z-20
                        w-16 h-16 rounded-full
                        flex items-center justify-center
                        shadow-card
                        ${
                          index === 0
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                            : index === 1
                              ? 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                              : index === 2
                                ? 'bg-gradient-to-br from-teal-500 to-teal-600'
                                : 'bg-gradient-to-br from-green-500 to-green-600'
                        }
                        ring-4 ring-white dark:ring-neutral-800
                      `}
                    >
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Connector Arrow - Hidden on mobile */}
                  {index < data.steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="hidden md:flex md:col-span-2 justify-center py-4"
                    >
                      <ArrowDown className="w-6 h-6 text-blue-400 dark:text-blue-500 animate-bounce" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-10 md:p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 shadow-card gradient-overlay-primary text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Ready to Start?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto text-sm">
            We're here to answer questions, address concerns, and help you feel
            confident about your decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              Get in Touch
            </a>
            <a
              href="/academics"
              className="px-8 py-3 bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-neutral-700 transition-all duration-300 shadow-soft hover:shadow-card"
            >
              Learn About Pathways
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
