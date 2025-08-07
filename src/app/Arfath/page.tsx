'use client'

import React, { useEffect, useState } from 'react'


import NavForAbout from '@/components/NavForAbout'
import TeamNameFlipper from '@/components/ui/team-name-flipper'
    // import { useMousePosition } from '@/hooks/useMousePosition'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMousePosition from '@/utils/useMousePosition'


const Arfath = () => {
   const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskSize = useMotionValue(60);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const smoothSize = useSpring(maskSize, { stiffness: 300, damping: 30 });
  useEffect(() => {
    mouseX.set(x);
    mouseY.set(y);
  }, [x, y]);
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter px-6 md:px-24 py-12">
      {/* Top Navigation */}
      <NavForAbout />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mt-16">
        {/* Text Section */}
        <div className="md:w-1/2 w-[30%] text-[#d1d1d1] space-y-6 absolute top-[40%] left-[13%]">
          <h1 className="text-4xl font-bold text-[#9a0000]">
            <TeamNameFlipper href="https://www.linkedin.com/in/arfath-khan-80202929a/">
              ARFATH
            </TeamNameFlipper>
          </h1>
          <p className="text-lg  text-gray-400 leading-relaxed">
            I am a student of B.E in Electronics and Electrical Engineering at Indian Institute of
            Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) and the
            Coding Club (CC) at IIT Kharagpur. Passionate about backend development, systems
            architecture, and building scalable apps that power real-world solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end absolute top-[30%] left-[36%]">  


          <img
            src="/images/arfath.png"
            alt="Arfath"
            className="h-[420px] object-contain transform scale-142  saturate-0 filter brightness-[0.6]"
          />
        </div>
      </div>
            <motion.div
        className="fixed z-10 pointer-events-none border border-[#9a0000] rounded-full mix-blend-difference"

        style={{
          width: smoothSize,
          height: smoothSize,
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  )
}

export default Arfath
