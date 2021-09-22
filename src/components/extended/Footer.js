import React from "react";
import { makeStyles, Box, Typography, Link } from "@material-ui/core";
import { Launch } from "@material-ui/icons";


const useStyles = makeStyles(() => ({
    root: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        marginLeft: '25%',
        marginTop: '25px'
    },
    links: {
        paddingTop: '5px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <Box adaptableVariant="secondary" className={classes.root}>
            <Typography >
                Services Australia acknowledges the Traditional Custodians of the land we live on.
            </Typography >
            <Typography >
                We pay our respects to all Elders past and present, of all Aboriginal and Torres Strait Islander nations.
            </Typography >
            <Box className={classes.links}>
                <Link className={classes.links}>
                    Legal Notices
                    <Launch fontSize="small" />
                </Link>
                <Link className={classes.links}>
                    Your Rights
                    <Launch fontSize="small" />
                </Link>
                <Link className={classes.links}>
                    Contact us
                    <Launch fontSize="small" />
                </Link>
            </Box>
        </Box>
    )
}