import { ListItem } from '@material-ui/core';
import React from 'react';
import AdaptableList from '../adaptable/AdaptableList';
import AdaptableTypography from '../adaptable/AdaptableTypography';

export default function AppList() {

    return (
        <AdaptableList>
            <ListItem>
                <AdaptableTypography variant="body1"> Item1 </AdaptableTypography>
            </ListItem>
            <ListItem>
                <AdaptableTypography variant="body1"> Item2 </AdaptableTypography>
            </ListItem>
        </AdaptableList>
    );
}