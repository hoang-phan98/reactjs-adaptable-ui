import { Divider, Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import AdaptableList from "../adaptable/AdaptableList";
import AdaptablePaper from "../adaptable/AdaptablePaper";
import AdaptableListItem from "../adaptable/AdaptableListItem";
import AdaptableTypography from "../adaptable/AdaptableTypography";
import ArrowRight from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
    root: {
        height: "80%",
        margin: "20px",
        padding: "10px",
    },
    heading: {
        margin: "10px",
    },
    divider: {
        background: "white"
    }
}))

export default function FavouriteServices() {
    const classes = useStyles()

    return (
        <AdaptablePaper className={classes.root} >
            <Grid container spacing={2}>
                <Grid className={classes.heading} item xs={12}>
                    <AdaptableTypography variant="h6" style={{ fontWeight: "bold" }}>Favourite Services</AdaptableTypography>
                </Grid>
                <Grid item xs={12}>
                    <Divider classes={{root: classes.divider}}/>
                </Grid>
                <Grid item xs={6}>
                    <AdaptableList>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight style={{ fontSize: "30px"}} />
                                </IconButton>
                                <AdaptableTypography variant="body1">
                                    Upload Document
                                </AdaptableTypography>
                            </>
                        </AdaptableListItem>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight style={{ fontSize: "30px"}}/>
                                </IconButton>
                                <AdaptableTypography variant="body1">
                                    Manage Deductions
                                </AdaptableTypography>
                            </>
                        </AdaptableListItem>
                    </AdaptableList>
                </Grid>
                <Grid item xs={6}>
                    <AdaptableList>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight style={{ fontSize: "30px"}}/>
                                </IconButton>
                                <AdaptableTypography variant="body1">
                                    Manage Advance Payments
                                </AdaptableTypography>
                            </>
                        </AdaptableListItem>
                        <AdaptableListItem button>
                            <>
                                <IconButton color="inherit">
                                    <ArrowRight style={{ fontSize: "30px"}}/>
                                </IconButton>
                                <AdaptableTypography variant="body1">
                                    Manage Appointments
                                </AdaptableTypography>
                            </>
                        </AdaptableListItem>
                    </AdaptableList>
                </Grid>
            </Grid>
        </AdaptablePaper>
    )
}