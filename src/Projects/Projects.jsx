import React from 'react'
import "./Projects.css"
import affiniti from "../pictures/affiniti.png"

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-title'>
            <h1>#Projects</h1>
            </div>
           
            <img className=' ' src={affiniti} alt="affinit" />
            <div className='project-card gap-4'>
                
                    <h1 >
                        Affinitihair.com is a website that users can visit to learn more about Affiniti Hair Salon in Whittier California. This site features an amazing
                        hero banner, eye catching animations and a simple, yet well orchestrated, user interface. 
                    </h1>
                    <div>
                    <h1 className=' font-bold'>
                        Technologies
                    </h1>
                    <hr className='project-divider' />
                    <p>-React.js<br/>-Framer/Motion<br/>-Matrial UI<br/>-Tailwind</p>
                    </div>
               
                
                <div className='flex flex-row gap-2 md:flex-col'>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-2 border border-emerald-500 rounded'><a href='https://affinitihair.com'>Visit</a></button>
                    <button className=' bg-slate-400 hover:bg-slate-500 text-white font-bold py-1 px-2 border border-slate-500 rounded'><a href='https://github.com/javidVeg/affiniti-hair-salon'>Github</a></button>
                </div>
            </div>
        </div>
    )
}

export default Projects