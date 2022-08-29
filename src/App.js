import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Technologies from './Technologies/Technologies';
import MilPhotos from './MilPhotos/MilPhotos';

function App() {

  return (
    <div className='main'>
      <div >
        <Memoji />
      </div>
      <div className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div >
      {/* <div>
        <MilPhotos />
      </div> */}
      <div>
        <Technologies/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
