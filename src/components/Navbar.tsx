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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li className={styles.navItem}>
          <Link 
            href="/Home" 
            className={`${styles.navLink} ${pathname === '/Home' ? styles.active : ''}`} 
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