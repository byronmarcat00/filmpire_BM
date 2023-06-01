import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import App from './components/App.jsx';
import {createTheme,ThemeProvider} from '@mui/material/styles'

const theme= createTheme({})
ReactDOM.render(
    <ThemeProvider theme={theme}>
    <BrowserRouter>

<App />
</BrowserRouter>

    </ThemeProvider>
    
  ,
  document.getElementById('root')
);