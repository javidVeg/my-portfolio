import React, { useState, useRef, useEffect } from 'react';
import Observer from 'gsap/Observer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const [mouseX, setMouseX] = useState(null)
  const [mouseY, setMouseY] = useState(null)
  const [scrollY, setScrollY] = useState(mouseY + 0)




  // window.onmousemove = event => {
  //   const { clientX , clientY } = event;
  //   ghostRef.current.style.left = `${clientX}px`
  //   ghostRef.current.style.top = `${clientY}px`
  //   console.log("x1:" + clientX, "y1:" + clientY);
  // } 


  // window.onscroll = event => {
  //   const { clientX , clientY } = event;
  //  console.log(clientX)
  // } 


  useEffect(() => {
    const ghost = ghostRef.current;
  
    gsap.set(ghost, { xPercent: -50, yPercent: -50 });
  
    ghost.addEventListener("mousemove", (event) => {
      gsap.to(ghost, { duration: 0.5, x: event.clientX, y: event.clientY });
    });
  
    ScrollTrigger.create({
      trigger: ghostRef,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const scroll = self.direction === 1 ? self.progress : 1 - self.progress;
        gsap.set(ghost, { scroll });
      }
    });
  
  }, [ghostRef]);

  // useEffect(() =>{
  //   Observer.create({
  //     target: window,         
  //     type: "wheel,touch,scroll,pointer",    
      
  //     onMove: (move) => {
  //       setMouseX(move.x);
  //       setMouseY(move.y);
        
  //     },
     

  //     onWheel: (move) => {
  //       setScrollY(move.deltaY)
  //       // console.log(move.deltaY);
  //     }
  //   });

  //   ghostRef.current.style.left = `${mouseX}px`;
  //   ghostRef.current.style.top = `${mouseY}px`;
    
  //   console.log("X:" + mouseX, "Y:" + mouseY)

  // }, [mouseX,mouseY, scrollY])




  

  


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
