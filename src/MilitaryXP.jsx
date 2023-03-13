import React from 'react'
import army from "./pictures/military/army.png"
import scream from "./pictures/military/scream.png"
import air from "./pictures/military/air.png"
import staff from "./pictures/military/staff.png"
import path from "./pictures/military/path.png"
import horse from "./pictures/military/horse.png"
import old from "./pictures/military/old.png"
// import camo from "./pictures/military/camo.png"
import "./App.css"


const MilitaryXP = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='container-title'>
                <h1>#Military Experience</h1>
            </div>
            <div className='relative flex flex-wrap flex-row justify-center w-3/4 h-auto items-center m-7 mt-0 md:w-3/4  rounded-md p-6 md:p-5 gap-5 md:gap-3 bg-[rgb(59,59,59)] shadow-lg shadow-black'>
                <img className='w-fit h-[101px]' src={army} alt="army" />
                <img className='w-fit h-[101px]' src={staff} alt="army" />
                <img className='w-[101px] h-fit' src={air} alt="army" />
                <img className='w-fit h-[101px]' src={path} alt="army" />
                <img className='w-fit h-[101px]' src={scream} alt="army" />
                <img className='w-fit h-[101px]' src={horse} alt="army" />
                <img className='w-fit h-[101px]' src={old} alt="army" />
            </div>
        </div>
    )
}

export default MilitaryXP