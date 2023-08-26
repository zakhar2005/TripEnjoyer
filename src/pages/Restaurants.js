import React from 'react';

import Restaurant from '../components/Restaurant'


const Restaurants = () => {
  return (
    <>
        <main className="main">
            <div className="main-body">
                <div className="main-container">
                    <h1>Рестораны</h1>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                </div>
            </div>
        </main>
    </>  
  );
}

export default Restaurants;