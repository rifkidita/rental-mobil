import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from 'react-bootstrap';
import Car from './Car';
import Navigation from "./Navbar";
import Footer from "./Footer";
import { Button, Form, } from "react-bootstrap";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async() => {
            getCars();
        })();
    }, [])

    const getCars = async () => {
        try{
            const res = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car");
            setCars(res.data);
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <div className="Container-Cars">
            <Navigation/>
            <div className="banner mb-5"></div>
            <div>
                <div className="card_hasilcarimobil w-75 container d-flex flex-column justify-content-center">
                    <div className="mb-3 title-pencarian">Pencarianmu</div>
                    <div className="card-body d-flex flex-row">
                        <div className="col-2">
                            <Form>
                                <Form.Group className="mb-3" controlId="" id="search-form">
                                    <Form.Label>Nama Mobil</Form.Label>
                                    <Form.Control type="" placeholder="Ketik nama/tipe mobil"/>
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
                            <Button className="btn_cari btn-success">Edit</Button>
                        </div>  
                    </div>
                        
                </div>
            </div>
            <br/>
            <div className="container list-car">
                <Row>
                    {cars.map((car) => {
                        return(
                        <Col sm={12} md={6} lg={4}>
                            <Car car={car}/>
                        </Col>
                        );
                    })}
                </Row>
            </div>
            <Footer/>
        </div>
    );
}



export default Cars;