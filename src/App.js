import React, { useReducer } from 'react';
import { setDarkMode } from './store/actions/adaptableActions';
import { adaptableReducer, initialState } from './store/reducers/adaptableReducers';
import AdaptableContext from './utils/adaptableContext';
import SetDarkModeButton from './components/extended/SetDarkModeButton';
import AppNavBar from './components/extended/AppNavBar';

function App(props) {
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
    </AdaptableContext.Provider>
  );
}

export default App;
