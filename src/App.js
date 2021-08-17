import React, { useReducer } from 'react';
import { setDarkMode } from './store/actions/adaptiveActions';
import { adaptiveReducer, initialState } from './store/reducers/adaptiveReducers';
import AdaptiveContext from './utils/adaptiveContext';
import AdaptiveButton from './components/AdaptiveButton'

function App() {
  const [state, dispatch] = useReducer(
    adaptiveReducer,
    initialState
  );

  return (
    <AdaptiveContext.Provider value={{
      darkMode: state.dark_mode,
      setDarkMode: () => dispatch(setDarkMode()),
    }}>
      <AdaptiveButton/>
    </AdaptiveContext.Provider>
  );
}

export default App;
