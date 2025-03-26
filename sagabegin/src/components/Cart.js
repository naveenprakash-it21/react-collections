import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { emptyCart, addToCart, removeToCart } from "../redux/action/action";

const Cart = () => {
  //Retrieves the cart data from the Redux store and assigns it to cartItems.
  const cartItems = useSelector((state) => state.cartData);
  //Initializes dispatch to send actions to the Redux store.
  const dispatch = useDispatch();
  //Initializes navigate to handle page navigation.
  const navigate = useNavigate();

  // Calculate Amount
  //JavaScript array method that processes each element in an array a
  // accumulates a single result (e.g., sum, average, etc.).
  const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Apply Discount (10%)
  const discount = amount * 0.1;

  // Apply Tax (5%)
  const tax = (amount - discount) * 0.05;

  // Calculate Total Amount
  const totalAmount = amount - discount + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      <button onClick={() => navigate("/")} className="product-list-btn">
        Product List
      </button>

      <button onClick={() => dispatch(emptyCart())} className="empty-cart-btn">
        Empty Cart
      </button>

      <table className="table-container">
        <thead>
          <tr>
            <th><center>Product</center></th>
            <th><center>ProductName</center></th>
            <th><center>Quantity</center></th>
            <th><center>Actions</center></th>
            <th><center>Price</center></th>
            <th><center>Total</center></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            //Loops through cartItems using map() and renders each product as a table row
            <tr key={item.id}>
              <td><center><div className="cartproduct-item"><img src={item.image} alt={item.title} /></div></center></td>
              <td className="productname" data-title={item.title}>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => dispatch(addToCart(item))} className="plus-btn">+</button>
                <button onClick={() => dispatch(removeToCart(item))} className="minus-btn">-</button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary Section */}
      <div className="cart-summary">
        <p><strong>Amount:</strong> ${amount.toFixed(2)}</p>
        <p><strong>Discount (10%):</strong> -${discount.toFixed(2)}</p>
        <p><strong>Tax (5%):</strong> +${tax.toFixed(2)}</p>
        <h3><strong>Total Amount: </strong> ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
