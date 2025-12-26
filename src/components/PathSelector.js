'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  BookOpen,
  Users,
  Zap,
  ChevronDown,
  Clock,
  Target,
  Users2,
} from 'lucide-react';

const iconMap = {
  Home: Home,
  BookOpen: BookOpen,
  Users: Users,
  Zap: Zap,
};

export default function PathSelector({ data, condensed = false }) {
  const [expandedPath, setExpandedPath] = useState(null);

  if (!data || !data.paths) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50 dark:from-neutral-900 dark:via-primary-900/10 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            {data.subtitle}
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 mt-4 text-sm font-light">
            {data.description}
          </p>
        </motion.div>

        {/* Path Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {data.paths.map((path) => {
            const IconComponent = iconMap[path.icon];
            const isExpanded = expandedPath === path.id;

            return (
              <motion.div key={path.id} variants={itemVariants}>
                <motion.button
                  onClick={() =>
                    setExpandedPath(isExpanded ? null : path.id)
                  }
                  className="w-full text-left group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Main Card */}
                  <div
                    className={`
                    relative overflow-hidden rounded-2xl p-8 md:p-10
                    bg-white dark:bg-neutral-800
                    border border-neutral-200 dark:border-neutral-700
                    shadow-card hover:shadow-elevated
                    transition-all duration-300
                    ${isExpanded ? 'ring-2 ring-primary-500 shadow-elevated' : 'hover:shadow-elevated'}
                  `}
                  >
                    {/* Background gradient accent */}
                    <div
                      className={`
                      absolute inset-0 opacity-0 group-hover:opacity-5
                      transition-opacity duration-300
                      ${path.id === 'day-balanced'
                        ? 'bg-emerald-500'
                        : path.id === 'day-hifz'
                          ? 'bg-blue-500'
                          : path.id === 'boarding-balanced'
                            ? 'bg-purple-500'
                            : 'bg-orange-500'
                      }
                    `}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`
                          w-14 h-14 rounded-xl
                          flex items-center justify-center
                          shadow-soft
                          ${
                            path.id === 'day-balanced'
                              ? 'bg-emerald-100 dark:bg-emerald-900/30'
                              : path.id === 'day-hifz'
                                ? 'bg-blue-100 dark:bg-blue-900/30'
                                : path.id === 'boarding-balanced'
                                  ? 'bg-purple-100 dark:bg-purple-900/30'
                                  : 'bg-orange-100 dark:bg-orange-900/30'
                          }
                        `}
                        >
                          {IconComponent && (
                            <IconComponent
                              className={`w-7 h-7 ${
                                path.id === 'day-balanced'
                                  ? 'text-emerald-600'
                                  : path.id === 'day-hifz'
                                    ? 'text-blue-600'
                                    : path.id === 'boarding-balanced'
                                      ? 'text-purple-600'
                                      : 'text-orange-600'
                              }`}
                            />
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" />
                        </motion.div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                        {path.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                        {path.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        variants={expandVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={`
                        mt-2 rounded-2xl p-8 md:p-10
                        bg-gradient-to-br shadow-card
                        ${
                          path.id === 'day-balanced'
                            ? 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800'
                            : path.id === 'day-hifz'
                              ? 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800'
                              : path.id === 'boarding-balanced'
                                ? 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800'
                                : 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200 dark:border-orange-800'
                        }
                      `}
                      >
                        <div className="space-y-8">
                          {/* Who It's For */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <Users2 className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                              <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                                Who It's Best For
                              </h4>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 ml-8 leading-relaxed text-sm">
                              {path.whoItIsFor}
                            </p>
                          </div>

                          {/* Daily Rhythm */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <Clock className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                              <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                                Daily Rhythm
                              </h4>
                            </div>
                            <div className="ml-8 space-y-3">
                              {Object.entries(path.dailyRhythm).map(
                                ([period, time]) => (
                                  <div
                                    key={period}
                                    className="flex gap-4 text-sm"
                                  >
                                    <span className="font-medium text-neutral-900 dark:text-neutral-50 capitalize min-w-fit">
                                      {period}:
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-400">
                                      {time}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Key Expectations */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <Target className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                              <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                                What We Expect
                              </h4>
                            </div>
                            <ul className="ml-8 space-y-2">
                              {path.keyExpectations.map(
                                (expectation, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 text-neutral-700 dark:text-neutral-300 text-sm"
                                  >
                                    <span className="text-neutral-400 mt-1">
                                      •
                                    </span>
                                    <span>{expectation}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Learning Approach & Support */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-current border-opacity-10">
                            <div>
                              <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2 text-sm uppercase tracking-wide">
                                Learning Approach
                              </h5>
                              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                {path.learningApproach}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2 text-sm uppercase tracking-wide">
                                Support System
                              </h5>
                              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                {path.supportSystem}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-card gradient-overlay-primary"
        >
          <p className="text-center text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-50">
              Not sure which path?
            </span>{' '}
            Our admissions team is here to help. We'll discuss your family's
            goals, your child's strengths, and find the right fit together.{' '}
            <a
              href="/contact"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Schedule a conversation.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
