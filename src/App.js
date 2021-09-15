import React, { useReducer } from 'react';
import { setDarkMode } from './store/actions/adaptableActions';
import { adaptableReducer, initialState } from './store/reducers/adaptableReducers';
import AdaptableContext from './utils/adaptableContext';
import AppNavBar from './components/extended/AppNavBar';
import AppBox from './components/extended/AppBox';
import AppList from './components/extended/AppList';

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
      <AppBox/>
      <AppList/>
    </AdaptableContext.Provider>
  );
}

export default App;
