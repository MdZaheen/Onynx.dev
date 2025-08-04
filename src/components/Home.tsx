import React from 'react';
import Link from 'next/link';
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
        {/* Home page content will go here */}
      </div>
    </main>
  );
};

export default Home;