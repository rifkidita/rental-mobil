import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import image_car from './assets/img_car.png'
import './CariMobilPage.css'
import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";

const CariMobilPage = () => {

        return(
            <div>
                <div><Navigation/></div>
                <div className="hero justify-content-end">
                    <div className="justify-content-center d-flex flex-row align-items-center">
                        <div className="hero-index col-lg-5 d-flex flex-column h-100 justify-content-center p-0">
                            <h1 className="mb-4">Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
                            <p className="mb-3 w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className="p-0 image_container col-lg-6">
                            <img className="car_image p-0" src={image_car} alt="car"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_carimobil w-75 container d-flex justify-content-center align-items-center">
                        <div className="card-body d-flex flex-row">
                            <div className="col-2">
                                <Form>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Nama Mobil</Form.Label>
                                        <Form.Control type="" placeholder="Ketik nama/tipe mobil" />
                                    </Form.Group>
                                </Form>  
                            </div>
                            <div className="col-2">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kategori</Form.Label>
                                        <Form.Select enable>  
                                        <option></option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="col-2">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Harga</Form.Label>
                                        <Form.Select enable>
                                        <option></option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div> 
                            <div className="col-2">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select enable>
                                        <option></option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="col-2 d-flex align-items-center">
                                <Link className="button_sewa_cta btn btn-success" to={"/Cars"}>Cari Mobil</Link>
                            </div>  
                        </div>
                        
                    </div>
                </div>
                <br/>            
                <div><Footer/></div>   
            </div>
        )
    }
export default CariMobilPage