import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const PizzaSize = ({sizes, setPrice, setOrderSizes, amount, priceType}) => {
    const getPrice = (e) => {
        sizes.map(elem => {
            if(elem.id == e.target.value){
                setPrice(priceType === 'usd' ? elem.price[0].usd : elem.price[0].usd);
                setOrderSizes({...elem, amount: amount});

            }
        })
    }

    const onChange = (e) => {
        console.log(e.target.value)
        handleChange(e.target.value)
        getPrice(e)
    }

    const initial = sizes[0].name + ' ' + sizes[0].radius;

    const [size, setSize] = React.useState(initial);

    const handleChange = (sizeId) => {
        setSize(sizeId);
    };

    return(
    <div>
        <FormControl>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                onChange={onChange}
            >
                {sizes.map((size, index) =>
                            (
                                <MenuItem key={index + 1} value={size.id} >{size.name + ' ' + size.radius}</MenuItem>
                            )
                        )}
            </Select>
        </FormControl>
    </div>
    )
}