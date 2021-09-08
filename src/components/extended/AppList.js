import { ListItem } from '@material-ui/core';
import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import { AdaptableList } from '../adaptable/AdaptableList';
import { AdaptableTypography } from '../adaptable/AdaptableTypography';

export default function AppList() {
    const { darkMode } = useContext(AdaptableContext)

    return (
        <AdaptableList darkMode={darkMode}>
            <ListItem>
                <AdaptableTypography darkMode={darkMode} variant="body1"> Item1 </AdaptableTypography>
            </ListItem>
            <ListItem>
                <AdaptableTypography darkMode={darkMode} variant="body1"> Item2 </AdaptableTypography>
            </ListItem>
        </AdaptableList>
    );
}