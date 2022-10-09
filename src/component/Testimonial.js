import React from 'react';
import testimonial_1 from './assets/img_photo1.png';
import testimonial_2 from './assets/img_photo2.png';
import testimonial_3 from './assets/img_photo3.png';
import rate from './assets/rate.png';
import right_button from './assets/right_button.png'
import left_button from './assets/left_button.png'
import './Testimonial.css';

const Testimonial = () => {

  const slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500; 
}

  const slideRight =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500; 
}

  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center mb-5' id='Testimonial'>
        <h1>Testimonial</h1>
        <h5>Berbagai review positif dari para pelanggan kami</h5>
        <div className='mb-4' id="main-slider-container">
            <div id='slider'>
                <div className='slider-card justify-content-center align-items-center'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <img src={testimonial_1} alt='' id='image_people'/>
                        <div className='slider-card-description d-flex flex-column'>
                            <img src={rate} alt='' id='image_rating'/>
                            <div className='description_testimonial'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                            <div className='location'>John Dee 32, Bromo</div>
                        </div>
                    </div>           
                </div>
                <div className='slider-card'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <img src={testimonial_2} alt='' id='image_people'/>
                        <div className='slider-card-description d-flex flex-column'>
                            <img src={rate} alt='' id='image_rating'/>
                            <div className='description_testimonial'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                            <div className='location'>John Dee 32, Bromo</div>
                        </div>
                    </div>           
                </div>
                <div className='slider-card'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <img src={testimonial_3} alt='' id='image_people'/>
                        <div className='slider-card-description d-flex flex-column'>
                            <img src={rate} alt='' id='image_rating'/>
                            <div className='description_testimonial'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                            <div className='location'>John Dee 32, Bromo</div>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
        <div className='d-flex flex-row'>
            <img className='left'  src={left_button} alt='' onClick={slideRight}/>
            <img className='right'  src={right_button} alt='' onClick={slideLeft}/>
        </div>
    </div>
    

  );
}

export default Testimonial;