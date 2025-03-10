import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer"

const rootReducer = combineReducers({
    changeCategoryReducerIndex: changeCategoryReducer, // Reducer burada doğru şekilde tanımlanmalı
    categoryListReducerIndex: categoryListReducer,
    productListReducerIndex: productListReducer,
    cartReducerIndex: cartReducer,
    saveProductReducerIndex: saveProductReducer

});

export default rootReducer;
