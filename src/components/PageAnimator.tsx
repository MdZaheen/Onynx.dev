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

    // Master animation sequence with enhanced effects
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
      const terminalTexts = document.querySelectorAll('.terminalText p');

      // Initialize all elements as hidden
      body.style.cursor = 'wait';
      body.style.pointerEvents = 'none';

      // Enhanced animation sequence with stagger effects
      setTimeout(() => {
        // 1. Page container with dramatic entrance (immediate)
        pageContainer?.classList.add('animate-page-in');
        
        // 2. Background image with parallax effect (50ms delay)
        setTimeout(() => {
          backgroundImage?.classList.add('animate-bg-in');
        }, 50);

        // 3. Logo with magnetic slide (150ms delay)
        setTimeout(() => {
          logo?.classList.add('animate-logo-in');
          // Add a subtle glow effect on logo appearance
          if (logo instanceof HTMLElement) {
            logo.style.textShadow = '0 0 20px rgba(161, 0, 0, 0.5)';
            setTimeout(() => {
              logo.style.textShadow = '';
            }, 1000);
          }
        }, 150);

        // 4. Tagline with typewriter effect (300ms delay)
        setTimeout(() => {
          tagline?.classList.add('animate-tagline-in');
        }, 300);

        // 5. Main heading with impact scale (450ms delay)
        setTimeout(() => {
          mainHeading?.classList.add('animate-heading-in');
          // Add screen shake effect for impact
          if (mainHeading instanceof HTMLElement) {
            mainHeading.classList.add('animate-screen-shake');
            setTimeout(() => {
              mainHeading.classList.remove('animate-screen-shake');
            }, 600);
          }
        }, 450);

        // 6. Sub heading with elegant fade (600ms delay)
        setTimeout(() => {
          subHeading?.classList.add('animate-subheading-in');
        }, 600);

        // 7. Terminal text with sequential typewriter (700ms delay)
        setTimeout(() => {
          terminalTexts.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add('animate-terminal-line');
            }, index * 200);
          });
        }, 700);

        // 8. Samurai image with dramatic entrance (1000ms delay)
        setTimeout(() => {
          samuraiImage?.classList.add('animate-samurai-in');
          // Add particle effect around samurai
          if (samuraiImage instanceof HTMLElement) {
            samuraiImage.style.filter = 'drop-shadow(0 0 30px rgba(161, 0, 0, 0.3))';
          }
        }, 1000);

        // 9. Creative coders with magnetic slide (1200ms delay)
        setTimeout(() => {
          creativeCoders?.classList.add('animate-coders-in');
        }, 1200);

        // 10. Elegance text with floating effect (1400ms delay)
        setTimeout(() => {
          eleganceText?.classList.add('animate-elegance-in');
        }, 1400);

        // 11. Final reveal - enable interactions (1800ms delay)
        setTimeout(() => {
          body.style.overflow = 'auto';
          body.style.cursor = 'default';
          body.style.pointerEvents = 'auto';
          
          // Add completion pulse effect
          document.documentElement.classList.add('animate-completion-pulse');
          setTimeout(() => {
            document.documentElement.classList.remove('animate-completion-pulse');
          }, 800);
        }, 1800);

      }, 100);
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
