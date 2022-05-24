import React from 'react'
import hero_image from '../assets/hero-image.png';

function Hero() {
  return (
    <section className='hero'>
        <div className='hero-image-container'>
            <img src={hero_image} alt='hero'/>
        </div>
        <div className='hero-text-container'>
            <h1 className='hero-text-container--header'>Online Experiences</h1>
            <p className='hero-text-container--text'>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
  )
}

export default Hero