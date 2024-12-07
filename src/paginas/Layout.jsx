import React from "react";
import NavbarBoot from '../components/NavBarBoot';
import { Link,Outlet } from "react-router-dom";
import Footer from "../components/Footer";
function Layout({ cart, removeFromCart, calculateTotal }) {
  return (
    <>
        <NavbarBoot cart={cart} removeFromCart = {removeFromCart} calculateTotal={calculateTotal} />
        <main style={{ height: "100%", padding: "0", margin: "0"}}>
        <Outlet />
      </main>        
        <Footer/>
    </>
  )     
}

export default Layout