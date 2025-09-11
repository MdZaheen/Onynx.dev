'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HomePageController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname !== '/') return;

    // Force scroll to top immediately and aggressively
    const forceTop = () => {
      if (typeof window !== 'undefined') {
        // Multiple methods to ensure scroll to top
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Also set scroll using scrollTo with instant behavior
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    };

    // Execute immediately
    forceTop();

    // Also execute after a brief delay to override any hash scrolling
    const timeoutId = setTimeout(forceTop, 50);
    const timeoutId2 = setTimeout(forceTop, 200);
    const timeoutId3 = setTimeout(forceTop, 500);

    // Prevent hash-based scrolling during initial load
    const handleScroll = (e: Event) => {
      // During the first 2 seconds after page load, prevent scrolling away from top
      const now = Date.now();
      const loadTime = window.performance?.timing?.loadEventStart || now;
      
      if (now - loadTime < 2000) {
        if (window.scrollY > 100) {
          e.preventDefault();
          forceTop();
        }
      }
    };

    // Add scroll listener temporarily
    window.addEventListener('scroll', handleScroll, { passive: false });

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return <>{children}</>;
}
