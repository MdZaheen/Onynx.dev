'use client'
import React, { useState, useRef, useMemo, useCallback } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import '@/styles/About.css'
import '@/styles/theme.css'

import TeamNameFlipper from '@/components/ui/team-name-flipper'
import ArrowNavButton from '@/components/ui/ArrowNavButton'
import { team } from '@/data/team'
// import { TextScroll } from '../components/ui/text-scroll'

const About = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [activeMember, setActiveMember] = useState<string | null>(null)
  const animationRef = useRef<number | null>(null)

  const teamArray = useMemo(() => Object.values(team), []);

  const handleMouseMove = useCallback((
    e: React.MouseEvent<HTMLDivElement>,
    member: string
  ) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(() => {
      // Use clientX and clientY for fixed positioning
      setCursor({ x: e.clientX, y: e.clientY })
      setActiveMember(member)
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveMember(null)
  }, [])

  const getTooltip = () => {
    if (!activeMember) return null
    
    const memberData = team[activeMember as keyof typeof team]
    if (!memberData) return null

    // Calculate position to prevent off-screen
    const tooltipWidth = 320
    const tooltipHeight = 120
    const margin = 20
    
    let left = cursor.x + margin
    let top = cursor.y + margin
    
    // Adjust if tooltip would go off right edge
    if (left + tooltipWidth > window.innerWidth) {
      left = cursor.x - tooltipWidth - margin
    }
    
    // Adjust if tooltip would go off bottom edge
    if (top + tooltipHeight > window.innerHeight) {
      top = cursor.y - tooltipHeight - margin
    }
    
    // Ensure tooltip doesn't go off left or top edges
    left = Math.max(margin, left)
    top = Math.max(margin, top)

    return (
      <motion.div
        className="
          fixed z-50 pointer-events-none
          bg-black/90 backdrop-blur-md border border-white/20
          rounded-xl px-4 py-3 min-w-[300px] max-w-[350px]
          shadow-2xl
        "
        style={{
          top: top,
          left: left,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <h3 className="text-red-400 font-bold text-lg font-[family-name:var(--font-primary)]">
            {memberData.title}
          </h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed font-[family-name:var(--font-primary)]">
          {memberData.bio}
        </p>
        <div className="mt-2 text-xs text-gray-500 font-[family-name:var(--font-primary)]">
          {memberData.role}
        </div>
      </motion.div>
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-white relative overflow-hidden font-[family-name:var(--font-primary)]">
        {/* Animated Background */}
        <div className="fixed inset-0 animated-bg" />
        <div className="noise-overlay" />
      
      {/* Main Container */}
      <div className="about-container relative z-10 px-6 py-12 min-h-screen">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            MEET THE TEAM
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The creative minds behind Onyx &bull; Passionate developers building the future
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {teamArray.map((member, index) => (
            <motion.div
              key={member.id}
              className="
                group relative glass-card rounded-2xl p-6 
                cursor-pointer transition-all duration-300
                hover:scale-[1.02] hover:shadow-2xl
              "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + (index * 0.2),
                ease: 'easeOut'
              }}
              onMouseMove={(e) => handleMouseMove(e, member.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5] group/image">
                <motion.img
                  src={member.avatar}
                  alt={member.name}
                  className="
                    w-full h-full object-cover object-top
                    filter grayscale hover:grayscale-0
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:brightness-110
                    group-hover:contrast-110 group-hover:saturate-110
                  "
                  whileHover={{ 
                    scale: 1.15,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    transformOrigin: 'center'
                  }}
                />
                
                {/* Subtle overlay gradient */}
                <div className="
                  absolute inset-0 bg-gradient-to-t 
                  from-black/40 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                " />
                
                {/* Glow effect behind image */}
                <div className="
                  absolute -inset-2 bg-gradient-to-r 
                  from-blue-500/20 via-purple-500/20 to-cyan-500/20
                  rounded-xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 blur-lg
                  -z-10
                " />
              </div>

              {/* Member Info */}
              <div className="space-y-3">
                <div className="mb-4">
                  <TeamNameFlipper href={`/${member.id}`}>
                    {member.name}
                  </TeamNameFlipper>
                </div>
                
                <h3 className="text-red-400 font-semibold text-lg">
                  {member.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="text-xs text-gray-500 font-medium">
                  {member.role}
                </div>
              </div>

              {/* Arrow Navigation Button */}
              <ArrowNavButton 
                href={`/${member.id}`}
                aria-label={`View ${member.name}&apos;s profile`}
              />

              {/* Subtle Border Glow Effect */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-white/5 to-gray-500/5
                opacity-0 group-hover:opacity-100
                transition-all duration-300
                pointer-events-none
                border border-white/10 group-hover:border-white/20
              " />
              
              {/* Floating particles effect */}
              <div className="
                absolute -inset-1 rounded-2xl
                bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                blur-sm -z-10 pointer-events-none
              " />
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto glass-card rounded-2xl p-8"
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

        {/* Tooltip */}
        {getTooltip()}
      </div>
    </div>
    </MotionConfig>
  )
}

export default About
