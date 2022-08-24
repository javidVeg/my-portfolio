import React from 'react'
import image1 from "../pictures/david1.png"
import './Memoji.css';

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
                <p className=' text-slate-500'>
                    Los Angeles Native Living in the DMV
                </p>

            </div>
        </div>
    )
}

export default Memoji