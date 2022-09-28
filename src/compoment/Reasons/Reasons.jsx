import React from 'react'
import "./Reasons.scss"
import image1 from '../../accsets/images/image1.png'
import image2 from '../../accsets/images/image2.png'
import image3 from '../../accsets/images/image3.png'
import image4 from '../../accsets/images/image4.png'
import tick from "../../accsets/images/tick.png"
import nb from "../../accsets/images/nb.png"
import adidas from "../../accsets/images/adidas.png"
import nike from "../../accsets/images/nike.png"
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
            </div>
            <div className="right-r">
                <span className='header' >SOME REASONS</span>
                <div>
                    <span className='stroke-text'>WHY</span>
                    <span>CHOOSE US?</span>
                </div>
                <div className="detail-r">
                    <div>
                        <img src={tick} alt='' />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontSize: "1.5rem" }}>OUR PARTNERS</span>

                <div className="partners">
                    <img src={nb} alt='' />
                    <img src={adidas} alt='' />
                    <img src={nike} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Reasons