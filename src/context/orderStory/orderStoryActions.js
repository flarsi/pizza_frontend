import { LOAD_ORDER_STORY } from "../types";

export const loadOrderStory = (payload) => {
    return {type: LOAD_ORDER_STORY, payload: payload}
}