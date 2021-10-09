import React from "react";
import AdaptableButton from "../adaptable/AdaptableButton";
import AdaptableListItem from "../adaptable/AdaptableListItem";
import { AttachMoney } from "@material-ui/icons";
import { ListItemText, makeStyles } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
    root: {
        padding: "10px",
    },
    child: {
        marginTop: "5px"
    },
    listItemText: {
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "bold",
    }
}))

export default function ViewPayments() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AdaptableListItem button className={classes.child}>
                <>
                    <AttachMoney color="inherit" />
                    <ListItemText color="inherit" classes={{primary: classes.listItemText}}>
                        View Payment history
                    </ListItemText>
                    <AdaptableButton
                        variant="contained"
                        endIcon={<ArrowRight style={{ fontSize: "30px"}} />}
                    >
                        View
                    </AdaptableButton>
                </>
            </AdaptableListItem>
            <AdaptableListItem button className={classes.child}>
                <>
                    <AttachMoney color="inherit" />
                    <ListItemText classes={{primary: classes.listItemText}}>
                        Make a claim or view claim status
                    </ListItemText>
                    <AdaptableButton
                        variant="contained"
                        endIcon={<ArrowRight style={{ fontSize: "30px"}}/>}
                    >
                        View
                    </AdaptableButton>
                </>
            </AdaptableListItem>
        </div>
    )
}