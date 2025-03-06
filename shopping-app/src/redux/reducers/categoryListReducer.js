import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function changeCategoryReducer(state = initialState.currentCategory.categories, action) {
    if (!action || !action.type) {
        return state;  // Prevent breaking on undefined action
    }
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}