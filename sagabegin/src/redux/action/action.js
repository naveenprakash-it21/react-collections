import { ADD_To_CART, REMOVE_To_CART, EMPTYCART } from "../constant/constant";

export const addToCart = (productdata) => {
    return {
        type: ADD_To_CART, // identifies the action being dispatched
        productdata // Ensure product object is passed
    }
}

export const removeToCart = (product) => {
    return {
        type: REMOVE_To_CART, // identifies the action being dispatched
        data: product, // Ensure product object is passed
    }
}

export const emptyCart = (productdata) => {
    return {
        type: EMPTYCART,
        productdata
    }
}