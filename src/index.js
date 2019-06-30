import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { globalState } from './globalState';
import reducer from './reducers/index';

const store = createStore(reducer, globalState);
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'));

serviceWorker.unregister();
