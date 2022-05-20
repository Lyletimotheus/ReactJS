import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='brand-container'>
          <img src={logo} alt="React Logo" className='nav-logo' />
          <h2>ReactFacts</h2>
        </div>
        <span className='project-index'>React Course - Project 1</span>
      </nav>
    </header>
  )
}

export default Header