import { ADD_To_CART, REMOVE_To_CART, EMPTYCART } from "../constant/constant";

export const addToCart = (productdata) => {
    //console.log ("addCart is called",productdata);
    return {
        type: ADD_To_CART,
        productdata
    }
}

export const removeToCart = (product) => {
    return {
        type: REMOVE_To_CART, //identifies the action being dispatched
        data: product, // Ensure product object is passed
    }
}

export const emptyCart = (productdata) => {
    //console.log ("EmptyCart is called",productdata);
    return {
        type: EMPTYCART,
        productdata
    }
}