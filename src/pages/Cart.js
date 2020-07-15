import React, {useState} from "react";
import {connect} from "react-redux";
import {PutStateToCartProps} from "../context/cart/CartState";
import {CartItem} from "../components/cart/CartItem";
import {ConfirmModal} from "../components/cart/ConfirmModal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import {PriceChanger} from "../components/cart/PriceChanger";

const Cart = ({cart}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let initialSizeDataState;

    cart && cart.map(elem => {
        initialSizeDataState = {...initialSizeDataState, ...{[elem.id]:{...elem.sizes[0], amount: 1}}}
    })
    const [sizeData, setSizeData] = React.useState(initialSizeDataState)

    const setOrderSizes = (payload) => {
        if(!sizeData){
            setSizeData({[cart[0].id]: payload})
        }

        cart.map(elem => {
            elem.sizes.map(size => {
                if(size.id === payload.id){
                    setSizeData({...sizeData,[elem.id]: payload})
                }
            })
        })
    }

    const [priceType, setType] = React.useState('usd');
    const initialPriceTypeHendler = () => {

        return cart && cart.map((element, index) => {
            switch(priceType){
                case 'usd' : return element.sizes[0].price[0].usd
                case 'eur' : return element.sizes[0].price[0].eur
            }
        })

    }

    const [prices, setPrice] = useState(initialPriceTypeHendler())

    return (
        <Grid xs={12}>
            <div className="table100 ver4">
                <div className="price-changer">
                    <PriceChanger priceType={priceType} setType={setType} setPrice={setPrice} cart={cart}/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>price ({priceType.toUpperCase()})</th>
                        <th>amount</th>
                        <th>size</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart && cart.map((element, index) => {
                            return (
                                <CartItem initialPrice={prices} priceType={priceType} props={element} index={index} key={index} setOrderSizes={setOrderSizes}/>
                            )
                        })

                    }
                    </tbody>
                    <tfoot>

                    <tr>
                        <td>
                            <Button color={"primary"} onClick={handleClickOpen}>Confirm order</Button>
                        </td>
                    </tr>
                        <ConfirmModal handleClose={handleClose} open={open}  cartData={sizeData}/>
                    </tfoot>
                </table>
            </div>
        </Grid>
    )
}
export default connect(PutStateToCartProps)(Cart)