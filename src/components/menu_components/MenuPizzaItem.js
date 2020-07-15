import React from "react";
import { AddToCart } from "../../context/cart/CartState";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {baseUrl} from "../../common/ApiHeplper";

export const MenuPizzaItem = ({props}) => {
    return (
        <div className="cardWrapper">
            <Card>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={baseUrl+'img/'+props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.ingredients && props.ingredients.map((elem,iter)=>
                            <li key={iter+'ingredient'}>{elem.name}</li>
                        ) }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={
                        () => {
                            AddToCart(props);
                        }
                    }>
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}