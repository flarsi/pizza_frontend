import { ADD_TO_CART, CALK_TOTAL_PRICE, CONFIRM_ORDER, REMOVE_FROM_CART } from "../types";

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload: payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload: payload
})



export const calcTotalPrice = (payload) => ({
    type: CALK_TOTAL_PRICE,
    payload: payload
})

export const confirmOrder = () => ({
    type: CONFIRM_ORDER,
})
