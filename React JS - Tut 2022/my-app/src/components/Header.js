import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} width="40" alt="React Logo" />
      </nav>
    </header>
  )
}

export default Header