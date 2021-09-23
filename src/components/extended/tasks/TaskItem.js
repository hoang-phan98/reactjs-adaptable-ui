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
        color: "white"
    }
}))

export default function TaskItem({item}) {
    const classes = useStyles()
    return (
        <AdaptableListItem >
            <>
                <ErrorOutline className={classes.padding} color="inherit" />
                <ListItemText 
                    classes={{
                        root: classes.padding,
                        secondary: classes.secondary
                    }} 
                    color="inherit" 
                    primary={item.primary} 
                    secondary={item.secondary}/>
                <AdaptableButton
                    variant="contained"
                    endIcon={<ArrowRight />}
                    
                >
                    Start Task
                </AdaptableButton>
            </>
        </AdaptableListItem>
    )
}