import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

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

    return (
        <StyledAppBar {...props} darkMode={darkMode} >
            <StyledToolBar darkMode={darkMode}>
                {props.children}
            </StyledToolBar>
        </StyledAppBar>
    );
}

