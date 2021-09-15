import React, { useContext, useState } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const StyledAppBar = styled(AppBar)`
    && {
        background-color: ${props => props.darkMode ?
        props.theme.bgColors.dark :
        props.theme.bgColors.light
    };
        color: ${props => props.darkMode ?
        props.theme.textColors.dark :
        props.theme.textColors.light
    };
    }
`;

const StyledToolBar = styled(Toolbar)`
    && {
        background-color: ${props => props.darkMode ?
        props.theme.bgColors.dark :
        props.theme.bgColors.light
    };
        color: ${props => props.darkMode ?
        props.theme.textColors.dark :
        props.theme.textColors.light
    };
    }
`;

export default function AdaptableAppBar(props) {
    const { darkMode } = useContext(AdaptableContext)
    const [show, setShow] = useState(true);

    return (
        <StyledAppBar {...props} darkMode={darkMode} >
            <StyledToolBar darkMode={darkMode}>
                {props.optional ? (
                    <React.Fragment>
                        <IconButton color="inherit" onClick={() => setShow(prev => !prev)}>
                            {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
                        </IconButton>
                        {show && props.children}
                    </React.Fragment>
                ) : props.children}
            </StyledToolBar>
        </StyledAppBar>
    );
}

