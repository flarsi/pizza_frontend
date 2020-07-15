import React, {useState} from "react";
import { PizzaSize } from "./PizzaSize";
import { RemoveFromCart } from "../../context/cart/CartState";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";


export const CartItem = ({props, index, setOrderSizes, priceType, initialPrice}) => {

    const [price, setPrice] = useState(initialPrice[index])
    const [amount, setAmount] = useState(1)

    // console.log(initialPrice)

    return(
        <tr>
            <td className="">{props.id}</td>
            <td className="">{props.name}</td>
            <td className="">{price + ' ' + priceType}</td>
            <td className=""><TextField className="amount" inputProps={{ min: "1"}} onChange={event => setAmount(event.target.value)} type="number" aria-valuemin={1} defaultValue={1}></TextField></td>
            <td className=""><PizzaSize amount={amount} sizes={props.sizes} setPrice={setPrice} setOrderSizes={setOrderSizes} initialPrice={initialPrice} index={index}/></td>
            <td className="">
                <IconButton onClick={() => {
                    RemoveFromCart(index)
                }}
                aria-label="delete"
                color="secondary"
                >
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    )
}