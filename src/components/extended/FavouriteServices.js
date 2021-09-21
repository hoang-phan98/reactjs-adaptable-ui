import { Divider, Grid, IconButton, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import AdaptableList from "../adaptable/AdaptableList";
import AdaptablePaper from "../adaptable/AdaptablePaper";
import AdaptableListItem from "../adaptable/AdaptableListItem";
import AdaptableTypography from "../adaptable/AdaptableTypography";
import ArrowRight from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
    root: {
        margin: "10px",
        padding: "10px"
    },
    heading: {
        margin: "10px"
    },
    divider: {
        background: "white"
    }
}))

export default function FavouriteServices() {
    const classes = useStyles()

    return (
        <AdaptablePaper className={classes.root} >
            <Grid container spacing={4}>
                <Grid className={classes.heading} item xs={12}>
                    <AdaptableTypography variant="h6">Favourite Services</AdaptableTypography>
                </Grid>
                <Grid item xs={12}>
                    <Divider classes={{root: classes.divider}}/>
                </Grid>
                <Grid item xs={6}>
                    <AdaptableList>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight />
                                </IconButton>
                                <ListItemText variant="body1">
                                    Upload Document
                                </ListItemText>
                            </>
                        </AdaptableListItem>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight />
                                </IconButton>
                                <ListItemText variant="body1">
                                    Manage Deductions
                                </ListItemText>
                            </>
                        </AdaptableListItem>
                    </AdaptableList>
                </Grid>
                <Grid item xs={6}>
                    <AdaptableList>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight />
                                </IconButton>
                                <ListItemText variant="body1">
                                    Manage Advance Payments
                                </ListItemText>
                            </>
                        </AdaptableListItem>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight />
                                </IconButton>
                                <ListItemText variant="body1">
                                    Manage Appointments
                                </ListItemText>
                            </>
                        </AdaptableListItem>
                    </AdaptableList>
                </Grid>
            </Grid>
        </AdaptablePaper>
    )
}