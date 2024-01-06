// reducer => sepetin son halini tuttuğumuz yer.
// Tabiki gönderdiğimiz son aksiyon'a göre.

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialVlues/cartItem";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    // type'a göre switch çalışacak
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            //state'de sepet elemanlarının değiştiğinin anlaşılması için veya güncellenmesi için referansınında değişmesi gerekir.
            if (product) {
                product.quantity++;
                return {
                    ...state
                    // '...' => spread operatörü 'state' içerisindeki elemanları ayırarak tekrardan yeni bir obje oluşturuyoruz.(C#'da new'lemek gibi)                   
                }
            } else {
                return {
                    // kritik nokta! (spread operatörü)
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id!== payload.id)
                //bu filtre ile yeni bir dizi oluşur, gönderdiğim id ile state'deki değerleri karşılaştırır ve o'id'ye eşit olmayanları yeni diziye ekler ve döndürür. Bu sayede o'id'li ürünü listeden kaldırmış oluruz.
            }
        default:
            return state;
    }
}