import React from "react";
import { connect } from "react-redux";
import { putStateToMenuProps } from "../context/menu/MenuState";
import { MenuPizzas } from "../components/menu_components/MenuPizzas";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Menu = ({menu}) => {
    if(menu){
        return (
            <div>
                <Grid container justify={"center"}>
                    <Grid container item xs={12} spacing={3}>
                        <MenuPizzas pizzas={menu}/>
                    </Grid>
                </Grid>
            </div>
        )
    }else {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }
}

export default connect(putStateToMenuProps)(Menu)