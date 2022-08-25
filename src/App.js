import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';

import Technologies from './Technologies/Technologies';

function App() {

  return (
    <div className='main'>
      <div >
        <Memoji />
      </div>
      <div className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div >
      <div>
        <Technologies/>
      </div>
    </div>
  );
}

export default App;
