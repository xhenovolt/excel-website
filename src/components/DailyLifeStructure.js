'use client';

import { useState } from 'react';
import { ChevronDown, Clock, Sunrise, Coffee, BookOpen, Sun, Pencil, Cloud, ArrowRight, Moon, Utensils, Sunset, Users, Bed, Compass } from 'lucide-react';

const iconMap = {
  Clock,
  Sunrise,
  Coffee,
  BookOpen,
  Sun,
  Pencil,
  Cloud,
  ArrowRight,
  Moon,
  Utensils,
  Sunset,
  Users,
  Bed,
  Compass,
};

const categoryColors = {
  routine: 'border-l-slate-400 bg-slate-50 dark:bg-slate-900/30',
  spiritual: 'border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
  learning: 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20',
  guidance: 'border-l-purple-500 bg-purple-50 dark:bg-purple-900/20',
};

const categoryLabels = {
  routine: 'Structure & Order',
  spiritual: 'Islamic Foundation',
  learning: 'Academic & Quranic',
  guidance: 'Character Development',
};

export default function DailyLifeStructure({ data, variant = 'home' }) {
  const [activeTab, setActiveTab] = useState('day');
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!data || !data.dailyLife) {
    return null;
  }

  const schedule = activeTab === 'day' ? data.dailyLife.dayStudentSchedule : data.dailyLife.boardingStudentSchedule;
  const isCondensed = variant === 'home';
  const displaySchedule = isCondensed ? schedule.slice(0, 4) : schedule;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 heading-gradient-green">
            Daily Life Structure
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Every day follows a rhythm of instruction, prayer, community, and reflection. Structure protects growth. Consistency enables learning.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab('day')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'day'
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Day Students
          </button>
          <button
            onClick={() => setActiveTab('boarding')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'boarding'
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Boarding Students
          </button>
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          {displaySchedule.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`border-l-4 rounded-r-lg p-4 transition-all ${categoryColors[item.category]}`}
              >
                {/* Summary */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full flex items-start gap-3 text-left"
                >
                  {IconComponent && (
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                        {item.time}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                      {item.activity}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-500 dark:text-slate-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Details */}
                {isExpanded && (
                  <div className="mt-3 ml-8 pt-3 border-t border-slate-300/30 dark:border-slate-700/30">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Link for Home Variant */}
        {isCondensed && (
          <div className="mt-8 text-center">
            <a
              href="/academics#daily-life"
              className="inline-block px-6 py-2 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              View Full Schedule
            </a>
          </div>
        )}

        {/* Legend for Full Variant */}
        {!isCondensed && (
          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Daily Structure Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-12 rounded-l ${categoryColors[key].split(' ')[0]}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
