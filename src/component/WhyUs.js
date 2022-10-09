import React from "react";
import card_1 from './assets/icon_complete.png';
import card_2 from './assets/icon_price.png';
import card_3 from './assets/icon_24hrs.png';
import card_4 from './assets/icon_professional.png';
import './WhyUs.css';

const WhyUs = () => {
    return(
        <div className="whyus container" id='WhyUs'>
            <h2 className="col mb-2">Why Us?</h2>
            <p className="col mb-4">Mengapa harus pilih Binar Car Rental?</p>
            <div className="list_item row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img className="image_cards mb-3" src={card_1} alt="image_card"/>
                            <h5 className="card-title mb-3">Mobil Lengkap</h5>
                            <p className="card-text mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img className="image_cards mb-3" src={card_2} alt="image_card"/>
                            <h5 className="card-title mb-3">Harga Murah</h5>
                            <p className="card-text mb-2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img className="image_cards mb-3" src={card_3} alt="image_card"/>
                            <h5 className="card-title mb-3">Layanan 24 Jam</h5>
                            <p className="card-text mb-2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img className="image_cards mb-3" src={card_4} alt="image_card"/>
                            <h5 className="card-title mb-3">Sopir Profesional</h5>
                            <p className="card-text mb-2">TSopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
            
    );
};

export default WhyUs