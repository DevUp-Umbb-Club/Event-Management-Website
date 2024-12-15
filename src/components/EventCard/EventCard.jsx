import React from 'react';
import './EventCard.css';

const EventCard = ({Event}) => {
  return (
    <div className="card">
        <img src={Event.img} alt="gg"/>
        <div className="info">
            <h2>{Event.name}</h2>
            <h5>{Event.local}</h5>
            <h2>{Event.participentsNumber}</h2>
            <h3>{Event.Progress}</h3>
        </div>
    </div>
  )
}

export default EventCard