import React from 'react'
import "./hero.scss"
import Header from '../header/header'
import HeroImage from "../../accsets/images/hero_image.png"
import HeroImageback from "../../accsets/images/hero_image_back.png"
import heart from "../../accsets/images/heart.png"
import calories from "../../accsets/images/calories.png"
import { motion } from "framer-motion"
const Hero = () => {
    const transition = { type: " spring", duration: 2 }
    return (
        <div className="hero">
            <div className="blur blur-h"></div>
            <div className="lelf-h">
                <Header />
                {/* the best ad */}

                <div className="the-best-ad">
                    <motion.div
                        className='btn'
                        initial={{ left: "170px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    >
                    </motion.div>

                    <span>The best club in the center</span>
                </div>

                {/* header hero */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>SHAPE  </span>
                        <span>YOURE</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            {/* element rigth */}
            <div className="rigth-h">
                <button className="btn">Join Now</button>
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={{ ...transition }}

                    className="heart-rate">

                    <img src={heart} alt='' />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                {/* hero image */}
                <img src={HeroImage} alt='' className='Hero-Image' />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={{ ...transition }}
                    src={HeroImageback} alt='' className='Hero-Image-back' />
                {/* calories  */}
                <motion.div
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={{ ...transition }}
                    className="calories">

                    <img src={calories} alt='' />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Hero
