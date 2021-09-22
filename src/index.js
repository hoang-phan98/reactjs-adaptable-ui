import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';

// Theme object to be shared by all components of the app
const theme = {
  bgColors: {
    dark: "#212121",
    light: "#0055B9",
  },
  textColors: {
    dark: "#EEEEEE",
    light: "white",
  },
  fonts: {
    default: "Arial",
    adhd_friendly: "sans-serif"
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

