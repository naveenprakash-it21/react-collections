import { ADD_To_CART, REMOVE_To_CART, EMPTYCART } from "../constant/constant";

export const cartData = (data = [], action) => {
    // current state // action dispatched to update the cart.
    switch (action.type) {
        case ADD_To_CART:
            // product already exists in the cart by finding
            const existingItem = data.find((item) => item.id === action.productdata.id);
            if (existingItem) { 
                // product exists, it updates the cart by increasing the quantity
                return data.map((item) =>
                    item.id === action.productdata.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // product is new, it adds it to the cart with a default quantity of 1
            return [...data, { ...action.productdata, quantity: 1 }];

        case REMOVE_To_CART:
            return data
                .map((item) => // map() to update the state immutably
                    item.id === action.data.id
                        // Reduces quantity of the item by 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                // filter() to remove items with quantity <= 0
                .filter((item) => item.quantity > 0);

        case EMPTYCART:
            // Empties the cart by setting data to an empty array.
            data = []
            return [...data]
        default:
            // doesn't match -eturns the current state 
            return data;
    }
}
