import React from 'react';

import eventImg from '../image/bar.png';
import './mediaEvent.css';

const Restaurant = () => {
  return (
    <div className='event-container'>
        <div className='event-inner'>
            <div className='event-img'>
                <img src={eventImg}
                width={120} height={95} />
            </div>
            <div className='event-title'>
                <p className='event-name'>Бар Gazzler</p>
                <p className='event-text'>Описание бара</p>
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

export default Restaurant;