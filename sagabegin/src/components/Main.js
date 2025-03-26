import { addToCart, removeToCart, emptyCart } from "../redux/action/action";
import productList from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import { useEffect} from "react";

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);

    useEffect(() => {
        dispatch(productList());
    }, []);

    return (
        <div>
            <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            <br /><br />
            <div className="product-container">
                {data.map((item) => (
                    <div className="product-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div><b>Name:</b> {item.title}</div>
                        <div><b>Price:</b> ${item.price}</div>
                        <div><b>Category:</b> {item.category}</div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))}> Add to Cart </button>
                            <button onClick={() => dispatch(removeToCart(item))}> Remove from Cart </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
