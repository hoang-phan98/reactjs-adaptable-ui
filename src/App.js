import React, { useReducer } from 'react';
import { setDarkMode, setFontFamily, setFontSize } from './store/actions/adaptableActions';
import { adaptableReducer, initialState } from './store/reducers/adaptableReducers';
import AdaptableContext from './utils/adaptableContext';
import AppNavBar from './components/extended/NavBar';
import FavouriteServices from './components/extended/FavouriteServices';
import CovidInfo from './components/extended/CovidInfo';
import ViewPayments from './components/extended/ViewPayments';
import { makeStyles } from '@material-ui/core';
import Tasks from './components/extended/tasks';
import Footer from './components/extended/Footer';
import HomePagePattern from './components/images/HomePageHeaderPattern.jpg'
import AdaptablePaper from './components/adaptable/AdaptablePaper';

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
  },
  header: {
    height: "100px"
  },
  background: {
    backgroundImage: `url(${HomePagePattern})`,
    alignItems: 'center',
    marginTop: "75px",
  },
  main: {
    display: "inline-flex",
    width: "100%",
  },
  child: {
    width: "50%",
  }
}))

function App() {
  const [state, dispatch] = useReducer(
    adaptableReducer,
    initialState
  );
  const classes = useStyles()

  return (
    <AdaptableContext.Provider value={{
      darkMode: state.dark_mode,
      fontSize: state.font_size,
      fontFamily: state.font_family,
      setDarkMode: () => dispatch(setDarkMode()),
      setFontSize: (fontSize) => dispatch(setFontSize(fontSize)),
      setFontFamily: (fontFamily) => dispatch(setFontFamily(fontFamily))
    }}>
      <div className={classes.body}>
        <AppNavBar className={classes.header}/>
        <AdaptablePaper elevation={0} className={classes.background}>
          <div className={classes.main}>
            <div className={classes.child}>
              <FavouriteServices />
            </div>
            <div className={classes.child}>
              <CovidInfo />
              <ViewPayments />
            </div>
          </div>
          <Tasks />
          <Footer />
        </AdaptablePaper>
      </div>
    </AdaptableContext.Provider>
  );
}

export default App;
