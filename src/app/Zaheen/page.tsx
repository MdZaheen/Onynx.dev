'use client'

import React from 'react'
import '@/styles/Zaheen.css'
import NavForAbout from '@/components/NavForAbout'
import TeamNameFlipper from '@/components/ui/team-name-flipper'


const zaheen = () => {
  return (
    <div className="container">
      <NavForAbout/>


      <div className="para">
        <div className="h1">
          <TeamNameFlipper href="https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/">
            ZAHEEN
          </TeamNameFlipper>
        </div>
      
        <p>
          I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) at IIT Kharagpur. I am a member of the Coding Club (CC) at IIT Kharagpur. I am a member of the Robotics and Automation Club (RAC) at IIT Kharagpur. I am a member of the Coding Club (CC) at IIT Kharagpur.
        </p>

      </div>
      <div className="image">
        <img src="/images/zaheen.png" alt="Zaheen" />
      </div>

    </div>
  )
}

export default zaheen