import React from 'react'
import logo from '../assets/globe.svg';

function Header() {
  return (
    <header>
        <nav>
            <img src={logo} alt="globe icon" className="header--logo"/>
            <h1 className="header--title">my travel journey</h1>
        </nav>
    </header>
  )
}

export default Header