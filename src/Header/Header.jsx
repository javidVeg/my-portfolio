import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri"
import "./Header.css"
const Header = () => {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)

    return (
        <div className='Navbar'>
            <div className="links" id={isOpen ? "open" : ""}>
                <a onClick={() => setOpen(!isOpen)} href="#home">
                    Home
                </a>
                <a onClick={() => setOpen(!isOpen)} href="#about">
                    About Me
                </a>
                <a onClick={() => setOpen(!isOpen)} href="#tech">
                    Technologies
                </a>
                <a onClick={() => setOpen(!isOpen)} href="#projects">
                    Projects
                </a>
                <a onClick={() => setOpen(!isOpen)} href="#challenges">
                    Challenges
                </a>
                <a onClick={() => setOpen(!isOpen)} href="#contact">
                    Contact
                </a>
            </div>
            <div className='pt-5 z-20'>
                <button id="menu" onClick={() => setOpen(!isOpen)}><RiMenu2Fill color='white' size={40} /></button>
            </div>
        </div>
    )
}

export default Header