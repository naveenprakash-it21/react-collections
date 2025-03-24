import { ADD_To_CART, REMOVE_To_CART, EMPTYCART } from "../constant/constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_To_CART:
            //console.warn("Reducer called", action);
            return [action.productdata, ...data];

        // case REMOVE_To_CART: --- immutating in same line
        //     //console.warn("Reducer called", action);
        //     data.length = data.length-1 ; // last item is deleted
        //     return [...data]
        case REMOVE_To_CART:
            const index = data.findIndex((item) => item.item === action.productdata.item);
            if (index !== -1) {
                 return [...data.slice(0, index), ...data.slice(index + 1)];
            }
            return data;
   
        case EMPTYCART:
                //console.warn("Reducer called", action);
                // last item is deleted
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