import React, { useState } from 'react'
import "./header.scss"
import logo from "../../accsets/images/logo.png"
import { Link } from "react-scroll"
import {AiOutlineBars,AiFillCloseCircle} from "react-icons/ai"
import { FlatTree } from 'framer-motion'
const Header = () => {
    const [openMobile, setOpenmobile] = useState(true)
    return (
        <div className="header" id='home'>
             <img src={logo} alt='' className='logo' />
           {openMobile === false ?
          ( <div className='bar'onClick={() => setOpenmobile(true)}><AiOutlineBars /></div>)
           :
           (
            <ul className="header-menu">
            <li><Link
                to='home'
                span={true}
                smooth={true}
            >Home</Link></li>
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
         <div className="icon-close" onClick={()=> setOpenmobile(false)}><AiFillCloseCircle/></div>
        </ul>   
         
           )
          }
         
        </div>
    )
}
export default Header