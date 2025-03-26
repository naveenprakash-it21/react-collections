import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT } from '../constant/constant';

// takeEvery - Listens for specific actions
// put - Dispatches a new action to Redux after handling the side effect.
function* getProducts() {
    let data = yield fetch('https://fakestoreapi.com/products');//Calls the FakeStore API
    data = yield data.json(); //Converts the API response (JSON format)
    yield put({type: SET_PRODUCT_LIST,data})// Dispatches an action to update the Redux store
}

function* SearchProducts(action) {
    let allProducts = yield fetch("https://fakestoreapi.com/products");//Fetches all products from the API.
    allProducts = yield allProducts.json();
    
    // Filtering products locally
    let result = allProducts.filter((product) => // Filters the products locally based on the search query.
        product.title.toLowerCase().includes(action.payload.toLowerCase())
    );

    console.warn("Filtered search result:", result);
    yield put({ type: SET_PRODUCT_LIST, data: result });}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, SearchProducts)
}


export default productSaga;
