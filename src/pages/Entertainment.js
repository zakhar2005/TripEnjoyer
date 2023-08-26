import React from 'react';

import Event from '../components/Event';


const Entertainment = () => {
  return (
    <>
      <main className="main">
            <div className="main-body">
                <div className="main-container">
                  <h1>Мероприятия</h1>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                </div>
            </div>
        </main>
    </>
  );
}

export default Entertainment;