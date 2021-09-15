import React from 'react';
import AdaptableList from '../adaptable/AdaptableList';
import { SideNavData } from './SideNavData';
import { SideNavItem } from './SideNavItem';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        margin: "5px",
        top: "auto",
        border: "3px solid red",
    },
}))

export default function AppSideNav(props) {
    const { showSideNav } = props
    const classes = useStyles()

    return (
        
        <Drawer 
            classes={{
                paper: classes.root
            }} 
            variant="persistent" 
            anchor="left" 
            open={showSideNav}>
            <AdaptableList>
                {SideNavData.map((item, index) => {
                    return <SideNavItem item={item} key={index} />;
                })}
            </AdaptableList>
        </Drawer>

    );
}