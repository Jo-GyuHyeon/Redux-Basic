import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counterApp);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, appElement);
registerServiceWorker();

