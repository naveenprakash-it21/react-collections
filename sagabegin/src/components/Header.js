import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/action/productAction";
import '../App.css';
import { useEffect, useState } from "react";
import "./Main.css";

export const Header = () => {
    //result= result.length //Extracts cartData
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    // Theme State
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Apply Theme to Body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">E-commerce</h1>
            </Link>

            <div className="search-box">
                <div className="searchLabel"><label id="search"><h3>Search: </h3></label></div>
                <input
                    type="text"
                    id="search"
                    //Search term is sent to Redux
                    onChange={(event) => dispatch(productSearch(event.target.value))}
                    placeholder="Search Product"
                />
            </div>

            {/* Dark Mode Toggle Button */}
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Cart Button */}
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="cartimg.jpg" alt="Cart" />
                </div>
            </Link>
        </div>
    );
};

export default Header;