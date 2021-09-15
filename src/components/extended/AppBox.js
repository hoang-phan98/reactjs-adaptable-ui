import React from 'react';
import AdaptableBox from '../adaptable/AdaptableBox';
import AdaptableTypography from '../adaptable/AdaptableTypography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "5px",
        display: "inline-flex",
    },
}))

export default function AppBox() {
    const classes = useStyles()

    return (
        <AdaptableBox className={classes.root} optional>
            <AdaptableTypography variant="h1">
                Hello
            </AdaptableTypography>
        </AdaptableBox>
    );
}