import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function productListReducer(state = initialState.currentCategory.products, action) {
    if (!action || !action.type) {
        return state;  // Prevent breaking on undefined action
    }
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}