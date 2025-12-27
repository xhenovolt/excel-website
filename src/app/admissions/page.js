'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, UserCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import PathSelector from '@/components/PathSelector';
import AdmissionsLadder from '@/components/AdmissionsLadder';
import DailyLifeStructure from '@/components/DailyLifeStructure';
import SupervisionCareSignals from '@/components/SupervisionCareSignals';
import SoftActionGateway from '@/components/SoftActionGateway';
import ReadinessCTA from '@/components/ReadinessCTA';

export default function AdmissionsPage() {
  const [data, setData] = useState(null);
  const [academicsData, setAcademicsData] = useState(null);
  const [dailyLifeData, setDailyLifeData] = useState(null);
  const [supervisionData, setSupervisionData] = useState(null);
  const [ctasData, setCtasData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [admissionsRes, academicsRes, dailyLifeRes, supervisionRes, ctasRes] = await Promise.all([
          fetch('/api/admissions'),
          fetch('/api/academics'),
          fetch('/api/dailyLife'),
          fetch('/api/supervision'),
          fetch('/api/ctas'),
        ]);

        if (!admissionsRes.ok || !academicsRes.ok) {
          throw new Error('Failed to fetch');
        }

        const admissionsJson = await admissionsRes.json();
        const academicsJson = await academicsRes.json();
        const dailyLifeJson = await dailyLifeRes.json();
        const supervisionJson = await supervisionRes.json();
        const ctasJson = await ctasRes.json();

        setData(admissionsJson);
        setAcademicsData(academicsJson);
        setDailyLifeData(dailyLifeJson);
        setSupervisionData(supervisionJson);
        setCtasData(ctasJson);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <p className="text-red-600 dark:text-red-400">Error loading page</p>
      </div>
    );
  }

  const admissions = data.admissions || data;

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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {admissions.hero?.title || 'Admissions'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {admissions.hero?.subtitle || ''}
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Application Process */}
            {admissions.applicationProcess && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                    Application Process
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                </div>

                <div className="space-y-4">
                  {admissions.applicationProcess.steps?.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 md:gap-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        {index < admissions.applicationProcess.steps.length - 1 && (
                          <div className="w-1 h-16 bg-primary-200 dark:bg-primary-700/50 mt-2 mb-2"></div>
                        )}
                      </div>
                      <div className="pt-2 pb-8">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {admissions.applicationProcess.timeline && (
                  <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-700/50">
                    <h4 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-2">
                      Timeline
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      {admissions.applicationProcess.timeline}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Requirements */}
            {admissions.requirements && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                    Admission Requirements
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {admissions.requirements.categories?.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700"
                    >
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                        {category.name}
                      </h3>
                      <ul className="space-y-3">
                        {category.items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Programs Offered */}
            {admissions.programs && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                    Programs Offered
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {admissions.programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-gradient-to-br from-primary-50 to-secondary-50/30 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-3">
                        {program.name}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                          Age Range: {program.ageRange}
                        </p>
                        {program.duration && (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {program.duration}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Day vs Boarding */}
            {admissions.dayVsBoardingComparison && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                    Day & Boarding Programs
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {admissions.dayVsBoardingComparison.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-xl p-8 border-2"
                      style={{
                        background: index === 0
                          ? 'linear-gradient(135deg, rgba(26, 58, 82, 0.05), rgba(168, 103, 74, 0.05))'
                          : 'linear-gradient(135deg, rgba(61, 111, 160, 0.05), rgba(26, 58, 82, 0.05))',
                        borderColor: index === 0 ? '#1a3a52' : '#3d6fa0'
                      }}
                    >
                      <h3 className="text-2xl font-bold mb-6" style={{ color: index === 0 ? '#1a3a52' : '#3d6fa0' }}>
                        {option.type}
                      </h3>
                      <ul className="space-y-3">
                        {option.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: index === 0 ? '#a8674a' : '#3d6fa0' }}></span>
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Terms & Fees */}
            {admissions.academicTerms && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                    Academic Terms & Holidays
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                </div>

                <div className="space-y-4">
                  {admissions.academicTerms.map((term, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-800/50 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="flex items-start gap-4">
                        <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                            {term.name}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {term.period}
                          </p>
                          {term.note && (
                            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                              {term.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Fees */}
            {admissions.fees && (
              <motion.div variants={item} className="bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/20 dark:to-accent-800/10 rounded-2xl p-8 border border-accent-200 dark:border-accent-700/50">
                <h2 className="text-3xl font-bold text-accent-900 dark:text-accent-100 mb-6">
                  {admissions.fees.title}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  {admissions.fees.description}
                </p>
                <div className="space-y-4">
                  {admissions.fees.note && (
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 border-l-4 border-accent-600">
                      <p className="text-neutral-700 dark:text-neutral-300">
                        <span className="font-semibold">Note:</span> {admissions.fees.note}
                      </p>
                    </div>
                  )}
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-4">
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <span className="font-semibold text-primary-600 dark:text-primary-400">Contact our admissions office</span> for detailed fee structure and available payment options.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              variants={item}
              className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Us?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our admissions office to start the application process today.
              </p>
              <motion.a
                href="tel:+256702962984"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-600 font-bold px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Call Us Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Admissions Ladder - Fear Reduction */}
      {data?.admissions?.admissionsLadder && (
        <AdmissionsLadder data={data.admissions.admissionsLadder} />
      )}

      {/* Path Selector - Full Version on Admissions Page */}
      {academicsData?.academics?.pathways && (
        <PathSelector data={academicsData.academics.pathways} />
      )}

      {/* Daily Life Structure - Show Student Day */}
      {dailyLifeData && (
        <DailyLifeStructure data={dailyLifeData} variant="home" />
      )}

      {/* Supervision & Care Signals - Short version for admissions */}
      {supervisionData && (
        <SupervisionCareSignals data={supervisionData} variant="admissions" />
      )}

      {/* Soft Action Gateway - Respectful Next Steps */}
      {ctasData && (
        <SoftActionGateway data={ctasData} placement="admissions" />
      )}

      <Footer />
      <FloatingActionButton />

      {/* Readiness CTA for Admissions Page */}
      {ctasData && (
        <ReadinessCTA data={ctasData} placement="admissions" />
      )}
    </>
  );
}
