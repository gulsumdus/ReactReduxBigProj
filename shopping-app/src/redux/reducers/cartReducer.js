import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function cartReducer(state = initialState.currentCategory.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);//sepette aynı üründen var mı diye kontrol ediyoruz
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })//kontrol yapar(id'ye) göre eğer aynı üründen varsa sepete eklemez sadece o ürünün sayısını arttırır.
                    }
                    return cartItem;
                })
                return newState;
            }
            else {
                return [...state, { ...action.payload }]// son islem
            }
        case actionTypes.REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.product.id !== action.payload.id);
        //filter(), cartItem.product.id değeri eşleşmeyen tüm öğeleri döndürür, böylece ilgili ürün sepette kalmaz.

        default:
            return state;
    }
}

//map() fonksiyonu ile sepetteki her ürün gezilir.
//Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 }) → Yeni bir nesne oluşturularak immutable (değişmez) veri yönetimi sağlanıyor.

//// Son islem:
//*******Eğer ürün sepette yoksa, mevcut state (sepet listesi) korunarak yeni ürün ekleniyor.
//*******return [...state, { ...action.payload }] ile yeni bir dizi oluşturuluyor (Redux’ta immutable yapı korunuyor).
//var olan datayı(state) kopyalar