import { LOAD_ORDER_STORY } from "../types";

export const OrderStoryReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_ORDER_STORY: {
            return action.payload
        }
        default : return state
    }
}