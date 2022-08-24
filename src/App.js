import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
;

function App() {

  return (
    <div>
      <div className='main'>
        <Memoji />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
