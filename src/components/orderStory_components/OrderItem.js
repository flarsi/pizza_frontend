import React from "react";

export const OrderItem = ({orderData}) => {
    return (
        <tr>
            <td className="">{orderData.id}</td>
            <td className="">{orderData.full_name}</td>
            <td className="">{orderData.address}</td>
            <td className="">{orderData.delivery_date}</td>
        </tr>
    )
}