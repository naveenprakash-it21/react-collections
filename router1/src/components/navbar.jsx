import {NavLink,useNavigate} from "react-router-dom"
import "../App.css";
const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div className="navbar" >
    <div logo = "logo">Index </div>
    <ul>
        <NavLink to="/"> 
            <li>Home</li>
        </NavLink>
        <NavLink to="/product">
            <li>Product</li>
        </NavLink>
        <NavLink to="/about">
            <li>About</li>
        </NavLink>
        <NavLink to="/contact">
            <li>Contact</li>
        </NavLink>
        <NavLink to="/user">
            <li>Users</li>
        </NavLink>
    </ul>
    <button onClick={()=>navigate("/Dashboard", {replace:true})}>Login</button>
    </div>
  )
}

export default Navbar

// NavLink - active page.
// navigate - without refreshing the page.