import { Divider, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AdaptablePaper from "../../adaptable/AdaptablePaper";
import AdaptableTypography from "../../adaptable/AdaptableTypography";
import { TaskData } from "./TaskData";
import TaskItem from "./TaskItem";

const useStyles = makeStyles(() => ({
    root: {
        padding: "10px",
        margin: "10px",
        marginBottom: "25px"
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
    const [tasks, setTasks] = useState(TaskData)
    const optional = tasks.length === 0

    const removeTask = (index) => {
        setTasks(
            tasks.filter((task) => {
                return task.id !== index
            })
        )
    }

    return (
        <AdaptablePaper className={classes.root} optional={optional}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AdaptableTypography variant="h6" style={{ fontWeight: "bold" }}>Outstanding Tasks</AdaptableTypography>
                </Grid>
                <Grid item xs={12}>
                    <Divider classes={{ root: classes.divider }} />
                </Grid>
                {
                    tasks.map((item, index) => {
                        return (
                            <Grid item xs={6} key={index}>
                                <TaskItem task={item} removeTask={removeTask}/>
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