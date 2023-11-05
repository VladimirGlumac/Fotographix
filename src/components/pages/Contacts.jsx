import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi"
import contactimg from "../../images/contactimg.jpg"
export default function Contact() {
    return (
        <div className='contact-page'>
            <div className='contact-part-one'>
                <img className='contact-image' src={contactimg} alt="" />
            </div>
            <div className='contact-part-two'>
                <h1 className='contact-heading'>Contact Us</h1>
                <div className='contact-container'>
                    <div className='contact-input-container'>

                        <label className='contact-label' for="fullname">Full Name</label>
                        <input className='input-contact' id='fullname' type="text" />

                        <label className='contact-label' for="email">Email</label>
                        <input className='input-contact' id='email' type="text" />

                        <label className='contact-label' for="message">Message</label>
                        <textarea className='input-textarea' name="" id="message" cols="30" rows="10"></textarea>
                        <button className='contact-button'>Contact Us</button>
                    </div>
                    <div className='email-location'>
                        <div className='email-location-container'>
                            <h2 className='contact-info-title'>Contact</h2>
                            <p>fotographix.@gmail.com</p>
                        </div>
                        <div className='email-location-container'>
                            <h2 className='contact-info-title'>Based in</h2>
                            <p>Niverville,</p>
                            <p>NewYork</p>
                        </div>
                        <div className='contact-logos'>
                            <BiLogoFacebook className='contact-logo' />
                            <BiLogoInstagram className='contact-logo' />
                            <BiLogoTwitter className='contact-logo' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
