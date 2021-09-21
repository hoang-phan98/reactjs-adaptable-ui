import { Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AdaptablePaper from "../../adaptable/AdaptablePaper";
import AdaptableTypography from "../../adaptable/AdaptableTypography";
import { TaskData } from "./TaskData";
import TaskItem from "./TaskItem";

const useStyles = makeStyles(() => ({
    root: {
        padding: "10px",
        margin: "10px",
    },
    divider: {
        background: "white"
    },
    optional: {
        padding: "10px"
    }
}))

export default function Tasks() {
    const classes = useStyles()
    const optional = TaskData.length === 0

    return (
        <AdaptablePaper className={classes.root} optional={optional}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AdaptableTypography variant="h6">Outstanding Tasks</AdaptableTypography>
                </Grid>
                <Grid item xs={12}>
                    <Divider classes={{ root: classes.divider }} />
                </Grid>
                {
                    TaskData.map((item, index) => {
                        return (
                            <Grid item xs={6}>
                                <TaskItem item={item} key={index} />
                            </Grid>
                        )
                    })
                }
                {
                    optional &&
                    <AdaptablePaper elevation={0} className={classes.optional}>
                        <AdaptableTypography>
                            You have no tasks or reminders to complete.
                        </AdaptableTypography>
                    </AdaptablePaper>
                }
            </Grid>
        </AdaptablePaper>
    )
}