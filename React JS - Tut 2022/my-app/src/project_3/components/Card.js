import React from 'react';
// import card_image from '../assets/image_12.png';
import star from '../assets/star.svg';

function Card({isSoldOut,status, img, rating, ratingTotal, country, text, amount}) {
  console.log(isSoldOut);
  return (
    <div className='card'>
        <div className='card-container'>
          <img src={img} alt="katie zaferes" width="264" height="353" className="card--image"/>
          <span className={isSoldOut ? 'SOLD OUT' : ""}></span>

          <div className='card-body'>
            <p>
              <img src={star} alt='star icon' className='card-body--star'/> {rating} 
              <span className='card-body--text_top'>({ratingTotal}) &#9679; {country} </span>
            </p>
            <p>{text}</p>
            <p><span className='bold'>From ${amount}</span> / person</p>
          </div>
        </div>
    </div>
  )
}

export default Card