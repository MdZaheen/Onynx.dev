'use client'

import React from 'react'
import NavForAbout from '@/components/NavForAbout'
import TeamNameFlipper from '@/components/ui/team-name-flipper'

const Mannan = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full px-8 md:px-28 py-10">
      {/* Top Navigation */}
      <NavForAbout />

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">

        {/* Text Section */}
        <div className="w-[80%] ml-[8%] mt-[10%]">


          <h1 className="text-red-700 text-4xl font-bold mb-6">
            <TeamNameFlipper href="https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/">
              MANNAN
            </TeamNameFlipper>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a student of B.Tech in Computer Science and Engineering at Indian Institute of
            Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) and the
            Coding Club (CC) at IIT Kharagpur. Passionate about building creative and scalable web
            solutions with cutting-edge technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/images/mannan.png"
            alt="Mannan"
            className="h-[400px] transform scale-177 saturate-0 mt-[8%] mr-[50%]"


          />
        </div>
      </div>
    </div>
  )
}

export default Mannan
