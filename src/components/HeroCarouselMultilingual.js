'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';

export default function HeroCarouselMultilingual() {
  const { content, isLoading } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = content?.heroCarousel?.slides || [];

  useEffect(() => {
    if (!isLoading && slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isLoading, slides.length]);

  if (isLoading || !content) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-neutral-900" />
    );
  }

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
            {/* Blurred Background Image */}
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

            {/* Sepia Transition Overlay */}
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

            {/* Actual Image */}
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

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />

            {/* Vignette Effect */}
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
            {content.heroCarousel?.opening}
          </motion.p>

          {/* Main heading */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-6 md:mb-8"
          >
            {slides[currentSlide]?.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 font-light mb-12 md:mb-16 max-w-2xl mx-auto"
          >
            {slides[currentSlide]?.subtitle}
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
              {content.heroSection?.ctaButtons?.[0]?.text || 'Our Story'}
            </a>
            <a
              href="tel:+256702962984"
              className="px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              {content.heroSection?.ctaButtons?.[1]?.text || 'Get in Touch'}
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
