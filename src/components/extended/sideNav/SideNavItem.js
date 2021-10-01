import React, { useState } from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemText from '@material-ui/core/ListItemText';
import AdaptableListItem from "../../adaptable/AdaptableListItem";
import { IconButton, Link, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    inherit: {
        fontSize: "inherit",
        fontFamily: "inherit"
    }
}))

const SubMenu = ({ item }) => {
    const [showSubNav, setShowSubNav] = useState(false)
    const classes = useStyles()

    return (
        <>
            <AdaptableListItem adaptableVariant="secondary" optional button onClick={() => setShowSubNav(!showSubNav)}>
                <>
                    <ListItemText variant="body1" classes={{primary: classes.inherit}}>
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
                            <AdaptableListItem adaptableVariant="secondary" optional>
                                <Link color="inherit" variant="body2" key={index} className={classes.inherit}> {item.title} </Link>
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
    const classes = useStyles()

    return (
        <>
            <AdaptableListItem button onClick={() => setShowSubNav(!showSubNav)}>
                <>
                    {item.icon}
                    <ListItemText variant="body1" classes={{primary: classes.inherit}}>
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
            <Divider/>
        </>
    )
}