import React from 'react';

import eventImg from '../image/landmark.png';
import './mediaEvent.css';

const Point = () => {
  return (
    <div className='event-container'>
        <div className='event-inner'>
            <div className='event-img'>
                <img src={eventImg}
                width={140} height={95} />
            </div>
            <div className='event-title'>
                <p className='event-name'>Собор Святой Людовики</p>
                <p className='event-text'>Готический храм</p>
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

export default Point;