import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function productListReducer(state = initialState.currentCategory.savedProduct, action) {
    if (!action || !action.type) {
        return state;  // Prevent breaking on undefined action
    }
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}