'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import TrustSignals from '@/components/TrustSignals';
import InstitutionalProof from '@/components/InstitutionalProof';

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/about');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching about data:', err);
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

  const about = data.about || data;
  const valueIcons = {
    'Islamic Excellence': <Award className="w-8 h-8" />,
    'Academic Rigor': <BookOpen className="w-8 h-8" />,
    'Community': <Users className="w-8 h-8" />,
    'Integrity': <Heart className="w-8 h-8" />
  };

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
      
      {/* Hero Section - Narrative Opening */}
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            {about.hero?.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light mb-8"
          >
            {about.hero?.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light italic"
          >
            {about.hero?.narrative}
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content - Narrative Flow */}
      <div className="bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 space-y-20 md:space-y-28">
          {/* Origin Story */}
          {about.narrative_section && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
                >
                  Chapter 1: Our Beginning
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
                >
                  {about.narrative_section.chapter}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  {about.narrative_section.story}
                </p>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  {about.narrative_section.founding}
                </p>
              </motion.div>
            </motion.section>
          )}

          {/* Vision & Mission - Reimagined */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
              >
                Our Direction
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-12 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent"
              >
                Where we're headed
              </motion.h2>
            </div>

            {about.vision && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 mb-12"
              >
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {about.vision.title}
                </h3>
                <ul className="space-y-4">
                  {about.vision.statements && about.vision.statements.map((statement, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                        {statement}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {about.mission && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 md:p-10 border border-primary-200 dark:border-primary-800"
              >
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                  {about.mission.title}
                </h3>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  {about.mission.statement}
                </p>
              </motion.div>
            )}
          </motion.section>

          {/* Core Values - Intimate Presentation */}
          {about.coreValues && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
                >
                  What We Stand For
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
                >
                  Our values
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-10"
              >
                These are not platitudes. They are lived, practiced, and embedded in every decision we make.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {about.coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    className="space-y-3"
                  >
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      {value.title}
                    </h4>
                    <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Leadership - Personal & Warm */}
          {about.leadership && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
                >
                  Leadership
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent"
                >
                  Who guides us
                </motion.h2>
              </div>

              {about.leadership.members && about.leadership.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="border-l-4 border-primary-500 pl-8 py-6"
                >
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-lg">
                    {member.title}
                  </p>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.section>
          )}

          {/* Closing Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 pt-12 border-t border-neutral-200 dark:border-neutral-800"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              In Practice
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Why this matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light"
            >
              We are not just preparing students for exams. We are forming young people who will think deeply about important questions, who will have the courage to stand for what is right, and who will use their education in service of something larger than themselves.
            </motion.p>
          </motion.section>

          {/* Institutional Proof - Quiet Legitimacy */}
          {about.institutionalProof && (
            <InstitutionalProof
              data={about.institutionalProof}
              condensed={false}
            />
          )}

          {/* Trust Signals Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 pt-12 border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="text-center">
              <p className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400 mb-4 tracking-wide uppercase">
                Built on Results
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Years of proven excellence
              </h2>
              <p className="text-xl text-neutral-700 dark:text-neutral-300 font-light max-w-2xl mx-auto">
                These numbers represent real families, real student achievements, and real transformation.
              </p>
            </div>
            
            <TrustSignals variant="cards" />
          </motion.section>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </>
  );
}
