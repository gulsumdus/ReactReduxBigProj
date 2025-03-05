import { combineReducers } from "redux"
import changeCategoryReducer from "./changeCategoryReducer"


const rootReducer = changeCategoryReducer({
    changeCategoryReducer: changeCategoryReducer
})