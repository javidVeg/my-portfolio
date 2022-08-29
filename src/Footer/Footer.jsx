import React from 'react';
import memoji from '../pictures/david5.png'
import { AiOutlineLinkedin } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='grid-item-1 text-center mt-10 text-white '>
                    <div>
                        <h1>Navigation</h1>
                        <hr className='divider' />
                    </div>
                    <p>Home</p>
                    <p>Technologies</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
                <div className='grid-item-2 mt-10 flex flex-col items-center text-white'>
                    <div className='flex flex-col items-center'>
                        <h1>Find Me @</h1>
                        <hr className='divider' />
                    </div>
                    <AiOutlineLinkedin  size={30} color="#BFDBFE" className='mt-3' />
                    <FiGithub size={30} color="#DDD6FE" className='mt-3' />
                    <FiTwitter size={30} color="#BAE6FD" className='twitter mt-3' />
                </div>
                <div className='grid-item-3'>
                    <img src={memoji} alt="alt-memoji" width="150vw" />
                </div>
                <div className='grid-item-4 text-white flex flex-row flex-wrap justify-center '>
                    <div className='foot-left text-emerald-500'>
                        David Andrew Martinez &reg; {new Date().getFullYear()}
                    </div>
                    <div className='foot-right' >
                        Not created on Wordpress because thats lame..
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer