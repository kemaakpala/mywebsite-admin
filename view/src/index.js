import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const RootElement = document.getElementById('root')
ReactDOM.render(<App />, RootElement);
registerServiceWorker();