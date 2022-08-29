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
            <div className='grid place-items-center'>
                <img src={image1} alt="image1" />
            </div>
            <div className='name grid place-items-center '>
                <h1>
                    <span className=' text-slate-500'>&lt;</span><span className=' text-emerald-500'>DavidMartinez</span><span className=' text-slate-500'>/&gt;</span>
                </h1>
            </div>
            <div className='-mt-2 ml-12 role grid grid-rows-2 '>
                <h1>
                    Front-End Developer
                </h1>
                <p className=' text-slate-500 '>
                    Los Angeles Native Living in the <span><a className='p-1 border border-neutral-700 rounded-sm' href='https://maps.apple.com/?address=Potomac%20River,%20Washington,%20DC,%20United%20States&auid=5294854946377719338&ll=38.884414,-77.052401&lsp=7618&q=Dropped%20Pin&_ext=EiYp2gJC6+HxQkAxxC+rZgxuU8A5VDsejgmqQ0BBJL0DlyIPU8BQDA%3D%3D'>DMV</a></span>
                </p>
                <div className='flex flex-row mt-3'>
                    <div >
                        <BsLinkedin size={25} />
                    </div>
                    <div className='mx-5'>
                        <BsGithub size={25} />
                    </div>
                    <div >
                        <BsMailbox2 size={25} />
                    </div>
                    <div >
                        <RiFilePaper2Fill className='mx-5' size={25} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Memoji