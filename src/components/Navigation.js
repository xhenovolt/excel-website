'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  const contact = {
    phone: '+256 702 962984',
    email: 'excelislamicschoolbusembatia@gmail.com',
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      {isMobile ? (
        <nav
          className={`fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 transition-shadow duration-300 ${
            isScrolled ? 'shadow-md' : ''
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EIS</span>
              </div>
              <span className="font-bold text-sm text-slate-900 dark:text-slate-50">
                Excel School
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-slate-50 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              >
                <div className="px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block py-2 transition-colors font-medium ${
                        isActive(item.href)
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3 space-y-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      <Phone size={16} />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm break-all"
                    >
                      <Mail size={16} />
                      {contact.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Navigation - 5 Main Items (Others in Mobile Menu) */}
          <div className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center justify-around px-2 overflow-x-auto">
            <Link
              href="/"
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors flex-shrink-0 ${
                isActive('/')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className="text-xl">🏠</span>
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              href="/about"
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors flex-shrink-0 ${
                isActive('/about')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className="text-xl">ℹ️</span>
              <span className="text-xs mt-1">About</span>
            </Link>
            <Link
              href="/academics"
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors flex-shrink-0 ${
                isActive('/academics')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className="text-xl">📚</span>
              <span className="text-xs mt-1">Academics</span>
            </Link>
            <Link
              href="/gallery"
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors flex-shrink-0 ${
                isActive('/gallery')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className="text-xl">📷</span>
              <span className="text-xs mt-1">Gallery</span>
            </Link>
            <Link
              href="/contact"
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors flex-shrink-0 ${
                isActive('/contact')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <span className="text-xl">✉️</span>
              <span className="text-xs mt-1">Contact</span>
            </Link>
          </div>
        </nav>
      ) : (
        /* Desktop Navigation */
        <nav
          className={`fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 transition-all duration-300 ${
            isScrolled ? 'shadow-md' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EIS</span>
              </div>
              <div>
                <h6 className="font-bold text-slate-900 dark:text-slate-50 text-sm">
                  Excel Islamic School
                </h6>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Busembatia, Namutumba
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors font-medium ${
                      isActive(item.href)
                        ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                        : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href="tel:+256702962984"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Spacer for mobile bottom nav */}
      {isMobile && <div className="h-16" />}
    </>
  );
}
