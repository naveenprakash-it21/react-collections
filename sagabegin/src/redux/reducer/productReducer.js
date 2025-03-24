import { PRODUCT_LIST } from "../constant/constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.log("PRODUCT_LIST is called",action);
            return [action.data];

        default:
            return data; // product list not be empty
    }
}

