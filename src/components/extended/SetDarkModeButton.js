import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import AdaptableButton from '../adaptable/AdaptableButton';

export default function SetDarkModeButton() {
    const { setDarkMode } = useContext(AdaptableContext)
    return (
        <AdaptableButton onClick={setDarkMode}>
            Centrelink
        </AdaptableButton>
    )
}