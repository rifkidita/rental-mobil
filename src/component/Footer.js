import React from "react";
import facebook from './assets/icon_facebook.png'
import instagram from './assets/icon_instagram.png'
import twitter from './assets/icon_twitter.png'
import email from './assets/icon_mail.png'
import twitch from './assets/icon_twitch.png'
import './Footer.css'


const Footer = () => {
    return(
        <div className="container footer">
            <div className="row">
                <div className="address col-lg-3 d-flex flex-column">
                        <div className="mb-3">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                        <div className="mb-3">binarcarrental@gmail.com</div>
                        <div className="mb-3">081-233-334-808</div>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                        <div className="mb-3">Our services</div>
                        <div className="mb-3">Why Us</div>
                        <div className="mb-3">Testimonial</div>
                        <div className="mb-3">FAQ</div>
                </div>
                <div className="col-lg-3 d-flex flex-column">
                        <div className="mb-3 connect">Connect with us</div>
                        <div className="d-flex flex-row mb-3">
                            <img className="icon" src={facebook} alt=""/>
                            <img className="icon" src={instagram} alt=""/>
                            <img className="icon" src={twitter} alt=""/>
                            <img className="icon" src={email} alt=""/>
                            <img className="icon" src={twitch} alt=""/>
                        </div>
                </div>
                <div className="col-lg-3 d-flex flex-column">
                        <div className="mb-3 copyright">Copyright Binar 2022</div>
                        <div className="mb-3 logo_binar"></div>
                </div>
            </div>

        </div>
    )
}

export default Footer;