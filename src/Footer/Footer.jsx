import React, { useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import memoji from '../pictures/david5.png'
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { SiGreensock } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import "./Footer.css";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const navRef = useRef(null)
    const findRef = useRef(null)
    const memojiRef = useRef(null)

    useEffect(() => {
        gsap.from(navRef.current, {
            scrollTrigger: {
                id: "nav",
                trigger: navRef.current,
                start: "top-=300 center",
                toggleActions: "play"
            },
            duration: 2.5,
            x: -800,
            ease: "elastic.out(1, 0.75)",
            
        })
    }, [])
    useEffect(() => {
        gsap.from(findRef.current, {
            scrollTrigger: {
                id: "nav",
                trigger: navRef.current,
                start: "top-=300 center",
                toggleActions: "play"
            },
            duration: 2.5,
            y: 800,
            ease: "elastic.out(1, 0.75)",
            
        })
    }, [])
    useEffect(() => {
        gsap.from(memojiRef.current, {
            scrollTrigger: {
                id: "nav",
                trigger: navRef.current,
                start: "top-=300 center",
                toggleActions: "play"
            },
            duration: 2.5,
            x: 800,
            ease: "elastic.out(1, 0.75)",
            
        })
    }, [])

 

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div ref={navRef} className='nav-col text-center mt-10 text-white items-center flex flex-col '>
                        <div>
                            <h1>Navigation</h1>
                            <hr className='divider' />
                        </div>
                        <a href="#home">Home</a>
                        <a href='#about'>About</a>
                        <a href='#tech'>Technologies</a>
                        <a href='#projects'>Projects</a>
                        <a href='#challenges'>Challenges</a>
                        <a href='#contact'>Contact</a>
                    </div>
                    <div ref={findRef} className='find-col mt-10 flex flex-col items-center text-white'>
                        <div className='flex flex-col items-center'>
                            <h1>Find Me @</h1>
                            <hr className='divider' />
                        </div>
                        <a href='https://www.linkedin.com/in/davidandrewmartinez/'><AiOutlineLinkedin size={35} color="#BFDBFE" className='icon mt-5' /></a>
                        <a href='https://github.com/javidVeg'><FiGithub size={30} color="#DDD6FE" className='icon mt-5' /></a>

                    </div>
                    <div ref={memojiRef} className='memoji-col flex flex-col items-center'>
                        <img className="memoji-real" src={memoji} alt="alt-memoji"/>
                    </div>
                </div>
                <div className='footer-bottom text-white flex flex-row flex-wrap self-center mb-3 md:mt-20 '>
                    <div className='foot-left text-emerald-500 mr-4 text-center'>
                        David Andrew Martinez &reg; {new Date().getFullYear()}
                    </div>
                    <div className='foot-right text-center flex flex-row mr-4 ' >
                        Created using:
                    </div>
                    <div className='foot-right text-center flex flex-row gap-2 -ml-2 self-center'>
                        <FaReact size={25}/><SiTailwindcss size={25} /><SiGreensock size={25}/>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer