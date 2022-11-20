import React from 'react'
import css from "../pictures/css.png"
import html from "../pictures/html.png"
import js from "../pictures/js.png"
import react from "../pictures/react1.png"
import tw from "../pictures/tailwind.png"
import mui from "../pictures/mui.png"
import node from "../pictures/node.png"
import gs from "../pictures/greensock.png"
import './Technologies.css'


const Technologies = () => {
    return (
        <div className='tech-container'>
            <div className='container-title'>
                <h1>#Technologies</h1>
            </div>
            <div className="tech-card gap-10 shadow-lg shadow-black">
                <div>
                    <img width={150} src={react} alt="REACT" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl '>React</h1>
                </div>
                <div>
                    <img width={120} src={js} alt="JS" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl mt-8'>Javascript</h1>
                </div>
                <div>
                    <img width={120} src={css} alt="CSS" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl mt-8'>CSS</h1>
                </div>
                <div>
                    <img width={120} src={html} alt="HTML" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl mt-8'>HTML</h1>
                </div>
                <div>
                    <img width={150} src={mui} alt="MUI" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl'>Material UI</h1>
                </div>
                <div>
                    <img width={150} src={tw} alt="TW" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl'>Tailwind</h1>
                </div>
                <div>
                    <img width={135} src={gs} alt="gs" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl mt-5'>Greensock</h1>
                </div>
                <div>
                    <img width={120} src={node} alt="NODE" />
                    <h1 className=' text-center text-slate-500 font-bold text-xl mt-8'>Node.js</h1>
                </div>
            </div>
        </div>
    )
}

export default Technologies