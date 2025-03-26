import { combineReducers } from 'redux';
import { cartData } from './reducer/reducer';
import { productData } from './reducer/productReducer';
export default combineReducers({
    cartData, productData
})