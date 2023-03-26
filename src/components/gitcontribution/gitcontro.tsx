import AnimatedLettersFast from 'components/AnimatedlettersFast'
import React, { useState, useEffect } from 'react'
import "./gitcontro.scss"
import  GitHubCalendar from "react-github-calendar";

const Gitcontro = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Github Contribution".split("")
    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })
   
    return (
        <div className='other'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className="other__container">
                <h1 className="other__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
            </div>
            <span className="sectiontag">&lt;/section&gt;</span>

            <div>
            <GitHubCalendar
        username="Yash0922"
        blockSize={20}
        blockMargin={5}
        color="#f1cb03"
        fontSize={16}
      />
            </div>
        </div>
        
        
    )
}

export default Gitcontro;