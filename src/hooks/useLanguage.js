'use client';

import { useState, useEffect, useCallback } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState('en');
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';
    setLanguage(savedLanguage);
  }, []);

  // Load content based on language
  useEffect(() => {
    async function loadContent() {
      setIsLoading(true);
      try {
        const response = await fetch(`/data/content.${language}.json`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error(`Failed to load content for language: ${language}`, error);
        // Fallback to English
        if (language !== 'en') {
          const fallbackResponse = await fetch('/data/content.en.json');
          const fallbackData = await fallbackResponse.json();
          setContent(fallbackData);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, [language]);

  // Change language and save to localStorage
  const changeLanguage = useCallback((newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    }
  }, [language]);

  return {
    language,
    content,
    isLoading,
    changeLanguage,
  };
}
