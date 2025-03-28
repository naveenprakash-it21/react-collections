/*import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { emptyCart, addToCart, removeToCart } from "../redux/action/action";

const Cart = () => {
  // Retrieves the cart data from the Redux store and assigns it to cartItems.
  const cartItems = useSelector((state) => state.cartData);
  // Initializes dispatch to send actions to the Redux store.
  const dispatch = useDispatch();
  // Initializes navigate to handle page navigation.
  const navigate = useNavigate();

  // Calculate Amount
  // JavaScript array method that processes each element in an array 
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
            // Loops through cartItems using map() and renders each product as a table row
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

      
      <div className="cart-summary">
        <p><strong>Amount:</strong> ${amount.toFixed(2)}</p>
        <p><strong>Discount (10%):</strong> -${discount.toFixed(2)}</p>
        <p><strong>Tax (5%):</strong> +${tax.toFixed(2)}</p>
        <h3><strong>Total Amount: </strong> ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeToCart, emptyCart } from "../redux/action/action";
import ReactPaginate from "react-paginate";
import './PaymentForm.css';
import "./Cart.css"
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  // Calculate cart total
  const amount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = amount * 0.1;
  const tax = amount * 0.05;
  const totalAmount = amount - discount + tax;

  // Pagination setup
  const itemsPerPage = 5;
  const pageCount = Math.ceil(cartItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageData = cartItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleBuyNow = () => {
    setShowForm(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (address && paymentMode) {
      navigate("/order-confirmation");
    } else {
      alert("Please fill in all details.");
    }
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div> {/* Missing div added here */}
          <h2 className="cart-title"><center>Shopping Cart</center></h2>
  
          <center><button onClick={() => navigate("/")} className="product-list-btn">
            Product List
          </button>
          <button onClick={() => dispatch(emptyCart())} className="empty-cart-btn">
            Empty Cart
          </button></center>
  
          <table className="table-container">
            <thead>
              <tr>
                <th><center>Product</center></th>
                <th><center>Product Name</center></th>
                <th><center>Quantity</center></th>
                <th><center>Actions</center></th>
                <th><center>Price</center></th>
                <th><center>Total</center></th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item) => (
                <tr key={item.id}>
                  <td><center><div className="cartproduct-item"><img src={item.image} alt={item.title} /></div></center></td>
                  <td className="productname">{item.title}</td>
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
  
          {/* Pagination Component */}
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"cartpagination"}
            previousLinkClassName={"cartpagination__link"}
            nextLinkClassName={"cartpagination__link"}
            activeClassName={"cartpagination__link--active"}
          />
  
          <div className="cart-summary">
            <p><strong>Amount:</strong> ${amount.toFixed(2)}</p>
            <p><strong>Discount (10%):</strong> -${discount.toFixed(2)}</p>
            <p><strong>Tax (5%):</strong> +${tax.toFixed(2)}</p>
            <h3><strong>Total Amount: </strong> ${totalAmount.toFixed(2)}</h3>
  
            {/* Buy Product Button */}
            {!showForm ? (
              <button onClick={handleBuyNow} className="buy-now-btn">
                Buy Product
              </button>
            ) : (
              <form onSubmit={handleOrderSubmit} className="order-form">
                <label>
                  Address:
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                  Payment Mode:
                  <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </label>
                <button type="submit">Confirm Order</button>
              </form>
            )}
          </div>
        </div> 
      )}
    </div>
  );
} 
export default Cart
