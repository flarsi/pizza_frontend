import { ADD_TO_CART, CALK_TOTAL_PRICE, CONFIRM_ORDER, REMOVE_FROM_CART } from "../types";

export const CartReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            if(state == null){
                return [action.payload]
            }
            else {
                if(state.indexOf( action.payload ) === -1) {
                    return [...state, action.payload]
                }else return state
            }
        }
        case REMOVE_FROM_CART: {
            state.splice(action.payload, 1)
            return [...state]
        }
        case CALK_TOTAL_PRICE: {
            console.log(action.payload)
            return {...state, totalPrice: action.payload}
        }
        case CONFIRM_ORDER: {
            return state
        }
    }
    return state
}