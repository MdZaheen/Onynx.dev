import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Tagline from './Tagline';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* Keep Logo */}
      <Link href="/" className={styles.logo}>ONYXDEV</Link>

      {/* Keep Tagline */}
      <Tagline />

      {/* Content Wrapper */}
      <div className={styles.content}>
        {/* Block 1 - Main Heading */}
        <div className={styles.mainText}>
          <h1>WE MAKE COOL THINGS</h1>
          <p>[Manifesting Interfaces]</p>
        </div>

        {/* Block 2 - Terminal Text */}
        <div className={styles.terminalText}>
          <p>&gt; <strong>Initia</strong>lizing...</p>
          <p>&gt; Loading <strong>Projects</strong>...</p>
          <p>&gt; System: Elegance <strong>Protocol Online</strong></p>
        </div>

        {/* Block 3 - Elegance Text */}
        <div className={styles.eleganceText}>
          <p>elegance</p>
        </div>

        {/* Block 4 - Creative Coders */}
        <div className={styles.creativeCoders}>
          <h2>Creative Coders</h2>
          <p>From Onyx Devs</p>
        </div>
      </div>

      {/* Samurai Image */}
      <div className={styles.samuraiImageContainer}>
        <Image
          src="/images/samurai png.png"
          alt="Samurai"
          width={1000}
          height={1000}
          className={styles.samuraiImage}
          priority
        />
      </div>
    </main>
  );
};

export default Home;
