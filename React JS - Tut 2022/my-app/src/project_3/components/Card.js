import React from 'react';
import card_image from '../assets/image_12.png';
import star from '../assets/star.svg';

function Card() {
  return (
    <section className='cards'>
        <div className='card-container'>
          <img src={card_image} alt="katie zaferes"/>
          <div className='card-body'>
            <p>
              <img src={star} alt='star icon' className='card-body--star'/> 5.0 
              <span className='card-body--text_top'>(6) &#9679; USA </span>
            </p>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
          </div>
        </div>
    </section>
  )
}

export default Card