'use client';

import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time);
    rafRef.current = requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Force scroll to top on component mount
    const forceScrollTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };
    
    // Execute immediately and after a brief delay
    forceScrollTop();
    const timeoutId = setTimeout(forceScrollTop, 100);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return () => clearTimeout(timeoutId);
    }
    
    // Don't initialize Lenis on mobile to prevent conflicts
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return () => clearTimeout(timeoutId);
    }

    // Initialize Lenis only once
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        prevent: (node) => node.classList.contains('no-smooth-scroll'),
      });
    }

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [raf]);

  return <>{children}</>;
}
