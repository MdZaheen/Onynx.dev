'use client';

import { useEffect } from 'react';

interface PageAnimatorProps {
  children: React.ReactNode;
}

export default function PageAnimator({ children }: PageAnimatorProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Master animation sequence
    const runPageEntranceAnimation = () => {
      // Get all elements
      const body = document.body;
      const pageContainer = document.querySelector('[data-animate="page-container"]');
      const backgroundImage = document.querySelector('[data-animate="background"]');
      const logo = document.querySelector('[data-animate="logo"]');
      const tagline = document.querySelector('[data-animate="tagline"]');
      const mainHeading = document.querySelector('[data-animate="main-heading"]');
      const subHeading = document.querySelector('[data-animate="sub-heading"]');
      const terminalLines = document.querySelectorAll('[data-animate="terminal-line"]');
      const eleganceText = document.querySelector('[data-animate="elegance"]');
      const samuraiImage = document.querySelector('[data-animate="samurai"]');
      const creativeCoders = document.querySelector('[data-animate="creative-coders"]');

      // Initialize all elements as hidden
      body.style.overflow = 'hidden';
      body.style.cursor = 'wait';

      // Start the sequence with optimized timing
      setTimeout(() => {
        // 1. Page container fade in (immediate)
        pageContainer?.classList.add('animate-page-in');
        
        // 2. Background image reveal (100ms delay)
        setTimeout(() => {
          backgroundImage?.classList.add('animate-bg-in');
        }, 100);

        // 3. Logo slide in (200ms delay)
        setTimeout(() => {
          logo?.classList.add('animate-logo-in');
        }, 200);

        // 4. Tagline slide in (350ms delay)
        setTimeout(() => {
          tagline?.classList.add('animate-tagline-in');
        }, 350);

        // 5. Main heading scale up (500ms delay)
        setTimeout(() => {
          mainHeading?.classList.add('animate-heading-in');
        }, 500);

        // 6. Sub heading fade up (650ms delay)
        setTimeout(() => {
          subHeading?.classList.add('animate-subheading-in');
        }, 650);

        // 7. Terminal lines staggered (800ms start)
        terminalLines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add('animate-terminal-in');
          }, 800 + (index * 100));
        });

        // 8. Samurai image reveal (1100ms delay)
        setTimeout(() => {
          samuraiImage?.classList.add('animate-samurai-in');
        }, 1100);

        // 9. Elegance text float in (1300ms delay)
        setTimeout(() => {
          eleganceText?.classList.add('animate-elegance-in');
        }, 1300);

        // 10. Creative coders slide in (1450ms delay)
        setTimeout(() => {
          creativeCoders?.classList.add('animate-coders-in');
        }, 1450);

        // 11. Remove loading state (1800ms delay)
        setTimeout(() => {
          body.style.overflow = 'auto';
          body.style.cursor = 'default';
        }, 1800);

      }, 50);
    };

    // Run animation on mount
    runPageEntranceAnimation();

  }, []);

  return <div data-animate="page-container">{children}</div>;
}
