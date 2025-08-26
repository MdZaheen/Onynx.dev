'use client'
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import '@/styles/About.css'
import '@/styles/theme.css'

import { TeamSection } from '@/components/team'

const About = () => {

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-transparent text-white relative overflow-hidden font-[family-name:var(--font-primary)]">
      
        {/* Main Container */}
        <div className="about-container relative z-10 px-6 py-12 min-h-screen max-w-6xl mx-auto">
          {/* Interactive Team Section */}
          <TeamSection />

          {/* About Company Section */}
          <motion.div 
            className="text-center max-w-4xl mx-auto glass-card rounded-2xl p-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-red-400 mb-6">About Onyx</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a team of creative developers who love to build innovative solutions together. 
              Passionate about cutting-edge technology, clean code, and user-centric design. 
              We&apos;re always looking for new ways to push boundaries and create exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  )
}

export default About
