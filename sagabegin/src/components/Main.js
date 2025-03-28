/*import { addToCart } from "../redux/action/action";
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
*/
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { addToCart } from "../redux/action/action";
import productList from "../redux/action/productAction";
import "./Main.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);

    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);

    const handleAddToCart = (item) => {
        const truncatedTitle = item.title.split(" ").slice(0, 3).join(" ");
        dispatch(addToCart(item));
    
        toast.success(`${truncatedTitle} added`, {  // ✅ Fixed template literal
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            draggable: true,
            theme: "light",
        });
    };

    // Pagination Logic
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <br /><br />
            <div className="product-container">
                {currentPageData.map((item) => (
                    <div className="product-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="product-name"><b>Name:</b> {item.title}</div>
                        <div><b>Price:</b> ${item.price}</div>
                        <div><b>Category:</b> {item.category}</div>
                        <div>
                            <button className="main-page-btn"onClick={() => handleAddToCart(item)}> Add to Cart </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Component */}
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    );
}

export default Main;

