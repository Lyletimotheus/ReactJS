import React from 'react';
// import card_image from '../assets/image_12.png';
// import star from '../assets/star.svg';

function Card(props) {
  console.log(props);
  let badgeText;
  if(props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if(props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className='card'>
        <div className='card-container'>
          <img src={`../assets/${props.coverImg}`} alt="katie zaferes" width="264" height="353" className="card--image"/>
          {/* Check for openstatus to equal zero and if it does display it with a span */}
          {/* {props.status === 0 && <span>SOLD OUT</span>} */}
          {badgeText && <span>{badgeText}</span>}
          <div className='card-body'>
            <p>
              <img src={`../assets/star.svg`} alt='star icon' className='card-body--star'/> {props.stats.rating} 
              <span className='card-body--text_top'>({props.stats.reviewCount}) &#9679; {props.country} </span>
            </p>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
          </div>
        </div>
    </div>
  )
}

export default Card