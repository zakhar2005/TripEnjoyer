import React from 'react';
import './mediaHeader.css';

const Header = () => {
  return (
    <header className="header">
		<div className="header-container">
			<div className="logo">
				<p>TripEnjoyer</p>
			</div>
			<div className="menu">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 12H19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M5 7H19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M5 17H19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
			</div>
		</div>
    </header>
  );
}

export default Header;