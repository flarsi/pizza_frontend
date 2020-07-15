import {Navbar} from "../components/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import OrderStory from "../pages/OrdersStory";
import {Footer} from "../components/Fotter";
import React from "react";
import Grid from "@material-ui/core/Grid";

export const Main = () => {
    return (
        <Grid container justify="center" className="main">
            <Grid item xs>
                <Navbar/>
            </Grid>
            <Grid container item justify="center" className="content">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/menu'} component={Menu}/>
                    <Route path={'/cart'} component={Cart}/>
                    <Route path={'/history'} component={OrderStory}/>
                </Switch>
            </Grid>
            <Grid container item xs>
                <Footer/>
            </Grid>
        </Grid>
    )
}
