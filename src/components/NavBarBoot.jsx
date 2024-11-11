
import React from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarboot.css';

import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBoot() {
  return (
    <Navbar expand="lg" className="bg-body-secondary py-0 w-100">
      <div className="container-fluid justify-content-center">
        <Navbar.Brand href="#" className="d-flex ">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="align-bottom justify-content-center">
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="op1">Masaje Manual</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="opc2">Biodescodificación</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="opc3">Meditación</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="opc4">Terápias Energéticas</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <div className="carri ms-lg-4 py-4">
          <CartWidget />
        </div>
      </div>

    </Navbar>

  );
}
export default NavbarBoot;