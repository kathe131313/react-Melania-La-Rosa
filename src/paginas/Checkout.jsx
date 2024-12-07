import React, { useState } from "react";

const Checkout = ({ cart, calculateTotal }) => {
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({ ...buyerData, [name]: value });
  };

  const handlePayment = () => {
    if (!buyerData.name || !buyerData.email || !buyerData.address) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setIsPaymentComplete(true);
  };

  return (
    <div className="checkout-container">
      {!isPaymentComplete ? (
        <div>
          <h2>Checkout</h2>
          <div className="buyer-form">
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={buyerData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={buyerData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="address"
                value={buyerData.address}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="order-summary">
            <h3>Resumen del carrito</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total: ${calculateTotal()}</strong>
            </p>
          </div>
          <button onClick={handlePayment}>Realizar Pago</button>
        </div>
      ) : (
        <div className="confirmation">
          <h2>¡Gracias por tu compra!</h2>
          <p>
            Orden realizada por: <strong>{buyerData.name}</strong>
          </p>
          <p>
            Correo electrónico: <strong>{buyerData.email}</strong>
          </p>
          <p>
            Dirección de envío: <strong>{buyerData.address}</strong>
          </p>
          <h3>Detalles de la compra:</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total pagado: ${calculateTotal()}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
