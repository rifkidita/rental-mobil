import React from "react";
import {Navbar, Container, Offcanvas, Nav,} from 'react-bootstrap';
import './Navbar.css';

const Navigation = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-0 justify-content-center">
          <Container>
            <Navbar.Brand className="brand"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#OurService">Our Services</Nav.Link>
                  <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                  <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#FAQ">FAQ</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;