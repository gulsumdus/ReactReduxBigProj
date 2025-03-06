import * as actionTypes from "./actionTypes"


export function getProductsSuccess(products) { //componentte kullanmak üzere bu fonksiyonda api verilerini yolluyoruz

    return {

        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products

    }
  

}

export function getProducts() {  //api'den verileri buradan çekiyoruz
    return function (dispatch) {
        //debugger;
        let url = "http://localhost:3000/products";
        return fetch(url)
            .then(response => response.json())//db dosya'sı json formatında olabilir fakat string şekilnde geldiği için yine .json formuna dönüştürdük
            .then(result => dispatch(getProductsSuccess(result)));
    };
    //NOTE: dizi çektiğimiz için .json() parantezini unutma!!
}