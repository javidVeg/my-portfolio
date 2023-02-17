import React, { useState, useRef, useEffect } from 'react';
import Observer from 'gsap/Observer';
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




  // window.onmousemove = event => {
  //   const { clientX , clientY } = event;
  //   ghostRef.current.style.left = `${clientX}px`
  //   ghostRef.current.style.top = `${clientY}px`
  // } 


  // window.onscroll = event => {
  //   const { clientX , clientY } = event;
  //  console.log(clientX)
  // } 

  Observer.create({
    target: window,         
    type: "wheel,touch,scroll,pointer",    
    // onChange: (self) => console.log(self.deltaX, self.deltaY),
    onMove: (self) => {
      console.log("x:" + self.deltaX, "y:" + self.deltaY);
      ghostRef.current.style.left = `${self.clientX}px`;
      ghostRef.current.style.top = `${self.clientY}px`;
    }
  });

  

  


  return (
    <div className='main'>
      <div ref={ghostRef} className='ghost'></div>
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
      <div id="challenges">
        <Challenges/>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
