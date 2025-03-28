import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/action/productAction";
import '../App.css';
import { useEffect, useState } from "react";
import "./Main.css";
import "./Header.css";

export const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

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
                <h1 className="logo">E - NavCart</h1>
            </Link>

            <div className="search-box">
                <label id="search"><h3>Search: </h3></label>
                <input
                    type="text"
                    id="search"
                    onChange={(event) => dispatch(productSearch(event.target.value))}
                    placeholder="Search Product"
                />
            </div>

            <Link to="/cart">
                <div className="cart-div">
                    {result.length > 0 && (
                        <span className="cart-count">{result.length}</span>
                    )}
                    <img src="cartimg.jpg" alt="Cart" className="cart-icon" />
                </div>
            </Link>

            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
            </button>
        </div>
    );
};

export default Header;
