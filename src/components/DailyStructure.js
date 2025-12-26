'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DailyStructure({ data }) {
  const [activeStream, setActiveStream] = useState(0);

  if (!data?.streams) return null;

  const { title, description, streams } = data;
  const currentStream = streams[activeStream];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-widest uppercase"
          >
            Daily Rhythm
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
            {description}
          </motion.p>
        </div>

        {/* Stream Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 md:gap-4 mb-12"
        >
          {streams.map((stream, index) => (
            <button
              key={stream.id}
              onClick={() => setActiveStream(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeStream === index
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700'
              }`}
            >
              {stream.name}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        {currentStream && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {currentStream.timing?.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Time */}
                  <div className="flex-shrink-0">
                    <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <span className="font-semibold text-primary-900 dark:text-primary-100 text-sm md:text-base">
                        {slot.time}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                      {slot.activity}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                      {slot.purpose}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light italic">
            Every hour is designed. Not rigid, but purposeful. Students know what to expect, allowing them to focus on learning rather than wondering what comes next.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
