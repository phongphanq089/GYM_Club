import React from 'react'
import "./footer.scss"
import linkedin from "../../accsets/images/linkedin.png"
import instagram from '../../accsets/images/instagram.png'
import github from "../../accsets/images/github.png"
import logo from "../../accsets/images/logo.png"
import { Link } from "react-scroll"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="blur blur-f"></div>
            <hr />
            <div className="footer">
                <div className="icon-footer-link">
                    <img src={github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="scroll-home" >
                <Link to='home'
                    span={true}
                    smooth={true}>Home</Link>
            </div>
        </div>
    )
}
export default Footer