import React, { useContext, useState } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const makeAdaptable = (component) => {
    const StyledComponent = styled(component)`
    && {
        background-color: ${props => props.darkMode ?
            (props.adaptableVariant === "secondary" ? props.theme.bgColors.dark.secondary : props.theme.bgColors.dark.primary) :
            (props.adaptableVariant === "secondary" ? props.theme.bgColors.light.secondary : props.theme.bgColors.light.primary)
        };
        color: ${props => props.darkMode ?
            (props.adaptableVariant === "secondary" ? props.theme.textColors.dark.secondary : props.theme.textColors.dark.primary) :
            (props.adaptableVariant === "secondary" ? props.theme.textColors.light.secondary : props.theme.textColors.light.primary)
        };
        font-size: ${props => props.fontSize ? props.fontSize : 'medium'
        };
        font-family: ${props => props.fontFamily ? props.fontFamily : 'Arial'
        };
    }`;

    return function AdaptableComponent(props) {
        const { darkMode, fontSize, fontFamily } = useContext(AdaptableContext)
        const [show, setShow] = useState(true);

        return (
            <StyledComponent darkMode={darkMode} fontSize={fontSize} fontFamily={fontFamily} {...props}>
                {props.optional ? (
                    <React.Fragment>
                        <IconButton color="inherit" onClick={(e) => {
                            e.stopPropagation();
                            setShow(prev => !prev);
                        }}>
                            {show ? <IndeterminateCheckBoxIcon fontSize="small" /> : <AddBoxIcon fontSize="small" />}
                        </IconButton>
                        {show && props.children}
                    </React.Fragment>
                ) : props.children}
            </StyledComponent>
        )
    }
}

export default makeAdaptable;