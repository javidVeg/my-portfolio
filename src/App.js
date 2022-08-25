import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
;

function App() {

  return (
    <div className='main'>
      <div >
        <Memoji />
      </div>
      <div className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
