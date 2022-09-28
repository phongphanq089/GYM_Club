import React from 'react'
import "./Programs.scss"
import { programsData } from '../../data/programsData'
import rigthArow from "../../accsets/images/rightArrow.png"
const Programs = () => {
    return (
        <div className="Programs" id='program'>
            {/* headers program */}
            <div className="programs-header">
                <span className='stroke-text'>EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className='stroke-text'>TO SHAPE YOU</span>
            </div>
            <div className="programs-categories">
                {programsData.map((program, index) => {
                    return (
                        <div className="category" key={index}>
                            <div className="image">{program.image}</div>
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now"><span>Join Now</span> <img src={rigthArow} alt="" /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Programs