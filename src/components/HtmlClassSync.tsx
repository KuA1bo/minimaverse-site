'use client';

import { useEffect } from 'react';


export default function HtmlClassSync() {
  useEffect(() => {
    const html = document.documentElement;
    const storageKey = 'minimaverse-economy-mode';


    const osPrefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


    const nav = navigator as any;
    const cores = nav.hardwareConcurrency as number | undefined;
    const memory = nav.deviceMemory as number | undefined;

    const isExtremelyWeak =
      (typeof cores === 'number' && cores <= 2) &&
      (typeof memory === 'number' && memory <= 2);


    const saved = localStorage.getItem(storageKey);

    let shouldReduce = false;

    if (saved !== null) {

      shouldReduce = saved === 'true';
    } else {

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
