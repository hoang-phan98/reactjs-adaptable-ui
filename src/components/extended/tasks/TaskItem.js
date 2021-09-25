import React from "react";
import AdaptableListItem from "../../adaptable/AdaptableListItem";
import { ErrorOutline, ArrowRight } from "@material-ui/icons";
import { ListItemText, makeStyles } from "@material-ui/core";
import AdaptableButton from "../../adaptable/AdaptableButton";

const useStyles = makeStyles(() => ({
    padding: {
        padding: "10px"
    },
    margin: {
        marginLeft: "10px"
    },
    secondary: {
        fontSize: "60%",
        color: "white",
        fontFamily: "inherit"
    },
    listItemText: {
        fontSize: "inherit",
        fontFamily: "inherit"
    }
}))

export default function TaskItem(props) {
    const classes = useStyles()
    const { task, removeTask } = props
    return (
        <AdaptableListItem >
            <>
                <ErrorOutline className={classes.padding} color="inherit" />
                <ListItemText
                    classes={{
                        root: classes.padding,
                        primary: classes.listItemText,
                        secondary: classes.secondary
                    }}
                    color="inherit"
                    primary={task.primary}
                    secondary={task.secondary} />
                <AdaptableButton
                    variant="contained"
                    endIcon={<ArrowRight />}
                    onClick={() => {
                        removeTask(task.id)
                    }}
                >
                    Start Task
                </AdaptableButton>
            </>
        </AdaptableListItem>
    )
}