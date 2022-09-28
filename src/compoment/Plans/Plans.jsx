import React from 'react'
import './Plans.scss'
import { plansData } from '../../data/plansData'
import tick from "../../accsets/images/whiteTick.png"

const Plans = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className="blur blur-p1"></div>
            <div className="blur blur-p2"></div>
            <div className="programs-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'> NOW WITHUS</span>
            </div>
            {/* plans cart */}
            <div className="plans">

                {plansData.map((plan, index) => (
                    <div className="plan" key={index}>
                        <div className="icon">  {plan.icon}</div>
                        <span className='name'>{plan.name}</span>
                        <span className='price'>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature" key={index}>
                                    <img src={tick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <span>See more benefits  </span>
                        <button className='btn'> Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Plans