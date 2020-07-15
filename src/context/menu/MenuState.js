import React from "react";
import { store } from "../../App";
import { loadMenu } from "./menuActions";
import {apiHelper} from "../../common/ApiHeplper";

export const putStateToMenuProps = (state) => {
    return {menu: state.menu}
}

export const menuAsyncLoader = () => {
    apiHelper.get('/getPizzas')
        .then(res => {
            store.dispatch(loadMenu(res.data))
        })
        .catch(err => {
            console.log(err)
        });
}