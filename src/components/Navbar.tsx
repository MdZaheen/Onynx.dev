'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > threshold) {
        setIsScrolled(true);
        navbar?.classList.add(styles['is-stuck']);
      } else {
        setIsScrolled(false);
        navbar?.classList.remove(styles['is-stuck']);
      }
    };

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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li className={styles.navItem}>
          <Link 
            href="/home" 
            className={`${styles.navLink} ${pathname === '/home' ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            About&nbsp;Us
          </Link>
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
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}