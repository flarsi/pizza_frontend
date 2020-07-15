import React from "react";

export const TotalPrice = ({cart}) => {

    return(
        <tr>
            <td>Total price</td>
            <td id="total_usd"> usd.</td>
            <td id="total_eur"> eur.</td>
        </tr>
    )
}