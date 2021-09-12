import styled from 'styled-components';
import { Box } from '@material-ui/core';
import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';

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

    return (
        <StyledBox darkMode={darkMode} {...props}>
            {props.children}
        </StyledBox>
    );
}

