export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    return {
        type: ADD_TO_CART, //type => gönderilen aksiyon.
        payload: product   //payload => o'an state'e gönderilmek istenen değer.(sepete eklenen yeni ürün)
    } 
}

export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}