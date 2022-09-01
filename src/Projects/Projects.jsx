import React from 'react'
import "./Projects.css"
import affiniti from "../pictures/affiniti.png"
import hello from "../pictures/hello-apple.jpg"

const Projects = () => {
    return (
        <div className='projects-container '>
            <div className='projects-title '>
                <h1 className=''>#Projects</h1>
            </div>

            <img className='shadow-lg shadow-black' src={affiniti} alt="affinit" />
            <div className='project-card gap-4 shadow-lg shadow-black'>
                <h1 className='app-title'>Affinitihair.com<hr className='project-divider' /></h1>

                <h1 >
                    Affinitihair.com is a website that users can visit to learn more about Affiniti Hair Salon in Whittier California. This site features an amazing
                    hero banner, eye catching animations and a simple, yet well orchestrated, user interface.
                </h1>
                <div>
                    <h1 className=' font-bold'>
                        Technologies
                    </h1>
                    <hr className='project-divider' />
                    <p>-React.js<br />-Framer/Motion<br />-Material UI<br />-Tailwind</p>
                </div>


                <div className='flex flex-row gap-2 md:flex-col'>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-2 border border-emerald-500 rounded'><a href='https://affinitihair.com'>Visit</a></button>
                    <button className=' bg-slate-400 hover:bg-slate-500 text-white font-bold py-1 px-2 border border-slate-500 rounded'><a href='https://github.com/javidVeg/affiniti-hair-salon'>Github</a></button>
                </div>
            </div>

            <img className='shadow-lg shadow-black' src={hello} alt="hello apple" />
            <div className='project-card gap-1 shadow-lg shadow-black'>
                <h1 className='app-title'>Hello, Apple<hr className='project-divider' /></h1>
                <h1 >
                    This is a web based application that I created as part of my devCodeCamp bootcamp capstone project. This Application is a robust
                    platform where users can register, create post about Apple product leaks and news with full CRUD capabilities, like post and even have a comment like
                    dialogue with other users within the posting. This application also uses the News API to show relevent articels based on what the posting is about.

                </h1>
                <div>
                    <h1 className='tech-text font-bold'>
                        Technologies
                    </h1>
                    <hr className='project-divider' />
                    <p>-React.js<br />-Matrial UI<br />-Redux<br />-Node.js<br />-Express.js<br />-MongoDB<br />-JWT</p>
                </div>


                <div className='tech-text flex flex-row gap-2 md:flex-col'>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-2 border border-emerald-500 rounded'><a href='https://helloapplev1.herokuapp.com/'>Visit</a></button>
                    <button className=' bg-slate-400 hover:bg-slate-500 text-white font-bold py-1 px-2 border border-slate-500 rounded'><a href='https://github.com/javidVeg/Hello-Apple'>Github</a></button>
                </div>
            </div>
        </div>
    )
}

export default Projects