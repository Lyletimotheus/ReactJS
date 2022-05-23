import React from 'react'
import person from '../assets/person.jpg';
import emailIcon from '../assets/email.svg';
import linkedInIcon from '../assets/linkedin.svg';

function Info() {
  return (
    <section className='top-card'>
      <img src={person} alt="random person with black sunglasses" width="250" height="250" className='top--card-image'/>

      <div className='top-card--text'>
          <h1>John Stamos</h1>
          <h3>Frontend Developer</h3>
          <h4>johnstamos.com</h4>
      </div>
      
      <div className='top-card--buttons'>
        <button className='top-card--icon_email'>
            <img src={emailIcon} alt="email icon" />
            <span className='top-card--text_email'>Email</span>
        </button>

        <button className='top-card--icon_linkedin'>
            <img src={linkedInIcon} alt="linkedin icon"/>
            <span className='top-card--text_linkedin'>LinkedIn</span>
        </button>
      </div>
    </section>      
  )
}

export default Info