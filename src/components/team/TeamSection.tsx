'use client'

import React, { useState, useMemo, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { team } from '@/data/team'
import TeamCard from './TeamCard'
import ExpandedPanel from './ExpandedPanel'

const TeamSection = () => {
  // Track which member is currently expanded (only one at a time)
  const [expandedMember, setExpandedMember] = useState<string | null>(null)
  const expandedRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const toggleMember = useCallback((memberId: string) => {
    const isExpanding = expandedMember !== memberId
    setExpandedMember(prev => prev === memberId ? null : memberId)
    
    // Scroll to the expanded panel after a brief delay to allow animation to start
    if (isExpanding) {
      setTimeout(() => {
        const expandedRef = expandedRefs.current[memberId]
        if (expandedRef) {
          expandedRef.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      }, 150) // Wait for expansion animation to begin
    }
  }, [expandedMember])

  const teamArray = useMemo(() => Object.values(team), [])

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
          MEET THE TEAM
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The creative minds behind Onyx • Passionate developers building the future
        </p>
      </div>

      {/* Team Grid */}
      <div className="space-y-8">
        {teamArray.map((member) => (
          <div
            key={member.id}
            className="w-full"
          >
            {/* Team Card */}
            <TeamCard
              member={member}
              isExpanded={expandedMember === member.id}
              onToggle={() => toggleMember(member.id)}
            />
            
            {/* Expanded Panel with AnimatePresence for smooth exit */}
            <AnimatePresence mode="wait">
              {expandedMember === member.id && (
                <div 
                  ref={(el) => {
                    expandedRefs.current[member.id] = el
                  }}
                >
                  <ExpandedPanel
                    member={member}
                    isVisible={expandedMember === member.id}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Optional: Collapse Button */}
      {expandedMember && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setExpandedMember(null)}
            className="
              px-6 py-3 rounded-xl
              bg-gradient-to-r from-red-500/10 to-red-700/10
              border border-red-500/20 text-red-400
              hover:from-red-500/20 hover:to-red-700/20
              hover:border-red-500/40 hover:text-red-300
              transition-all duration-200
              backdrop-blur-sm
              font-medium tracking-wide
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-red-500/30
            "
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  )
}

export default TeamSection
