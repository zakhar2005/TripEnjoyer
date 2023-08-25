import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from'./components/Footer';

import './reset.css';
import './main.css';


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App;
