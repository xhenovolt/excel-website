'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';

export default function AcademicsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('nursery');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/academics');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching academics data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <p className="text-red-600 dark:text-red-400">Error loading page</p>
      </div>
    );
  }

  const academics = data.academics || data;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero Section - Narrative Framing */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-4 md:px-8 bg-white dark:bg-neutral-900 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
          >
            Our Academic Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Excellence without compromise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light"
          >
            We combine rigorous Islamic theology with world-class secular education. Not two separate tracks, but one integrated journey toward excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content - Narrative Structure */}
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 space-y-20 md:space-y-28">
          {/* Three Pillars */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Our Curriculum
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent"
            >
              Three pillars, one foundation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-16"
            >
              Our curriculum is built on the integration of three equally important dimensions of learning.
            </motion.p>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Islamic Theology",
                  description: "Deep engagement with the Quran, Hadith, Fiqh, and Aqeedah. Not a subject studied in isolation, but the lens through which we understand all knowledge."
                },
                {
                  title: "Secular Excellence",
                  description: "Rigorous instruction in Mathematics, English, Sciences, and Social Studies. We prepare students for national examinations and develop their intellectual capabilities."
                },
                {
                  title: "Quran Memorization",
                  description: "Students engaged in Hifz (memorization) receive dedicated instruction alongside their regular curriculum, preserving the Word of Allah while excelling academically."
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How We Teach */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Pedagogical Approach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
            >
              How we teach matters
            </motion.h2>

            <div className="space-y-8">
              {academics.teachingMethods && academics.teachingMethods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border-l-4 border-primary-500 pl-8 py-4"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Grade Levels */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Our Programs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              From Nursery to Primary
            </motion.h2>

            <div className="space-y-8">
              {academics.programs && academics.programs.map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 border border-neutral-200 dark:border-neutral-700"
                >
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                    {program.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Promise */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-10 md:p-12 border border-primary-200 dark:border-primary-800 space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-wide uppercase"
            >
              Our Commitment
            </motion.p>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
              We measure success differently
            </h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              Our students don't just pass exams—though they do, consistently achieving high success rates. They develop the habits of mind that lead to deep learning. They learn to ask questions, think critically, and understand the connection between their studies and their faith. That's what excellence really means.
            </p>
          </motion.section>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </>
  );
}
