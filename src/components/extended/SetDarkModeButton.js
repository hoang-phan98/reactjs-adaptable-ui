import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import AdaptableButton from '../adaptable/AdaptableButton';

export default function SetDarkModeButton() {
    const { darkMode, setDarkMode } = useContext(AdaptableContext)
    return (
        <AdaptableButton darkMode={darkMode} onClick={setDarkMode}>
            Set Dark Mode
        </AdaptableButton>
    )
}