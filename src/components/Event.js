import React from 'react';

import eventImg from '../image/event.png';
import './mediaEvent.css';

const Event = () => {
  return (
    <div className='event-container'>
        <div className='event-inner'>
            <div className='event-img'>
                <img src={eventImg} />
            </div>
            <div className='event-title'>
                <p className='event-name'>Концерт</p>
                <p className='event-text'>Street Voice Ganng</p>
                <p className='event-date'>25.08.2023</p>
            </div>
        </div>
        <div className='event-icon'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12H4" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 4V20" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
  );
}

export default Event;