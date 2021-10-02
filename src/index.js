import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';
import adaptableTheme from './utils/adaptableTheme';

ReactDOM.render(
  <ThemeProvider theme={adaptableTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

