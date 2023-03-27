import AnimatedLettersFast from 'components/AnimatedlettersFast'
import React, { useState, useEffect } from 'react'
import "./otherProjects.scss"

const OtherProjects = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Other Projects ".split("")


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

            <ul className="other__list">
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Food Ordering App</div>
                            <p className='other__cardBodyDescription'>
                                Responsive pizza restaurant food ordering app UI design using React  Design restaurant app using vanilla.js and CSS.                             </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'>  vanilla.js &nbsp; HTML &nbsp; CSS</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Weather API</div>
                            <p className='other__cardBodyDescription'>
                            A weather API app built using HTML, CSS, and Vanilla JS is a useful tool for users to check the weather conditions in their location or any other location of their interest. The app would integrate with a weather API service to fetch real-time weather data and display it in a user-friendly interface.</p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'>  vanilla.js &nbsp; HTML &nbsp; CSS &nbsp; fetch API</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Mini YouTube</div>
                            <p className='other__cardBodyDescription'>
                            The section of a project for a YouTube clone built using Vanilla JS, HTML, and CSS could be an important aspect of the overall user experience. In this section, users can browse and search for videos, view video recommendations, and access video player controls.
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> vanilla.js &nbsp; HTML &nbsp; CSS &nbsp; fetch API</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Ping Pong Score-Keeper</div>
                            <p className='other__cardBodyDescription'>
                                Ping Pong Score Keeper website built on vanilla javascript and bulma frontend framework
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Bulma &nbsp; javascript &nbsp; vanilla js</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Moive Downloading website</div>
                            <p className='other__cardBodyDescription'>
                            A movie downloading website with the OMDB API built using HTML, CSS, and Vanilla JS would allow users to search for and download their favorite movies. The website would integrate with the OMDB API to fetch movie data and display it in a user-friendly interface.         </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> API call &nbsp; HTML / CSS &nbsp; Javascript</div>
                        </div>
                    </div>
                </li>
            </ul>
            <span className="sectiontag">&lt;/section&gt;</span>
            <div>

            </div>
        </div>
        
        
    )
}

export default OtherProjects