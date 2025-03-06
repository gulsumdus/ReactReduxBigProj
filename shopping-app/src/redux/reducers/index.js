import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";

const rootReducer = combineReducers({
    changeCategoryReducerIndex: changeCategoryReducer, // Reducer burada doğru şekilde tanımlanmalı
    categoryListReducerIndex:categoryListReducer
});

export default rootReducer;
