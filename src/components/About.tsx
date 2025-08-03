import React from 'react'
import '../styles/About.css'
import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <div className='about-container'>
      {/* Logo */}
      <div className="logo">Onyxdev</div>
      
      {/* Navigation
      <div className="navbar">
       <Navbar/>
      </div> */}
      
      <div className="team-container">
        {/* Team Member - ZAHEEN */}
        <div className="team-member">
          <h2 className="member-name">ZAHEEN</h2>
          <div className="member-image">
            <img src="/images/zaheen.png" alt="Zaheen" />
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="separator"></div>
        
        {/* Team Member - ARFATH */}
        <div className="team-member">
          <h2 className="member-name">ARFATH</h2>
          <div className="member-image">
            <img src="/images/arfath.png" alt="Arfath" />
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="separator"></div>
        
        {/* Team Member - MANNAN */}
        <div className="team-member">
          <h2 className="member-name">MANNAN</h2>
          <div className="member-image">
            <img src="/images/mannan.png" alt="Mannan" />
          </div>
        </div>
      </div>
      
      {/* Team Info */}
      <div className="team-info">
        <h3 className="team-subtitle">// Meet the Team</h3>
        <p className="team-description">
          We're a core of <span className="highlight">creativity</span> turning
          elegance into interfaces.
        </p>
        <button className="details-button">DETAILS</button>
      </div>
      
      {/* Background Pattern */}
      <div className="background-pattern"></div>
    </div>
  )
}

export default About