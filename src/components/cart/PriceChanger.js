import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const PriceChanger = ({priceType, setType, setPrice, cart}) => {

    const handleAlignment = (event, newType) => {
        setType(newType);
        setPrice(cart && cart.map((element, index) => {
            // switch(priceType){
            //     case 'usd' : return element.sizes[0].price[0].usd
            //     case 'eur' : return element.sizes[0].price[0].eur
            // }
                console.log(element.sizes[0].price[0].usd)

            })
        )
    };

    return (
        <ToggleButtonGroup
            value={priceType}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="usd" aria-label="left aligned">
                USD
            </ToggleButton>
            <ToggleButton value="eur" aria-label="right aligned">
                EUR
            </ToggleButton>
        </ToggleButtonGroup>
    );
}