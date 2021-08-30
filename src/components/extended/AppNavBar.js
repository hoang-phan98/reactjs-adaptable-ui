import React, { useContext } from 'react';
import AdaptableContext from '../../utils/adaptableContext';
import { AdaptableAppBar, AdaptableToolBar } from '../adaptable/AdaptableAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SetDarkModeButton from './SetDarkModeButton';

export default function AppNavBar() {
    const { darkMode } = useContext(AdaptableContext)

    return (
        <AdaptableAppBar position="static" darkMode={darkMode} >
            <AdaptableToolBar darkMode={darkMode}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <SetDarkModeButton/>
            </AdaptableToolBar>
        </AdaptableAppBar>
    );
}