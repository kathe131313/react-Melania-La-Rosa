import React from "react";
import "./cartwidget.css";
function CartWidget({ cartCount }) {
 
  return (
    <div className="car" lg={6} md={12}>

      <i className="fas fa-shopping-cart"></i>
        <span className={`badge ${cartCount > 0 ? "badge-full" : "badge-empty"}`}>{cartCount}</span>
    </div>
  )
}

export default CartWidget