import { useSelector } from "react-redux"

export const Header = () => {
    const result = useSelector((state)=>state.cartData); // Get updated cart 
    console.warn("use selector",result);
    return(
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="cartimg.jpg" alt=""></img>
            </div>   
        </div>
    )
}
