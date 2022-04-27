import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import banksReducer from './reducer/banksReducer.js';
import thunk from 'redux-thunk';

const makeBankFunction = createStore(banksReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={makeBankFunction}>
      <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
