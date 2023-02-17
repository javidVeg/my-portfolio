import React, { useState, useRef, useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Technologies from './Technologies/Technologies';
import Header from './Header/Header';
import Challenges from './Challenges/Challenges';

function App() {

  const ghostRef = useRef(null)

  useEffect(() => {
    window.onmousemove = event => {
      const { pageX, pageY } = event;
      ghostRef.current.style.left = `${pageX}px`
      ghostRef.current.style.top = `${pageY}px`
      console.log("x1:" + pageX, "y1:" + pageY);
    }
  }, [ghostRef])






  return (
    <div className='main'>
      <div ref={ghostRef} id="ghost" className='ghost'></div>
      <div id="home">
        <Header />
      </div>
      <div className='-mt-24'>
        <Memoji />
      </div>
      <div id="about" className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div >
      <div id="tech">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="challenges">
        <Challenges />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
