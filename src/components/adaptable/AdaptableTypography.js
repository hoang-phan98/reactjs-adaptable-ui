import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledTypography= styled(Typography)`
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

export default function AdaptableTypography(props) {
    const { darkMode } = useContext(AdaptableContext)

    return (
        <StyledTypography darkMode={darkMode} {...props}>
            {props.children}
        </StyledTypography>
    )

}