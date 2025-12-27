'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedStatCounter({ end = 100, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      if (typeof end === 'string') {
        // Handle string numbers like "250+"
        const numPart = parseInt(end);
        setCount(Math.floor(numPart * progress));
      } else {
        setCount(Math.floor(end * progress));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-3xl md:text-4xl font-semibold text-primary-600 dark:text-primary-500">
        {count}{suffix}
      </span>
    </motion.div>
  );
}

export function StatCard({ number, label, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      {icon && (
        <motion.div
          className="text-4xl mb-3"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.div>
      )}
      <div className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-500 mb-1">
        {number}
      </div>
      <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
