import React, { useState } from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarboot.css";
import CartModal from "./CartModal";

function NavbarBoot({ cart, removeFromCart, calculateTotal }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const handleClose = () => setShowCartModal(false);
  const handleShow = () => setShowCartModal(true);

  return (
    <Navbar expand="lg" className="bg-body-secondary py-0 w-100">
      <div className="container-fluid">
        <Navbar.Brand  className="d-flex">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="align-bottom">
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Link as={Link} to="/">
            <p>Home</p>
            </Nav.Link>
            <Nav.Link as={Link} to="category/masaje">
            <p>Masaje Manual</p>
            </Nav.Link>
            <Nav.Link as={Link} to="category/biodescodificacion">
              <p>Biodescodificación</p>
            </Nav.Link>
            <Nav.Link as={Link} to="category/meditacion">
              <p>Meditación</p>
            </Nav.Link>
            <Nav.Link as={Link} to="category/terapias">
              <p>Terápias Energéticas</p>
            </Nav.Link>
            <Nav.Link as={Link} to="category/sobremi">
              <p>Sobre Mí</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>


        <div className="carri ms-lg-4 py-4 d-flex align-items-center justify-content-end">
          <CartWidget cartCount={cart.length} />
          <Button variant="outline-primary" className="ms-3" onClick={handleShow}>
            Ver Carrito
          </Button>
        </div>
     
        <CartModal
          show={showCartModal}
          handleClose={handleClose}
          cart={cart}
          removeFromCart={removeFromCart}
          calculateTotal={calculateTotal}
        />
      </div>
    </Navbar>
  );
}


export default NavbarBoot;
