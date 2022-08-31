import React from 'react'
import css from "../pictures/css.png"
import html from "../pictures/html.png"
import js from "../pictures/js.png"
import react from "../pictures/react1.png"
import tw from "../pictures/tailwind.png"
import mui from "../pictures/mui.png"
import node from "../pictures/node.png"
import './Technologies.css'


const Technologies = () => {
    return (
        <div className='tech-container'>
                <div className='container-title'>
                    <h1>#Technologies</h1>
                </div>
            <div className="tech-card gap-10 shadow-lg shadow-black">
                <img width={120} src={css} alt="css" />
                <img width={120} src={html} alt="css" />
                <img width={120} src={js} alt="css" />
                <img width={150} src={react} alt="css" />
                <img width={150} src={mui} alt="css" />
                <img width={150} src={tw} alt="css" />
                <img width={120} src={node} alt="css" />
            </div>
        </div>
    )
}

export default Technologies