'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ExpandableSection({
  id,
  title,
  overview,
  sections,
  className = ''
}) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden ${className}`}
    >
      {/* Section Header */}
      <div className="px-6 py-8 md:px-8 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
        <h2 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
          {overview}
        </p>
      </div>

      {/* Expandable Sections */}
      <div className="bg-neutral-50 dark:bg-neutral-950">
        {sections && sections.map((section, index) => (
          <motion.div
            key={section.id || index}
            className="border-b border-neutral-200 dark:border-neutral-700 last:border-b-0"
            initial={false}
          >
            {/* Toggle Button */}
            <button
              onClick={() => toggleSection(section.id || index)}
              className="w-full px-6 py-6 md:px-8 flex items-start justify-between gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 text-left group"
              aria-expanded={openSections[section.id || index] || false}
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {section.name || section.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  {section.description}
                </p>
              </div>
              <motion.div
                animate={{
                  rotate: openSections[section.id || index] ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 mt-1"
              >
                <ChevronDown
                  size={20}
                  className="text-neutral-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                />
              </motion.div>
            </button>

            {/* Expanded Content */}
            <motion.div
              initial={false}
              animate={{
                height: openSections[section.id || index] ? 'auto' : 0,
                opacity: openSections[section.id || index] ? 1 : 0,
              }}
              transition={{
                height: { duration: 0.4, ease: 'easeInOut' },
                opacity: { duration: 0.3 },
              }}
              className="overflow-hidden"
            >
              <div className="px-6 py-6 md:px-8 bg-white dark:bg-neutral-900 space-y-4">
                {/* Teaching Methodology */}
                {section.teachingMethodology && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      Teaching Methodology
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.teachingMethodology}
                    </p>
                  </div>
                )}

                {/* Assessment Philosophy */}
                {section.assessmentPhilosophy && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      Assessment Philosophy
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.assessmentPhilosophy}
                    </p>
                  </div>
                )}

                {/* Character Development */}
                {section.characterDevelopment && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      Character Development
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.characterDevelopment}
                    </p>
                  </div>
                )}

                {/* Overview */}
                {section.overview && !section.teachingMethodology && (
                  <div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.overview}
                    </p>
                  </div>
                )}

                {/* Additional Content */}
                {section.program && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      Program Details
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {section.program}
                    </p>
                  </div>
                )}

                {/* Support List */}
                {section.support && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                      Support & Resources
                    </h4>
                    <ul className="space-y-2">
                      {section.support.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 text-sm"
                        >
                          <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Focus Areas */}
                {section.focus && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                      Focus Areas
                    </h4>
                    <ul className="space-y-2">
                      {section.focus.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 text-sm"
                        >
                          <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Components List */}
                {section.components && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                      Curriculum Components
                    </h4>
                    <ul className="space-y-3">
                      {section.components.map((comp, i) => (
                        <li key={i} className="text-sm">
                          <div className="font-medium text-neutral-900 dark:text-white">
                            {comp.name}
                          </div>
                          <div className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                            {comp.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Subjects List */}
                {section.subjects && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                      Subjects
                    </h4>
                    <ul className="space-y-3">
                      {section.subjects.map((subject, i) => (
                        <li key={i} className="text-sm">
                          <div className="font-medium text-neutral-900 dark:text-white">
                            {subject.name}
                          </div>
                          <div className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                            {subject.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Facilities */}
                {section.facilities && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                      Facilities
                    </h4>
                    <ul className="space-y-2">
                      {section.facilities.map((facility, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 text-sm"
                        >
                          <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
