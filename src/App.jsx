import React, { useState, useEffect } from "react";
import './App.css';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Servicios from './paginas/Servicios';
import Sobremi from './paginas/Sobremi';
import DetalleServicio from './paginas/DetalleServicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import Checkout from "./paginas/Checkout";


function App() {
  
  const [cart, setCart] = useState([]); 
  const [cartCount, setCartCount] = useState(0); 
 
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); 
    setCartCount(cartCount + 1);
  };

   const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setCartCount(cartCount - 1);
  };

    const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0), 0);

  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              cartCount={cartCount}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              calculateTotal={calculateTotal}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="category/:categoria" element={<Servicios />} />
          <Route path="category/sobremi" element={<Sobremi />} />
          <Route path="/servicios/:id" element={<DetalleServicio addToCart={addToCart} />} />
          <Route path="checkout" element={<Checkout cart={cart} calculateTotal={calculateTotal} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
