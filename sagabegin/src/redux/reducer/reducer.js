import { ADD_To_CART, REMOVE_To_CART, EMPTYCART } from "../constant/constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_To_CART:
            //console.warn("Reducer called", action);
            return [action.productdata, ...data];

        case REMOVE_To_CART:
            if (!action.data || !action.data.id) {
            console.warn("Invalid data received for REMOVE_To_CART:", action.data);
            return data; // Prevent crashing if data is missing
            }
            return data.filter((item) => item.id !== action.data.id);
  

        case EMPTYCART:
            //console.warn("Reducer called", action);
            data = []
            return [...data]
        default:
            return data;
    }
}

// if (action.type === ADD_To_CART) {
//     console.warn("Reducer called", action);
//     return data;
// } else {
//     return "no actuon called";
// }