import React, { useState } from 'react';
import AdaptableAppBar from '../adaptable/AdaptableAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SetDarkModeButton from './SetDarkModeButton';
import { makeStyles } from '@material-ui/core';
import AppSideNav from './AppSideNav';
import AdaptableToolBar from '../adaptable/AdaptableToolBar';

const useStyles = makeStyles(() => ({
    root: {
        position: "static",
    },
}))

export default function AppNavBar() {
    const classes = useStyles()
    const [showSideNav, setShowSideNav] = useState(true)

    return (
        <>
            <AdaptableAppBar className={classes.root}>
                <AdaptableToolBar>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowSideNav(!showSideNav)}>
                        <MenuIcon />
                    </IconButton>
                    <SetDarkModeButton />
                </AdaptableToolBar>
            </AdaptableAppBar>
            <AppSideNav sideNavState={{ showSideNav, setShowSideNav }} />
        </>
    );
}