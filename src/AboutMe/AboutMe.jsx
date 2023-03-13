import React, { useRef } from 'react'
import "./AboutMe.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

    const imgRef = useRef(null)
    const textRef = useRef(null)

    const refresh = () => {
        setTimeout(() => {
            ScrollTrigger.refresh();
            console.log("refresh")
        }, 500)

    }



    useEffect(() => {

        const mm = gsap.matchMedia();
        
        mm.add("(max-width: 445px)", () => {

            gsap.from(textRef.current, {
                scrollTrigger: {
                    id: "text2",
                    markers: false,
                    trigger: imgRef.current,
                    start: "top+=90 center",
                    toggleActions: "play"
                },
                duration: 2.5,
                x: -1000,
                ease: "elastic.out(1, 0.75)",

            })
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    id: "img2",
                    markers: false,
                    trigger: imgRef.current,
                    start: "top+=90 center",
                    toggleActions: "play"
                },
                duration: 2.5,
                x: 800,
                ease: "elastic.out(1, 0.75)",

            })

        })
        mm.add("(min-width: 446px)", () => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    id: "text",
                    markers: false,
                    trigger: imgRef.current,
                    start: "top+=25 center",
                    toggleActions: "play"
                },
                duration: 2.5,
                x: -1000,
                ease: "elastic.out(1, 0.75)",

            })
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    id: "img",
                    markers: false,
                    trigger: imgRef.current,
                    start: "top+=25 center",
                    toggleActions: "play"
                },
                duration: 2.5,
                x: 800,
                ease: "elastic.out(1, 0.75)",

            })
        })

        refresh();


    }, [])

    // useEffect(() => {

    // }, [])



    return (
        <div className='container'>
            <div ref={imgRef} className=" right shadow-lg shadow-black"></div>
            <div
                ref={textRef}
                className='left shadow-lg shadow-black'>
                <div className='content flex flex-col gap-5'>
                    <h2 className=' font-bold text-sm px-4 pt-4 md:text-base md:px-6'>About Me</h2>
                    <p className=' text-sm  px-4 md:text-base md:px-6'>
                    Innovation and creation ignite a passion within me that is unparalleled. Immersing myself in the ever-evolving world 
                    of Tech and Software Development has been a rewarding journey, and I feel incredibly fortunate to be a part of it. As 
                    a former infantryman with 11 years of service in the United States Army, I have traveled the world in my most recent 
                    role as a Congressional Travel Escort, and have gained a unique perspective on the power of technology to connect 
                    people across the globe. </p>
                    <p className=' text-sm px-4 md:text-base md:px-6'>In addition to my military experience, I am also a seasoned freelance frontend developer 
                    with 2.5 years of specialized expertise in React. My passion for building dynamic and engaging user interfaces has 
                    enabled me to collaborate with clients from diverse industries, delivering effective and innovative solutions that 
                    drive business growth. I am excited to continue my journey in the world of tech, bringing my skills and experience 
                    to the forefront of the industry. </p>
                    <p className=' text-sm px-4 md:text-base md:px-6 pb-4'>My adaptability and positive attitude make me a valuable asset to any team, and 
                    I am confident in my ability to help them shine. I quickly grasp new concepts and adapt to changing circumstances, 
                    delivering outstanding results in any environment.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutMe