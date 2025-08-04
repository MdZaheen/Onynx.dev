'use client'
import React from 'react'
import '../styles/About.css'
import Navbar from '@/components/Navbar'
import FlipLink from "./ui/text-effect-flipper"
import TeamNameFlipper from "./ui/team-name-flipper"


const About = () => {
  return (
    <div className='about-container'>


      <div className="team-container">
        {/* ZAHEEN */}
        <div className="team-member">
          <div className="member-name member-name-zaheen">
            <TeamNameFlipper>ZAHEEN</TeamNameFlipper>
          </div>
          <div className="member-image member-image-zaheen">
            <img src="/images/zaheen.png" alt="Zaheen" />
          </div>
        </div>

        <div className="separator"></div>

        {/* ARFATH */}
        <div className="team-member">
          <div className="member-name member-name-arfath">
            <TeamNameFlipper>ARFATH</TeamNameFlipper>
          </div>
          <div className="member-image member-image-arfath">
            <img src="/images/arfath.png" alt="Arfath" />
          </div>
        </div>

        <div className="separator"></div>

        {/* MANNAN */}
        <div className="team-member">
          <div className="member-name member-name-mannan">
            <TeamNameFlipper>MANNAN</TeamNameFlipper>
          </div>
          <div className="member-image member-image-mannan">
            <img src="/images/mannan.png" alt="Mannan" />
          </div>
        </div>
      </div>

      {/* Team Info Overlay
      <div className="team-info">
        <h3 className="team-subtitle">Meet the <span className="highlight">Team</span></h3>
        <p className="team-description">
          We are a team of passionate developers dedicated to creating amazing web experiences.
          Our combined skills in design, development, and user experience allow us to deliver
          exceptional projects that exceed expectations.
        </p>
        <button className="details-button">DETAILS</button>
      </div> */}

      {/* Background Pattern */}
      <div className="background-pattern"></div>
    </div>
  )
}

export default About
