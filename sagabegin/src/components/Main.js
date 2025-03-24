import {addToCart,removeToCart,emptyCart} from '../redux/action/action';
import productList from '../redux/action/productAction'
import {useDispatch} from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const product = {
    item: "bottle",
    price: 100,
    color: "blue",
    litre: "one",
  }
  return (
    <div>
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button><br></br><br></br>
      <button onClick={()=>dispatch(removeToCart(product))}>Remove to cart</button><br></br><br></br>
      <button onClick={()=>dispatch(emptyCart(product))}>Empty cart</button><br></br><br></br>
      <button onClick={()=>dispatch(productList(product))}>Product List</button>
    </div>
  );
}

export default Main;
