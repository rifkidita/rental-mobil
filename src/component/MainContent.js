import React from "react";
import Hero from "./Hero";
import Navigation from "./Navbar";
import OurServices from "./OurServices";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import CTABanner from "./CTABanner";
import FAQ from "./FAQ"
import Footer from "./Footer";

const MainContent = () => {
    return (
        <div>
            <Navigation/>
            <div><Hero/></div>
            <div><OurServices/></div>
            <div><WhyUs/></div>
            <div><Testimonial/></div>
            <div><CTABanner/></div>
            <div><FAQ/></div>
            <div><Footer/></div>
        </div>
    )
}

export default MainContent;