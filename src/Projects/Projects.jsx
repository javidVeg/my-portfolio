import React from 'react'
import "./Projects.css"


const Projects = () => {
    return (
        <div className='projects-container '>
            <div className='projects-title '>
                <h1 className=''>#Projects</h1>
            </div>
           {/*------------- THIS IS AVO SECTION ---------------*/}
            <img className='shadow-lg shadow-black' src={"https://res.cloudinary.com/davidveg/image/upload/v1669666945/allvets.ef2c8f35430dc84d9199_hr5uwu.png"} alt="all-veterans-outside-hero-example" />
            <div className='project-card gap-4 shadow-lg shadow-black'>
                <h1 className='app-title'>All Veterans Outside<hr className='project-divider' /></h1>

                <h1 >
                Allveteransoutside.com is a bare bones landing page (for now) for a NPO for veterans. I was brought on to the team by the CEO Justis B. who saw some of my previous 
                    work and was drawn by the style that I have delivered on other projects. In this project I focused on honing in my skills with Firebase and being able to send data to a database and 
                    letting the subscriber know their data was received. 
                </h1>
                <div>
                    <h1 className=' font-bold'>
                        Technologies
                    </h1>
                    <hr className='project-divider' />
                    <p>-React.js<br />-Javascript<br />-CSS<br />-HTML</p>
                </div>


                <div className='flex flex-row gap-2 md:flex-col'>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-2 border border-emerald-500 rounded'><a href='https://allveteransoutside.com'>Visit</a></button>
                    <button className=' bg-slate-400 hover:bg-slate-500 text-white font-bold py-1 px-2 border border-slate-500 rounded'><a href='https://github.com/javidVeg/AVO'>Github</a></button>
                </div>
            </div>
            {/* ------------THIS IS AFFINITIS SECTION--------------- */}
            <img className='shadow-lg shadow-black' src={"https://res.cloudinary.com/davidveg/image/upload/v1669667053/affiniti.68b8735d837712f0b0f9_hlr3ub.png"} alt="affinit-hero-example" />
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
            {/* ------------THIS IS Hello, Apples SECTION--------------- */}
            <img className='shadow-lg shadow-black' src={"https://res.cloudinary.com/davidveg/image/upload/v1669666984/hello-apple.d22192676e7c2baf9b0b_ycpnuq.png"} alt="hello apple" />
            <div className='project-card gap-1 shadow-lg shadow-black'>
                <h1 className='app-title'>Hello, Apple<hr className='project-divider' /></h1>
                <h1 >
                    This is a web based application that I created as part of my devCodeCamp bootcamp capstone project. This Application is a robust
                    platform where users can register, create a post about Apple product leaks and news with full CRUD capabilities, like a post and even have a comment-like
                    dialogue with other users within the posting. This application also uses the News API to show relevant articles based on what the posting is about.

                </h1>
                <div>
                    <h1 className='tech-text font-bold'>
                        Technologies
                    </h1>
                    <hr className='project-divider' />
                    <p>-React.js<br />-Material UI<br />-Redux<br />-Node.js<br />-Express.js<br />-MongoDB<br />-JWT</p>
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