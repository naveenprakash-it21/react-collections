import { combineReducers } from 'redux';
import { cartData } from './reducer/reducer';
import { productData } from './reducer/productReducer';
export default combineReducers({
    // merges multiple reducers into a single root reducer.
    cartData, productData
})