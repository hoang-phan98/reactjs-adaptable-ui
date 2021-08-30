import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

export const AdaptableAppBar = styled(AppBar)`
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

export const AdaptableToolBar = styled(Toolbar)`
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



