'use client'

import React, { useRef, memo } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { TeamMember } from '@/data/team'

interface TeamCardProps {
  member: TeamMember
  isExpanded: boolean
  onToggle: () => void
}

const TeamCard = memo<TeamCardProps>(({ 
  member, 
  isExpanded, 
  onToggle 
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="
        group relative bg-black/20 backdrop-blur-sm
        border border-white/10 rounded-2xl p-6
        hover:border-red-500/20 hover:bg-black/30
        transition-colors duration-200
        cursor-pointer overflow-hidden
      "
      onClick={onToggle}
    >
      
      <div className="relative flex items-center justify-between gap-6">
        {/* Left Side: Avatar and Info */}
        <div className="flex items-center gap-6 flex-1 min-w-0">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="
              relative w-20 h-20 md:w-24 md:h-24
              rounded-xl overflow-hidden
              ring-2 ring-white/10 group-hover:ring-red-500/30
              transition-colors duration-200
            ">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Member Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-150 truncate">
              {member.name}
            </h3>
            
            <p className="text-red-400 font-semibold text-lg mb-2 group-hover:text-red-300 transition-colors duration-150">
              {member.title}
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-150 hidden sm:block">
              {member.bio}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-150 block sm:hidden">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Right Side: Expand Arrow */}
        <button
          className="
            flex-shrink-0 p-3 rounded-full
            bg-white/5 border border-white/10
            hover:bg-red-500/10 hover:border-red-500/30
            focus:outline-none focus:ring-2 focus:ring-red-500/30
            transition-colors duration-200
            group/button
          "
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${member.name}'s details`}
        >
          <div
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          >
            <ChevronDown 
              size={24} 
              className="text-gray-400 group-hover/button:text-red-400 transition-colors duration-150" 
            />
          </div>
        </button>
      </div>

      {/* Progress indicator for expanded state */}
      <div
        className={`
          absolute bottom-0 left-0 h-1
          bg-gradient-to-r from-red-500 to-red-700
          rounded-full transition-all duration-150 ease-out
          ${isExpanded ? 'w-full' : 'w-0'}
        `}
      />
    </div>
  )
})

TeamCard.displayName = 'TeamCard'

export default TeamCard
