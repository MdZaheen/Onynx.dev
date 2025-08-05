'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/NavbarForAbout.module.css';

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
            href="/" 
            className={`${styles.navLink} ${pathname === '/Zaheen' ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            ZAHEEN
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link 
            href="/Arfath" 
            className={`${styles.navLink} ${pathname === '/Arfath' ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            ARFATH
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link 
            href="/Mannan" 
            className={`${styles.navLink} ${pathname === '/Mannan' ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            MANNAN
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
