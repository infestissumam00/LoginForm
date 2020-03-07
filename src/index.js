import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'font-awesome/scss/font-awesome.scss';

import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

import store from 'core/Store';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
