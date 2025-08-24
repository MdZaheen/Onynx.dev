'use client'

import React from 'react'
import { ArrowRightCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ArrowNavButtonProps {
  href: string
  className?: string
  'aria-label'?: string
}

const ArrowNavButton: React.FC<ArrowNavButtonProps> = ({ 
  href, 
  className = '',
  'aria-label': ariaLabel = 'View profile'
}) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`
        absolute bottom-4 right-4 z-20
        w-12 h-12 rounded-full
        bg-gradient-to-r from-[#A10000] to-[#C51A1A]
        border border-white/20
        flex items-center justify-center
        shadow-lg backdrop-blur-sm
        opacity-0 md:opacity-0 group-hover:opacity-100
        transition-all duration-300 ease-out
        focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/30
        hover:scale-105 active:scale-95
        ${className}
      `}
    >
      <ArrowRightCircle 
        size={24} 
        className="text-white drop-shadow-sm transition-transform duration-200 hover:translate-x-1" 
      />
    </button>
  )
}

export default ArrowNavButton
