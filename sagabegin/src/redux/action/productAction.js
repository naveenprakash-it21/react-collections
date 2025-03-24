import { PRODUCT_LIST } from "../constant/constant";

const productList = () => { 
    let productnewdata ="hello";
    return {
        type: PRODUCT_LIST,
        productnewdata
    }
}

export default productList;

