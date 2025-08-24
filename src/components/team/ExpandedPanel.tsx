'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { TeamMember } from '@/data/team'

interface ExpandedPanelProps {
  member: TeamMember
  isVisible: boolean
}

const ExpandedPanel = memo<ExpandedPanelProps>(({ member, isVisible }) => {
  return (
    <div className="mt-4 opacity-0 animate-[fadeInUp_0.3s_ease-out_forwards]">
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/3 to-red-700/3 rounded-2xl" />

        <div className="relative">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Larger Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Header */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 font-semibold text-xl mb-4">{member.title}</p>
                <p className="text-gray-400 text-lg">{member.role}</p>
              </div>

              {/* Full Bio */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">About</h4>
                <p className="text-gray-300 leading-relaxed text-base">{member.fullBio}</p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Stats</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {member.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-colors duration-200"
                    >
                      <div className="text-2xl mb-2">{stat.emoji}</div>
                      <div className="text-xl font-bold text-red-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Fun Facts</h4>
                <div className="space-y-2">
                  {member.funFacts.map((fact, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
                <div className="flex flex-wrap gap-4">
                  {member.socials.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-red-500/30"
                        style={{ '--hover-color': social.color } as React.CSSProperties}
                      >
                        <IconComponent 
                          size={20} 
                          className="text-gray-400 group-hover:text-white transition-colors duration-200" 
                          style={{ color: 'var(--hover-color)' }}
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                          {social.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

ExpandedPanel.displayName = 'ExpandedPanel'

export default ExpandedPanel
