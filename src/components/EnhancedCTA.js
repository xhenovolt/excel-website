'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

export function EnhancedCTA({ 
  primary = 'Learn More',
  secondary = 'Contact Us',
  onPrimary,
  onSecondary,
  variant = 'default',
  size = 'md'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 md:py-4 text-base',
    lg: 'px-10 py-4 md:py-5 text-lg',
  };

  const variantClasses = {
    default: {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white',
      secondary: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-900',
    },
    gradient: {
      primary: 'bg-gradient-to-r from-primary-600 to-emerald-600 hover:from-primary-700 hover:to-emerald-700 text-white',
      secondary: 'border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400',
    },
  };

  const variantStyle = variantClasses[variant];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.button
        onClick={onPrimary}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${sizeClasses[size]} ${variantStyle.primary} font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2`}
      >
        {primary}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={18} />
        </motion.div>
      </motion.button>

      <motion.button
        onClick={onSecondary}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${sizeClasses[size]} ${variantStyle.secondary} font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2`}
      >
        {secondary}
      </motion.button>
    </div>
  );
}

export function CtaCard({ 
  icon,
  title,
  description,
  cta,
  onClick,
  isLoading = false,
  success = false
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-900 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        className="text-4xl mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
        {description}
      </p>

      <motion.button
        onClick={onClick}
        disabled={isLoading}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isLoading ? 1 : 0.98 }}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-lg transition-all duration-300"
      >
        {isLoading && <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />}
        {success && <Check size={18} />}
        {!isLoading && !success && cta}
        {isLoading && 'Processing...'}
        {success && 'Done!'}
      </motion.button>
    </motion.div>
  );
}

export function InlineNotification({ 
  type = 'info', 
  message, 
  onClose,
  autoClose = true
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (autoClose) {
    setTimeout(() => setIsVisible(false), 5000);
  }

  const typeStyles = {
    info: 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-100',
    success: 'bg-emerald-50 dark:bg-emerald-900 border-emerald-200 dark:border-emerald-700 text-emerald-800 dark:text-emerald-100',
    warning: 'bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-100',
    error: 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700 text-red-800 dark:text-red-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      exit={{ opacity: 0 }}
      className={`border rounded-lg p-4 flex items-start gap-3 ${typeStyles[type]}`}
    >
      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="text-current hover:opacity-70 transition-opacity"
      >
        ✕
      </button>
    </motion.div>
  );
}
