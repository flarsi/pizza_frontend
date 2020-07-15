import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import {useLocation} from "react-router-dom";
import {MenuList} from "./MenuList";
import {HeadBar} from "./AppBar";

export const Navbar = () => {

    const navItems = [
        {name: 'Home', Icon: () => (<HomeIcon/>), link: '/'},
        {name: 'Menu', Icon: () => (<MenuIcon/>), link: '/menu'},
        {name: 'History', Icon: () => (<HistoryIcon/>), link: '/history'}
    ]

    const location = useLocation()
    let pageName

    navItems.map(item => {
        if(item.link === location.pathname)
        {pageName = item.name}
    })

    const [page, setPage] = React.useState(pageName);

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changePageName = (name) => {
        setPage(name)
    }

    return (
        <div className="nav-bar">
            <CssBaseline />
            <HeadBar page={page} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        <div>Close</div>
                    </IconButton>
                </div>
                <Divider />
                <MenuList navItems={navItems} changePageName={changePageName} handleDrawerClose={handleDrawerClose}/>
                <Divider />
            </Drawer>
        </div>
    );
}
