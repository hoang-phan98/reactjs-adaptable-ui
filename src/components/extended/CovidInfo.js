import { Icon, IconButton, Link, makeStyles } from "@material-ui/core";
import { Warning, Launch } from "@material-ui/icons";
import React from "react";
import AdaptablePaper from "../adaptable/AdaptablePaper";
import AdaptableTypography from "../adaptable/AdaptableTypography";

const useStyles = makeStyles(() => ({
    root: {
        padding: "5px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    secondary: {
        display: "inline-flex",
        alignItems: "center",
    },
    item: {
        margin: "5px"
    }
}))

export default function CovidInfo() {
    const classes = useStyles()
    return (
        <AdaptablePaper elevation={20} className={classes.root} optional adaptableVariant="secondary">
            <AdaptablePaper elevation={0} className={classes.secondary} adaptableVariant="secondary">
                <Icon className={classes.item}>
                    <Warning />
                </Icon>
                <AdaptableTypography className={classes.item} adaptableVariant="secondary">
                    If your income has been affected by coronavirus (COVID-19), we might be able to help
                </AdaptableTypography>
            </AdaptablePaper>
            <AdaptablePaper className={classes.secondary} adaptableVariant="secondary">
                <Link className={classes.item} color="inherit" variant="body2" > Find out what assistance might be available </Link>
                <IconButton color="inherit" className={classes.item}>
                    <Launch />
                </IconButton>
            </AdaptablePaper>
        </AdaptablePaper>

    )
}