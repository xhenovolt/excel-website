'use client';

import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    setIsLoading(true);
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        setTheme(savedTheme);
        applyTheme(savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = prefersDark ? 'dark' : 'light';
        setTheme(initialTheme);
        applyTheme(initialTheme);
      }
    }
    setIsLoading(false);
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme) => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (newTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  };

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
      
      return newTheme;
    });
  }, []);

  // Set specific theme
  const setThemeMode = useCallback((newTheme) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
      applyTheme(newTheme);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
    }
  }, [theme]);

  return {
    theme,
    isLoading,
    toggleTheme,
    setThemeMode,
  };
}
