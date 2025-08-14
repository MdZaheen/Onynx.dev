import React from "react"
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

interface TeamNameFlipperProps {
  children: string
  href: string
  className?: string
}

const TeamNameFlipper: React.FC<TeamNameFlipperProps> = ({ children, href, className }) => {
  return (
    <motion.div
      initial="initial"
      onClick={() => window.open(href, '_blank')}
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