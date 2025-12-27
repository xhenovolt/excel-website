'use client';

import { useEffect, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function ReadinessCTA({ data, placement = 'home' }) {
  const [readinessLevel, setReadinessLevel] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!data || !data.softActions || !data.softActions.readinessTriggers) {
      return;
    }

    const triggers = data.softActions.readinessTriggers;
    const scrollSections = Object.keys(triggers);

    const handleScroll = () => {
      const viewport = window.innerHeight;
      let newLevel = 0;

      // Check each section
      const dailyLifeSection = document.getElementById('daily-life-section');
      if (dailyLifeSection) {
        const rect = dailyLifeSection.getBoundingClientRect();
        if (rect.top < viewport * 0.8) {
          newLevel = Math.max(newLevel, 2);
        }
      }

      const supervisionSection = document.getElementById('supervision-section');
      if (supervisionSection) {
        const rect = supervisionSection.getBoundingClientRect();
        if (rect.top < viewport * 0.8) {
          newLevel = Math.max(newLevel, 3);
        }
      }

      // Hero section
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < viewport * 0.3) {
          newLevel = Math.max(newLevel, 1);
        }
      }

      setReadinessLevel(newLevel);

      // Show CTA if scrolled past hero
      if (newLevel >= 1 && !dismissed) {
        setShowCTA(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, dismissed]);

  if (
    !showCTA ||
    dismissed ||
    !data ||
    !data.softActions ||
    readinessLevel === 0
  ) {
    return null;
  }

  const triggers = data.softActions.readinessTriggers;
  let triggerKey = 'firstVisit';

  if (readinessLevel >= 3) triggerKey = 'afterSupervisionSection';
  else if (readinessLevel >= 2) triggerKey = 'afterDailyLifeSection';
  else if (readinessLevel >= 1) triggerKey = 'afterHeroSection';

  const trigger = triggers[triggerKey];
  if (!trigger) return null;

  // Get actions for this readiness level
  const allActions = data.softActions.primaryActions;
  const actionIds = trigger.actions;
  const contextActions = allActions.filter((a) => actionIds.includes(a.id));

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-elevated border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 px-4 py-3 text-white text-sm font-medium">
          <p>{trigger.message}</p>
        </div>

        {/* Actions */}
        <div className="p-4 space-y-2">
          {contextActions.map((action) => (
            <button
              key={action.id}
              onClick={() => {
                if (action.action === 'contact') {
                  // Show contact options (phone call for now)
                  window.location.href = `tel:${data.softActions.contactOptions.phone.value}`;
                } else if (action.action === 'navigation') {
                  window.location.href = action.link;
                }
                setDismissed(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-sm font-medium"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Close Button */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setDismissed(true)}
            className="w-full text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors py-1"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
