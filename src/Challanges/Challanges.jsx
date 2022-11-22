import "./Challanges.css"
import Axios from "axios"

import React, { useEffect, useState } from 'react'

const Challanges = () => {

    const [challanges, setChallanges] = useState([])
    // const [challangesSlug, setChallangesSlug] = useState([])

    let codewarsData = [
        {
        "Title": "DNA to RNA Conversion",
        "Date": "2022-09-19T22:36:40.147Z",
        "Description": "Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). \n\nRibonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').\n\nCreate a function which translates a given DNA string into RNA.\n\nFor example:\n\n```\n\"GCAT\"  =>  \"GCAU\"\n```\n\nThe input string can be of arbitrary length - in particular, it may be empty.  All input is guaranteed to be valid, i.e. each input string will only ever consist of `'G'`, `'C'`, `'A'` and/or `'T'`."
    },
    {
        "Title": "If you can't sleep, just count sheep!!",
        "Date": "2022-11-06T22:10:07.558Z",
        "Description": "If you can't sleep, just count sheep!!\n\n## Task:\nGiven a non-negative integer, `3` for example, return a string with a murmur: `\"1 sheep...2 sheep...3 sheep...\"`.  Input will always be valid, i.e. no negative integers.\n"
    }
];

    useEffect(() => {
        //! THIS GETS DATA SET FROM CODEWARS API TO INCLUDE THE ~SLUG~ USED TO GET  
        //! EXTRA DATA USED BELOW.
        const challange = () => {
            Axios.get("https://www.codewars.com/api/v1/users/javidVeg/code-challenges/completed?page=0")
                .then((response) => {
                    setChallanges(response.data.data)

                });
        };
        challange();




    }, [])

    //! THIS FUNCTION GETS REMAINING DATA BASED ON USEEFFECT GET REQUEST AND PUSHES
    //! IT INSIDE THE EMPTY ARRAY VARIABLE.
    const extraAPIData = () => {
        challanges.forEach((element, i) => {
            Axios.get(`https://www.codewars.com/api/v1/code-challenges/${element.slug}`)
                .then((response) => {
                    codewarsData.push({
                        "Title": response.data.name,
                        "Date": element.completedAt,
                        // "Language": element.completedLanguages,
                        "Description": response.data.description
                    })
                })
        });
    }
    extraAPIData();

    

    console.log(codewarsData)
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
            <p className="completed">
                
                {
                    
                    challanges.map(({ name }) =>
                        (
                            <>
                                <p>{name}</p>
                               
                            </>

                    )           

                    )
                }
            </p>
        </div>
    )
}

export default Challanges