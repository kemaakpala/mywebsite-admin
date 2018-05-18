import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers/";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
// import promise from 'redux-promise'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const RootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    RootElement
);
registerServiceWorker();
