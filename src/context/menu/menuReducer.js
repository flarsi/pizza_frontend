import {LOAD_MENU} from "../types";

export const MenuReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_MENU: {
            return action.payload
        }
        default : return state
    }
}