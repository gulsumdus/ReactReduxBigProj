import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart, action){
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c=>c.product.id === action.payload.product.id);//sepette aynı üründen var mı diye kontrol ediyoruz
            if(addedItem){
                var newState= state.map(cartItem=>{
                    if(cartItem.product.id===action.product.id){//cartItem sildim hata olursa düzelt
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})//kontrol yapar(id'ye) göre eğer aynı üründen varsa sepete eklemez sadece o ürünün sayısını arttırır.
                    }
                    return cartItem;
                })
                return newState;
            }
            else{
                return [...state,{...action.payload}]// son islem
            }
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