import * as actionTypes from "./actionTypes"

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}


export function getCategoriesSuccess(categories) { //componentte kullanmak üzere bu fonksiyonda api verilerini yolluyoruz

    return {

        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories

    }
  

}

export function getCategories() {  //api'den verileri buradan çekiyoruz
    return function (dispatch) {
        //debugger;
        let url = "http://localhost:3000/categories";
        return fetch(url)
            .then(response => response.json())//db dosya'sı json formatında olabilir fakat string şekilnde geldiği için yine .json formuna dönüştürdük
            .then(result => dispatch(getCategoriesSuccess(result)));
    };
    //NOTE: dizi çektiğimiz için .json() parantezini unutma!!
}