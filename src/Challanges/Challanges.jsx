import "./Challanges.css"
import Axios from "axios"

import React, { useEffect, useState } from 'react'

const Challanges = () => {

    const [challanges, setChallanges] = useState([])
    // const [challangesSlug, setChallangesSlug] = useState([])

    let array = [];

    useEffect(() => {

        const challange = () => {
            Axios.get("https://www.codewars.com/api/v1/users/javidVeg/code-challenges/completed?page=0")
                .then((response) => {
                    setChallanges(response.data.data)
   
                });
        };
        challange();




    }, [])

    console.log(challanges)

    const slugs = () => {
        challanges.forEach((element, i) => {
            console.log(element.slug)
           
            Axios.get(`https://www.codewars.com/api/v1/code-challenges/${element.slug}`)
            .then((response) => {
                array.push(response.data.name)
                array.sort(function(a,b){ return b-a; })
                // console.log(challangesSlug)
                

            })
        });
    }
    slugs();

    console.log(array)

    return (
        <div className="challanges-container">
            <div className="challanges-title">
                <h1 className=''>#Challanges</h1>
            </div>
            <div className="codewars">
                <h3 className="codewars-title text-emerald-500">Completed Codewars Challanges</h3>
                <a href="https://www.codewars.com/users/javidVeg"><img src="https://www.codewars.com/users/javidVeg/badges/large"></img></a>
            </div>
            <div className="completed">

            </div>
        </div>
    )
}

export default Challanges