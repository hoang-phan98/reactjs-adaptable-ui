import React, { useContext } from 'react';
import AdaptiveContext from '../utils/adaptiveContext';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.darkMode ? "black" : "white"};
    color: ${props => props.darkMode ? "white" : "black"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
`;

export default function AdaptiveButton() {
    const { darkMode, setDarkMode } = useContext(AdaptiveContext)
    return (
        <Button darkMode={darkMode} onClick={setDarkMode}>
            Set Dark Mode
        </Button>
    );
}
