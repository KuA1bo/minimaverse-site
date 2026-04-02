'use client';

import { useEffect } from 'react';

/**
 * Syncs 'reduced-motion' class to <html> element based on:
 * 1. User preference saved in localStorage (manual toggle priority)
 * 2. OS-level prefers-reduced-motion (accessibility)
 * 3. VERY conservative auto-detect: only on extremely weak hardware
 */
export default function HtmlClassSync() {
  useEffect(() => {
    const html = document.documentElement;
    const storageKey = 'minimaverse-economy-mode';
    
    // Check OS-level preference (accessibility)
    const osPrefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // VERY conservative auto-detect: only on extremely weak hardware
    // (≤2 cores AND ≤2GB RAM) — avoids false positives on modern mobile/tablets
    const isExtremelyWeak = 
      (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 2) &&
      (typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 2);
    
    // Load saved preference (manual toggle) — this takes priority
    const saved = localStorage.getItem(storageKey);
    
    let shouldReduce = false;
    
    if (saved !== null) {
      // User made a choice — respect it
      shouldReduce = saved === 'true';
    } else {
      // No user choice yet — use OS preference or extremely weak hardware
      shouldReduce = osPrefersReduced || isExtremelyWeak;
    }
    
    if (shouldReduce) {
      html.classList.add('reduced-motion');
    } else {
      html.classList.remove('reduced-motion');
    }
  }, []);
  
  return null;
}
