import React from 'react';
import AdaptableList from '../../adaptable/AdaptableList';
import { SideNavData } from './SideNavData';
import { SideNavItem } from './SideNavItem';
import AdaptableBox from '../../adaptable/AdaptableBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
    Drawer,
    IconButton,
    makeStyles,
    Typography,
    Divider
} from '@material-ui/core';
import SearchBar from '../SearchBar';

const useStyles = makeStyles(() => ({
    root: {
        top: "auto",
        height: "calc(100vh - 75px)",
        overflowY: "scroll",
        width: "25%",
    }
}))

export default function AppSideNav(props) {
    const { showSideNav, setShowSideNav } = props.sideNavState
    const classes = useStyles()

    return (

        <Drawer
            classes={{
                paper: classes.root
            }}
            variant="persistent"
            anchor="left"
            open={showSideNav}>
            <AdaptableBox>
                <IconButton color="inherit" onClick={() => setShowSideNav(false)}>
                    <ChevronLeftIcon />
                    <Typography>Hide Menu</Typography>
                </IconButton>
            </AdaptableBox>
            <Divider />
            <SearchBar />
            <Divider />
            <AdaptableList>
                {SideNavData.map((item, index) => {
                    return <SideNavItem item={item} key={index} />;
                })}
            </AdaptableList>
        </Drawer>

    );
}