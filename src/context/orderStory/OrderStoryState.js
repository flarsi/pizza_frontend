// import React from "react";
import { store } from "../../App";
import { loadOrderStory } from "./orderStoryActions";
import {apiHelper} from "../../common/ApiHeplper";

export const putStateToOrderStoryProps = (state) => {
    return {orderStory: state.orderStory}
}


export const orderStoryAsyncLoader = () => {
    apiHelper.get(`/getOrders`)
        .then(res => {
            store.dispatch(loadOrderStory(res.data))
        })
        .catch(err => {
            console.log(err)
        });
}