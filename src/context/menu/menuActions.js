import { LOAD_MENU } from "../types";

export const loadMenu = (payload) => {
    return {type: LOAD_MENU, payload: payload}
}