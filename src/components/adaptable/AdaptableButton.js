import React, { useContext, useState } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const StyledButton = styled(Button)`
    && {
        background-color: ${props => props.darkMode ? 
            props.theme.bgColors.dark : 
            props.theme.bgColors.light
        };
        color: ${props => props.darkMode ? 
            props.theme.textColors.dark : 
            props.theme.textColors.light
        };
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
    }
`;

export default function AdaptableButton(props) {
    const { darkMode } = useContext(AdaptableContext)
    const [show, setShow] = useState(true);

    return (
        <StyledButton darkMode={darkMode} {...props}>
            {props.optional ? (
                <React.Fragment>
                    <IconButton color="inherit" onClick={() => setShow(prev => !prev)}>
                        {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
                    </IconButton>
                    {show && props.children}
                </React.Fragment>
            ) : props.children}
        </StyledButton>
    )
}
