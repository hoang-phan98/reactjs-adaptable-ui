import React, { useState } from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemText from '@material-ui/core/ListItemText';
import AdaptableListItem from "../adaptable/AdaptableListItem";
import { IconButton, Link } from "@material-ui/core";

const SubMenu = ({ item }) => {
    const [showSubNav, setShowSubNav] = useState(false)

    return (
        <>
            <AdaptableListItem button onClick={() => setShowSubNav(!showSubNav)}>
                <>
                    <ListItemText variant="body1">
                        {item.title}
                    </ListItemText>
                    <IconButton color="inherit">
                        {item.subNav ? (showSubNav ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />) : <ArrowRightIcon />}
                    </IconButton>
                </>
            </AdaptableListItem>

            <div>
                {showSubNav && item.subNav ?
                    item.subNav.map((item, index) => {
                        return (
                            <AdaptableListItem>
                                <Link color="inherit" variant="body2" index={index}> {item.title} </Link>
                            </AdaptableListItem>
                        )
                    }) : null
                }
            </div>
        </>
    )

}

export const SideNavItem = ({ item }) => {
    const [showSubNav, setShowSubNav] = useState(false)

    return (
        <>
            <AdaptableListItem button onClick={() => setShowSubNav(!showSubNav)}>
                <>
                    {item.icon}
                    <ListItemText variant="body1">
                        {item.title}
                    </ListItemText>
                    <IconButton color="inherit">
                        {item.subNav ? (showSubNav ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />) : <ArrowRightIcon />}
                    </IconButton>
                </>
            </AdaptableListItem>
            <div>
                {showSubNav && item.subNav ?
                    item.subNav.map((item, index) => {
                        return <SubMenu item={item} index={index} />
                    }) : null
                }
            </div>
        </>
    )
}