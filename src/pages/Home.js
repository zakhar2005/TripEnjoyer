import React from 'react';
import Trip from '../components/Trip';

import './media.css';


const Home = () => {
  return (
    <main className="main">
        <div className="main-body">
            <div className="main-container">
                <h1>Выбери путешествие</h1>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
                <Trip/>
            </div>
        </div>
    </main>
  );
}

export default Home;