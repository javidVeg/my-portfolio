import React from 'react'
import css from "../pictures/css.png"
import html from "../pictures/html.png"
import js from "../pictures/js.png"
import react from "../pictures/react1.png"
import tw from "../pictures/tailwind.png"
import mui from "../pictures/mui.png"
import node from "../pictures/node.png"


const Technologies = () => {
  return (
    <div>
        <div className="flex flex-row">
      <img width={100} src={css} alt="css"/>
      <img width={100} src={html} alt="css"/>
      <img width={100} src={js} alt="css"/>
      <img width={100} src={react} alt="css"/>
      <img width={100} src={mui} alt="css"/>
      <img width={100} src={tw} alt="css"/>
      <img width={100} src={node} alt="css"/>
      </div>
    </div>
  )
}

export default Technologies