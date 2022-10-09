import React from "react";
import './Hero.css';
import image_car from './assets/img_car.png';
import {Link} from "react-router-dom";



const Hero = () => {
    return(
    <>
      <div className="hero container-fluid justify-content-end">
        <div className="justify-content-center row align-items-center">
          <div className="hero-index col-lg-5 col-12 d-flex flex-column h-100 justify-content-center p-0">
              <h1 className="mb-4">Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
              <p className="mb-3 w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Link className="button_sewa btn btn-success" to={"/CariMobilPage"}>Mulai Sewa Mobil</Link>
          </div>
          <div className="p-0 image_container col-lg-6 col-12">
              <img className="car_image p-0" src={image_car} alt="car"/>
          </div>
        </div>
      </div>
      <div>
      <div>
        
      </div>  
      </div>
      
    </>
      
    
    )
};

export default Hero