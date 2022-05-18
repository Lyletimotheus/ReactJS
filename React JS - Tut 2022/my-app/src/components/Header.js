import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={logo} alt="React Logo" className='nav-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header