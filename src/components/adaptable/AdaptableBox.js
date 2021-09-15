import styled from 'styled-components';
import { Box } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const StyledBox = styled(Box)`
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

export default function AdaptableBox(props) {
    const { darkMode } = useContext(AdaptableContext)
    const [show, setShow] = useState(true);

    return (
        <StyledBox darkMode={darkMode} {...props}>
            {props.optional ? (
                <React.Fragment>
                    <IconButton onClick={() => setShow(prev => !prev)}>
                        {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
                    </IconButton>
                    {show && props.children}
                </React.Fragment>
            ) : props.children}
        </StyledBox>
    );
}

