import React from 'react'
import pinIcon from '../assets/pin.svg';

function Card(props) {
    console.log(props);
  return (
    <div className="card">
        <div>
            <img src={`../assets/${props.imageUrl}`} alt="destination photos" className="card--image"/>
        </div>
        <div>
            <div className="card--content">
                <img src={pinIcon} alt="pin icon" className="pin-icon"/>
                <span className="card--content__country">{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <span className="card--content__dates">{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card