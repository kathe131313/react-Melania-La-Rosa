import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


function CartModal({ show, handleClose, cart, removeFromCart, calculateTotal }) {

  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/checkout");
    handleClose();
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tu Carrito de Servicios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length > 0 ? (
          <>
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6>{item.name}</h6>
                    <p className="mb-1">${item.price?.toFixed(2)}</p>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-end">
              <h5>Total: ${calculateTotal()}</h5>
            </div>
          </>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleContinueShopping}>
          Continuar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
