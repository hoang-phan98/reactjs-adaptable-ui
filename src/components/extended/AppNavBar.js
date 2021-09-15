import React, { useState } from 'react';
import AdaptableAppBar from '../adaptable/AdaptableAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SetDarkModeButton from './SetDarkModeButton';
import { makeStyles } from '@material-ui/core';
import AppSideNav from './AppSideNav';

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
                <IconButton 
                    color="inherit" 
                    onClick={() => setShowSideNav(!showSideNav)}>
                    <MenuIcon />
                </IconButton>
                <SetDarkModeButton />
            </AdaptableAppBar>
            <AppSideNav showSideNav={showSideNav}/>
        </>
    );
}