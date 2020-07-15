import { combineReducers } from "redux";
import { MenuReducer } from "./menu/menuReducer";
import { CartReducer } from "./cart/cartReducer";
import { OrderStoryReducer } from "./orderStory/orderStoryReducer";


export const RootReducer = combineReducers({
    menu: MenuReducer,
    cart: CartReducer,
    orderStory: OrderStoryReducer
})