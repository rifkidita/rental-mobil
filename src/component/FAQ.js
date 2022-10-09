import React from "react"
import faq from "./assets/fi_chevron-down.png"
import "./FAQ.css"

const FAQ = () => {
    return (
        <div className="container justify-content-center align-items-center mb-5" id="FAQ">
            <div className="row">
                <div className="description_container col-lg-6 d-flex flex-column mb-4">
                    <div className="frequently mb-2">Frequently Asked Question</div>
                    <div className="description_faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
                <div className="list_faq col-lg-6 d-flex flex-column">
                    <div className="list_item row w-100">
                        <div className="card w-100 mb-3">
                            <div className="card-body-faq d-flex flex-row">
                                <div>Apa saja syarat yang dibutuhkan?</div>
                                <img className="image_FAQ" src={faq} alt="image_FAQ"/>
                            </div>
                        </div>
                    </div>
                    <div className="list_item row w-100">
                        <div className="card w-100 mb-3">
                            <div className="card-body-faq d-flex flex-row">
                                <div>Berapa hari minimal sewa mobil lepas kunci?</div>
                                <img className="image_FAQ" src={faq} alt="image_FAQ"/>
                            </div>
                        </div>
                    </div>
                    <div className="list_item row w-100">
                        <div className="card w-100 mb-3">
                            <div className="card-body-faq d-flex flex-row">
                                <div>Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
                                <img className="image_FAQ" src={faq} alt="image_FAQ"/>
                            </div>
                        </div>
                    </div>
                    <div className="list_item row w-100">
                        <div className="card w-100 mb-3">
                            <div className="card-body-faq d-flex flex-row">
                                <div>Apakah Ada biaya antar-jemput?</div>
                                <img className="image_FAQ" src={faq} alt="image_FAQ"/>
                            </div>
                        </div>
                    </div>
                    <div className="list_item row w-100">
                        <div className="card w-100 mb-3">
                            <div className="card-body-faq d-flex flex-row">
                                <div>Bagaimana jika terjadi kecelakaan?</div>
                                <img className="image_FAQ" src={faq} alt="image_FAQ"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
        
    )
}

export default FAQ