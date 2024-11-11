import {FaShoppingCart} from "react-icons/fa";
import "./navbarboot.css"
function CartWidget() {
  return (
    <div className="car">
        <FaShoppingCart size="40px"/>
        <span className="badge">2</span>
    </div>
  )
}

export default CartWidget