import React from "react";
import './CTABanner.css';
import {Link} from "react-router-dom";

const CTABanner = () => {
    return(
        <div id="CTABanner" className="container-md d-flex flex-column align-items-center">
            <div className="title"><h1>Sewa Mobil di (Lokasimu) Sekarang</h1></div>
            <h5 className="description-CTA mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <Link className="button_sewa_cta btn btn-success mb-4" to={"/CariMobilPage"}>Mulai Sewa Mobil</Link>
            <br/>
        </div>
    );
};

export default CTABanner;
