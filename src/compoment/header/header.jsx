import React from 'react'
import "./header.scss"
import logo from "../../accsets/images/logo.png"
import { Link } from "react-scroll"
const Header = () => {
    return (
        <div className="header" id='home'>
            <img src={logo} alt='' className='logo' />

            <ul className="header-menu">
                <li>Home</li>
                <li><Link
                    to='program'
                    span={true}
                    smooth={true}
                >Programs</Link>
                </li>
                <li><Link
                    to='reasons'
                    span={true}
                    smooth={true}
                >Why Us</Link></li>
                <li><Link
                    to='plans'
                    span={true}
                    smooth={true}
                >Plans</Link></li>
                <li><Link
                    to='testimonials'
                    span={true}
                    smooth={true}
                >Testimonials</Link></li>
            </ul>
        </div>
    )
}
export default Header