import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";

import App from './components/app/app';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
