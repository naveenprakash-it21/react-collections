// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { productSearch } from "../redux/action/productAction";
// import '../App.css';
// import { useEffect, useState } from "react";
// import "./Main.css";
// import "./Header.css";

// export const Header = () => {
//     const result = useSelector((state) => state.cartData);
//     const dispatch = useDispatch();

//     const [darkMode, setDarkMode] = useState(
//         localStorage.getItem("theme") === "dark"
//     );

//     useEffect(() => {
//         if (darkMode) {
//             document.body.classList.add("dark-mode");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.body.classList.remove("dark-mode");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkMode]);

//     return (
//         <div className="header">
//             <Link to="/">
//                 <h1 className="logo">E - NavCart</h1>
//             </Link>

//             <div className="search-box">
//                 <label id="search"><h3>Search: </h3></label>
//                 <input
//                     type="text"
//                     id="search"
//                     onChange={(event) => dispatch(productSearch(event.target.value))}
//                     placeholder="Search Product"
//                 />
//             </div>

//             <Link to="/cart">
//                 <div className="cart-div">
//                     {result.length > 0 && (
//                         <span className="cart-count">{result.length}</span>
//                     )}
//                     <img src="cartimg.jpg" alt="Cart" className="cart-icon" />
//                 </div>
//             </Link>

//             <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
//                 {darkMode ? "☀️" : "🌙"}
//             </button>
//         </div>
//     );
// };

// export default Header;

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productSearch } from "../redux/action/productAction";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebaseConfig";  // Import Firebase authentication
import { signOut } from "firebase/auth";
import "../styles/Header.css";

export const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profileRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShowProfile(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const [user, setUser] = useState(null);
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Check if user is logged in
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    // Handle logout
    const handleLogout = async () => {
        await signOut(auth);
        // localStorage.setItem("isAuthenticated",false);
        localStorage.removeItem("isAuthenticated");
        navigate("/auth"); // Redirect to login
    };

    return (
        <div className="header-container">
            {/* Logo */}
            <div className="header">
                <Link to="/">
                    <h1 className="logo">E - NavCart</h1>
                </Link>
            </div>

            {/* Search Box */}
            <div className="search-box">
                <label className="label" htmlFor="search"><h3>Search:</h3></label>
                <input
                    type="text"
                    id="search"
                    onChange={(event) => dispatch(productSearch(event.target.value))}
                    placeholder="Search Product"
                />
            </div>

            {/* Icons Section */}
            <div className="icon-wrapper">
                {/* Cart Icon */}
                <div className="icon-container">
                    <Link to="/cart">
                        <div className="cart-div">
                            {result.length > 0 && <span className="cart-count">{result.length}</span>}
                            <img src="titleicon.png" alt="Cart" className="cart-icon" />
                        </div>
                    </Link>
                </div>

                {/* Theme Toggle */}
                <div className="icon-container">
                    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>

                {/* Profile Section */}
                <div className="icon-container">
                    {user ? (
                        <button className="profile-btn" onClick={() => setShowProfile(!showProfile)}>👤</button>
                    ) : (
                        <button className="login-btn" onClick={() => navigate("/auth")}>Login</button>
                    )}

                    {/* Profile Dropdown */}
                    {showProfile && user && (
                    <div ref={profileRef} className="profile-dropdown">
                            <p>{user.email}</p>
                            <button className="signout-btn" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Header;
