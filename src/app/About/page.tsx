'use client'
import React, { useState, useRef } from 'react'
import '@/styles/About.css'

import TeamNameFlipper from '@/components/ui/team-name-flipper'
// import { TextScroll } from '../components/ui/text-scroll'

const About = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [activeMember, setActiveMember] = useState<string | null>(null)
  const animationRef = useRef<number | null>(null)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    member: string
  ) => {
    // Cancel the previous animation frame to avoid stacking
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Throttle mouse movement with requestAnimationFrame
    animationRef.current = requestAnimationFrame(() => {
      const container = document.querySelector('.about-container') as HTMLElement
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setCursor({ x, y })
      setActiveMember(member)
    })
  }

  const handleMouseLeave = () => {
    setActiveMember(null)
  }

  const getTooltip = () => {
    if (!activeMember) return null

    const memberData = {
      zaheen: {
        title: 'The Silent Strategist',
        text: 'A creative thinker who loves to design.',
      },
      arfath: {
        title: 'The Backend Brain',
        text: 'Knows how to make servers sing.',
      },
      mannan: {
        title: 'The Pixel Perfectionist',
        text: 'Frontend wizard',
      },
    }

    const data = memberData[activeMember as keyof typeof memberData]

    return (

      <div
        className="team-info"
        style={{
          top: cursor.y + 20,
          left: cursor.x + 20,
        }}
      >
        <h3 className="team-subtitle">{data.title}</h3>
        <p className="team-description glitch-text" data-text={data.text}>
          {data.text}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full relative overflow-hidden">
      <div className="about-container">
      {/* ✅ TextScroll moved above team-container */}
      {/* <TextScroll className="text-scroll" text="We are creative developers" /> */}

      <div className="team-container">
        {/* ZAHEEN */}
        <div
          className="team-member"
          onMouseMove={(e) => handleMouseMove(e, 'zaheen')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="member-name">
            <TeamNameFlipper href="/Zaheen">ZAHEEN</TeamNameFlipper>
          </div>
          <div className="member-image member-image-zaheen">
            <img src="/images/zaheen.png" alt="Zaheen" />
          </div>
        </div>

        <div className="separator"></div>

        {/* ARFATH */}
        <div
          className="team-member"
          onMouseMove={(e) => handleMouseMove(e, 'arfath')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="member-name">
            <TeamNameFlipper href="https://github.com/arfath-ahmed">ARFATH</TeamNameFlipper>
          </div>
          <div className="member-image member-image-arfath">
            <img src="/images/arfath.png" alt="Arfath" />
          </div>
        </div>

        <div className="separator"></div>

        {/* MANNAN */}
        <div
          className="team-member"
          onMouseMove={(e) => handleMouseMove(e, 'mannan')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="member-name">
            <TeamNameFlipper href="https://github.com/Mannan007">MANNAN</TeamNameFlipper>
          </div>
          <div className="member-image member-image-mannan">
            <img src="/images/mannan.png" alt="Mannan" />
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="info">
        <h2>About Us</h2>
        <p>
          We are a team of creative developers who love to build things together. We are always
          looking for new ways to improve our skills and stay ahead of the curve.
        </p>
      </div>

      {/* HOVER TOOLTIP */}
      {getTooltip()}

      {/* Background */}
      <div className="background-pattern"></div>
      </div>
    </div>
  )
}

export default About
