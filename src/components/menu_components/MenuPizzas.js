import React from "react";
import { MenuPizzaItem } from "./MenuPizzaItem";
import Grid from "@material-ui/core/Grid";


export const MenuPizzas = ({pizzas}) => {
    return (
        <Grid container item xs spacing={3}>{
                pizzas && pizzas.map((pizza, index) => (
                        <Grid item xs={3} key={index}>
                            <MenuPizzaItem props={pizza}/>
                        </Grid>
                    )
                )
            }
        </Grid>
    )
}