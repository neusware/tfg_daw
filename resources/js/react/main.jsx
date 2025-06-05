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
import 'leaflet/dist/leaflet.css';
// contexto global para los puntos del usuario
import { UserProvider } from './ejemplo/components/Context/UserContext.jsx';


createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <App2/>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>

);

