import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from '../constant/constant';

// takeEvery - Listens for specific actions
// put - Dispatches a new action to Redux after handling the side effect.
function* getProducts() {
    //Calls the FakeStore API
    let data = yield fetch('https://fakestoreapi.com/products');
    //Converts the API response (JSON format)
    data = yield data.json(); 
    // Dispatches an action to update the Redux store
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* SearchProducts(action) {
    //Fetches all products from the API.
    let allProducts = yield fetch("https://fakestoreapi.com/products");
    allProducts = yield allProducts.json();

    // Filtering products locally
    let result = allProducts.filter((product) => 
        // Filters the products locally based on the search query.
        product.title.toLowerCase().includes(action.payload.toLowerCase())
    );

    console.warn("Filtered search result:", result);
    // Dispatches an action update the Redux store with the filtered results.
    yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
    // action is dispatched, saga is executed to fetch products.
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, SearchProducts)
}


export default productSaga;
