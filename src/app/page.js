'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Globe,
  Sparkles,
  Shield,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import TrustSignals from '@/components/TrustSignals';
import PhilosophyOfEducation from '@/components/PhilosophyOfEducation';
import InstitutionalProof from '@/components/InstitutionalProof';
import LifeAtSchool from '@/components/LifeAtSchool';
import PathSelector from '@/components/PathSelector';
import DailyLifeStructure from '@/components/DailyLifeStructure';
import SupervisionCareSignals from '@/components/SupervisionCareSignals';
import DirectorPresence from '@/components/DirectorPresence';
import SoftActionGateway from '@/components/SoftActionGateway';
import ReadinessCTA from '@/components/ReadinessCTA';
import HeroCarouselMultilingual from '@/components/HeroCarouselMultilingual';
import { useLanguage } from '@/hooks/useLanguage';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Progressive word-by-word text reveal
function ProgressiveReveal({ text, delay = 0 }) {
  const words = text.split(' ');
  
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: 'easeOut',
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

// Character-level text animation for heading
function CharacterReveal({ text, delay = 0, className = '' }) {
  const characters = text.split('');
  
  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.04,
            delay: delay + i * 0.04,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// Hero Carousel Component
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/IMG-20251223-WA0064.jpg',
      title: 'We form young people who think deeply',
      subtitle: 'Act with integrity, and contribute meaningfully to the world.',
    },
    {
      image: '/images/IMG-20251223-WA0065.jpg',
      title: 'Building Leaders with Islamic Values',
      subtitle: 'Rigorous academics rooted in faith and character development.',
    },
    {
      image: '/images/IMG-20251223-WA0073.jpg',
      title: 'Join Our Community',
      subtitle: 'Where excellence meets compassion, and growth never stops.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Blurred Background Image with Color Transition */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover filter blur-md"
                style={{
                  filter: 'blur(12px)',
                }}
                priority={index === 0}
              />
            </div>

            {/* Black & White to Sepia to Color Transition Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(0, 0, 0, 0.3) 0%,
                    rgba(139, 69, 19, 0.15) 25%,
                    rgba(184, 134, 11, 0.1) 50%,
                    rgba(255, 200, 124, 0.05) 75%,
                    transparent 100%
                  )
                `,
              }}
            />

            {/* Actual Image with Reduced Saturation for Elegance */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              style={{
                filter: 'brightness(0.95) saturate(1.1) contrast(1.05)',
              }}
              priority={index === 0}
            />

            {/* Enhanced Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />

            {/* Additional Vignette Effect for Depth */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at center, 
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.2) 50%,
                    rgba(0, 0, 0, 0.4) 100%
                  )
                `,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Opening line */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-white/80 font-light mb-8 md:mb-12"
          >
            This school exists for a reason.
          </motion.p>

          {/* Main heading */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-6 md:mb-8"
          >
            {slides[currentSlide].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 font-light mb-12 md:mb-16 max-w-2xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/about"
              className="px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Our Story
            </a>
            <a
              href="tel:+256702962984"
              className="px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                animate={{ width: currentSlide === index ? 32 : 8 }}
                className={`h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [schoolData, setSchoolData] = useState(null);
  const [academicsData, setAcademicsData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [dailyLifeData, setDailyLifeData] = useState(null);
  const [supervisionData, setSupervisionData] = useState(null);
  const [institutionData, setInstitutionData] = useState(null);
  const [ctasData, setCtasData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { content: languageContent, isLoading: isLanguageLoading } = useLanguage();

  useEffect(() => {
    async function fetchData() {
      try {
        const [schoolRes, academicsRes, aboutRes, dailyLifeRes, supervisionRes, institutionRes, ctasRes] = await Promise.all([
          fetch('/api/school'),
          fetch('/api/academics'),
          fetch('/api/about'),
          fetch('/api/dailyLife'),
          fetch('/api/supervision'),
          fetch('/api/institution'),
          fetch('/api/ctas'),
        ]);

        const schoolJson = await schoolRes.json();
        const academicsJson = await academicsRes.json();
        const aboutJson = await aboutRes.json();
        const dailyLifeJson = await dailyLifeRes.json();
        const supervisionJson = await supervisionRes.json();
        const institutionJson = await institutionRes.json();
        const ctasJson = await ctasRes.json();

        setSchoolData(schoolJson.school);
        setAcademicsData(academicsJson.academics || academicsJson);
        setAboutData(aboutJson.about || aboutJson);
        setDailyLifeData(dailyLifeJson);
        setSupervisionData(supervisionJson);
        setInstitutionData(institutionJson);
        setCtasData(ctasJson);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
          Loading...
        </div>
      </div>
    );
  }

  const academics = schoolData?.academics || [];
  const facilities = schoolData?.facilities || [];
  const whyChooseUs = schoolData?.whyChooseUs || [];
  const stats = schoolData?.stats || {};
  const contact = schoolData?.contact || {};

  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Image Carousel with Multilingual Support */}
      <HeroCarouselMultilingual />

      {/* Content Section */}
      <section id="hero-section" className="bg-white dark:bg-neutral-900 flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Opening line - the thesis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 md:mb-16"
          >
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              {languageContent?.heroSection?.opening || 'This school exists for a reason.'}
            </p>
          </motion.div>

          {/* Main message - progressive reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight heading-gradient-warm-cool mb-6">
              <ProgressiveReveal
                text={languageContent?.heroSection?.mainHeading || 'We form young people who think deeply, act with integrity, and contribute meaningfully to the world.'}
                delay={0.4}
              />
            </h1>
          </motion.div>

          {/* Three opening questions - enhanced visual design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16 md:mb-24 pb-16 md:pb-24 border-b border-neutral-200 dark:border-neutral-800"
          >
            {/* Unified question with gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight heading-gradient-spectrum mb-16">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                {languageContent?.heroSection?.sectionHeading || 'How do we form tomorrow\'s leaders?'}
              </span>
            </h2>

            {/* Three pillars - cleaner layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {languageContent?.heroSection?.pillars?.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + idx * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{pillar.icon}</span>
                      <h3 className="text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick stats - context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 mb-16 md:mb-20 text-center"
          >
            {languageContent?.heroSection?.stats?.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + i * 0.08 }}
              >
                <div className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section - inviting, not pushy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center space-y-8"
          >
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light">
              {languageContent?.heroSection?.ctaText || 'Ready to learn more about our community?'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="px-8 py-3 md:py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                {languageContent?.heroSection?.ctaButtons?.[0]?.text || 'Our Story'}
              </a>
              <a
                href="tel:+256702962984"
                className="px-8 py-3 md:py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-900 transition-colors duration-300"
              >
                {languageContent?.heroSection?.ctaButtons?.[1]?.text || 'Get in Touch'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Director's Presence - Institutional Authority */}
      {institutionData && (
        <DirectorPresence data={institutionData} variant="home" />
      )}

      {/* Trust Signals Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400 mb-4 tracking-wide uppercase">
              Why Families Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-neutral-900 dark:text-neutral-50">
              Proven Excellence Built on Trust
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 font-light max-w-2xl mx-auto">
              More than a decade of consistent quality education grounded in Islamic values and academic rigor.
            </p>
          </motion.div>
          
          <TrustSignals variant="cards" />
        </div>
      </section>

      {/* Chapter 1: Who We Form - The Foundation */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Chapter 1: Foundation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Who is this school forming?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light mb-8"
            >
              Thoughtful learners. Young people rooted in Islamic values, grounded in rigorous academics, and committed to excellence—not for its own sake, but as an expression of their faith and values.
            </motion.p>
          </motion.div>

          {/* Three dimensions of learning */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {academics.map((item, i) => {
              const iconMap = {
                BookOpen: BookOpen,
                Globe: Globe,
                Sparkles: Sparkles,
              };
              const IconComponent = iconMap[item.icon] || BookOpen;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mt-1">
                      <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: What Shapes Them - The Values */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Chapter 2: Character
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
            >
              What values shape their character?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light mb-8"
            >
              A commitment to the whole person. We nurture intellectual rigor alongside spiritual depth. Academic excellence alongside moral courage.
            </motion.p>
          </motion.div>

          {/* Core values - refined layout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {schoolData?.about?.coreValues && schoolData.about.coreValues.slice(0, 6).map((value, i) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: The Future - Leadership & Impact */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
            >
              Chapter 3: Future
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent"
            >
              What future are they growing into?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light mb-8"
            >
              Leaders. Changemakers. People who will think clearly, lead with integrity, and serve their communities with humility and conviction.
            </motion.p>
          </motion.div>

          {/* Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary-50 to-neutral-50 dark:from-primary-900/20 dark:to-neutral-800 rounded-2xl p-10 md:p-12 border border-primary-200 dark:border-primary-800 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Our Promise
              </h3>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                Every student who walks through our doors will receive an education rooted in Islamic values and rigorous academics. They will learn to think deeply, act with integrity, and understand that their education is preparation for a life of meaningful service.
              </p>
            </div>
            <div>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                This is not a place of easy answers or quick fixes. It is a place where young people learn to wrestle with difficult questions, where they discover the connection between faith and reason, where they understand that excellence is an act of worship.
              </p>
            </div>
          </motion.div>

          {/* Director's Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 border-l-4 border-primary-600 pl-8 py-4"
          >
            <p className="text-lg italic text-neutral-700 dark:text-neutral-300 font-light mb-4">
              "Education is not the filling of a pail, but the lighting of a fire. Our mission is to light fires—in the hearts and minds of our students—fires that will burn brightly throughout their lives."
            </p>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                Sheikh Hassan Muhammad Mwaita
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Director & Founder
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section - Practical Reality */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-wide uppercase"
            >
              Our Environment
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Built for learning. Designed for care.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto"
            >
              Our facilities reflect our commitment to creating an environment where young minds can grow and flourish.
            </motion.p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary-600" />
                  <h3 className="text-2xl font-bold">{facility.name}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <ul className="space-y-3">
                  {facility.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (i * 0.1) }}
                      className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="w-2 h-2 bg-primary-600 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase - School Life in Pictures */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-4 tracking-wide uppercase">
              Our Community in Action
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-neutral-900 dark:text-neutral-50">
              See Our Vibrant Campus Life
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-light max-w-2xl mx-auto">
              Moments captured from our daily activities that showcase the engaged learning environment we've created
            </p>
          </motion.div>

          {/* Image Grid - Masonry Style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { src: '/images/IMG-20251223-WA0064.jpg', alt: 'Campus scene 1', className: 'lg:col-span-1 lg:row-span-2' },
              { src: '/images/IMG-20251223-WA0065.jpg', alt: 'Campus scene 2', className: 'lg:col-span-1' },
              { src: '/images/IMG-20251223-WA0066.jpg', alt: 'Campus scene 3', className: 'lg:col-span-1' },
              { src: '/images/IMG-20251223-WA0073.jpg', alt: 'Campus scene 4', className: 'lg:col-span-2' },
              { src: '/images/IMG-20251223-WA0074.jpg', alt: 'Campus scene 5', className: 'lg:col-span-1' },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${image.className} overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="relative h-80 md:h-96 group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              View Full Gallery
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Excel?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We stand apart through our commitment to excellence, discipline, and holistic development
            </p>
          </motion.div>

          {/* Why Choose Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Path Selector - Help Parents Choose */}
      {academicsData?.pathways && (
        <PathSelector data={academicsData.pathways} />
      )}

      {/* Daily Life Structure - Transparency & Order */}
      <div id="daily-life-section">
        {dailyLifeData && (
          <DailyLifeStructure data={dailyLifeData} variant="home" />
        )}
      </div>

      {/* Supervision & Care Signals - Parent Reassurance */}
      <div id="supervision-section">
        {supervisionData && (
          <SupervisionCareSignals data={supervisionData} variant="admissions" />
        )}
      </div>

      {/* Soft Action Gateway - Respectful CTA */}
      {ctasData && (
        <SoftActionGateway data={ctasData} placement="home" />
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {languageContent?.contact?.sectionHeading || 'Get In Touch'}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {languageContent?.contact?.sectionDescription || 'Ready to enroll or have questions? Contact us today!'}
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone 1 */}
            <motion.a
              href={`tel:${contact.phones?.[0]}`}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{languageContent?.contact?.callUs || 'Call Us'}</p>
              <p className="font-bold text-neutral-900 dark:text-neutral-50">
                {contact.phones?.[0]}
              </p>
            </motion.a>

            {/* Phone 2 */}
            <motion.a
              href={`tel:${contact.phones?.[1]}`}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{languageContent?.contact?.alternative || 'Alternative'}</p>
              <p className="font-bold text-neutral-900 dark:text-neutral-50">
                {contact.phones?.[1]}
              </p>
            </motion.a>

            {/* Phone 3 */}
            <motion.a
              href={`tel:${contact.phones?.[2]}`}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <Phone className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{languageContent?.contact?.directLine || 'Direct Line'}</p>
              <p className="font-bold text-neutral-900 dark:text-neutral-50">
                {contact.phones?.[2]}
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{languageContent?.contact?.email || 'Email'}</p>
              <p className="font-bold text-neutral-900 dark:text-neutral-50 text-sm break-all">
                {contact.email}
              </p>
            </motion.a>
          </div>

          {/* Contact Form Area with Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 max-w-4xl mx-auto shadow-lg"
          >
            {/* Google Map */}
            <div className="w-full h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8456789012346!2d33.63049!3d0.7801359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sExcel%20Islamic%20School!2s0.7801359%2C33.63049!5e0!3m2!1sen!2sug!4v1234567890"
              />
            </div>

            {/* Location Info */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">{languageContent?.contact?.visitLocation || 'Visit Our Location'}</h3>
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">{languageContent?.contact?.location || 'Busembatia, Namutumba, Uganda'}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                    {languageContent?.contact?.locationDescription || 'Located just 500 metres from Busembatia town centre, along the Busembatia to Mbale road in Eastern Uganda. Easily accessible and conveniently positioned for families from the region.'}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {languageContent?.contact?.coordinates || 'Coordinates: 0.7801°S, 33.6305°E'}
                  </p>
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                {languageContent?.contact?.visitText || 'Feel free to visit us in person or contact us via phone or email. We welcome prospective students and parents to explore our facilities and meet our team.'}
              </p>

              <a
                href="tel:+256702962984"
                className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors duration-300"
              >
                {languageContent?.contact?.scheduleButton || 'Schedule a Visit'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life at School */}
      {academicsData?.lifeAtSchool && (
        <LifeAtSchool
          data={academicsData.lifeAtSchool}
        />
      )}

      {/* Philosophy of Education - Condensed */}
      {academicsData?.philosophyOfEducation && (
        <PhilosophyOfEducation
          data={academicsData.philosophyOfEducation}
          condensed={true}
        />
      )}

      {/* Institutional Proof - Condensed */}
      {aboutData?.institutionalProof && (
        <InstitutionalProof
          data={aboutData.institutionalProof}
          condensed={true}
        />
      )}

      {/* Footer */}
      <Footer />

      {/* Readiness CTA - Scroll-based, respects user pace */}
      {ctasData && (
        <ReadinessCTA data={ctasData} placement="home" />
      )}

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
