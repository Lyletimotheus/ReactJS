import React from 'react'
import logo from '../assets/airbnb_1.png';

function Header() {
  return (
    <header>
        <nav>
            <img src={logo} alt="air bnb logo"/>
        </nav>
    </header>
  )
}

export default Header