'use client';

import { ArrowRight } from 'lucide-react';

export default function DirectorPresence({ data, variant = 'about' }) {
  if (!data || !data.institution || !data.institution.directorMessage) {
    return null;
  }

  const { name, title, message } = data.institution.directorMessage;
  const isCondensed = variant === 'home';

  return (
    <section className={`${isCondensed ? 'py-8 md:py-12' : 'py-12 md:py-16'} px-4 md:px-8`}>
      <div className="max-w-3xl mx-auto">
        <div className="border-l-4 border-slate-800 dark:border-slate-200 pl-6 md:pl-8">
          {/* Heading */}
          <h2 className={`font-semibold text-slate-900 dark:text-slate-50 mb-4 ${
            isCondensed ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
          }`}>
            {isCondensed ? 'Leadership' : 'Institutional Direction'}
          </h2>

          {/* Director Info */}
          <div className="mb-6">
            <p className="font-semibold text-slate-900 dark:text-slate-50 text-lg mb-1">
              {name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              {title}
            </p>
          </div>

          {/* Message */}
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-base md:text-lg">
            {message}
          </p>

          {/* CTA for Home Variant */}
          {isCondensed && (
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Learn about our institution
              <ArrowRight className="w-4 h-4" />
            </a>
          )}

          {/* Full Context for About Page */}
          {!isCondensed && (
            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                This institution operates on principle, not trend. Authority is earned through consistency, transparency, and stewardship. The director's presence is felt in the structure of each day, not in the absence of systems.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
