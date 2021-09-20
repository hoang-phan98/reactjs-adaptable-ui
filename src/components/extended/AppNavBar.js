import React, { useState } from 'react';
import AdaptableAppBar from '../adaptable/AdaptableAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AdaptableButton from '../adaptable/AdaptableButton';
import { makeStyles } from '@material-ui/core';
import AppSideNav from './AppSideNav';
import AdaptableToolBar from '../adaptable/AdaptableToolBar';
import AdaptableMenu from './AdaptableMenu';
import FormatSizeIcon from '@material-ui/icons/FormatSize';

const useStyles = makeStyles(() => ({
    root: {
        position: "static",
    },
}))

export default function AppNavBar() {
    const classes = useStyles();
    const [showSideNav, setShowSideNav] = useState(true);
    const [showAdaptableMenu, setShowAdaptableMenu] = useState(false);

    return (
        <>
            <AdaptableAppBar className={classes.root}>
                <AdaptableToolBar>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowSideNav(!showSideNav)}>
                        <MenuIcon />
                    </IconButton>
                    <AdaptableButton>
                        Centrelink
                    </AdaptableButton>
                    <AdaptableButton
                        onClick={() => setShowAdaptableMenu(!showAdaptableMenu)}
                        style={{ marginLeft: 'auto', marginRight: '50px' }}>
                        <FormatSizeIcon />
                        <text>Accessibility</text>
                    </AdaptableButton>
                </AdaptableToolBar>
            </AdaptableAppBar>
            <AppSideNav sideNavState={{ showSideNav, setShowSideNav }} />
            <AdaptableMenu adaptableMenuState={{ showAdaptableMenu, setShowAdaptableMenu }} />
        </>
    );
}