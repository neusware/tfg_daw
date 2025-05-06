import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
//import App from './App.jsx';
import App2 from './ejemplo/App2.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

    <React.StrictMode>

    <BrowserRouter>

        <App2/>
    </BrowserRouter>
    </React.StrictMode>

);

