import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {AddToCart} from "../../context/cart/CartState";
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from "@material-ui/core/IconButton";

export const ModalPizza = ({image, props, handleClose}) => {
    return (
        <div className="cardWrapper">
            <Card>
                <IconButton onClick={handleClose} style={{position:"absolute", right:"33vw"}}><CancelIcon/></IconButton>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={image}
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
                            handleClose();
                        }
                    }>
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}