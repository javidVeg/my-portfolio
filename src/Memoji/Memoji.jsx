import React from 'react'
import image1 from "../pictures/david1.png"
import './Memoji.css';
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsMailbox2 } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

const Memoji = () => {


    return (
        <div>
            <div className='memoji grid place-items-center z-10'>
                <img src={image1} alt="image1" />
            </div>
            <div className='name grid place-items-center '>
                <h1>
                    
                        <span className=' text-slate-500'>&lt;</span>
                        <span className='david-span'>DavidMartinez</span>
                        <span className=' text-slate-500'>/&gt;</span>
                    
                 
                </h1>
            </div>
            <div className='role -mt-2 ml-6 md:ml-12  grid grid-rows-2 lg:ml-24 '>
                <h1>
                    Frontend Developer
                </h1>
                <p className=' text-slate-500 '>
                    Los Angeles Native Living in the <span><a className='p-1 border border-neutral-700 rounded-sm' href='https://maps.apple.com/?address=Potomac%20River,%20Washington,%20DC,%20United%20States&auid=5294854946377719338&ll=38.884414,-77.052401&lsp=7618&q=Dropped%20Pin&_ext=EiYp2gJC6+HxQkAxxC+rZgxuU8A5VDsejgmqQ0BBJL0DlyIPU8BQDA%3D%3D'>DMV</a></span>
                </p>
                <div className='flex flex-row mt-3'>
                    <div >
                        <a href="https://www.linkedin.com/in/davidandrewmartinez/"><BsLinkedin size={25} /></a>
                    </div>
                    <div className='mx-5'>
                        <a href="https://github.com/javidVeg"><BsGithub size={25} /></a>
                    </div>
                    <div >
                        <a href="mailto: javidx24@icloud.com"><BsMailbox2 size={25} /></a>
                    </div>
                    <div >
                        <a href='https://drive.google.com/file/d/1gLiliO0SvzFNTdhXtfRZJofRz7YeFVYS/view?usp=sharing'><RiFilePaper2Fill className='mx-5' size={25} /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Memoji