import React, { useReducer } from 'react';
import { setDarkMode } from './store/actions/adaptableActions';
import { adaptableReducer, initialState } from './store/reducers/adaptableReducers';
import AdaptableContext from './utils/adaptableContext';
import AppNavBar from './components/extended/NavBar';
import FavouriteServices from './components/extended/FavouriteServices';
import CovidInfo from './components/extended/CovidInfo';
import ViewPayments from './components/extended/ViewPayments';
import { makeStyles } from '@material-ui/core';
import Tasks from './components/extended/tasks';

const useStyles = makeStyles(() => ({
  root: {
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
      setDarkMode: () => dispatch(setDarkMode()),
    }}>
      <AppNavBar />
      <div className={classes.root}>
        <div className={classes.child}>
          <FavouriteServices />
        </div>
        <div className={classes.child}>
          <CovidInfo />
          <ViewPayments />
        </div>
      </div>
      <Tasks/>
    </AdaptableContext.Provider>
  );
}

export default App;
