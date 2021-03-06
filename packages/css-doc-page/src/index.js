import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import '@e-toast/css'
import '@e-toast/css/behaviors.js'

export const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
