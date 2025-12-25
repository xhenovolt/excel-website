'use client';

import { motion } from 'framer-motion';
import { Award, Users, BookOpen, CheckCircle2, Heart, Shield } from 'lucide-react';

export default function TrustSignals({ variant = 'cards' }) {
  const signals = [
    {
      icon: Award,
      title: '15+ Years',
      description: 'Established excellence since 2009',
      stat: 'of proven track record'
    },
    {
      icon: Users,
      title: '500+ Families',
      description: 'Trusted by parents in the community',
      stat: 'strong community base'
    },
    {
      icon: BookOpen,
      title: '98% Success',
      description: 'Students excel academically',
      stat: 'graduation/promotion rate'
    },
    {
      icon: Heart,
      title: 'Faith-Based',
      description: 'Islamic values integrated throughout',
      stat: 'character development'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure, nurturing spaces for learning',
      stat: 'student welfare priority'
    },
    {
      icon: CheckCircle2,
      title: '100% Satisfied',
      description: 'Families recommend us to others',
      stat: 'parent testimonials'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (variant === 'inline') {
    // Horizontal scrollable variant for hero sections
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {signals.map((signal, idx) => {
          const Icon = signal.icon;
          return (
            <motion.div key={idx} variants={item} className="text-center">
              <div className="flex justify-center mb-3">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <p className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                {signal.title}
              </p>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-tight">
                {signal.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  // Default card variant
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {signals.map((signal, idx) => {
        const Icon = signal.icon;
        return (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -4 }}
            className="p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {signal.title}
                </p>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {signal.stat}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {signal.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
