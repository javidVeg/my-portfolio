import React from 'react'
import "./Projects.css"
import affiniti from "../pictures/affiniti.png"

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1 className='projects-title'>#Projects</h1>
            <img className=' ' src={affiniti} alt="affinit" />
            <div className='project-card'>
                
                    <h1 >
                        cThis is a card with words about me and words about things i do to make me look good and i look good all the time but i
                        cThis is a card with words about me and words about things i do to make me look good and i look good all the time but i
                    </h1>
                    <h1 >
                        cThis is a card with words about me and words about things i do to make me look good and i look good all the time but i
                        cThis is a card with words about me and words about things i do to make me look good and i look good all the time but i
                    </h1>
               
                
                <div className='flex flex-col gap-2'>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-2 border border-emerald-500 rounded'>Visit</button>
                    <button className=' bg-slate-400 hover:bg-slate-500 text-white font-bold py-1 px-2 border border-slate-500 rounded'>Github</button>
                </div>
            </div>
        </div>
    )
}

export default Projects