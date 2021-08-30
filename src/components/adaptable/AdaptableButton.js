import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const AdaptableButton = styled(Button)`
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

export default AdaptableButton;
