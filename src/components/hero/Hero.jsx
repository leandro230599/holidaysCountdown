import React from 'react'
import './Hero.css'
import Countdown from '../countdown/Countdown'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="team">
          <img src="/facu.png" alt="Facu" />
          <img src="/mario.png" alt="Mario" />
        </div>
        <div className="hero-countdown">
          <Countdown />
        </div>
      </div>
    </section>
  )
}

export default Hero
