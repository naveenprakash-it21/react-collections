import { SET_PRODUCT_LIST } from "../constant/constant";

export const productData = (data = [], action) => {
    //Initial state          //action dispatched to modify state.
    switch (action.type) { // check the type
        case SET_PRODUCT_LIST:
            return [...action.data];
            // Spreads the new product list into a new array 
        default:
            return data; // product list not be empty
    }
}

