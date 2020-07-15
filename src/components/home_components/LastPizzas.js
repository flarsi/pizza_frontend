import React from "react";
import { LastPizzaItem } from "./LastPizzaItem";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";



export const LastPizzas = ({pizzas}) => {

    if(pizzas){
        let pizza = [...pizzas]
        pizza.splice(6, pizza.length-6)
        return (
            <Grid container justify={"center"}>
                <Grid container item xs={10} spacing={3}>
                {
                pizza.map((pizza, index) =>
                    <Grid item xs={4} key={index}>
                        <LastPizzaItem props={pizza}/>
                    </Grid>
                    )
                }
                </Grid>
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