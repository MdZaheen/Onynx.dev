'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // console.log('Current route:', pathname);


  // ❌ Pages where you want to hide the Navbar
  // const hiddenRoutes = ['/routes/AboutDetailZaheen'];


  // // ✅ Don't render Navbar on hidden routes
  // if (hiddenRoutes.includes(pathname)) {
  //   return null;
  // }

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20; // Reduced threshold for faster activation
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > threshold) {
        setIsScrolled(true);
        navbar?.classList.add(styles['is-stuck']);
      } else {
        setIsScrolled(false);
        navbar?.classList.remove(styles['is-stuck']);
      }
    };

    // Trigger immediately to check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modern navbar entrance animation on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const navbar = document.querySelector(`.${styles.navbar}`);
    const navItems = document.querySelectorAll(`.${styles.navItem}`);
    const activeLink = document.querySelector(`.${styles.navLink}.${styles.active}`);

    // Trigger navbar entrance
    setTimeout(() => navbar?.classList.add(styles['animate-in']), 100);

    // Staggered link reveals
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add(styles['link-in']);
      }, 200 + (80 * index));
    });

    // Active link pulse after all reveals
    if (activeLink) {
      const pulseDelay = 200 + (80 * navItems.length) + 420;
      setTimeout(() => {
        activeLink.classList.add(styles.pulse);
        setTimeout(() => activeLink.classList.remove(styles.pulse), 950);
      }, pulseDelay);
    }
  }, [pathname]);

  return (
    <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <li className={styles.navItem}>
        <button 
          onClick={() => {
            setIsMenuOpen(false);
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={styles.navLink}
        >
          Home
        </button>
      </li>
      <li className={styles.navItem}>
        <button 
          onClick={() => {
            setIsMenuOpen(false);
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={styles.navLink}
        >
          About&nbsp;Us
        </button>
      </li>
      <li className={styles.navItem}>
        <Link 
          href="/projects" 
          className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link 
          href="/contact" 
          className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
