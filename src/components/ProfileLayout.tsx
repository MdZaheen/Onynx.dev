'use client'

import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { TeamMember } from '@/data/team'
import { useCircleMask } from '@/hooks/useCircleMask'
import SocialIcon from '@/components/ui/SocialIcon'
import '@/styles/theme.css'

interface ProfileLayoutProps {
  member: TeamMember
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ member }) => {
  const router = useRouter()
  const {
    contentRef,
    isHovered,
    setIsHovered,
    maskStyles,
    circleStyles
  } = useCircleMask({
    initialSize: 60,
    expandedSize: 300
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div 
        className="min-h-screen bg-black text-white relative overflow-hidden font-[family-name:var(--font-primary)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      {/* Static Background with Mask Effect */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 static-bg" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/20 to-black/80" />
        <div 
          className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent"
          style={maskStyles}
        />
      </div>
      
      {/* Back Button */}
      <motion.button
        onClick={() => router.push('/about')}
        className="
          fixed top-8 left-8 z-50
          w-12 h-12 rounded-full
          glass-card border border-white/20
          flex items-center justify-center
          hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-red-500/30
        "
        aria-label="Back to team page"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeftCircle size={24} className="text-white" />
      </motion.button>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Side - Content */}
        <motion.div 
          className="flex-1 px-8 py-20 lg:py-32 lg:px-16 flex items-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl space-y-8">
            {/* Header */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-[#A10000] mb-4"
                variants={itemVariants}
              >
                {member.name}
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-3xl font-semibold text-red-400 mb-6"
                variants={itemVariants}
              >
                {member.title}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-200 leading-relaxed mb-8"
                variants={itemVariants}
              >
                {member.fullBio}
              </motion.p>
            </motion.div>

            {/* Skills */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="
                      px-3 py-1 glass-card border border-white/20
                      rounded-full text-sm text-gray-300
                      hover:bg-red-500/20 hover:border-red-500/30 hover:scale-105
                      transition-all duration-300 cursor-default
                    "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {member.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center glass-card rounded-xl p-4 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-2xl mb-2">{stat.emoji}</div>
                    <div className="text-xl font-bold text-red-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Fun Facts</h3>
              <div className="space-y-2">
                {member.funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-sm">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                {member.socials.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SocialIcon
                      href={social.href}
                      icon={social.icon}
                      label={social.label}
                      color={social.color}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Image with Circle Mask */}
        <motion.div 
          className="flex-1 relative flex items-center justify-center p-8 lg:p-16"
          variants={itemVariants}
          ref={contentRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="relative z-20"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'saturate(1.2) brightness(1.1)' : 'saturate(1) brightness(1)'
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={member.avatar}
              alt={member.name}
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>

          {/* Circle Mask Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-red-500/30 via-red-500/10 to-transparent z-10 pointer-events-none"
            style={{
              ...circleStyles,
              opacity: isHovered ? 0.8 : 0.3
            }}
            animate={{
              scale: isHovered ? 1.2 : 0.8,
              opacity: isHovered ? 0.8 : 0.3
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-transparent z-0" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-xl z-0"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
    </MotionConfig>
  )
}

export default ProfileLayout
