'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import ExpandableSection from '@/components/ExpandableSection';
import PhilosophyOfEducation from '@/components/PhilosophyOfEducation';
import LearningJourney from '@/components/LearningJourney';
import DailyStructure from '@/components/DailyStructure';
import LifeAtSchool from '@/components/LifeAtSchool';
import StudentSnapshots from '@/components/StudentSnapshots';
import GraduateOutcomes from '@/components/GraduateOutcomes';

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
            We combine rigorous Islamic theology with rigorous secular education. Not two separate tracks, but one integrated journey toward excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content - Narrative Structure */}
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 space-y-20 md:space-y-28">
          {/* Philosophy of Education */}
          {academics?.philosophyOfEducation && (
            <PhilosophyOfEducation
              data={academics.philosophyOfEducation}
              condensed={false}
            />
          )}

          {/* Learning Journey Timeline */}
          {academics?.learningJourney && (
            <LearningJourney
              data={academics.learningJourney}
              condensed={false}
            />
          )}

          {/* Daily Structure */}
          {academics?.dailyStructure && (
            <DailyStructure
              data={academics.dailyStructure}
            />
          )}

          {/* Life at School */}
          {academics?.lifeAtSchool && (
            <LifeAtSchool
              data={academics.lifeAtSchool}
            />
          )}

          {/* Student Snapshots */}
          {academics?.studentSnapshots && (
            <StudentSnapshots
              data={academics.studentSnapshots}
              variant="grid"
            />
          )}

          {/* Graduate Outcomes */}
          {academics?.graduateOutcomes && (
            <GraduateOutcomes
              data={academics.graduateOutcomes}
              condensed={false}
            />
          )}

          {/* Academic Programs - Expandable Sections */}
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
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Integrated academic excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-12"
            >
              Each program below combines rigorous Islamic education with rigorous secular academics. Click to expand and discover our approach to teaching methodology, assessment philosophy, and character development.
            </motion.p>

            <div className="space-y-8">
              {/* Nursery Program */}
              {academics?.nurseryProgram && (
                <ExpandableSection
                  id="nursery"
                  title={academics.nurseryProgram.title}
                  overview={academics.nurseryProgram.overview}
                  sections={[academics.nurseryProgram]}
                />
              )}

              {/* Islamic Studies */}
              {academics?.islamicStudies && (
                <ExpandableSection
                  id="islamic"
                  title={academics.islamicStudies.title}
                  overview={academics.islamicStudies.overview}
                  sections={[academics.islamicStudies]}
                />
              )}

              {/* Qur'an Memorisation */}
              {academics?.quranMemorisation && (
                <ExpandableSection
                  id="hifz"
                  title={academics.quranMemorisation.title}
                  overview={academics.quranMemorisation.overview}
                  sections={[academics.quranMemorisation]}
                />
              )}

              {/* Secular Curriculum */}
              {academics?.secularCurriculum && (
                <ExpandableSection
                  id="secular"
                  title={academics.secularCurriculum.title}
                  overview={academics.secularCurriculum.overview}
                  sections={[academics.secularCurriculum]}
                />
              )}
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
              Education that forms minds, strengthens faith, and builds character
            </h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              Our students don't just pass exams—though they consistently achieve high success rates. They develop the intellectual virtues and spiritual foundation that lead to a lifetime of meaningful learning. They learn to think deeply, question thoughtfully, and understand that knowledge is a trust from Allah. That's what true excellence means.
            </p>
          </motion.section>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </>
  );
}
