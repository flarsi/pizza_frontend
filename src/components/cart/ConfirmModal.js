import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React, {useState} from "react";
import {confirmOrder} from "../../context/cart/cartActions";
import {ConfirmOrder} from "../../context/cart/CartState";
import {apiHelper} from "../../common/ApiHeplper";
import {store} from "../../App";
import {loadMenu} from "../../context/menu/menuActions";

export const ConfirmModal = ({handleClose, open, cartData}) => {
    const [state, setState] = useState({name: '', address: '', date: ''})

    const fieldHandler = (event) => {
        const value = event.target.value
        const id = event.target.id
        switch (id) {
            case 'name' : {
                if (value.split(' ').length >= 2) {
                    setState({...state, [id]: value})
                }
            }
            case 'address' : {
                setState({...state, [id]: value})
            }
            case 'date' : {
                setState({...state, [id]: value})
            }

        }
    }

    const checkModal = () => {
        if (state.name.length >= 2 && state.address && state.date) {
            return true
        } else return false
    }

    const confirmOrder = () => {
        if (checkModal()) {
            let pizzas = [];
            let sizes = [];
            for (let pizzaData in cartData) {
                pizzas.push(cartData[pizzaData])
            }
            pizzas.map(orderedItem => {
                let pizza = {size: orderedItem.id, quantity: orderedItem.amount};
                sizes.push(pizza);
            });
            apiHelper.post('/placeOrder',
                {'name': state.name, 'address': state.address, 'date': state.date, 'sizes': sizes},
            ).then(res => {
                alert('Your order confirmed')
            })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Confirm</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill form to confirm order.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="Full name"
                    type="Full name"
                    fullWidth
                    required={true}
                    onChange={fieldHandler}
                />
                <TextField
                    margin="dense"
                    id="address"
                    label="Delivery address"
                    type="Delivery address"
                    fullWidth
                    onChange={fieldHandler}
                />
                <TextField
                    margin="dense"
                    id="date"
                    label="Delivery date"
                    type="datetime-local"
                    fullWidth
                    onChange={fieldHandler}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={confirmOrder} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
