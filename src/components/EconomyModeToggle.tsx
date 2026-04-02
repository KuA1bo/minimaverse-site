'use client';

import { useState, useEffect } from 'react';

/**
 * Toggle button for "Economy Mode" - reduces animations/blurs for better performance
 * Saves preference to localStorage and syncs with html.reduced-motion class
 */
export default function EconomyModeToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const storageKey = 'minimaverse-economy-mode';

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      const isActive = saved === 'true';
      setEnabled(isActive);
      if (isActive) {
        document.documentElement.classList.add('reduced-motion');
      }
    }
  }, []);

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    localStorage.setItem(storageKey, String(newValue));
    
    if (newValue) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
        enabled 
          ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/30' 
          : 'bg-gray-700/30 text-gray-400 hover:bg-gray-700/50 border-gray-600/30'
      }`}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable economy mode' : 'Enable economy mode'}
      title={enabled ? 'Economy mode: ON (animations reduced)' : 'Economy mode: OFF (full visuals)'}
    >
      <span className={`w-2 h-2 rounded-full transition-colors ${enabled ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
      <span>⚡ Economy</span>
    </button>
  );
}
