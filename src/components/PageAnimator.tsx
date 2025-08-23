'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface PageAnimatorProps {
  children: React.ReactNode;
}

export default function PageAnimator({ children }: PageAnimatorProps) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Reset all animations before starting new ones
    const resetAnimations = () => {
      const elementsToReset = [
        '[data-animate="page-container"]',
        '[data-animate="background"]',
        '[data-animate="logo"]',
        '[data-animate="tagline"]',
        '[data-animate="main-heading"]',
        '[data-animate="sub-heading"]',
        '[data-animate="elegance"]',
        '[data-animate="samurai"]',
        '[data-animate="creative-coders"]'
      ];

      elementsToReset.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          // Remove all animation classes
          element.classList.remove(
            'animate-page-in',
            'animate-bg-in',
            'animate-logo-in',
            'animate-tagline-in',
            'animate-heading-in',
            'animate-subheading-in',
            'animate-samurai-in',
            'animate-elegance-in',
            'animate-coders-in'
          );
        });
      });
    };

    // Master animation sequence
    const runPageEntranceAnimation = () => {
      // Get all elements
      const body = document.body;
      const pageContainer = document.querySelector('[data-animate="page-container"]');
      
      // Only run full home page animations if we're on the home page
      const isHomePage = pathname === '/';
      
      if (!isHomePage) {
        // For non-home pages, just do a simple page fade-in
        body.style.overflow = 'auto';
        body.style.cursor = 'default';
        pageContainer?.classList.add('animate-page-in');
        return;
      }
      
      // Home page specific elements
      const backgroundImage = document.querySelector('[data-animate="background"]');
      const logo = document.querySelector('[data-animate="logo"]');
      const tagline = document.querySelector('[data-animate="tagline"]');
      const mainHeading = document.querySelector('[data-animate="main-heading"]');
      const subHeading = document.querySelector('[data-animate="sub-heading"]');
      const eleganceText = document.querySelector('[data-animate="elegance"]');
      const samuraiImage = document.querySelector('[data-animate="samurai"]');
      const creativeCoders = document.querySelector('[data-animate="creative-coders"]');

      // Initialize all elements as hidden
      // Don't disable overflow completely to work with Lenis
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

        // 7. Samurai image reveal (800ms delay - moved earlier)
        setTimeout(() => {
          samuraiImage?.classList.add('animate-samurai-in');
        }, 800);

        // 8. Elegance text float in (1000ms delay)
        setTimeout(() => {
          eleganceText?.classList.add('animate-elegance-in');
        }, 1000);

        // 9. Creative coders slide in (1150ms delay)
        setTimeout(() => {
          creativeCoders?.classList.add('animate-coders-in');
        }, 1150);

        // 10. Remove loading state (1500ms delay - shortened)
        setTimeout(() => {
          body.style.overflow = 'auto';
          body.style.cursor = 'default';
        }, 1500);

      }, 50);
    };

    // Use requestAnimationFrame to ensure smooth transitions without visible resets
    requestAnimationFrame(() => {
      resetAnimations();
      
      // Use a longer delay to prevent flash between reset and animation
      requestAnimationFrame(() => {
        runPageEntranceAnimation();
      });
    });

  }, [pathname]); // Re-run when pathname changes

  return <div data-animate="page-container">{children}</div>;
}
