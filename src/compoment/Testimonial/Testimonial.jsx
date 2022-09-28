import React from 'react'
import "./Testimonial.scss"
import { testimonialsData } from '../../data/testimonialsData'
import leftRow from "../../accsets/images/leftArrow.png"
import rightRow from "../../accsets/images/rightArrow.png"
import { motion } from "framer-motion"
import { useState } from 'react'
const Testimonial = () => {
    const transition = { type: " spring", duration: 1 }
    const [selected, setSelected] = useState(0)
    const Tlenght = testimonialsData.length
    return (
        <div className='Testimonials' id='testimonials'>
            <div className="letf-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <div className='content'>
                    <span>{testimonialsData[selected].review}</span>
                </div>
                <div className="footer">
                    <span className='name'>{testimonialsData[selected].name}</span>
                    <span className='status'>-{testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="rigth-t">
                <motion.div
                    initial={{ opacity: "0", x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: "1", x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: "0", x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: "1", x: 0 }}
                ></motion.div>
                <motion.img className='image-t'
                    key={selected}

                    initial={{ opacity: "0", x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftRow} alt="" onClick={() => selected === 0 ? setSelected(Tlenght - 1) : setSelected(prev => prev - 1)} />
                    <img src={rightRow} alt="" onClick={() => selected === Tlenght - 1 ? setSelected(0) : setSelected(prev => prev + 1)} />
                </div>
            </div>
        </div>
    )
}
export default Testimonial