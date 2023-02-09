import React from 'react';
import { createRoot } from 'react-dom/client';

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";

import App from './components/app';
import './commonStyle.css';


const store = createStore(reducer)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
