'use client';

import { Users, Shield, Compass, Lock, Apple, MessageSquare } from 'lucide-react';

const iconMap = {
  Users,
  Shield,
  Compass,
  Lock,
  Apple,
  MessageSquare,
};

export default function SupervisionCareSignals({ data, variant = 'about' }) {
  if (!data || !data.supervision) {
    return null;
  }

  const signals = data.supervision.signals;
  const isShort = variant === 'admissions';
  const displaySignals = isShort ? signals.slice(0, 3) : signals;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-slate-900 dark:text-slate-50">
            Supervision & Care
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {isShort
              ? 'Your child will not be neglected. Our supervision structures are systematic and consistent.'
              : 'We operate on visible, accountable systems. Your child will not be neglected. These structures protect growth.'}
          </p>
        </div>

        {/* Signals Grid */}
        <div className={`grid gap-6 ${isShort ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displaySignals.map((signal) => {
            const IconComponent = iconMap[signal.icon];

            return (
              <div
                key={signal.id}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-soft hover:shadow-card transition-all"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  {IconComponent && (
                    <div className="flex-shrink-0 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                      <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </div>
                  )}
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-lg">
                    {signal.title}
                  </h3>
                </div>

                {/* Details List */}
                <ul className="space-y-2">
                  {signal.details.map((detail, index) => (
                    <li key={index} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-slate-400 dark:text-slate-600 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* View All Link for Admissions Variant */}
        {isShort && (
          <div className="mt-8 text-center">
            <a
              href="/about#supervision"
              className="inline-block px-6 py-2 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              Explore All Supervision Structures
            </a>
          </div>
        )}

        {/* Closing Statement */}
        {!isShort && (
          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              These are not promises. These are operational systems. Every structure is documented, practiced, and reviewed. Parents have access to report concerns at any time. This is how we maintain the safety and growth your child deserves.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
