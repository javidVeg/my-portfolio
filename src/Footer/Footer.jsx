import React from 'react';
import memoji from '../pictures/david5.png'
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { SiFramer } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiMaterialui } from "react-icons/si"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";

const Footer = () => {

    const { ref, inView } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();

    const reviewAnimation = () => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.3,
                },
            });
        }
        if (!inView) {
            animation.start({ x: -200 });
        }
    };

    reviewAnimation();

    const reviewAnimation2 = () => {
        if (inView) {
            animation2.start({
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.3,
                },
            });
        }
        if (!inView) {
            animation2.start({ y: 200 });
        }
    };

    reviewAnimation2();

    const reviewAnimation3 = () => {
        if (inView) {
            animation3.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.3,
                },
            });
        }
        if (!inView) {
            animation3.start({ x: 200 });
        }
    };

    reviewAnimation3();

    return (
        <div className='footer'>
            <div className='footer-container'>
                <motion.div
                    ref={ref}
                    animate={animation} className='grid-item-1 text-center mt-10 text-white items-center flex flex-col '>
                    <div>
                        <h1>Navigation</h1>
                        <hr className='divider' />
                    </div>
                    <a href="#home">Home</a>
                    <a href='#about'>About</a>
                    <a href='#tech'>Technologies</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={animation2} className='grid-item-2 mt-10 flex flex-col items-center text-white'>
                    <div className='flex flex-col items-center'>
                        <h1>Find Me @</h1>
                        <hr className='divider' />
                    </div>
                    <a href='https://www.linkedin.com/in/davidandrewmartinez/'><AiOutlineLinkedin size={35} color="#BFDBFE" className='icon mt-5' /></a>
                    <a href='https://github.com/javidVeg'><FiGithub size={30} color="#DDD6FE" className='icon mt-5' /></a>

                </motion.div>
                <motion.div
                    ref={ref}
                    animate={animation3} className='grid-item-3'>
                    <img src={memoji} alt="alt-memoji" width="150vw" />
                </motion.div>
                <div className='foot-foot grid-item-4 text-white flex flex-row flex-wrap justify-center '>
                    <div className='foot-left text-emerald-500'>
                        David Andrew Martinez &reg; {new Date().getFullYear()}
                    </div>
                    <div className='foot-right text-center flex flex-row ' >
                        Created using: 
                    </div>
                    <div className='foot-right text-center flex flex-row gap-2 -ml-2 self-center'>
                        <FaReact/><SiTailwindcss/><SiMaterialui/><SiFramer/>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer