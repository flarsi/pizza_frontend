import React from "react";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export const MenuList = ({navItems, handleDrawerClose, changePageName}) => (
    <List>
        {navItems.map((item, index) => (
            <Link onClick={() => {handleDrawerClose(); changePageName(item.name)} } to={item.link} key={index}>
                <ListItem button>
                    <ListItemIcon>{item.Icon()}</ListItemIcon>
                    <ListItemText primary={item.name}/>
                </ListItem>
            </Link>
        ))}
    </List>
)
