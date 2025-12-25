'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Send, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socials = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/256702962984',
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0,
    },
    {
      icon: Send,
      label: 'Telegram',
      url: 'https://t.me/excelislamicschool',
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 0.1,
    },
    {
      icon: Music,
      label: 'TikTok',
      url: 'https://tiktok.com/@excelislamicschool',
      color: 'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200',
      delay: 0.2,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/excelislamicschool',
      color: 'bg-pink-500 hover:bg-pink-600',
      delay: 0.3,
    },
  ];

  const bottomOffset = isMobile ? 'bottom-20' : 'bottom-8';

  return (
    <div className={`fixed right-6 ${bottomOffset} z-30`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay }}
                  className="group"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-md group-hover:shadow-lg transition-shadow">
                      {social.label}
                    </span>
                    <button
                      className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200`}
                    >
                      <Icon size={24} />
                    </button>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-primary-600 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
        aria-label="Social media menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
}
