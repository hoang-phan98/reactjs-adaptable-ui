import React, { useContext, useState } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import { AdaptableBox } from '../adaptable/AdaptableBox';
import { AdaptableTypography } from '../adaptable/AdaptableTypography';
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
    const { darkMode } = useContext(AdaptableContext)
    const [show, setShow] = useState(true);

    return (
        <AdaptableBox className={classes.root} darkMode={darkMode}>
            <IconButton onClick={() => setShow(prev => !prev)}>
                {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
            </IconButton>
            {show &&
                <AdaptableTypography className={classes.inline} darkMode={darkMode} variant="h1">
                    Hello
                </AdaptableTypography>
            }
        </AdaptableBox>
    );
}