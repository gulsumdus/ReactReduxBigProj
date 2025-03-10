import * as actionTypes from "./actionTypes"


export function getProductsSuccess(products) { //componentte kullanmak üzere bu fonksiyonda api verilerini yolluyoruz

    return {

        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products

    }

}

export function getProducts(categoryId) {  //api'den verileri buradan çekiyoruz
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url)
            .then(response => response.json())//db dosya'sı json formatında olabilir fakat string şekilnde geldiği için yine .json formuna dönüştürdük
            .then(result => dispatch(getProductsSuccess(result)));
    };
    //NOTE: dizi çektiğimiz için .json() parantezini unutma!!
}


export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product)
            .then(savedProduct => {
                product.id                                          //Eğer product id belliyse;
                    ? dispatch(updateProductSuccess(savedProduct))  //product güncellenir
                    : dispatch(createProductSuccess(savedProduct)); //değilse product yeni kayıt edilir
            }).catch(error => { throw error; });
    };
}

export function saveProductApi(product) {  //FOR API OPERATIONS
    return fetch("http://localhost:3000/products/" + (product.id || ""),
        // id'si var ya da yok, buna göre: id varsa güncelleme yoksa kaydetme koşulu
        {
            method: product.id ? "PUT" : "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product) //json formatında oluşturduğumuz product bilgisini string formatına dönüştürme
        })
        .then(handleResponse)
        .catch(handleError);
}

export async function handleResponse(response) {
    if (response.ok) {
        return response.json()
    }

    const error = await response.text()
    throw new Error(error)
}

export function handleError(error){
    console.error("There is an error")
    throw error;
}


