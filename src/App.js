import React, { useReducer } from 'react';
import { setDarkMode } from './store/actions/adaptableActions';
import { adaptableReducer, initialState } from './store/reducers/adaptableReducers';
import AdaptableContext from './utils/adaptableContext';
import AppNavBar from './components/extended/AppNavBar';
import FavouriteServices from './components/extended/FavouriteServices';
import CovidInfo from './components/extended/CovidInfo';

function App() {
  const [state, dispatch] = useReducer(
    adaptableReducer,
    initialState
  );

  return (
    <AdaptableContext.Provider value={{
      darkMode: state.dark_mode,
      setDarkMode: () => dispatch(setDarkMode()),
    }}>
      <AppNavBar/>
      <FavouriteServices/>
      <CovidInfo/>
    </AdaptableContext.Provider>
  );
}

export default App;
