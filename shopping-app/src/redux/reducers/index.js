import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
    changeCategoryReducerIndex: changeCategoryReducer, // Reducer burada doğru şekilde tanımlanmalı
    categoryListReducerIndex:categoryListReducer,
    productListReducerIndex :productListReducer
});

export default rootReducer;
