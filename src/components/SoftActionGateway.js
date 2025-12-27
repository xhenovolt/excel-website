'use client';

import { useState } from 'react';
import { MapPin, Phone, FileText, ArrowRight, X } from 'lucide-react';

const iconMap = {
  MapPin,
  Phone,
  FileText,
};

export default function SoftActionGateway({ data, placement = 'home' }) {
  const [expandedId, setExpandedId] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !data || !data.softActions) {
    return null;
  }

  const actions = data.softActions.primaryActions;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold heading-gradient-lime mb-3">
            What Would Help You Most?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            No pressure. No forms unless you ask. Just options that respect your pace.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {actions.map((action) => {
            const IconComponent = iconMap[action.icon];
            const isExpanded = expandedId === action.id;

            return (
              <div
                key={action.id}
                className={`rounded-lg border transition-all ${
                  isExpanded
                    ? 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-card'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {/* Summary */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : action.id)}
                  className="w-full text-left p-6 flex items-start gap-4"
                >
                  {IconComponent && (
                    <div className="flex-shrink-0 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                      <IconComponent className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                      {action.label}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {action.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-600 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-200 dark:border-slate-700 space-y-4">
                    {/* Explainer */}
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {action.explainer}
                    </p>

                    {/* What Happens Next */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded p-3 border border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2">
                        What Happens Next
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {action.nextStep}
                      </p>
                    </div>

                    {/* CTA Button */}
                    {action.action === 'contact' && (
                      <ContactOptions ctas={data.softActions.contactOptions} />
                    )}

                    {action.action === 'navigation' && (
                      <a
                        href={action.link}
                        className="block w-full text-center py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium rounded hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                      >
                        {action.cta}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Close hint */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Take your time. There's no rush.
          </p>
          <button
            onClick={() => setDismissed(true)}
            className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-400 transition-colors"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

// Contact Options Sub-component
function ContactOptions({ ctas }) {
  return (
    <div className="space-y-2">
      {Object.entries(ctas).map(([key, option]) => (
        <a
          key={key}
          href={
            key === 'phone' || key === 'whatsapp'
              ? `tel:${option.value}`
              : `mailto:${option.value}`
          }
          className="flex items-center gap-2 w-full p-3 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          {option.label}
        </a>
      ))}
    </div>
  );
}
