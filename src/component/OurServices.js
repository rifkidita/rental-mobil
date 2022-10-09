import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './OurServices.css';
import image_services from './assets/img_service.png';
import centang from './assets/centang.png'

const OurServices = () => {
    return(
    <Container fluid className="ourservice d-flex justify-content-end container" id='OurService'>
      <Row className="justify-content-md-center align-items-center w-100 p-0">
        <Col md className="p-0 mb-4">
            <img className="ourservice_image p-0" src={image_services} alt="service"/>
        </Col>
        <Col md className="d-flex flex-column h-100 p-0">
            <h1 className="mb-3">Best Car Rental for any kind of trip in Surabaya</h1>
            <p className="mb-3">Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="d-flex flex-row mb-1">
                <img src={centang} alt="centang" className="image_centang"/>
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="d-flex flex-row mb-1">
                <img src={centang} alt="centang" className="image_centang"/>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="d-flex flex-row mb-1">
                <img src={centang} alt="centang" className="image_centang"/>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="d-flex flex-row mb-1">
                <img src={centang} alt="centang" className="image_centang"/>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="d-flex flex-row mb-1">
                <img src={centang} alt="centang" className="image_centang"/>
                <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
        </Col>
      </Row>
    </Container>
    )
};

export default OurServices