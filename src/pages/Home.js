import React from "react";
import { LastPizzas } from "../components/home_components/LastPizzas";
import {connect} from "react-redux";
import { putStateToMenuProps } from "../context/menu/MenuState";

const Home = ({menu}) => {
    return (
        <div id="home">
            <div className="row">
                <LastPizzas pizzas={menu}/>
            </div>
        </div>
    )
}

export default connect(putStateToMenuProps)(Home)

