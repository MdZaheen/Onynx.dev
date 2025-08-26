'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
  color?: string
  className?: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  href, 
  icon: Icon, 
  label, 
  color = '#A10000',
  className = '' 
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        bg-white/5 backdrop-blur-sm border border-white/10
        transition-all duration-300 ease-out
        hover:border-white/30 hover:shadow-lg hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-white/20
        active:scale-95 group
        ${className}
      `}
      style={{
        '--hover-color': color
      } as React.CSSProperties}
    >
      <Icon 
        size={20} 
        className="text-white/70 group-hover:text-white transition-colors duration-300" 
      />
      
      {/* Simple Tooltip */}
      <div className="
        absolute -top-10 left-1/2 transform -translate-x-1/2
        px-2 py-1 bg-black/90 backdrop-blur-sm
        text-white text-xs font-medium rounded
        pointer-events-none opacity-0 group-hover:opacity-100
        whitespace-nowrap z-50 transition-opacity duration-200
      ">
        {label}
      </div>
    </a>
  )
}

export default SocialIcon
