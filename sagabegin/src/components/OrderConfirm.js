import React from 'react'
import { Link } from "react-router-dom";
import "./OrderConfirm.css"

const OrderConfirm = () => {
  return (
    // <div className="Ordered">
    //     <h2>Order Confirm</h2>
    //     <p>Your order is being processed and will be shipped soon.</p>
    // </div>
      <center>
      <div className="Ordered">
      <img
        src="tick.png"
        className="tick-img"
      />
      <h2>Order Confirmed</h2>
      <p>Your order has been successfully added and will be shipped soon.</p>
      <p>Thnk you so much 👍😊 !!!</p>
      <Link to="/">
        <button className="shop-button">Shop Now</button>
      </Link>
    </div>
    </center>
  )
}

export default OrderConfirm;
