'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const testimonialItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TestimonialsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('parents');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <p className="text-red-600 dark:text-red-400">Error loading testimonials</p>
      </div>
    );
  }

  const { testimonials: t } = data;
  const displayedTestimonials = 
    activeTab === 'parents' ? t.parentTestimonials :
    activeTab === 'alumni' ? t.alumniTestimonials :
    t.staffTestimonials;

  const tabInfo = {
    parents: { emoji: '👨‍👩‍👧', color: 'from-blue-500 to-primary-600' },
    alumni: { emoji: '👨‍🎓', color: 'from-purple-500 to-primary-600' },
    staff: { emoji: '👩‍🏫', color: 'from-emerald-500 to-primary-600' },
  };

  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400 mb-4 tracking-widest uppercase">
              TRUST THROUGH VOICES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-light max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Student Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-primary-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 md:p-12 border border-primary-200 dark:border-primary-900"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Video Container */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-4 tracking-wide uppercase">
                    Student Voice
                  </p>
                  <div className="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.tiktok.com/embed/v2/7563359612603272459"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light leading-tight mb-4 text-neutral-900 dark:text-neutral-50">
                    Hear From Our Students
                  </h2>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                    Our students are the heart of Excel Islamic School. Watch as they share their experiences, their growth, and why they love being part of our community.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-primary-200 dark:border-primary-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">Authentic Voices</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Direct experiences from our learners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">Real Growth</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">See the transformation in our students</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">Community Spirit</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Feel the warmth of our school family</p>
                    </div>
                  </div>
                </div>

                <a
                  href="/admissions"
                  className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300 mt-4"
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-20"
          >
            {[
              { id: 'parents', label: 'Parents' },
              { id: 'alumni', label: 'Alumni' },
              { id: 'staff', label: 'Teachers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tabInfo[tab.id].color} text-white shadow-lg scale-105`
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {displayedTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialItem}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 bg-gradient-to-br from-primary-100 to-neutral-200 dark:from-primary-900/20 dark:to-neutral-800 overflow-hidden">
                  {testimonial.image && !testimonial.image.includes('/images/') ? (
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-primary-100 to-neutral-200 dark:from-primary-900/30 dark:to-neutral-800">
                      {testimonial.image}
                    </div>
                  ) : testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={[
                          '/images/IMG-20251223-WA0064.jpg',
                          '/images/IMG-20251223-WA0065.jpg',
                          '/images/IMG-20251223-WA0066.jpg',
                          '/images/IMG-20251223-WA0073.jpg',
                          '/images/IMG-20251223-WA0074.jpg',
                          '/images/IMG-20251223-WA0076.jpg',
                        ][testimonial.id % 6]}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent-400 text-accent-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed flex-grow italic text-sm md:text-base">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    {/* Author Info */}
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm md:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Trust Signals */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 md:gap-8 text-white text-center"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">100%</p>
              <p className="text-sm md:text-base text-white/90">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
              <p className="text-sm md:text-base text-white/90">Happy Families</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">15+</p>
              <p className="text-sm md:text-base text-white/90">Years Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Discover why families choose Excel Islamic School for transformative education that balances academic excellence with spiritual and moral development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                Explore Admissions
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingActionButton />
      <Footer />
    </div>
  );
}
