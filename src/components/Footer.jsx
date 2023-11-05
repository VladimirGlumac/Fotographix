import React from "react"
import { AiFillCamera } from "react-icons/ai"
import GoogleMapLocation from "./pages/Map";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container-one">
                <div className="logo"><h2><AiFillCamera />FOTOGRAPHIX</h2>
                    <p>Unleash Your Inner Photographer</p></div>
                <div className="location"><h2>Location</h2>
                    <p> Niverville	NewYork	United States</p>
                    <GoogleMapLocation />

                </div>
                <div className="footer-help"><h2>Help</h2>
                    <ul className="help-list">
                        <li className="help-links"><a href="#">Contact Us</a></li>
                        <li className="help-links"><a href="#">FAQ</a></li>
                        <li className="help-links"><a href="#">Payments</a></li>
                    </ul></div>
                <div className="footer-follow"><h2>Folow us</h2>
                    <ul className="help-list">
                        <li className="help-links"><a href="#">Instagram</a></li>
                        <li className="help-links"><a href="#">Facebook</a></li>
                        <li className="help-links"><a href="#">Pinterest</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-container-two">
                <h1 className='footer-line'></h1>
                <p >&#169;Copyright.All rights reserved.</p></div>


        </footer>
    )
}