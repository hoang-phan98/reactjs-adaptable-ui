import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import { AdaptableBox } from '../adaptable/AdaptableBox';
import { AdaptableTypography } from '../adaptable/AdaptableTypography';

export default function AppBox() {
    const { darkMode } = useContext(AdaptableContext)

    return (
        <AdaptableBox darkMode={darkMode}>
            <AdaptableTypography darkMode={darkMode} variant="h1"> Hello </AdaptableTypography>
        </AdaptableBox>
    );
}