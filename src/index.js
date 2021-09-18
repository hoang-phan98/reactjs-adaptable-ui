import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';

// Theme object to be shared by all components of the app
const theme = {
  bgColors: {
    dark: {
      primary: "#212121",
      secondary: ""
    },
    light: {
      primary: "#3f51b5",
      secondary: ""
    },
  },
  textColors: {
    dark: {
      primary: "#EEEEEE",
      secondary: ""
    },
    light: {
      primary: "white",
      secondary: ""
    },
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

