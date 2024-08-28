import AnimatedLettersFast from 'components/AnimatedlettersFast'
// import Center from 'components/Layout/Center'
import React, { useState, useEffect } from 'react'
import "./statayic.scss"


const Static = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "My Statistics".split("")
    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })
   
    return (
        <div className='static' id='Static'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className="other__container">
                <h1 className="other__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
            </div>
            <div style={{marginTop:"30px",display:"flex",justifyContent:"center",gap:"2%",width:"100%",flexWrap:"wrap-reverse"}}>
                <img className='static__statc-img' width= "45%"src="https://github-readme-stats.vercel.app/api?username=mohitkhairia&show_icons=true&theme=prussian&hide_border=true&text_color=b49d0e" alt="" />
                <img className='static__statc-img'width= "48%"src="https://github-readme-streak-stats.herokuapp.com/?user=mohitkhairia &theme=prussian&show_icons=true&hide_border=true&currStreakLabel=b49d0e&currStreakNum=b49d0e&sideNums=b49d0e&sideLabels=b49d0e&fire=b49d0e" alt="" />
            </div>
            <span className="sectiontag">&lt;/section&gt;</span>

          
        </div>
        
        
    )
}

export default Static;