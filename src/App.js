import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Technologies from './Technologies/Technologies';
import Header from './Header/Header';
import Challanges from './Challanges/Challanges';

function App() {

  return (
    <div className='main'>
      <div id="home">
        <Header/>
      </div>
      <div className='-mt-24'>
        <Memoji />
      </div>
      <div id="about" className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div >
      <div id="tech">
        <Technologies/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="challanges">
        <Challanges/>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
