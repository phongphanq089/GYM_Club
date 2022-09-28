import React from 'react'
import { useRef } from 'react'
import "./Join.scss"
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('sgervice_kabkir', 'template_7mrvvup', form.current, 'zuSpHsI0oijnacH26')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id='join-us'>
            <div className="left-j">
                <div className='top'></div>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOURE BODY</span>
                    <span className='stroke-text'>WITH US?  </span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='email' placeholder='enter your email' />
                    <button className='btn bnt-j'>join now</button>
                </form>
            </div>
        </div>
    )
}
export default Join