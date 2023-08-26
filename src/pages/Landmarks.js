import React from 'react';

import Point from '../components/Point';


const landmarks = () => {
  return (
    <>
        
        <main className="main">
            <div className="main-body">
                <div className="main-container">
                    <h1>Достопримечательности</h1>
                    <Point/>
                    <Point/>
                    <Point/>
                    <Point/>
                </div>
            </div>
        </main>
    </>  
  );
}

export default landmarks;