import React from 'react';
import { useSelector } from "react-redux";
import "./Cart.css"; // Import Cart CSS

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    // reduce () - iterates over the array and accumulates a total.
    return (
        <div className="cart-page-container">
            <table>
                <tr>
                    <td>Product</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                </tr>
                {
                    cartData.map((item) => <tr key={item.id}>
                        <td className="product-cart-item"><img src={item.image} alt={item.title} /></td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.category}</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount: </span><span>{amount.toFixed(2)}</span></div>
                <div className="adjust-price"><span>Discount: </span><span>{(amount / 10).toFixed(2)}</span></div>
                <div className="adjust-price"><span>Tax: </span><span>0</span></div>
                <div className="adjust-price"><span>Total = </span><span>{(amount - (amount / 10)).toFixed(2)}</span></div>
            </div>
        </div>
    )
}
//Rounds up - .toFixed();
export default Cart;
