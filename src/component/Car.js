import React from "react";
import { Button, Card } from "react-bootstrap"; 
import "./Car.css";

const Car = ({car}) => {
    return (
        <>
            <Card className="my-3 p-3 rounded h-90">
                <Card.Img variant='top' src={car.image}/>
                <Card.Body>
                    <Card.Title className="text-muted title mb-2">
                        {`${car.name}`}
                    </Card.Title>
                    <Card.Subtitle className="price mb-2">
                        {`${car.price}`}
                    </Card.Subtitle>
                    <Card.Text className="description_car mb-2">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </Card.Text>
                    <Button className="btn_detail btn-success w-100">Pilih Mobil</Button>
                </Card.Body>
            </Card>  
        </>
    )
}

export default Car;