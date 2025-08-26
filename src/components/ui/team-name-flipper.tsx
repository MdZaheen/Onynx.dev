'use client'

import React from "react"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const DURATION = 0.25
const STAGGER = 0.025

interface TeamNameFlipperProps {
  children: string
  href: string
}

const TeamNameFlipper: React.FC<TeamNameFlipperProps> = ({ children, href }) => {
  const router = useRouter()
  
  const handleClick = () => {
    // If href starts with '/', it's an internal route
    if (href.startsWith('/')) {
      router.push(href)
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <motion.div
      initial="initial"
      onClick={handleClick}
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-semibold uppercase text-[#A10000]"
      style={{
        lineHeight: 0.9,
        letterSpacing: '3px',
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default TeamNameFlipper