import React, { useRef, useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Memoji from './Memoji/Memoji';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Technologies from './Technologies/Technologies';
import Header from './Header/Header';
import Challenges from './Challenges/Challenges';
import { IoIosArrowDropupCircle } from "react-icons/io"
import MilitaryXP from './MilitaryXP';

function App() {

  const ghostRef = useRef(null)

  useEffect(() => {
    window.onmousemove = event => {
      const { pageX, pageY } = event;
      ghostRef.current.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
      }, { duration: 5000, fill: 'forwards' })
    }

    

  }, [ghostRef])

  

  return (
    <div className='main'>
      <div ref={ghostRef} id="ghost"></div>
      <div id="home">
        <Header />
      </div>
      <div className='relative z-10 -mt-24'>
        <Memoji />
      </div>
      <div id="about" className='flex items-center justify-center mt-10'>
        <AboutMe />
      </div >
      <div className='flex items-center justify-center relative z-10 mt-10'>
        <MilitaryXP/>
      </div>
      <div id="tech">
        <Technologies />
      </div>
      <div id="projects" className='relative z-10'>
        <Projects />
      </div>
      <div id="challenges" className='relative z-10'>
        <Challenges />
      </div>
      <div id="contact" className='relative z-10'>
        <Footer />
      </div>
      <div className='fixed bottom-[50px] right-[50px] text-emerald-300 hover:text-emerald-400 z-50'>
       <a href='#home'><IoIosArrowDropupCircle size={30}/></a>
      </div>
    </div>

  );
}

export default App;
