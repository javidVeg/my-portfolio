import React, { useEffect, useState } from 'react'
import "./Challanges.css"
import Axios from "axios" 
import { FaHammer } from "react-icons/fa"
import { MdDateRange } from "react-icons/md"
import { BiCodeAlt } from "react-icons/bi"


const Challanges = () => {

    const [challanges, setChallanges] = useState([])

    useEffect(() => {
        const challange = () => {

            Axios.get("https://www.codewars.com/api/v1/users/javidVeg/code-challenges/completed?page=0")
                .then(response => {
                    setChallanges(response.data.data)
                })
                .catch(err => console.error(err.message));
        };
        challange();
    }, [])

    console.log(challanges)

    return (
        <div className="challanges-container">
            <div className="challanges-title">
                <h1 className=''>#Challanges</h1>
            </div>
            <div className="codewars">
                <h3 className="codewars-title text-emerald-500">Completed Codewars Challanges</h3>
                <a href="https://www.codewars.com/users/javidVeg"><img src="https://www.codewars.com/users/javidVeg/badges/large"></img></a>
            </div>
            <div className="comp-container">

                {

                    challanges.map(({ name, completedAt, completedLanguages }) =>
                    (
                        <div className="chall-wrapper">
                            <div className="tint">
                                <div className='p-wrapper'>
                                <p><FaHammer color='white' size={20}/>&nbsp;:&nbsp;{name}</p>
                                <p><MdDateRange color='white' size={20}/>&nbsp;:&nbsp;{completedAt.substr(0, 10)}</p>
                                <p><BiCodeAlt color='white' size={20}/>&nbsp;:&nbsp;{completedLanguages[0]}</p>
                                </div>
                               
                            </div>
                        </div>

                    )

                    )
                }
            </div>
        </div>
    )
}

export default Challanges