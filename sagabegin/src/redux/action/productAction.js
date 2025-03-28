import { PRODUCT_LIST, SEARCH_PRODUCT } from "../constant/constant";

const productList = () => {
    return {
        type: PRODUCT_LIST, // calling reducer and saga
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT, // calling reducer and saga
        payload: query,
    }
}

export default productList;

