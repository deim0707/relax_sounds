import React from 'react';
import {createRoot} from 'react-dom/client';


import App from './components/app';
import './commonStyle.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
