import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NavIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CartStatus from "../cart/CartStatus";

export const HeadBar = ({handleDrawerOpen, handleDrawerClose, page}) => (
    <AppBar position="relative">
        <Toolbar className="tool-bar">
            <div className="nav-btn">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                >
                    <NavIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {page}
                </Typography>
            </div>
            <div className={'cart-btn'}>
                <Typography variant="h6" noWrap>
                    Cart
                </Typography>
                <Link to="/cart">
                    <CartStatus handleDrawerClose={handleDrawerClose}/>
                </Link>
            </div>
        </Toolbar>
    </AppBar>
)