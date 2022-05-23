import React from 'react'
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import githubIcon from '../assets/github.svg';


function Footer() {
  return (
    <footer>
        <img src={twitterIcon} alt="twitter icon" width="30" className='footer--logo'/>
        <img src={facebookIcon} alt="facebook icon" width="30" className='footer--logo'/>
        <img src={instagramIcon} alt="instagram icon" width="30" className='footer--logo'/>
        <img src={githubIcon} alt="github icon" width="30"/>
    </footer>
  )
}

export default Footer