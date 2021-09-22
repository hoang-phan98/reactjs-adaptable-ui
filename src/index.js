import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';

// Theme object to be shared by all components of the app
const theme = {
  bgColors: {
    dark: {
      primary: "#002984",
      secondary: "#c7c7c7"
    },
    light: {
      primary: "#0055B9",
      secondary: "#fafafa"
    },
  },
  textColors: {
    dark: {
      primary: "white",
      secondary: "black"
    },
    light: {
      primary: "white",
      secondary: "black"
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

