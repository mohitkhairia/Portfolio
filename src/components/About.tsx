import React, { useEffect, useState } from 'react'
import AnimatedLettersFast from './AnimatedlettersFast'
import "./scss/about.scss"
const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "01. About Me".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)

    })
    return (
        <div className='about'>
            <div className="about__left">
                <span className="sectiontag">&lt;section&gt;</span>
                <h1 className="about__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <div className='about__description'>
                    Hello!  I'm <span className='about__link'>Yash</span>, a Full Stack Developer located in India. My expertise lies in the design and development of complex web applications and I am highly passionate about this field. Through my expertise in software engineering, I am able to understand the intricate details of the development process, and I am able to efficiently deliver high-quality projects using precision and attention to detail.<br />
                    <br />
                    Well-organised person, problem solver, focused student at <a href='https://vit.edu.in/' target="_blank" rel="noreferrer" className="intro__link">MASAI</a> with high attention to detail. Fan of Gaming esports, outdoor activities, TV series.<br />
                    <br />
                    Here are the few technologies that I'have been working recently: <br />
                    <ul className='about__skillsList'>
                        <li className='about__skillsItems'>Javascript(ES6+)</li>
                        {/* <li className='about__skillsItems'>Python</li> */}
                        <li className='about__skillsItems'>HTML/CSS</li>
                        <li className='about__skillsItems'>Nodejs</li>
                        <li className='about__skillsItems'>Expressjs</li>
                        <li className='about__skillsItems'>Reactjs</li>
                        <li className='about__skillsItems'>MongoDb</li>
                        <li className='about__skillsItems'>Nextjs</li>
                        <li className='about__skillsItems'>React Redux</li>
                        {/* <li className='about__skillsItems'>SQL</li> */}
                        <li className='about__skillsItems'>Data Structures</li>
                        <li className='about__skillsItems'>Algorithms</li>
                    </ul>
                </div>
                <span className="sectiontag">&lt;/section&gt;</span>
            </div>
            <div className="about__right">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-python"></use>
                            </svg>
                        </div>
                        <div className="face2">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-css3"></use>
                            </svg>
                        </div>
                        <div className="face3">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-javascript"></use>
                            </svg>
                        </div>
                        <div className="face4">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-mongodb"></use>
                            </svg>
                        </div>
                        <div className="face5">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-node-dot-js"></use>
                            </svg>
                        </div>
                        <div className="face6">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-react"></use>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About