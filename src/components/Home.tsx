import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Tagline from './Tagline';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.logo}>
        ONYXDEV
      </Link>
      <Tagline />
      <div className={styles.content}>
        <div className={styles.mainText}>
          <h1>WE MAKE COOL THINGS</h1>
          <p>[Manifesting Interfaces]</p>
        </div>
        <div className={styles.terminalText}>
          <p>&gt; Initializing...</p>
          <p>&gt; Loading Projects...</p>
          <p>&gt; System: Elegance Protocol Online</p>
        </div>
        <div className={styles.eleganceText}>
          <p>elegance</p>
        </div>
        <div className={styles.creativeCoders}>
          <h2>Creative Coders</h2>
          <p>From Onyx Devs</p>
        </div>
      </div>
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