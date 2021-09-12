import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import { List } from '@material-ui/core';

const StyledList = styled(List)`
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

export default function AdaptableList(props) {
    const { darkMode } = useContext(AdaptableContext)
    return (
        <StyledList {...props} darkMode={darkMode}>
            {props.children}
        </StyledList>
    )
}