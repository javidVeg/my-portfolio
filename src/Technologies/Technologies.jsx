import React from 'react'
import css from "../pictures/css.png"
import html from "../pictures/html.png"
import js from "../pictures/js.png"
import react from "../pictures/react1.png"
import tw from "../pictures/tailwind.png"
import mui from "../pictures/mui.png"
import node from "../pictures/node.png"
import gs from "../pictures/greensock.png"
import fb from "../pictures/fb.svg"
import ps from "../pictures/ps.svg"
import './Technologies.css'


const Technologies = () => {
    return (
        <div className='tech-container'>
            <div className='container-title'>
                <h1>#Technologies</h1>
            </div>
            <div className="tech-card gap-8 shadow-lg shadow-black">
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[90px] md:w-[150px]" src={react} alt="REACT" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl '>React</h1>
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <img className="w-[80px] md:w-[150px]" src={tw} alt="TW" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl'>Tailwind</h1>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[70px] md:w-[100px]" src={fb} alt="Firebase" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>Firebase</h1>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[70px] md:w-[120px]" src={js} alt="JS" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>Javascript</h1> 
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[70px] md:w-[120px]" src={css} alt="CSS" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>CSS</h1>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[70px] md:w-[120px]" src={html} alt="HTML" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>HTML</h1>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <img className="w-[80px] md:w-[150px]" src={mui} alt="MUI" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl'>Material UI</h1>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img className="w-[70px] md:w-[135px]" src={gs} alt="gs" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-5'>Greensock</h1>
                </div>
                <div className='flex flex-col items-center gap-0'> 
                    <img className="w-[70px] md:w-[135px]" src={node} alt="NODE" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>Node.js</h1>
                </div>
                <div className='flex flex-col items-center gap-0'> 
                    <img className="w-[70px] md:w-[135px]" src={ps} alt="NODE" />
                    <h1 className=' text-center text-slate-500 font-bold text-md md:text-xl mt-8'>Photoshop</h1>
                </div>
            </div>
        </div>
    )
}

export default Technologies