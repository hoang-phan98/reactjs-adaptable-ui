import React, { useState } from 'react';
import AdaptableBox from '../adaptable/AdaptableBox';
import AdaptableTypography from '../adaptable/AdaptableTypography';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "5px",
        display: "inline-flex",
    },
}))

export default function AppBox() {
    const classes = useStyles()
    const [show, setShow] = useState(true);

    return (
        <AdaptableBox className={classes.root}>
            <IconButton onClick={() => setShow(prev => !prev)}>
                {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
            </IconButton>
            {show &&
                <AdaptableTypography variant="h1">
                    Hello
                </AdaptableTypography>
            }
        </AdaptableBox>
    );
}