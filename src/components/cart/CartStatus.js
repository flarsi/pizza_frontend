import React from "react";
import { connect } from "react-redux";
import { PutStateToCartProps } from "../../context/cart/CartState";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CartStatus = ({cart, handleDrawerClose}) => {
    console.log(cart && cart.length)
    return (
        <IconButton onClick={handleDrawerClose}>
            <Badge badgeContent={cart && cart.length || 0} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default connect(PutStateToCartProps)(CartStatus)
