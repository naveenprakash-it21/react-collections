import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img
        src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
        alt="Empty Cart"
        className="cart-image"
      />
      <h2>Your Amazon Cart is empty</h2>
      <p>Shop today's deals and start adding items to your cart!</p>
      <Link to="/">
        <button className="shop-button">Shop Now</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
