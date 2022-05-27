import React from 'react'
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
        <nav>
            <div className="header--box">
                <img src={logo} alt="logo" className="header--logo"/>
                <h1>Meme Generator</h1>
            </div>
            <div>
                <span>React Course - Project 5</span>
            </div>
        </nav>
    </header>
  )
}

export default Header