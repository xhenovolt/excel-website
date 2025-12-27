'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialCarousel({ testimonials = [], autoPlay = true }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  if (testimonials.length === 0) return null;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-900 rounded-2xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800"
        >
          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonials[current].rating || 5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 italic font-light leading-relaxed">
            "{testimonials[current].text}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {testimonials[current].image && (
              <motion.img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-12 h-12 rounded-full object-cover"
                whileHover={{ scale: 1.1 }}
              />
            )}
            <div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                {testimonials[current].author}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 md:relative md:bottom-auto md:mt-8">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                animate={{
                  scale: index === current ? 1.2 : 1,
                  opacity: index === current ? 1 : 0.5,
                }}
                className={`w-2 h-2 rounded-full ${
                  index === current
                    ? 'bg-primary-600'
                    : 'bg-neutral-400 dark:bg-neutral-600'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      )}
    </div>
  );
}
