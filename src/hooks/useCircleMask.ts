'use client'

import { useEffect, useState, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import useMousePosition from '@/utils/useMousePosition'

interface UseCircleMaskOptions {
  initialSize?: number
  expandedSize?: number
  springConfig?: {
    stiffness?: number
    damping?: number
  }
}

export const useCircleMask = ({
  initialSize = 60,
  expandedSize = 300,
  springConfig = { stiffness: 300, damping: 30 }
}: UseCircleMaskOptions = {}) => {
  const { x, y } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)
  const [currentSize, setCurrentSize] = useState(initialSize)
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 })
  const contentRef = useRef<HTMLDivElement>(null)

  const maskSize = useMotionValue(initialSize)
  const smoothSize = useSpring(maskSize, springConfig)

  // Update current size when smoothSize changes
  useEffect(() => {
    const unsubscribe = smoothSize.on('change', (latest) => {
      setCurrentSize(latest)
    })
    return unsubscribe
  }, [smoothSize])

  // Update mask position relative to content container
  useEffect(() => {
    const updatePosition = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect()
        const relativeX = x - rect.left
        const relativeY = y - rect.top
        
        setMaskPosition({ x: relativeX, y: relativeY })
      }
    }
    
    updatePosition()
    
    // Also update on scroll or resize
    const handleUpdate = () => requestAnimationFrame(updatePosition)
    window.addEventListener('scroll', handleUpdate)
    window.addEventListener('resize', handleUpdate)
    
    return () => {
      window.removeEventListener('scroll', handleUpdate)
      window.removeEventListener('resize', handleUpdate)
    }
  }, [x, y])

  // Update mask size based on hover state
  useEffect(() => {
    maskSize.set(isHovered ? expandedSize : initialSize)
  }, [isHovered, maskSize, expandedSize, initialSize])

  const maskStyles = {
    opacity: isHovered ? 1 : 0,
    WebkitMaskImage: "radial-gradient(circle, black 0%, black 75%, transparent 85%)",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: `${currentSize}px ${currentSize}px`,
    WebkitMaskPosition: `${maskPosition.x - currentSize/2}px ${maskPosition.y - currentSize/2}px`,
    maskImage: "radial-gradient(circle, black 0%, black 85%, transparent 100%)",
    maskRepeat: "no-repeat",
    maskSize: `${currentSize}px ${currentSize}px`,
    maskPosition: `${maskPosition.x - currentSize/2}px ${maskPosition.y - currentSize/2}px`
  }

  const circleStyles = {
    width: smoothSize,
    height: smoothSize,
    left: x,
    top: y,
    x: "-50%",
    y: "-50%",
  }

  return {
    contentRef,
    isHovered,
    setIsHovered,
    maskStyles,
    circleStyles,
    smoothSize,
    currentSize,
    maskPosition
  }
}
