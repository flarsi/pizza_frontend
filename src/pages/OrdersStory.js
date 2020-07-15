import React from "react";
import { connect } from "react-redux";
import {orderStoryAsyncLoader, putStateToOrderStoryProps} from "../context/orderStory/OrderStoryState";
import {OrderItem} from "../components/orderStory_components/OrderItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import {CartItem} from "../components/cart/CartItem";
import {ConfirmModal} from "../components/cart/ConfirmModal";

const OrderStory = ({orderStory}) => {
    orderStoryAsyncLoader()

    if(orderStory){
        return (
            <Grid xs={12}>
                <div className="table100 ver4">
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Client full name</th>
                            <th>delivery address</th>
                            <th>delivery date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orderStory && orderStory.map((element, index) => {
                                return (
                                    <OrderItem key={index+1} orderData={element}/>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </Grid>
        )
    }else {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

}
export default connect(putStateToOrderStoryProps)(OrderStory)

/*
return (
    <Grid xs={12}>
        <div className="table100 ver4">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client full name</th>
                        <th>delivery address</th>
                        <th>delivery date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orderStory && orderStory.map((element, index) => {
                                return (
                                    <OrderItem key={index+1} orderData={element}/>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    </Grid>
)
}*/
