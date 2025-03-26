import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import './Main';
import {productSearch} from '../redux/action/productAction'


export const Header = () => {
    const result = useSelector((state) => state.cartData); // Get updated cart 
    const dispatch = useDispatch();
    //console.warn("use selector", result);
    return (
        <div className="header">
        <Link to="/"><h1 className='logo'>E-commerce</h1></Link>
        <div className="search-box">
            <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder="Search Product" />
        </div>
            <Link to="/cart" >
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="cartimg.jpg" alt=""></img>
                </div>
            </Link>
        </div>
    )
}
