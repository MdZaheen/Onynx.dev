'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Tagline from '@/components/Tagline';
import Link from 'next/link';
import About from '@/app/About/page';
import ProjectsJourney from '@/components/ProjectsJourney';
import '@/styles/theme.css';

export default function HomePage() {

  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full relative">
      {/* Unified Background for About and Projects sections */}
      <div className="fixed inset-0 static-bg" style={{ zIndex: -1 }} />
      <div className="fixed inset-0 noise-overlay" style={{ zIndex: -1 }} />
      
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen">
        <main className={styles.container} data-animate="background">
          {/* Keep Logo */}
          <Link href="/" className={styles.logo} data-animate="logo">ONYXDEV</Link>

          {/* Keep Tagline */}
          <Tagline data-animate="tagline" />

          {/* Content Wrapper */}
          <div className={styles.content}>
            {/* Block 1 - Main Heading */}
            <div className={styles.mainText}>
              <h1 data-animate="main-heading">WE MAKE COOL THINGS</h1>
              <p data-animate="sub-heading">[Manifesting Interfaces]</p>
            </div>

            {/* Block 2 - Creative Coders */}
            <div className={styles.creativeCoders} data-animate="creative-coders">
              <h2>Creative Coders</h2>
              <p>From Onyx Devs</p>
            </div>
          </div>

          {/* Terminal Text - Outside Content for Full Visibility */}
          <div className={styles.terminalText}>
            <p>&gt; <strong>Initia</strong>lizing...</p>
            <p>&gt; Loading <strong>Projects</strong>...</p>
            <p>&gt; System: Elegance <strong>Protocol Online</strong></p>
          </div>


          {/* Elegance Text - Perfectly Centered at Bottom */}
          <div className={styles.eleganceText} data-animate="elegance">
            <p>elegance</p>
          </div>

          {/* Samurai Image */}
          <div className={styles.samuraiImageContainer}>
            <Image
              src="/images/samurai png.png"
              alt="Samurai"
              width={1000}
              height={1000}
              className={styles.samuraiImage}
              data-animate="samurai"
              priority
            />
          </div>
        </main>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* PROJECTS SECTION */}
      <ProjectsJourney />
    </div>
  );
}
