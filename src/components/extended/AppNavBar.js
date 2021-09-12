import AdaptableAppBar from '../adaptable/AdaptableAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SetDarkModeButton from './SetDarkModeButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        position: "static",
    },
}))

export default function AppNavBar() {
    const classes = useStyles()

    return (
        <AdaptableAppBar className={classes.root}>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <SetDarkModeButton />
        </AdaptableAppBar>
    );
}