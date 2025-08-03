'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Tagline from './Tagline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        ONYXDEV
      </Link>
      <Tagline />
    </header>
  );
}