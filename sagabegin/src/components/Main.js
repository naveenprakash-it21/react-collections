import { addToCart } from "../redux/action/action";
import productList from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Main() {
    // initializes dispatch to send actions
    const dispatch = useDispatch();
    // selects the productData from the Redux store and assigns it to data
    let data = useSelector((state) => state.productData);

    useEffect(() => { //when the component mounts
        // triggers an action to fetch and store product data
        dispatch(productList());
    }, []);

    // Function to handle adding an item to the cart with a toast notification
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.title} added to cart!`, {
            position: "top-right",
            autoClose: 500, // Auto close after 2 seconds
            hideProgressBar: true,
            draggable: true,
            theme: "light",
        });
    };

    return (
        <div>
            <br /><br />
            <div className="product-container">
                {data.map((item) => (
                    // Loops over the data array using map()
                    <div className="product-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="product-name"><b>Name:</b> {item.title}</div>
                        <div><b>Price:</b> ${item.price}</div>
                        <div><b>Category:</b> {item.category}</div>
                        <div>
                            <button onClick={() => handleAddToCart(item)}> Add to Cart </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
